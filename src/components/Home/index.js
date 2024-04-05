import React from 'react'
import Header from '../Header'
import BannerSection from '../BannerSection'
import RecommendedShows from '../RecommendedShows'
import UpcomingEvents from '../UpcomingEvents'
import './index.css'

const Home = () => {
    return (
        <div className='home-page-container'>
            <Header />
            <BannerSection />
            <div className='wrapper'>
                <RecommendedShows />
                <UpcomingEvents />
            </div>
        </div>
    )
}

export default Home