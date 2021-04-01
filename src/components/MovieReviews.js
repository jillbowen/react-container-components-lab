// Code MovieReviews Here
import React from 'react' 

const Review = ({
    headline, summary_short, byline, link
}) => {
    return (
        <div key={headline}>
            <h2>{headline}</h2>
            <h3>{summary_short}</h3>
            <p>Read {byline}'s <a href={link.url}>full review</a></p>
            <br></br>
        </div>
    )
}

const MovieReviews = ({reviews}) =>
    <div className="review-list">
        {reviews.map(Review)}
    </div>

MovieReviews.defaultProps = {
    reviews: []
}

export default MovieReviews;