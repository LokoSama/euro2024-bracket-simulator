import React, {useState} from 'react';
import Team, {TeamProps} from './Team';
import {TeamGroupState} from "./types/types.ts";
import Match, {MatchProps} from "./Match.tsx";

export interface GroupProps {
  groupIndex: number;
  teams: TeamProps[];
  matches: MatchProps[];
}

const Group: React.FC<GroupProps> = ({ groupIndex, teams, matches }) => {

  const initialTeams = teams.map(team => {
    return {
      team: team,
      points: 0,
      difference: 0,
    };
  });

 // TODO: Implement the ranking logic
  
  const [ranking, setRanking] = useState<TeamGroupState[]>(initialTeams);

  return (
    <div>
      <h1>Group {String.fromCharCode(65 + groupIndex)}</h1>
      {teams.map((team, index) => (
        <Team key={index} {...team} />
      ))}
      <h2>Ranking</h2>
      <ol>
        {ranking.map((teamGroupState, index) => (
          <li key={index}>
            <Team {...teamGroupState.team} />
            <p>Points: {teamGroupState.points}</p>
            <p>Difference: {teamGroupState.difference}</p>
          </li>
        ))}
      </ol>
      <h2>Matches</h2>
      {matches.map((match, index) => (
        <Match key={index} {...match} />
      ))}
    </div>
  );
};

export default Group;