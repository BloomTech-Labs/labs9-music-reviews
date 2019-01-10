import React, { Component } from 'react'
import { Section, Row } from 'react-materialize'
import axios from 'axios'
import FcCard from './Featured_review_card'

class FeaturedReviews extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    axios
      .get('./DummyData/dummyData.json') // JSON File Path
      .then(response => {
        this.setState({
          data: response.data,
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
            if (data.rating >= 4)
              return (
                <FcCard
                  key={index}
                  image={data.image}
                  reviewer={data.reviewer}
                  year={data.year}
                  make={data.make}
                  model={data.model}
                  trim={data.trim}
                  rating={data.rating}
                />
              )
          })}
        </Row>
      </Section>
    )
  }
}

export default FeaturedReviews
