import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeadCards from './components/HeadCards'
import cardData from './assets/HeadCardData'
import Food from './components/Food'
import Category from './components/Category'
function App() {
  const [count, setCount] = useState(0)
  const [headDetail, setHeadDetail] = useState(cardData)

  return (
    <>
      <Navbar />
      <Hero />
      <HeadCards data={headDetail} />
      <Food />
      <Category/>
    </>
  )
}

export default App
