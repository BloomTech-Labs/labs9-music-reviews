import React from 'react';
import FeaturedReviews from './Display/FeaturedReviews';
import PopularTracks from './Display/PopularTracks';
import PopularReviewers from './Display/PopularReviewers';
import Newest from './Display/Newest';
import { Container } from 'reactstrap';
import { withAuthorization } from '../Components/Session';

const HomePage = () => {
    return(
        <Container fluid style={{ 
                maxWidth: "1200px",
                padding: "7rem 0 5rem 0",
                fontFamily: "Lato",
                fontSize: "1.2rem"
            }}
        >
            <Newest />
            {/* <FeaturedReviews /> */}
            <PopularTracks />
            {/* <PopularReviewers /> */}
        </Container>
    )
}


const condition = authUser => !!authUser
export default withAuthorization(condition)(HomePage);
//export default HomePage