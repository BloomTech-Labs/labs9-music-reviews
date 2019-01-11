import React from 'react';
import Navigation from './Navigation';
import Search from './Search';
import FeaturedReviews from './FeaturedReviews';
import PopularCars from './PopularCars';
import PopularReviewers from './PopularReviewers';



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