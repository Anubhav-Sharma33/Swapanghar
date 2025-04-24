import React from 'react'
import { useLoaderData } from 'react-router-dom';

const BuilderListing = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>BuilderListing</div>
  )
}

export default BuilderListing;