import sanityClient from "../sanityClient";
import { deslugify } from "../utils/slug";

const priceRangeMap = {
  "UpTo 1 Cr": { min: 0, max: 10000000 },
  "1-3 Cr": { min: 10000000, max: 30000000 },
  "3-5 Cr": { min: 30000000, max: 50000000 },
  "Above 5 Cr": { min: 50000000, max: 1000000000 },
};

export async function projects({ request }) {
  try {
    const url = new URL(request.url);
    const propertyType = url.searchParams.get("propertyType");
    const location = deslugify(url.searchParams.get("location"));
    const budget = url.searchParams.get("budget");

    const budgetRange = priceRangeMap[budget];

    let filters = [];

    if (propertyType) {
      filters.push(`project_details.property_type->typeName match "${propertyType}"`);
    }

    if (location) {
      filters.push(`location.cityLocation->name match "${location}"`);
    }

    if (budgetRange) {
      filters.push(
        `project_details.projectPrice->price >= ${budgetRange.min} && project_details.projectPrice->price < ${budgetRange.max}`
      );
    }

    const filterString =
      filters.length > 0
        ? `*[ _type == "projectListing" && ${filters.join(" && ")} ]`
        : `*[ _type == "projectListing" ]`;

    const query = `
      ${filterString}{
        _id,
        project_details {
          projectRef->{ name },
          projectBy->{ builderName },
          projectPrice->{ price },
          property_type->{ typeName },
          rera_no,
          rera_link,
          slugURL,
          rera_qr { asset->{ url } },
          project_thumbnail { asset->{ url } }
        },
        location {
          projectAddress,
          state->{ name },
          cityLocation->{ name }
        }
      }
    `;

    const results = await sanityClient.fetch(query);
    return results;
  } catch (err) {
    console.error("Project loader failed:", err.message);
    throw new Response(err.message || "Project loading error", {
      status: 500,
    });
  }
}
