import React from 'react';
import FeaturedReviews from './Display/FeaturedReviews';
import PopularTracks from './Display/PopularTracks';
import PopularReviewers from './Display/PopularReviewers';
import Newest from './Display/Newest';
import { Container } from 'reactstrap';
import { withAuthorization } from '../Components/Session';


const HomePage = () => {
    return(
        <Container fluid style={{ maxWidth: "1600px", paddingTop: "12rem"}} >
            <Newest />
            {/* <FeaturedReviews /> */}
            <PopularTracks />
            {/* <PopularReviewers /> */}
        </Container>
    )
}


const condition = authUser => !!authUser
export default withAuthorization(condition)(HomePage);
//export default HomePage;