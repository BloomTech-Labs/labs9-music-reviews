import React, { Component } from 'react'
import { Section, Row, Col, Card, CardTitle } from 'react-materialize'
import Stars from './Stars'

class FeaturedReviews extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <Section>
        <h1>Featured Reviews</h1>
        <Row>
          <Col m={6} s={12} l={3}>
            <Card
              className="medium"
              header={<CardTitle image="img/sample-1.jpg" />}
              actions={[<a href="#">@reviewer</a>]}
            >
              <div>
                <Stars />
              </div>
              2006 Mercedes-Benz GL450
            </Card>
          </Col>
          <Col m={6} s={12} l={3}>
            <Card
              className="medium"
              header={<CardTitle image="img/sample-1.jpg" />}
              actions={[<a href="#">@reviewer</a>]}
            >
              <div>
                <Stars />
              </div>
              2018 Toyota Rav4 XLE
            </Card>
          </Col>
          <Col m={6} s={12} l={3}>
            <Card
              className="medium"
              header={<CardTitle image="img/sample-1.jpg" />}
              actions={[<a href="#">@reviewer</a>]}
            >
              <div>
                <Stars />
              </div>
              2006 Toyota Prius Hybrid
            </Card>
          </Col>
          <Col m={6} s={12} l={3}>
            <Card
              className="medium"
              header={<CardTitle image="img/sample-1.jpg" />}
              actions={[<a href="#">@reviewer</a>]}
            >
              <div>
                <Stars />
              </div>
              2006 Hyundai Elantra GL
            </Card>
          </Col>
        </Row>
      </Section>
    )
  }
}

export default FeaturedReviews
