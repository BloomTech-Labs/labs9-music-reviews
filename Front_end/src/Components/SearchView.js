import React, { Component } from 'react'
// import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
// import dummyData from '../DummyData/dummyData.js'
import { Card, CardImg, CardText, CardBody, CardTitle, Label } from 'reactstrap'

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

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      carReviews,
      reviewer: '',
      year: '',
      make: '',
      model: '',
      trim: '',
    }
  }

  onReviewerChange = event => {
    this.setState({ reviewer: event.target.value })
  }

  onYearChange = event => {
    this.setState({ year: event.target.value })
  }

  onMakeChange = event => {
    this.setState({ make: event.target.value })
  }

  onModelChange = event => {
    this.setState({ model: event.target.value })
  }

  onTrimChange = event => {
    this.setState({ trim: event.target.value })
  }

  render() {
    return (
      <div className="renderCarReview">
        {/* form  */}

        <form>
          <label>Reviewer:</label>
          <input type="text" onChange={this.onReviewerChange} />
        </form>

        <form>
          <label>Year:</label>
          <input type="text" onChange={this.onYearChange} />
        </form>

        <form>
          <label>Make:</label>
          <input type="text" onChange={this.onMakeChange} />
        </form>

        <form>
          <label>Model:</label>
          <input type="text" onChange={this.onModelChange} />
        </form>

        <form>
          <Label>Trim</Label>
        </form>

        {/* Card is for result of search */}
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

export default Search
