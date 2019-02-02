import React, { Component } from 'react';
import Search from './Search';

class SearchResults extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div style={{ paddingTop: "12rem" }}>
                <h2 style={{ fontFamily: "Merriweather Sans", fontSize: "2rem", color: "#984b43", fontWeight: "700" }}>Start Searching...</h2>
                <Search loggedIn={this.props.loggedIn} maxHeight={"55rem"} />
            </div>
        )
    }
};

export default SearchResults