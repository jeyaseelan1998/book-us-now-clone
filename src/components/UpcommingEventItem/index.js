import { FaLocationDot } from 'react-icons/fa6'
import './index.css'

const UpcommingEventItem = ({ eventDetails }) => {
    const { imgUrl, eventName, cityName, weather, distanceKm } = eventDetails

    const imageId = imgUrl.split("/")[5]

    return (
        <li className='upcoming-event-card'>
            <img loading='lazy' src={`https://lh3.googleusercontent.com/d/${imageId}=w1000`} alt={eventName} className='event-image' />
            <div className='event-details'>
                <h2 className='event-heading'>{eventName}</h2>
                <div className="location-container">
                    <FaLocationDot className="location-icon" />
                    <p>{cityName}</p>
                </div>
                <p className='weather-distance'>{weather} | {Math.round(distanceKm)}</p>
            </div>
        </li>
    )
}

export default UpcommingEventItem