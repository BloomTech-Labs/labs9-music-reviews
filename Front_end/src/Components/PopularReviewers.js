import React, { Component } from 'react';
import { Section, Row, Col, Card, CardTitle} from 'react-materialize';


class PopularReviewers extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        return (
            <Section>
                <h1>Popular Reviewers</h1>
                <Row>
                <Col m={6} s={12} l={3}>
                    <Card className='medium'
                        header={<CardTitle image='img/sample-1.jpg'></CardTitle>}
                        actions={[<a href='#'>@reviewer</a>]}>
                    </Card>
                </Col>
                <Col m={6} s={12} l={3}>
                    <Card className='medium'
                        header={<CardTitle image='img/sample-1.jpg'></CardTitle>}
                        actions={[<a href='#'>@reviewer</a>]}>
                    </Card>
                </Col>
                <Col m={6} s={12} l={3}>
                    <Card className='medium'
                        header={<CardTitle image='img/sample-1.jpg'></CardTitle>}
                        actions={[<a href='#'>@reviewer</a>]}>
                    </Card>
                </Col>
                <Col m={6} s={12} l={3}>
                    <Card className='medium'
                        header={<CardTitle image='img/sample-1.jpg'></CardTitle>}
                        actions={[<a href='#'>@reviewer</a>]}>
                    </Card>
                </Col>
                <Col m={6} s={12} l={3}>
                    <Card className='medium'
                        header={<CardTitle image='img/sample-1.jpg'></CardTitle>}
                        actions={[<a href='#'>@reviewer</a>]}>
                    </Card>
                </Col>
                <Col m={6} s={12} l={3}>
                    <Card className='medium'
                        header={<CardTitle image='img/sample-1.jpg'></CardTitle>}
                        actions={[<a href='#'>@reviewer</a>]}>
                    </Card>
                </Col>
                <Col m={6} s={12} l={3}>
                    <Card className='medium'
                        header={<CardTitle image='img/sample-1.jpg'></CardTitle>}
                        actions={[<a href='#'>@reviewer</a>]}>
                    </Card>
                </Col>
                <Col m={6} s={12} l={3}>
                    <Card className='medium'
                        header={<CardTitle image='img/sample-1.jpg'></CardTitle>}
                        actions={[<a href='#'>@reviewer</a>]}>
                    </Card>
                </Col>
                </Row>
            </Section>

         );
    }
}
 
export default PopularReviewers;