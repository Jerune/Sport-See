import React, { useEffect, useContext } from "react";
import { StoreContext } from "../../providers/StoreProvider";
import { getUserData } from "../../services/dataManager";
import Activity from "./Activity/Activity";
import Nutrients from "./Nutrients/Nutrients";
import SessionDuration from "./SessionDuration/SessionDuration";

export default function Results() {
  const [store] = useContext(StoreContext);
  useEffect(() => {
    const refreshData = async () => {
      await getUserData();
    };
    refreshData();
  }, []);

  console.log(store);

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
        <div className="test4"></div>
        <div className="test5"></div>
      </div>
    </section>
  );
}
