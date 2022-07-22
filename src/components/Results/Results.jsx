import React, { useEffect, useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { StoreContext } from "../../providers/StoreProvider";
import { getAPIData } from "../../services/dataManager";
import Activity from "./Activity/Activity";
import Nutrients from "./Nutrients/Nutrients";
import SessionDuration from "./SessionDuration/SessionDuration";
import Performance from "./Performance/Performance";
import Score from "./Score/Score";

export default function Results({ id }) {
  const [isLoading, setLoading] = useState(true);
  // @ts-ignore
  const [store] = useContext(StoreContext);
  useEffect(() => {
    const refreshData = async () => {
      await getAPIData(id, "user");
      await getAPIData(id, "activity");
      await getAPIData(id, "sessions");
      await getAPIData(id, "performance");
      setLoading(false);
    };
    refreshData();
  }, [id]);

  if (store.user === "error") {
    return <Navigate to="/404" />;
  }

  if (isLoading) {
    return (
      <div className="wrapper">
        <h2>Loading votre data...</h2>
      </div>
    );
  }

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

Results.propTypes = {
  id: PropTypes.string.isRequired,
};
