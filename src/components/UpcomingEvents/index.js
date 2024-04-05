import { FaArrowRightLong } from 'react-icons/fa6'
import { useEffect, useState } from 'react'

import UpcommingEventItem from '../UpcommingEventItem'
import Loader from '../Loader'
import './index.css'

const UpcomingEvents = () => {
    const [events, setEvents] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const onSuccess = eventsData => {
        setEvents(eventsData)
        setIsLoading(false)
    }

    const fetchUpcomingEvents = async () => {
        const apiKey = process.env.REACT_APP_AZURE_API_KEY
        const apiUrl = `https://gg-backend-assignment.azurewebsites.net/api/Events?code=${apiKey}&page=1&type=upcoming`
        const response = await fetch(apiUrl)
        const data = await response.json()

        if (response.ok) {
            onSuccess(data.events)
        }
    }

    useEffect(() => {
        fetchUpcomingEvents()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const renderUpcomingEvents = () => (
        <ul className='upcoming-events-list'>
            {
                events.map((eachEvent, idx) => (
                    <UpcommingEventItem key={idx} eventDetails={eachEvent} />
                ))
            }
        </ul>
    )

    return (
        <section className='upcoming-events'>
            <div className="section-header">
                <h2>Upcoming&nbsp;events</h2>
                <FaArrowRightLong className="long-arrow-icon" />

                <a href="#demo">See all</a>
            </div>
            {!isLoading && renderUpcomingEvents()}

            {isLoading && <Loader />}
        </section>
    )
}

export default UpcomingEvents