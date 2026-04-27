import React from 'react'
import Hero from './components/home/Hero'
import ImpactSection from './components/home/Impact-stats'
import About from './components/home/About'
import ResearchSection from './components/home/Research-areas'
import Presence from './components/home/Presence'
import ResearchInellignece from './components/home/ResearchIntelligence'
import Partners from './components/home/Partners'

const Page = () => {
  return (
    <div>
      <Hero />
      <ImpactSection />
      <About />
      <ResearchSection />
      <Presence />
      <ResearchInellignece/>
      <Partners />
    </div>
  )
}

export default Page