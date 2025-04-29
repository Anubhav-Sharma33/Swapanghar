// loaders/builderLoader.js or builderLoader.ts
import sanityClient from '../sanityClient';
import { deslugify } from '../utils/slug';

export async function builderLoader({ params }) {
  // const builder = params.builderName.toLowerCase(); // normalize input
  const builder = deslugify(params.builderName);
  // console.log(builder);

  const query = `
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

  const results = await sanityClient.fetch(query, {
    builderName: builder
  });

  return results;
}
