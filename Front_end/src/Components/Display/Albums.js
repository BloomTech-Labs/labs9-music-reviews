import React, { Component } from 'react';
import axios from 'axios';
import { Row} from 'reactstrap';
import AlbumsCard from './AlbumsCard';


const url = 'https://testing-spotify-api.herokuapp.com/albums';


class Albums extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: []
         }
    }

    componentDidMount() {
        axios
          .get(url) // JSON File Path
          .then(response => {
            this.setState({
              data: response.data.items,
            })
          })
          .catch(function(error) {
            console.log(error)
          })
      }

    render() { 
        console.log(this.state.data)

        const renderData = this.state.data.map(album => {
            return album.artists.map (artist => {
                return (
                    <AlbumsCard 
                        key = {album.id}
                        album = {album.name}
                        artist = {artist.name}
                        track = {album.total_tracks}
                        image = {album.images[0].url}
                        alt = {album.name}
                    />
                )
            })
        })


        return ( 
            <div className = 'container-fluid'>
            <h1>Popular Elvis Presley Albums</h1>
            <Row>
                {renderData}
            </Row>
            </div>
         );
    }
}
 
export default Albums;
