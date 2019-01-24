import React from 'react';
import FeaturedReviews from './Display/FeaturedReviews';
import PopularTracks from './Display/PopularTracks';
import PopularReviewers from './Display/PopularReviewers';
import Newest from './Display/Newest';



const HomePage = () => {
    return(
        <div>
            <Newest />
            <FeaturedReviews />
            <PopularTracks />
            <PopularReviewers />
        </div>
    )
}

export default HomePage;