"use client";
import { useState, useEffect } from "react";
export default function Exemple() {
  const [age, setAge] = useState(22);
  const [name, setName] = useState("Larissa");
  const [count, setCount] = useState(0);

  function NameChange() {
    setName("LaHarissa");
  }

  function AgeChange() {
    setAge((a) => a + 1);
  }

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return (
    <section className="flex justify-center gap-5 mb-24">
      <div>
        <p className="mb-4">{name}</p>
        <button onClick={NameChange} className="border p-4">
          Change mon prénom
        </button>
      </div>

      <div>
        <p className="mb-4">{age}</p>
        <button onClick={AgeChange} className="border p-4">
          Change mon age
        </button>
      </div>
      <p>Voici mon compteur : {count}</p>
    </section>
  );
}
