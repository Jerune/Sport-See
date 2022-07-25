import React, { useContext } from "react";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from "recharts";
import { StoreContext } from "../../../providers/StoreProvider";
/**
 * RadialBarChart with attained user score percentage over 100%
 *
 * @return  {React.ReactElement}  Score component
 */
export default function Score() {
  // @ts-ignore
  const [store] = useContext(StoreContext);
  /**
   * Stores score from user as Array (requirement from ReCharts)
   *
   * @var {Array}
   */
  const ScoreData = [
    {
      score: store.user.score,
    },
  ];
  /**
   * Transforms decimal score string into number
   *
   * @param   {Array}  data  user array with score object
   *
   * @return  {number}        number to be used for score component
   */
  function calculatePercent(data) {
    const score = Number(data[0].score);
    return Math.round(score * 100);
  }
  /** Saves transformed user score in variable */
  const scorePercent = calculatePercent(ScoreData);

  return (
    <section className="score">
      <h2 className="score_title">Score</h2>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="72%"
          data={ScoreData}
          startAngle={90}
          endAngle={450}
          barGap={0}
        >
          <RadialBar
            dataKey="score"
            fill="#FF0000"
            cornerRadius={25}
            // @ts-ignore
            barSize={11}
          />
          <PolarAngleAxis type="number" domain={[0, 1]} tick={false} />
          <circle cx="50%" cy="50%" fill="white" r="85"></circle>
        </RadialBarChart>
      </ResponsiveContainer>
      <div className="score_results">
        <p className="score_results_percentage">{scorePercent}%</p>
        <p className="score_results_text">
          de votre
          <br />
          objectif
        </p>
      </div>
    </section>
  );
}
