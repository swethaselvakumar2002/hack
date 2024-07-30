import React, { useState } from 'react';
import { updateProgress } from '../api';

const Challenges = () => {
  const challenges = [
    { id: 1, title: 'FizzBuzz', description: 'Write a function to print FizzBuzz.', progress: 0 },
    { id: 2, title: 'Reverse String', description: 'Write a function to reverse a string.', progress: 0 },
  ];

  const [userChallenges, setUserChallenges] = useState(challenges);

  const handleProgressUpdate = async (id, progress) => {
    const updatedChallenges = userChallenges.map((challenge) => 
      challenge.id === id ? { ...challenge, progress } : challenge
    );
    setUserChallenges(updatedChallenges);
    await updateProgress({ userId: 'user_id', challengeId: id, progress });
  };

  return (
    <div>
      <h2>Challenges</h2>
      <ul>
        {userChallenges.map((challenge) => (
          <li key={challenge.id}>
            <h3>{challenge.title}</h3>
            <p>{challenge.description}</p>
            <input
              type="range"
              value={challenge.progress}
              onChange={(e) => handleProgressUpdate(challenge.id, e.target.value)}
              min="0"
              max="100"
            />
            <span>{challenge.progress}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Challenges;
