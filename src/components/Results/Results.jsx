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
/**
 * [Results page with all chart elements]
 *
 * @param   {string}  id  user ID coming from the URI entered by the user
 *
 * @return  {React.ReactElement}     Results component with chart components
 */
// @ts-ignore
export default function Results({ id }) {
  /** Sets loader when data has not been fully fetched yet */
  const [isLoading, setLoading] = useState(true);
  // @ts-ignore
  const [store] = useContext(StoreContext);
  useEffect(() => {
    /**
     * Fetches user data for different components and updates context when id changes
     * makes data visible for user by setting loader to false.
     *
     * @async
     * @function refreshData
     */
    const refreshData = async () => {
      await getAPIData(id, "user");
      await getAPIData(id, "activity");
      await getAPIData(id, "sessions");
      await getAPIData(id, "performance");
      setLoading(false);
    };
    refreshData();
  }, [id]);

  /** Sends user to 404 page in case ID does not exist */
  if (store.user === "error") {
    return <Navigate to="/404" />;
  }

  /** Returns loader when data has not been fetched yet (isLoading is true) */
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
