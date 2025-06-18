import React from 'react'
import NavBar from './components/NavBar'
import HeroSection from './sections/HeroSection'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import MessageSection from './sections/MessageSection';
import FlavourSection from './sections/FlavourSection';
gsap.registerPlugin(ScrollTrigger);
const App = () => {
  return <main>
    <NavBar/>
    <HeroSection/>
    <MessageSection/>
    <FlavourSection/>
    <div className='h-dvh border border-red-500' />
  </main>
}

export default App