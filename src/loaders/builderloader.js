// loaders/builderLoader.js or builderLoader.ts
import sanityClient from '../sanityClient';

export async function builderLoader({ params }) {
  const builder = params.builderName.toLowerCase(); // normalize input

  const query = `
    *[
      _type == "projectListing" &&
      project_details.projectBy->builderName match $builderName
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
    builderName: builder
  });

  return results;
}
