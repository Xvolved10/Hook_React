"use client";
import { useState } from "react";

export default function Exo1() {
  const [compteur, setCompteur] = useState(0);

  // Fonction pour incrémenter le compteur
  const incrementer = () => {
    setCompteur(compteur + 1);
  };

  // Fonction pour décrémenter le compteur
  const decrementer = () => {
    setCompteur(compteur - 1);
  };

  return (
    <div className="flex justify-center gap-5 mb-24">
      <h1>Compteur : {compteur}</h1>

      <button onClick={incrementer}>Incrémenter</button>

      <button onClick={decrementer}>Décrémenter</button>
    </div>
  );
}
