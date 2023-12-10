import React, { useState } from 'react';

const ReviewForm = () => {
  const [formData, setFormData] = useState({
    personName: '',
    review: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // make POST request

      if (response.ok) {
        console.log('Review submitted successfully');
      } else {
        console.error('Failed to submit review');
      }
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="personName">Person Name:</label>
        <input
          type="text"
          id="personName"
          name="personName"
          value={formData.personName}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="review">Review:</label>
        <textarea
          id="review"
          name="review"
          value={formData.review}
          onChange={handleInputChange}
          required
        />
      </div>
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
