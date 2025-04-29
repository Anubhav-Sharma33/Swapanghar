import sanityClient from '../sanityClient';
import { deslugify } from '../utils/slug';

export async function cityLoader({ params }) {
  try {
    if (!params?.cityName) {
      throw new Error("Missing 'cityName' parameter");
    }

    const city = deslugify(params.cityName);

    const query = `
      {
        "projects": *[
          _type == "projectListing" &&
          location.cityLocation->name match $cityName
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
            project_thumbnail{
              asset->{ _id, url }
            },
          },
          location {
            state->{ name },
            cityLocation->{ name },
            projectAddress
          }
        },
        
        "cityDetails": *[
          _type == "cityLocation" &&
          name match $cityName
        ][0]{
          _id,
          name,
          cityDetails[]{
            detail
          },
          moreData[]{
            Content
          },
          cityImages {
            desktopImage {
              asset->{ _id, url }
            },
            mobileImage {
              asset->{ _id, url }
            }
          }
        }
      }
    `;

    const results = await sanityClient.fetch(query, { cityName: city });

    if (!results || !results.projects || results.projects.length === 0) {
      throw new Error(`No projects found for city: ${city}`);
    }

    return results;

  } catch (error) {
    console.error("Error in cityLoader:", error.message);

    throw new Response(error.message || "Failed to load city projects", {
      status: 500,
      statusText: "Internal Server Error",
    });
  }
}
