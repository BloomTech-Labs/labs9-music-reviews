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
      .get('https://labs9-car-reviews.herokuapp.com/trackReviews') // JSON File Path
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
          {this.state.data.map(data => {
              return (
                <FcCard
                  key={data.id}
                  reviewer={data.dateCreated}
                  year={data.date}
                  track={data.trackName}
                  artist = {data.name}
                  rating={data.rating}
                  image={data.image}
                  alt = {data.name}
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
