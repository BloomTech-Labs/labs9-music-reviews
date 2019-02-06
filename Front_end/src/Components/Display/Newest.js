import React, { Component } from 'react';
import axios from 'axios';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
import NewReleaseCard from './NewReleaseCard';
import { Container } from 'reactstrap';

const url = 'https://api.spotify.com/v1/browse/new-releases';

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
        .catch(error => error.message)
    }

    render() {
        function dateConverter(date) {
            var msec = Date.parse(date);
            var d = new Date(msec);
            return d.toString().split("G",1)[0].slice(3,15);
        }        

        function getUnique(arr, comp) {
            const unique = arr
                .map(e => e[comp])
                .map((e, i, final) => final.indexOf(e) === i && i)  // store the keys of the unique objects
                .filter(e => arr[e]).map(e => arr[e]);              // eliminate the dead keys & store unique objects
             return unique;
          }
          

        const renderData = this.state.data.map(album => {
            return getUnique(album.artists.map(artist => {
              return (
                    <NewReleaseCard
                        key = {album.id} 
                        album = {album.name}
                        artist = {artist.name}
                        date = {dateConverter(album.release_date)}
                        image = {album.images[0].url}
                        id = {album.id}
                    />
              )
        }), 'id')
    })

        return (
            <Container md="3" xs="12" style={{
                        overflow: "hidden",
                        textAlign: "center",
                        padding: "2rem 0",
                        margin: "0 auto",
                        fontFamily: "Lato"
                    }}
                >

                <h1 style={{
                        color: "#984b43",
                        margin: "1rem auto 0 auto",
                        fontFamily:'Merriweather Sans',
                    }}
                >
                    Latest Releases
                </h1>
                <div className="d-flex flex-row flex-nowrap align-items-center" 
                style = {{overflow: 'auto', WebkitOverflowScrolling: 'touch' }} >
                    {renderData}
                </div>
            </Container>
        );
    }
}
 
export default withCookies(Newest);