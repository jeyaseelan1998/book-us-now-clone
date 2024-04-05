import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel } from 'swiper/modules'

import RecommendedShowItem from "../RecommendedShowItem";
import Loader from "../Loader";

import { swiperBreakpoints } from "../../utils/swiperBreakpoints";

import 'swiper/css';
import 'swiper/css/pagination';
import './index.css'

const RecommendedShows = () => {
    const [events, setEvents] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const onSuccess = (events) => {
        setEvents(events)
        setIsLoading(false)
    }
    const fetchRecommendedShowsData = async () => {
        const apiKey = process.env.REACT_APP_AZURE_API_KEY
        const apiUrl = `https://gg-backend-assignment.azurewebsites.net/api/Events?code=${apiKey}&type=reco`
        const resposne = await fetch(apiUrl)
        const data = await resposne.json()

        if (resposne.ok) {
            onSuccess(data.events)
        }
    }

    useEffect(() => {
        fetchRecommendedShowsData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <section className='recommended-shows'>
            <div className="section-header">
                <h2>Recommended&nbsp;shows</h2>
                <FaArrowRightLong className="long-arrow-icon" />

                <a href="#demo">See all</a>
            </div>

            {!isLoading && <Swiper
                direction={'horizontal'}
                slidesPerView={1}
                mousewheel={true}
                modules={[Mousewheel]}
                breakpoints={swiperBreakpoints}
                loop
            >
                {
                    events.map((eachEvent, idx) => (
                        <SwiperSlide key={idx}>
                            <RecommendedShowItem eventDetails={eachEvent} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>}

            {isLoading && <Loader />}
        </section >
    )
}

export default RecommendedShows