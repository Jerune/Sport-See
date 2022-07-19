import React from "react";
import meditateIcon from "../../assets/icons/meditate-icon.png";
import swimIcon from "../../assets/icons/swim-icon.png";
import bikeIcon from "../../assets/icons/bike-icon.png";
import weightsIcon from "../../assets/icons/weights-icon.png";

export default function AsideNav() {
  return (
    <aside className="asideNav">
      <nav>
        <a href="/">
          <img src={meditateIcon} alt="meditate" />
        </a>
        <a href="/">
          <img src={swimIcon} alt="meditate" />
        </a>
        <a href="/">
          <img src={bikeIcon} alt="meditate" />
        </a>
        <a href="/">
          <img src={weightsIcon} alt="meditate" />
        </a>
      </nav>
      <p className="copyright">Copyright, SportSee 2022</p>
    </aside>
  );
}
