import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Login.css";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", senha: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });


    if (res.ok) {
      const data = await res.json();
      login(data);
      navigate("/produtos");
    } else {
      alert("Email ou senha inválidos");
    }};

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>

        <input name="email" placeholder="Email" onChange={handleChange} required />
        <input name="senha" type="password" placeholder="Senha" onChange={handleChange} required />
        <button type="submit">Entrar</button>

        <p>Não tem conta? <span onClick={() => navigate("/criar-conta")}>Criar agora</span></p>
      </form>
    </div>
  );
}
