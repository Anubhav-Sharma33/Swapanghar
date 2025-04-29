import { useQuery } from "@tanstack/react-query";
import sanityClient from "../sanityClient";

const fetchProjects = async () => {
  const query = `*[_type == "projectListing"]{
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
  }`;

  return await sanityClient.fetch(query);
};


export const useProjects = () =>
  useQuery({ queryKey: ["projects"], queryFn: fetchProjects });
