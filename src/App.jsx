import "./App.css";
import Card from "./Components/Card";
import ErrorMessage from "./Components/ErrorMessage";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    studentName: "",
    experienceLevel: "",
    email: "",
  });

  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleStudentName = (e) => {
    setFormData({ ...formData, studentName: e.target.value });
  };

  const handleExperienceLevel = (e) => {
    setFormData({ ...formData, experienceLevel: e.target.value });
  };

  const handleEmail = (e) => {
    setFormData({ ...formData, email: e.target.value });
  };

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const handleSubmit = (e) => {
    e.preventDefault();
    const { studentName, email, experienceLevel } = formData;

    // Validaciones
    if (
      studentName.length >= 3 &&
      studentName.trim().length === studentName.length &&
      experienceLevel.length >= 6 &&
      emailRegex.test(email)
    ) {
      setSubmitted(true);
      setError("");
    } else {
      setError("Por favor verifique que la información sea correcta");
      setSubmitted(false);
    }
  };

  return (
    <>
      <div className="App">
        <h1>Formulario de inscripción - Curso de fotografía</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre del Estudiante:</label>
            <input
              type="text"
              value={formData.studentName}
              onChange={handleStudentName}
            />
          </div>
          <div>
            <label>Nivel de Experiencia:</label>
            <input
              type="text"
              value={formData.experienceLevel}
              onChange={handleExperienceLevel}
            />
          </div>
          <div>
            <label>Correo Electrónico:</label>
            <input type="email" value={formData.email} onChange={handleEmail} />
          </div>
          <button type="submit">Enviar</button>
        </form>
        {error ? <ErrorMessage message={error} /> : null}
        {submitted ? <Card {...formData} /> : null}
      </div>
    </>
  );
}

export default App;
