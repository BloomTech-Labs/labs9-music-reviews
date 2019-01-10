import React, { Component } from 'react';
import { Section, Row, Col, Card, CardTitle} from 'react-materialize';
import Stars from './Stars';


class PopularCars extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        return (
            <Section>
                <h1>Popular Cars</h1>
                <Row>
                <Col m={6} s={12} l={3}>
                    <Card className='medium'
                        header={<CardTitle image='img/sample-1.jpg'></CardTitle>}
                        >
                        <div><Stars /></div>
                        2006 Mercedes-Benz GL450
                    </Card>
                </Col>
                <Col m={6} s={12} l={3}>
                    <Card className='medium'
                        header={<CardTitle image='img/sample-1.jpg'></CardTitle>}
                        >
                        <div><Stars /></div>
                        <div>2018 Toyota Rav4 XLE</div>
                    </Card>
                </Col>
                <Col m={6} s={12} l={3}>
                    <Card className='medium'
                        header={<CardTitle image='img/sample-1.jpg'></CardTitle>}
                        >
                        <div><Stars /></div>
                        <div>2006 Toyota Prius Hybrid</div>
                    </Card>
                </Col>
                <Col m={6} s={12} l={3}>
                    <Card className='medium'
                        header={<CardTitle image='img/sample-1.jpg'></CardTitle>}
                        >
                        <div><Stars /></div>
                        <div>2006 Hyundai Elantra GL</div>
                    </Card>
                </Col>
                <Col m={6} s={12} l={3}>
                    <Card className='medium'
                        header={<CardTitle image='img/sample-1.jpg'></CardTitle>}
                        >
                        <div><Stars /></div>
                        <div>2006 Mercedes-Benz GL450</div>
                    </Card>
                </Col>
                <Col m={6} s={12} l={3}>
                    <Card className='medium'
                        header={<CardTitle image='img/sample-1.jpg'></CardTitle>}
                        >
                        <div><Stars /></div>
                        <div>2018 Toyota Rav4 XLE</div>
                    </Card>
                </Col>
                <Col m={6} s={12} l={3}>
                    <Card className='medium'
                        header={<CardTitle image='img/sample-1.jpg'></CardTitle>}
                        >
                        <div><Stars /></div>
                        <div>2006 Toyota Prius Hybrid</div>
                    </Card>
                </Col>
                <Col m={6} s={12} l={3}>
                    <Card className='medium'
                        header={<CardTitle image='img/sample-1.jpg'></CardTitle>}
                        >
                        <div><Stars /></div>
                        <div>2006 Hyundai Elantra GL</div>
                    </Card>
                </Col>
                </Row>
            </Section>

         );
    }
}
 
export default PopularCars;