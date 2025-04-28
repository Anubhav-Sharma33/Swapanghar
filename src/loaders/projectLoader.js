import sanityClient from '../sanityClient';

export async function projectLoader({ params }) {
  const { slug } = params;

  try {
    const query = `
      *[_type == "projectListing" && project_details.slugURL.current == $slug][0]{
        ...,
        location {
          ...,
          state->,
          cityLocation->,
          data[]{ ..., LocationAdvantagesId-> }
        },
        amenities {
          ...,
          data[]{ ..., amenity-> }
        },
        project_details {
          ...,
          projectRef->,
          projectBy->,
          projectPrice->
        }
      }
    `;

    const data = await sanityClient.fetch(query, { slug });

    if (!data) {
      throw new Response("Not Found", { status: 404 });
    }

    return data;
  } catch (err) {
    throw new Response("Server Error", { status: 500 });
  }
}
