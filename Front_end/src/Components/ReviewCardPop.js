import React, { Component } from 'react';
import { Card, CardTitle, Col } from 'react-materialize';

class ReviewCardPop extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            loggedIn: false,
         }
    }
    render() { 
        return ( 
            <Col m={6} s={12}>
                <Card 
                    className = 'large'
                    header={<CardTitle image={this.props.image}/>}>
                    <p>Review</p>
                </Card>
            </Col>
         );
    }
}
  
export default ReviewCardPop;