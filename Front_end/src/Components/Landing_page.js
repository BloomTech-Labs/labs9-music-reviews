import React from 'react';
import Navigation from './Navigation';
import Search from './Search';
import FeaturedReviews from './Featured_reviews';
import PopularCars from './Popular_cars';
import PopularReviewers from './Popular_reviewers';



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