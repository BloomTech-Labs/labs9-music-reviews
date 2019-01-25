import React, { Component } from 'react';
import axios from 'axios';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
import NewReleaseCard from './NewReleaseCard';



const url = 'https://api.spotify.com/v1/search?q=tag%3Anew&type=album';


class Newest extends Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
      };
    constructor(props) {
        super(props);
        this.state = { 
            data: []
         }
    }

componentDidMount() {
    let access_token = this.props.cookies.get('access_token');
    axios
        .get(url, { 'headers': { 'Authorization': 'Bearer ' + access_token } })
        .then(response => {
            this.setState({
              data: response.data.albums.items,
            })
        })
        .catch(function(error) {
            console.log(error)
        })
    }

    render() {
        const renderData = this.state.data.map(album => {
            return album.artists.map((artist, index) => {
              return (
                
                    <NewReleaseCard
                        key = {index} 
                        album = {album.name}
                        artist = {artist.name}
                        date = {album.release_date}
                        image = {album.images[0].url}
                        id = {album.id}
                    
                    />
              )
        })
    })

        return (
            <div className = 'container'>
                <h1>Latest Releases</h1>
                <div className="d-flex flex-row flex-nowrap align-items-center" style = {{overflow: 'auto', WebkitOverflowScrolling: 'touch'}} >
                    {renderData}
                </div>
            </div>
        );
    }
}
 
export default withCookies(Newest);