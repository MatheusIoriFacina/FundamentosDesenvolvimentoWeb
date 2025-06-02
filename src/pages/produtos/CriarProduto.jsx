import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CriarProduto.css";

export default function CriarProduto() {
  const [form, setForm] = useState({ nome: "", valor: "", imagem: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:3000/produtos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, valor: parseFloat(form.valor) }),
    });
    navigate("/produtos");
  };

  return (
    <div className="form-container">
      <h2>Criar Produto</h2>
      <form onSubmit={handleSubmit}>
        <input name="nome" placeholder="Nome" onChange={handleChange} required />
        <input name="valor" placeholder="Valor" type="number" step="0.01" onChange={handleChange} required />
        <input name="imagem" placeholder="URL da imagem" onChange={handleChange} required />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}
