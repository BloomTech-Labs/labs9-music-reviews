import React, { Component } from 'react';
import Search from './Search';

class SearchResults extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div style={{ paddingTop: "14rem" }}>
                <Search loggedIn={this.props.loggedIn} />
            </div>
        )
    }
};

export default SearchResults