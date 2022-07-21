import React, { useContext } from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";
import { StoreContext } from "../../../providers/StoreProvider";

export default function Performance() {
  // @ts-ignore
  const [store] = useContext(StoreContext);

  return (
    <section className="performance">
      <RadarChart width={280} height={263} data={store.performance}>
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          dataKey="kind"
          stroke="white"
          dy={4}
          tickLine={false}
          tick={{
            fontSize: 12,
            fontWeight: 500,
          }}
        />
        <Radar
          dataKey="value"
          fill="#FF0101B2"
          fillOpacity={0.8}
          stroke="transparent"
        />
      </RadarChart>
    </section>
  );
}
