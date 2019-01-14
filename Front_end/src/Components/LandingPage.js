import React from 'react';
import Navigation from './Navigation/Navigation';
import Search from './SearchLanding/Search';
import FeaturedReviews from './Display/FeaturedReviews';
import PopularCars from './Display/PopularCars';
import PopularReviewers from './Display/PopularReviewers';



const LandingPage = () => {
    return(
        <div>
            <Navigation />
            <Search />
            <FeaturedReviews />
            <PopularCars />
            <PopularReviewers />
        </div>
    )
}

export default LandingPage;