import React from 'react'
import { useLoaderData } from 'react-router-dom'

const ProjectsPage = () => {
    const data = useLoaderData();
    console.log(data)
  return (
    <div>ProjectsPage</div>
  )
}

export default ProjectsPage