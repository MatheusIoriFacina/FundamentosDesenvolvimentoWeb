import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function CriarConta() {
  const [form, setForm] = useState({ email: "", senha: "" });
  const navigate = useNavigate();


  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3000/usuarios", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),});


    if (res.ok) {
      alert("Conta criada com sucesso!");
      navigate("/login");
    } else {
      alert("Erro ao criar conta");
    }};


  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Criar Conta</h2>

        <input name="email" placeholder="Email" onChange={handleChange} required />
        <input name="senha" type="password" placeholder="Senha" onChange={handleChange} required />
        <button type="submit">Criar Conta</button>

        <p>Já tem conta? <span onClick={() => navigate("/login")}>Entrar</span></p>
      </form>
    </div>


  );
}
