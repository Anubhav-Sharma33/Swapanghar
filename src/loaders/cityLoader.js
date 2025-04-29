// loaders/cityLoader.js or cityLoader.ts
import sanityClient from '../sanityClient';
import { deslugify } from '../utils/slug';

export async function cityLoader({ params }) {
  const city = deslugify(params.cityName);
  // console.log(city)

  const query = `
  *[
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
        asset->{
          _id,
          url
        }
      }
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
