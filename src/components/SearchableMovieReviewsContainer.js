import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '6foaisJzOeG2YMB6geUAgHXRulfwxQOE';
const SEARCH_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    
    state = {
        searchTerm: '',
        reviews: []
    }

    handleSearchInput = event =>
        this.setState({ searchTerm: event.target.value})

    handleSubmit = event => {
        event.preventDefault()

        fetch(SEARCH_URL.concat(this.state.searchTerm))
            .then(resp => resp.json())
            .then(resp => this.setState({ reviews: resp.results}))
    }
    
    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <label>Search Reviews</label>
                    <input type="text" onChange={this.handleSearchInput}/>
                    <button type="submit">Search</button>
                </form>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }  
}

export default SearchableMovieReviewsContainer;