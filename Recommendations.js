import React, { useState, useEffect } from 'react';
import { getRecommendations } from '../api';

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      const response = await getRecommendations('user_id');
      setRecommendations(response.data.recommendations);
    };

    fetchRecommendations();
  }, []);

  return (
    <div>
      <h2>Recommendations</h2>
      <ul>
        {recommendations.map((rec, index) => (
          <li key={index}>{rec}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recommendations;
