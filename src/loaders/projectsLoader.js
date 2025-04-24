import sanityClient from '../sanityClient';

export async function projectListingLoader() {
  const query = `*[_type == "projectListing"]`;
  const results = await sanityClient.fetch(query);
  return results;
}
