import React, { Component, Fragment } from 'react';
import { Row } from 'reactstrap';
import axios from 'axios';
import FcCard from './FeaturedReviewCard';

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
      <Fragment>
        <h1>Featured Reviews</h1>
        <Row>
          {this.state.data.map((data, index) => {
            return (
              <FcCard
                key={index}
                reviewer={data.reviewer}
                year={data.year}
                track={data.track}
                artist = {data.artist}
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
      </Fragment>
    )
  }
}

export default FeaturedReviews
