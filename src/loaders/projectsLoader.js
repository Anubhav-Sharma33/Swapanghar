import sanityClient from "../sanityClient";
import { deslugify } from "../utils/slug";

export async function projectListingLoader({ params }) {
  const projectType = deslugify(params.projectType);

  const isNewLaunch = projectType === "New Launches";

  const query = isNewLaunch
    ? `
      {
        "projects": *[
          _type == "projectListing" &&
          project_details.isNewLaunch == true
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
              asset->{ _id, url }
            },
            property_type->,
            project_thumbnail {
              asset->{ _id, url }
            }
          },
          location {
            state->{ name },
            cityLocation->{ name },
            projectAddress
          }
        }
      }
    `
    : `
      {
        "projects": *[
          _type == "projectListing" &&
          project_details.property_type->typeName match $projectType
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
              asset->{ _id, url }
            },
            property_type->,
            project_thumbnail {
              asset->{ _id, url }
            }
          },
          location {
            state->{ name },
            cityLocation->{ name },
            projectAddress
          }
        },
        "propertyTypeDetails": *[
          _type == "propertyType" &&
          typeName match $projectType
        ][0]{
          _id,
          typeName,
          typeDetails[]{
            detail
          },
          moreData[]{
            Content
          }
        }
      }
    `;

  try {
    const data = await sanityClient.fetch(query, isNewLaunch ? {} : { projectType });
    return data;
  } catch (error) {
    console.error("Error fetching project listings:", error);

    throw new Response("Failed to load project listings", {
      status: 500,
      statusText: "Internal Server Error",
    });
  }
}
