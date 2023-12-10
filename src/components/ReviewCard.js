import React from "react";

const ReviewCard = ({ reviewData }) => {
    return(
        <div>
            <h2>{reviewData.person}</h2>
            <p>{reviewData.review}</p>
        </div>
    );
}

export default ReviewCard;