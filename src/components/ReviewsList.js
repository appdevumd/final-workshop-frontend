import React, { useEffect } from "react";
import ReviewCard from "./ReviewCard";
import { useState } from "react";
import ReviewForm from "./ReviewForm";

const ReviewsList = ({  }) => {
    const [reviews, setReviews] = useState([]);

    // update reviews on page refresh

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