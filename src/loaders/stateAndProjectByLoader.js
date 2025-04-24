import sanityClient from "../sanityClient";

export async function stateAndProjectByLoader() {
  const query = `
{
  "states": *[_type == "state"]{ name },
  "projectBy": *[_type == "projectBy"]{ builderName }
}
`;

  try {
    const data = await sanityClient.fetch(query);
    return data;
  } catch (err) {
    console.error("Sanity fetch failed:", err);
    throw new Response("Failed to load data", { status: 500 });
  }
}
