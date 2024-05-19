import React from 'react';

export interface TeamProps {
    name: string;
    flagEmoji: string;
}

const Team: React.FC<TeamProps> = ({ name, flagEmoji }) => {
  return (
    <div>
      <text>{flagEmoji} {name}</text>
    </div>
  );
};

export default Team;