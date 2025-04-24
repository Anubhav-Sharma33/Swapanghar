import sanityClient from '../sanityClient';

export async function projectListingLoader({ params }) {
  const { projectType } = params;

  try {
    const query = `
      *[_type == "projectListing" && lower(project_details.property_type) match lower($projectType)]{
        _id,
        project_details {
          projectRef->{ projectName },
          projectBy->{ builderName },
          projectPrice->{ price },
          rera_no,
          project_logo,
          project_thumbnail,
          property_type,
          slugURL
        },
        location {
          state->,
          cityLocation->,
          projectAddress,
          locationMap,
          data[]{
            proximity,
            unit,
            LocationAdvantagesId->
          },
          data1[]{
            LocationContent
          }
        },
        amenities {
          AmenityImage,
          data[]{ amenity-> },
          data1[]{ amenityContent }
        },
        floorPlan[]{
          title,
          areaRangeSqft,
          areaRangeSqm,
          image
        },
        projectGallery[]{
          alt,
          desktopImage,
          mobileImage
        },
        banners[]{
          desktop_image_url,
          mobile_image_url,
          tablet_image_url,
          alt_tag_desktop,
          alt_tag_mobile,
          alt_tag_tablet
        }
      }
    `;

    const data = await sanityClient.fetch(query, { projectType });

    return data;
  } catch (err) {
    throw new Response("Server Error", { status: 500 });
  }
}
