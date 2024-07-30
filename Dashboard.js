import React, { useState, useEffect } from 'react';
import { getRecommendations } from '../api';

const Dashboard = () => {
  const [progress] = useState({ 'FizzBuzz': 100, 'Reverse String': 50 });
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      const response = await getRecommendations('user_id');
      setRecommendations(response.data.recommendations);
    };

    fetchRecommendations();
  }, [progress]);

  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        {Object.keys(progress).map((key) => (
          <li key={key}>
            {key}: {progress[key]}%
          </li>
        ))}
      </ul>
      <h2>Recommendations</h2>
      <ul>
        {recommendations.map((rec, index) => (
          <li key={index}>{rec}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
