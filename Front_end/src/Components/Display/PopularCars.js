import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Row } from 'reactstrap';
import PopularTracksCard from './PopularTracksCard';



class PopularCars extends Component {
    constructor(props) {
        super(props);
        this.state = { 
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

        const renderData = this.state.data.map(data => {
            return data.artists.map(artist => {
              return (
                <PopularTracksCard
                    key={data.id}
                  track={data.name}
                  artist = {artist.name}
                  image={data.album.images[0].url}
                  album={data.album.name}
                  alt = {data.name}
                  
                />
              )
            })
        })

        return (
            <div className = 'container'>
                <h1>Popular Tracks</h1>
                
                <Row>
                    {renderData}
                </Row>
            </div>
         );
    }
}
 
export default PopularCars;