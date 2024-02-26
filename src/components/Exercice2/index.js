"use client";
import { useState } from "react";

const FormulaireValidation = () => {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    nom: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validation
    setErrors({
      ...errors,
      [name]: name === "email" ? validateEmail(value) : validateField(value),
    });
  };

  const validateField = (value) => {
    return value ? "" : "Ce champ est obligatoire";
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
    return regex.test(email) ? "" : "Email invalide";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation avant de soumettre les données
    const newErrors = {
      nom: validateField(formData.nom),
      email: validateEmail(formData.email),
    };

    setErrors(newErrors);

    // Si aucune erreur, vous pouvez soumettre les données
    if (!newErrors.nom && !newErrors.email) {
      // Ajoutez votre logique de soumission ici
      console.log("Formulaire soumis avec succès:", formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center gap-5 mb-24">
      <div>
        <label htmlFor="nom" >Nom :</label>
        <input
          type="text"
          id="nom"
          name="nom"
          value={formData.nom}
          onChange={handleChange}
          
        />
        <span style={{ color: "red" }}>{errors.nom}</span>
      </div>

      <div>
        <label htmlFor="email">Email :</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <span style={{ color: "red" }}>{errors.email}</span>
      </div>

      <button type="submit">Soumettre</button>
    </form>
  );
};

export default FormulaireValidation;
