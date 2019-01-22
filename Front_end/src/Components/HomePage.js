import React from 'react';
import Navigation from './Navigation/Navigation';
import FeaturedReviews from './Display/FeaturedReviews';
import PopularCars from './Display/PopularCars';
import PopularReviewers from './Display/PopularReviewers';



const LandingPage = () => {
    return(
        <div>
            <FeaturedReviews />
            <PopularCars />
            <PopularReviewers />
        </div>
    )
}

export default LandingPage;