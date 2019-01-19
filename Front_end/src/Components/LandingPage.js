import React from 'react';
import Navigation from './Navigation/Navigation';
import FeaturedReviews from './Display/FeaturedReviews';
import PopularCars from './Display/PopularCars';
import PopularReviewers from './Display/PopularReviewers';
import Albums from './Display/Albums';



const LandingPage = () => {
    return(
        <div>
            <Navigation />
            <FeaturedReviews />
            <Albums />
            <PopularCars />
            <PopularReviewers />
        </div>
    )
}

export default LandingPage;