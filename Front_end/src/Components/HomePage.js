import React from 'react';
import FeaturedReviews from './Display/FeaturedReviews';
import PopularTracks from './Display/PopularTracks';
import PopularReviewers from './Display/PopularReviewers';
import Newest from './Display/Newest';
import { Container } from 'reactstrap'



const HomePage = () => {
    return(
        <Container fluid>
            <Newest />
            <FeaturedReviews />
            <PopularTracks />
            <PopularReviewers />
        </Container>
    )
}

export default HomePage;