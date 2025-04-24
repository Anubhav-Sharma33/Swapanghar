import { createClient } from '@sanity/client';

const sanityClient = createClient({
  projectId: '6gh3asw4', // replace with yours
  dataset: 'production',
  apiVersion: '2021-10-21',
  useCdn: true,
});

export default sanityClient;
