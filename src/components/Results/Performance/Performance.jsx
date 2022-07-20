import React, { useContext, useEffect } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
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
      <RadarChart width={258} height={263} data={store.performance}>
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" />
        <Radar
          name="Mike"
          dataKey="value"
          stroke="#FF0101B2"
          fill="#FF0101B2"
          fillOpacity={0.7}
        />
      </RadarChart>
    </section>
  );
}
