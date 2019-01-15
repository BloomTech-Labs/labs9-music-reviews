import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
// import dummyData from '../DummyData/dummyData.js'
import { Card, Col, CardTitle, Row, Section } from 'react-materialize'
import Stars from '../StarsRating/Stars'

const carReviews = [
  {
    reviewer: 'adfaris',
    year: 2019,
    make: 'BMW',
    model: 'F1',
    trim: 'turbo',
  },
  {
    reviewer: 'Adam Lee',
    year: 2019,
    make: 'Honda',
    model: 'Odyssey',
    trim: 'turbo',
  },
  {
    reviewer: 'Das Ma',
    year: 2019,
    make: 'Land Rover',
    model: 'EXL',
    trim: 'Super Charged',
  },
]

class SearchView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      carReviews,
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <Section className="center">
        <Row>
          <Col m={6} s={12} l={3}>
            <Card
              className="medium"
              header={<CardTitle image="img/sample-1.jpg" />}
            >
              <div>
                <Stars />
              </div>
              1990 Mazda Rx7 Turbo II
            </Card>
          </Col>

          <Col m={6} s={12} l={3}>
            <Card
              className="medium"
              header={<CardTitle image="img/sample-1.jpg" />}
            >
              <div>
                <Stars />
              </div>
              1990 Mazda Rx7 Turbo II
            </Card>
          </Col>

          <Col m={3} s={12} l={3}>
            <Card
              className="medium"
              header={<CardTitle image="img/sample-1.jpg" />}
            >
              <div>
                <Stars />
              </div>
              1990 Mazda Rx7 Turbo II
            </Card>
          </Col>

          <Col m={6} s={12} l={3}>
            <Card
              className="medium"
              header={<CardTitle image="img/sample-1.jpg" />}
            >
              <div>
                <Stars />
              </div>
              1990 Mazda Rx7 Turbo II
            </Card>
          </Col>
        </Row>
      </Section>
    )
  }
}

export default SearchView
