import { useQuery } from '@tanstack/react-query';
import sanityClient from '../sanityClient';

const fetchProjects = async () => {
  const query = `*[_type == "projectListing"]`;

  return await sanityClient.fetch(query);
};

export const useProjects = () =>
  useQuery({ queryKey: ['projects'], queryFn: fetchProjects });
