import React from 'react'
import { useLoaderData } from 'react-router-dom';

const CityListing = () => {
  const data = useLoaderData();
  console.log(data)
  return (
    <div>CityListing</div>
  )
}

export default CityListing;