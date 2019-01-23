import React from 'react';
import Navigation from './Navigation/Navigation';
import FeaturedReviews from './Display/FeaturedReviews';
import PopularTracks from './Display/PopularTracks';
import PopularReviewers from './Display/PopularReviewers';
import Newest from './Display/Newest';



const LandingPage = () => {
    return(
        <div>
            <Newest />
            <FeaturedReviews />
            <PopularTracks />
            <PopularReviewers />
        </div>
    )
}

export default LandingPage;