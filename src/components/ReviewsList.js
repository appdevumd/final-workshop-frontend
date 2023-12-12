import React, { useEffect } from "react";
import ReviewCard from "./ReviewCard";
import { useState } from "react";
import ReviewForm from "./ReviewForm";

const ReviewsList = ({  }) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/about/reviews')
        .then((res) => res.json())
        .then((res) => setReviews(res['reviews']));
    }, []);

    return (
        <div>
            <h1>App Dev Club Reviews</h1>
            <ReviewForm />
            {reviews.map(review => (
                <ReviewCard reviewData={review}/>
                                )      
                )}
        </div>
    );
}

export default ReviewsList;