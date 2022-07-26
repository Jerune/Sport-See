// @ts-nocheck
import { StoreContext } from "../../../providers/StoreProvider";
import React, { useContext } from "react";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
/**
 * LineChart with average session user data
 *
 * @return  {React.ReactElement}  SessionDuration component
 */
export default function SessionDuration() {
  const [store] = useContext(StoreContext);

  /**
   * Custom Tooltip for LineChart
   *
   * @param   {Array}  payload  array of objects from data
   * @param   {Boolean}  active   state onHover for tooltip
   *
   * @return  {React.ReactElement}           Tooltip with kg and Kcal values for specific day
   */
  function CustomTooltip({ active, payload }) {
    if (active && payload && payload.length) {
      return (
        <div className="tooltip">
          <p className="label">{`${payload[0].value} min`}</p>
        </div>
      );
    }

    return null;
  }
  /**
   * Format ticks to days of the week
   *
   * @param   {string}  tickItem  automatic tick value
   *
   * @return  {string}            replacement tick value
   */
  function formatXAxis(tickItem) {
    switch (tickItem) {
      case 1:
        return "L";
      case 2:
        return "M";
      case 3:
        return "M";
      case 4:
        return "J";
      case 5:
        return "V";
      case 6:
        return "S";
      case 7:
        return "D";
      default:
        return "";
    }
  }

  /**
   * Calulates mouse cursor position and adds styling to sessionDuration container
   *
   * @param   {object}  e  mouseMove event data
   *
   * @return  {style}     Background gradient style
   */
  function mouseMove(e) {
    const sessionElement = document.querySelector(".sessionDuration");
    if (e.isTooltipActive) {
      let windowWidth = sessionElement.offsetWidth;
      let mouseXpercent = Math.floor(
        (e.activeCoordinate.x / windowWidth) * 100
      );
      sessionElement.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseXpercent}%, rgba(230,1,0,1) ${mouseXpercent}%`;
    }
  }
  /**
   * Resets background style of sessionDuration container on MouseOut event
   *
   * @return  {style}  Background style
   */
  function mouseOut() {
    const sessionElement = document.querySelector(".sessionDuration");
    sessionElement.style.background = "#FF0101";
  }

  return (
    <section className="sessionDuration">
      <h2>Durée moyenne des sessions</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={store.sessions}
          onMouseMove={mouseMove}
          onMouseOut={mouseOut}
        >
          <XAxis
            dataKey="day"
            stroke="rgba(255, 255, 255, 0.6)"
            axisLine={false}
            dy={15}
            tickLine={false}
            tickFormatter={formatXAxis}
            padding={{ left: 10, right: 10 }}
          />
          <Line
            dataKey="sessionLength"
            type={"monotone"}
            stroke="rgba(255, 255, 255, 0.6)"
            strokeWidth={2}
            dot={false}
            activeDot={{
              stroke: "#FFFFFF",
              strokeWidth: 5,
              r: 3,
            }}
          />
          <Tooltip content={<CustomTooltip />} cursor={false} />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
}
