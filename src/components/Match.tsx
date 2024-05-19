import React, {useState} from "react";
import Team, {TeamProps} from "./Team.tsx";

export interface MatchProps {
  homeTeam: TeamProps;
  awayTeam: TeamProps;
  date: Date;
}

const Match: React.FC<MatchProps> = ({ homeTeam, awayTeam, date }) => {

  const handleGoalsChange = (team: 'home' | 'away', event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value) || 0;
    setScore(prevScore => ({ ...prevScore, [team + 'Goals']: value }));
  };

  const [score, setScore] = useState<{homeGoals: number, awayGoals: number}>({homeGoals: 0, awayGoals: 0});
  return (
    <div>
      <Team {...homeTeam}/> <input value={score.homeGoals} onChange={(event => handleGoalsChange("home", event))}/> - <input value = {score.awayGoals} onChange={event => handleGoalsChange("away", event)}/> <Team {...awayTeam}/>
      <p>{date.toDateString()}</p>
    </div>
  );
};
export default Match;