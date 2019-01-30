import React from 'react';
import FeaturedReviews from './Display/FeaturedReviews';
import PopularTracks from './Display/PopularTracks';
import PopularReviewers from './Display/PopularReviewers';
import Newest from './Display/Newest';
import { Container, Row } from 'reactstrap';
import { withAuthorization } from '../Components/Session';


const HomePage = () => {
    return(
        <Container fluid style={{ maxWidth: "1200px", padding: "7rem 0 5rem 0", color: "#dc9f2e", border:"red 5px solid"}} >
        <Row>
            <Newest />
        </Row>
            {/* <FeaturedReviews /> */}
        <Row>
            <PopularTracks />
        </Row>
            {/* <PopularReviewers /> */}
        </Container>
    )
}


const condition = authUser => !!authUser
export default withAuthorization(condition)(HomePage);
//export default HomePage