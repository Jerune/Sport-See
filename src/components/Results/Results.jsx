import React, { useEffect, useContext } from "react";
import { StoreContext } from "../../providers/StoreProvider";
import { getAPIData } from "../../services/dataManager";
import Activity from "./Activity/Activity";
import Nutrients from "./Nutrients/Nutrients";
import SessionDuration from "./SessionDuration/SessionDuration";
import Performance from "./Performance/Performance";
import Score from "./Score/Score";

export default function Results({ id }) {
  // @ts-ignore
  const [store] = useContext(StoreContext);
  useEffect(() => {
    const refreshData = async () => {
      await getAPIData(id, "user");
      await getAPIData(id, "activity");
      await getAPIData(id, "sessions");
      await getAPIData(id, "performance");
    };
    refreshData();
  }, [id]);

  return (
    <section className="results">
      <h1 className="results_title">
        Bonjour <span>{store.user.userInfos.firstName}</span>
      </h1>
      <h2 className="results_subTitle">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </h2>
      <div className="charts">
        <Activity />
        <Nutrients />
        <SessionDuration />
        <Performance />
        <Score />
      </div>
    </section>
  );
}
