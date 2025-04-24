// loaders/cityLoader.js or cityLoader.ts
import sanityClient from '../sanityClient';

export async function cityLoader({ params }) {
  const city = params.cityName.toLowerCase(); // normalize

  const query = `
    *[
      _type == "projectListing" &&
      location.state->name match $cityName
    ]{
      _id,
      project_details {
        projectRef->{ projectName },
        projectBy->{ builderName },
        projectPrice->{ price },
        rera_no,
        slugURL
      },
      location {
        state->{ name },
        cityLocation->{ name },
        projectAddress
      }
    }
  `;

  const results = await sanityClient.fetch(query, {
    cityName: city,
  });

  return results;
}
