import React from "react";
import logo from "../../assets/logo.png";

export default function HeaderNav() {
  return (
    <header className="headerNav">
      <img src={logo} alt="SportSee logo" />
      <a href="/">Accueil</a>
      <a href="/">Profil</a>
      <a href="/">Réglage</a>
      <a href="/">Communauté</a>
    </header>
  );
}
