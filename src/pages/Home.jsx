import React from 'react'
import HeroSlider from '../components/HeroSlider'
import FeaturedGardeners from '../components/FeaturedGardeners'
import TopTrendingTips from '../components/TopTrendingTips'
import SuccessStories from '../components/SuccessStories'
import UpcomingEvents from '../components/UpcomingEvents'
import useDocumentTitle from '../hooks/useDocumentTitle'


const Home = () => {


  // Document title
  useDocumentTitle("Home - Gardeners community")

  return (
    <>
      <HeroSlider />
      <FeaturedGardeners />
      <TopTrendingTips />
      <UpcomingEvents />
      <SuccessStories />
    </>

  )
}

export default Home
