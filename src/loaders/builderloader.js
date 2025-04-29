// loaders/builderLoader.js or builderLoader.ts
import sanityClient from '../sanityClient';
import { deslugify } from '../utils/slug';

export async function builderLoader({ params }) {
  try {
    if (!params?.builderName) {
      throw new Error("Missing 'builderName' parameter");
    }

    const builder = deslugify(params.builderName);

    const projectQuery = `
      *[
        _type == "projectListing" &&
        project_details.projectBy->builderName match $builderName
      ]{
        _id,
        project_details {
          projectRef->,
          projectBy->{ builderName },
          projectPrice->{ price },
          rera_no,
          slugURL,
          rera_link,
          rera_qr {
            asset->{
              _id,
              url
            }
          },
          property_type,
          project_thumbnail{
            asset->{
              _id,
              url
            }
          },
        },
        location {
          state->{ name },
          cityLocation->{ name },
          projectAddress
        }
      }
    `;

    const builderDetailsQuery = `
      *[
        _type == "projectBy" &&
        builderName match $builderName
      ][0]{
        builderName,
        builderDetails[]{
          detail
        },
        moreData[]{
          Content
        },
        builderImages {
          desktopImage {
            asset->{
              _id,
              url
            }
          },
          mobileImage {
            asset->{
              _id,
              url
            }
          }
        }
      }
    `;

    const [projects, builderDetails] = await Promise.all([
      sanityClient.fetch(projectQuery, { builderName: builder }),
      sanityClient.fetch(builderDetailsQuery, { builderName: builder })
    ]);

    if (!projects || projects.length === 0) {
      throw new Error(`No projects found for builder: ${builder}`);
    }

    if (!builderDetails) {
      throw new Error(`No builder details found for builder: ${builder}`);
    }

    return {
      projects,
      builderDetails
    };

  } catch (error) {
    console.error("Error in builderLoader:", error.message);

    throw new Response(error.message || "Failed to load builder projects", {
      status: 500,
      statusText: "Internal Server Error",
    });
  }
}
