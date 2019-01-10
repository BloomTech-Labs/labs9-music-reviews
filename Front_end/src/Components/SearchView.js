import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
// import dummyData from '../DummyData/dummyData.js'
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Label,
  Form,
  Input,
} from 'react-materialize'

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
      <div>
        <Card>
          <CardImg />
          <CardTitle>Result of your search results:</CardTitle>
          <CardBody>
            {this.state.carReviews.map(review =>
              <div key={review.reviewer}>
                <CardText>
                  {' '}{review.reviewer}{' '}
                </CardText>
                <CardText>
                  {' '}{review.year}{' '}
                </CardText>
                <CardText>
                  {' '}{review.make}{' '}
                </CardText>
                <CardText>
                  {' '}{review.model}{' '}
                </CardText>
                <CardText>
                  {' '}{review.trim}{' '}
                </CardText>
              </div>,
            )}
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default SearchView
