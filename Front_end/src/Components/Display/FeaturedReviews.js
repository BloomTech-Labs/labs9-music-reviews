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
          data: response.data.tracks,
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
            return data.artists.map(artist => {
              if (data.popularity/20 >= 3.75)
              return (
                <FcCard
                  key={data.id}
                  reviewer={data.album.release_date}
                  year={data.album.release_date}
                  track={data.name}
                  artist = {artist.name}
                  rating={data.popularity/20}
                  image={data.album.images[0].url}
                  alt = {data.name}
                />
              )
            })
            
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
