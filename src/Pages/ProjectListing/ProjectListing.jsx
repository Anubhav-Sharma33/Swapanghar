import React from 'react'
import { useLoaderData } from 'react-router-dom';

const ProjectListing = () => {
  const data = useLoaderData();
  console.log(data);  
  return (
    <div>ProjectListing</div>
  )
}

export default ProjectListing;