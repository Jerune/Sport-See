import React from "react";
import logo from "../../assets/logo.png";
/**
 * Top navigation of the account
 *
 * @return  {React.ReactElement}  HeaderNav component with navigation and logo
 */
export default function HeaderNav() {
  return (
    <nav className="headerNav">
      <img src={logo} alt="SportSee logo" />
      <a href="/">Accueil</a>
      <a href="/">Profil</a>
      <a href="/">Réglage</a>
      <a href="/">Communauté</a>
    </nav>
  );
}
