import sanityClient from '../sanityClient';

export async function projects() {
  try {
    const query = `
      *[_type == "projectListing"]{
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
          property_type->,
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

    const results = await sanityClient.fetch(query);

    if (!results || results.length === 0) {
      throw new Error("No projects found");
    }

    return results;

  } catch (error) {
    console.error("Error in projects loader:", error.message);

    throw new Response(error.message || "Failed to load projects", {
      status: 500,
      statusText: "Internal Server Error",
    });

    // Optional fallback instead of throwing error:
    // return [];
  }
}
