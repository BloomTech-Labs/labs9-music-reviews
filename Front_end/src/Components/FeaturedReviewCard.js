import React, {Component} from 'react';
import { Col, Card, CardTitle } from 'react-materialize';
import Ratings from 'react-ratings-declarative';

class FeaturedStars extends Component {
    render() { 
        return ( 
            <Ratings
                rating = {this.props.rating}
                widgetRatedColors="orange"
            >
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
          </Ratings>
         );
    }
}

class FcCard extends Component {
    render() {
        return (
                    <Col m={6} s={12} l={3}>
                        <Card className='medium'
                            header={<CardTitle image = {this.props.image}></CardTitle>}
                            actions={[<a href='#'>@{this.props.reviewer}</a>]}>
                            <div><FeaturedStars rating = {this.props.rating}/></div>
                            {this.props.year} {this.props.make} {this.props.model} {this.props.trim}
                        </Card>
                    </Col>
        )
    }
}

export default FcCard;