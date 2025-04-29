import sanityClient from "../sanityClient";
import { deslugify } from "../utils/slug";

export async function projectListingLoader({ params }) {
  const projectType = deslugify(params.projectType); // Normalize input

  const isNewLaunch = projectType === "New Launches";

  // Define query separately for better GROQ parsing
  const query = isNewLaunch
    ? `
      *[
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
    `
    : `
      *[
        _type == "projectListing" &&
        project_details.property_type == $projectType
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

  try {
    const data = await sanityClient.fetch(
      query,
      isNewLaunch ? {} : { projectType }
    );

    return data;
  } catch (error) {
    console.error("Error fetching project listings:", error);

    throw new Response("Failed to load project listings", {
      status: 500,
      statusText: "Internal Server Error",
    });
  }
}
