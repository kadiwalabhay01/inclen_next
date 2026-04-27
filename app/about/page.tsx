import React from 'react'
import Hero from '../components/about/Hero'
import WhoWeAre from '../components/about/Who-we-are'
import WhatWeDo from '../components/about/What-we-do'
import Milestones from '../components/about/Milestones'
import Presence from '../components/home/Presence'
import Team from '../components/about/Team'
import Collaborators from '../components/about/Collaborators'
import Documents from '../components/about/Documents'
import Last from '../components/about/Last'


const page = () => {
  return (
    <div>
      <Hero/>
      <WhoWeAre/>
      <WhatWeDo/>
      <Milestones/>
      <Presence/>
      <Team/>
      <Collaborators/>
      <Documents/>
      <Last/>

    </div>
  )
}

export default page
