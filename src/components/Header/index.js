import { FaBars, FaLocationDot, FaUser } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import { FaHeart, FaAngleRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";

import { headerSwiperBreakpoints } from "../../utils/swiperBreakpoints";
import './index.css'

const Header = () => {
    const renderSearchBar = () => (
        <div className='search-input-container'>
            <input className='search-input' />
            <IoMdSearch className='icon' />
        </div>
    )

    const renderLocation = () => (
        <div className="location-container">
            <FaLocationDot className="location-icon" />
            <p>Mumbai, India</p>
            <FaAngleRight className="right-arrow-icon" />
        </div>
    )

    const rennderNavbar = () => (
        <nav className="navbar">
            <Swiper
                className="header-navbar-swiper"
                direction={'horizontal'}
                slidesPerView={2}
                mousewheel={true}
                modules={[Mousewheel]}
                breakpoints={headerSwiperBreakpoints}
            >
                <SwiperSlide>
                    <a draggable={false} className="nav-item" href="/live-shows">Live&nbsp;shows</a>
                </SwiperSlide>
                <SwiperSlide>
                    <a draggable={false} className="nav-item" href="/streams">Streams</a>
                </SwiperSlide>
                <SwiperSlide>
                    <a draggable={false} className="nav-item" href="/movies">Movies</a>
                </SwiperSlide>
                <SwiperSlide>
                    <a draggable={false} className="nav-item" href="/plays">Plays</a>
                </SwiperSlide>
                <SwiperSlide>
                    <a draggable={false} className="nav-item" href="/events">Events</a>
                </SwiperSlide>
                <SwiperSlide>
                    <a draggable={false} className="nav-item" href="/sports">Sports</a>
                </SwiperSlide>
                <SwiperSlide>
                    <a draggable={false} className="nav-item mr-0" href="/activities">Activities</a>
                </SwiperSlide>
            </Swiper>
        </nav>
    )

    return (
        <header className='header-container'>
            <div className="logo-container">
                <h1 className="website-logo">BookUsNow</h1>
                <div className="mobile-ui">
                    {renderLocation()}
                </div>
            </div>

            <div className="header-top-container">
                <div className="mobile-ui">
                    <button type="button" className="btn">
                        <IoMdSearch className="search-icon" />
                    </button>
                    <button type="button" className="btn">
                        <FaHeart className="heart-icon" />
                    </button>
                    <button type="button" className="btn">
                        <FaUser className="user-icon" />
                    </button>
                </div>

                <div className="desktop-ui">
                    <button type="button" className="category-btn">
                        <FaBars className="header-icon" />
                        <p>Category</p>
                    </button>
                    {renderSearchBar()}
                    <button type="button" className="fav-btn">
                        <FaHeart className="header-icon" />
                        <p>Favourites</p>
                    </button>
                    <button type="button" className="auth-btn">
                        <p>Sign&nbsp;In</p>
                    </button>
                </div>
            </div>

            <div className="desktop-ui">
                {renderLocation()}
            </div>

            {rennderNavbar()}
        </header>
    )
}

export default Header