import React from 'react'
import NavBar from './components/NavBar'
import HeroSection from './sections/HeroSection'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import MessageSection from './sections/MessageSection';
gsap.registerPlugin(ScrollTrigger);
const App = () => {
  return <main>
    <NavBar/>
    <HeroSection/>
    <MessageSection/>
    <div className='h-dvh border border-red-500' />
  </main>
}

export default App