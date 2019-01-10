import React, { Component } from 'react'
import { Section, Row } from 'react-materialize'
import axios from 'axios'
import FcCard from './FeaturedReviewCard'

class FeaturedReviews extends Component {
  constructor(props) {
    super(props)
    this.state = {
      connectedTest: [],
      data: [],
    }
  }

  componentDidMount() {
    axios
      .get('./DummyData/dummyData.json') // JSON File Path
      // .get('https://labs9-car-reviews.herokuapp.com/reviews')
      .then(response => {
        this.setState({
          data: response.data,
        })
      })
      .catch(function(error) {
        console.log(error)
      })
    this.getReview()
  }

  getReview = () => {
    const getReview = 'https://labs9-car-reviews.herokuapp.com/reviews'
    axios
      .get(getReview)
      .then(response => {
        this.setState({
          connectedTest: response.data,
        })
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  render() {
    return (
      <Section>
        <h1>Featured Reviews</h1>
        <Row>
          {this.state.data.map((data, index) => {
            return (
              <FcCard
                key={index}
                reviewer={data.reviewer}
                year={data.year}
                make={data.make}
                trim={data.trim}
                rating={data.rating}
                image={data.image}
              />
            )
          })}
        </Row>
        <Row>
          {this.state.connectedTest.map((connect, index) => {
            return (
              <FcCard
                key={index}
                reviewer={connect.title}
                year={connect.content}
                make={connect.make}
              />
            )
          })}
        </Row>
      </Section>
    )
  }
}

export default FeaturedReviews
