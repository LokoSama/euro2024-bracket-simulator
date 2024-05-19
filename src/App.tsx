import React, { useState } from 'react'
import './App.css'
import Team, {TeamProps} from "./components/Team.tsx";
import Group from "./components/Group.tsx";
import Match, {MatchProps} from "./components/Match.tsx";

function App() {
  const [count, setCount] = useState(0)

  const teams: TeamProps[] = [
    { name: 'Brazil', flagEmoji: '🇧🇷' },
    { name: 'Germany', flagEmoji: '🇩🇪' },

  ]

  const matches: MatchProps[] = [
    {
      homeTeam: teams[0],
      awayTeam: teams[1],
      date: new Date(),
    },
  ]

  const group= { groupIndex: 0, teams, matches}

  return (
    <>
      <Group {...group} />
    </>
  )
}

export default App
