import React from 'react'
import Catergory from '../Components/Catergory'
import Hero from '../Components/Hero'
import { requests } from '../Config'

const Home = () => {
  return (
    <>
      <Hero />
      <Catergory catergoryID='1' title='Popular' fetchURL={requests.POPULAR_BASE_URL} />
      <Catergory catergoryID='2' title='Now Playing' fetchURL={requests.NOW_PLAYING_URL} />
      <Catergory catergoryID='3' title='Top Rated' fetchURL={requests.TOP_RATED_URL} />
      <Catergory catergoryID='4' title='TV Series' fetchURL={requests.SERIES_URL} />
    </>
  )
}

export default Home