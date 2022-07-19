import React, { useEffect, useContext } from "react";
import { StoreContext } from "../../providers/StoreProvider";
import { getUserData } from "../../services/dataManager";
import Nutrients from "./Nutrients/Nutrients";

export default function Results() {
  const [store] = useContext(StoreContext);
  useEffect(() => {
    const refreshData = async () => {
      await getUserData();
    };
    refreshData();
  }, []);

  return (
    <section className="results">
      <h1 className="results_title">
        Bonjour <span>{store.user.userInfos.firstName}</span>
      </h1>
      <h2 className="results_subTitle">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </h2>
      <div className="charts">
        <div className="test1"></div>
        <Nutrients />
        <div className="test3"></div>
        <div className="test4"></div>
        <div className="test5"></div>
      </div>
    </section>
  );
}
