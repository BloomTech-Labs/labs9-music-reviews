import React, { Component } from 'react';
import Search from './Search';

class SearchResults extends Component {
    render() {
        return (
            <div style={{ paddingTop: "14rem" }}>
                <Search loggedIn={this.props.loggedIn} maxHeight={"55rem"}/>
            </div>
        )
    }
};

export default SearchResults