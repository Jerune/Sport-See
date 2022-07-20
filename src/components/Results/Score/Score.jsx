import React, { useContext } from "react";
import { RadialBarChart, RadialBar, Legend } from "recharts";
import { StoreContext } from "../../../providers/StoreProvider";

export default function Score() {
  // @ts-ignore
  const [store] = useContext(StoreContext);

  const data = [
    {
      score: store.user.score,
    },
  ];

  return (
    <section className="score">
      <RadialBarChart
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
      </RadialBarChart>
    </section>
  );
}
