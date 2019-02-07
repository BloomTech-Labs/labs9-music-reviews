import React, { Component } from 'react';
import axios from 'axios';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
import { Container } from 'reactstrap';
import PopularTracksCard from './PopularTracksCard';

const url = 'https://api.spotify.com/v1/playlists/37i9dQZEVXbMDoHDwVN2tF';
 // TOP50 most playable tracks in the world
class PopularTracks extends Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
      };
    constructor(props) {
        super(props);
        this.state = { 
            data: [],
         }
    }

    componentDidMount() {
        let access_token = this.props.cookies.get('access_token');
        axios
        .get(url, { 'headers': { 'Authorization': 'Bearer ' + access_token } })
          .then(response => {
            this.setState({
              data: response.data.tracks.items,
            })
          })
          .catch(function(error) {
            console.log(error)
          })
      }

    render() {
        const renderData = this.state.data.map(data => {
                                if (data.track.popularity > 90) {
                                    return data.track.album.images.length === 0 ? null : 
                                            <PopularTracksCard
                                                key = {data.track.id}
                                                id = {data.track.album.id}
                                                image = {data.track.album.images[0].url}
                                                alt = "Album Art"
                                                artist = {data.track.artists[0].name}
                                                track={data.track.name}
                                            />
                                    }
                            })
        return (
            <Container md="3" xs="12" style={{
                    overflow: "hidden",
                    textAlign: "center",
                    margin: "0 auto",
                    padding: "2rem 0",
                    fontFamily: "Lato"
                }}
            >
                <h1 style={{
                        color: "#984b43",
                        margin: "0 auto",
                        padding: "1rem",
                        fontFamily:'Merriweather Sans',
                    }}
                >
                    Popular Tracks
                </h1>
                <div className="d-flex flex-nowrap align-items-center" 
                style = {{overflow: 'auto', WebkitOverflowScrolling: 'touch' }} >
                    {renderData}
                </div>
            </Container>
         );
    }
}
 
export default withCookies(PopularTracks);