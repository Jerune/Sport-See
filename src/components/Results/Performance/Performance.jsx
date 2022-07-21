import React, { useContext, useEffect } from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";
import { StoreContext } from "../../../providers/StoreProvider";
import { getPerformanceData } from "../../../services/dataManager";

export default function Performance() {
  // @ts-ignore
  const [store] = useContext(StoreContext);
  useEffect(() => {
    const refreshData = async () => {
      await getPerformanceData();
    };
    refreshData();
  }, []);

  return (
    <section className="performance">
      <RadarChart width={259} height={263} data={store.performance}>
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
          fillOpacity={0.7}
          stroke="transparent"
        />
      </RadarChart>
    </section>
  );
}
