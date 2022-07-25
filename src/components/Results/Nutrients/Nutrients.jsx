import React, { useContext } from "react";
import { StoreContext } from "../../../providers/StoreProvider";

// Icons
import caloriesIcon from "../../../assets/icons/calories-icon.png";
import proteinesIcon from "../../../assets/icons/proteines-icon.png";
import carbsIcon from "../../../assets/icons/carbs-icon.png";
import fatsIcon from "../../../assets/icons/fats-icon.png";

/**
 * Nutrients overview
 *
 * @return  {React.ReactElement}  Nutrients component with unordered list of data blocks
 */
export default function Nutrients() {
  // @ts-ignore
  const [store] = useContext(StoreContext);
  /** Stores Array for key userData */
  const nutrientsData = store.user.keyData;

  return (
    <ul className="nutrients">
      <li>
        <div className="icon nutrients_calories">
          <img src={caloriesIcon} alt="calories" />
        </div>
        <div>
          <h3>{nutrientsData.calorieCount}kCal</h3>
          <p>Calories</p>
        </div>
      </li>
      <li>
        <div className="icon nutrients_proteines">
          <img src={proteinesIcon} alt="proteines" />
        </div>
        <div>
          <h3>{nutrientsData.proteinCount}g</h3>
          <p>Proteines</p>
        </div>
      </li>
      <li>
        <div className="icon nutrients_carbs">
          <img src={carbsIcon} alt="carbs" />
        </div>
        <div>
          <h3>{nutrientsData.carbohydrateCount}g</h3>
          <p>Glucides</p>
        </div>
      </li>
      <li>
        <div className="icon nutrients_fats">
          <img src={fatsIcon} alt="fats" />
        </div>
        <div>
          <h3>{nutrientsData.lipidCount}g</h3>
          <p>Lipides</p>
        </div>
      </li>
    </ul>
  );
}
