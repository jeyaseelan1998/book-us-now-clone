import { FaLocationDot } from 'react-icons/fa6'
import { format } from 'date-fns'

import './index.css'

const RecommendedShowItem = ({ eventDetails }) => {
    const { imgUrl, eventName, cityName, date, weather, distanceKm } = eventDetails

    const imageId = imgUrl.split("/")[5]

    return (
        <div className='recommended-show-card'>
            <img loading='lazy' src={`https://lh3.googleusercontent.com/d/${imageId}=w1000`} alt={eventName} />
            <div className='show-details'>
                <h2 className='event-heading'>{eventName}</h2>
                <p className='date'>{format(date, "MMMM d, yyyy")}</p>
                <div className="location-container">
                    <FaLocationDot className="location-icon" />
                    <p>{cityName}</p>
                </div>
                <p className='weather-distance'>{weather} | {Math.round(distanceKm)}</p>
            </div>
        </div>
    )
}
// d/
export default RecommendedShowItem