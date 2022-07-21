import React, { useContext } from "react";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from "recharts";
import { StoreContext } from "../../../providers/StoreProvider";

export default function Score() {
  // @ts-ignore
  const [store] = useContext(StoreContext);

  const data = [
    {
      score: "0.90",
    },
  ];

  function calculatePercent(data) {
    console.log(data);
    const score = Number(data[0].score);
    return Math.round(score * 100);
  }
  const scorePercent = calculatePercent(data);

  return (
    <section className="score">
      <h2 className="score_title">Score</h2>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="90%"
          data={data}
          startAngle={90}
          endAngle={450}
        >
          <RadialBar
            minAngle={15}
            dataKey="score"
            fill="#FF0000"
            cornerRadius={25}
            barSize={10}
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

{
  /* <RadialBarChart
        width={258}
        height={263}
        cx="50%"
        cy="50%"
        innerRadius="10%"
        outerRadius="80%"
        barSize={10}
        data={data}
      >
        <RadialBar
          label={{ position: "insideStart", fill: "#fff" }}
          background
          dataKey="score"
        />
      </RadialBarChart> */
}
