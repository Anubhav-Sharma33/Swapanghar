import React from 'react'
import SectionWrapper from './UI/ProjectDetails/SectionWrapper'
import Hero from './Hero'

const BannerComponent = ({project_details,quickDetails,location}) => {
  return (
    <SectionWrapper className='absolute bottom-[3.5rem]'>
        <div className="self-start max-w-[350px] p-6 text-white shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-sm bg-[rgba(255,255,255,0.2)]">
        <Hero project_details= {project_details} location = {location} quickDetails = {quickDetails} parent = {"Banner"}/>
        </div>
    </SectionWrapper>
  )
}

export default BannerComponent