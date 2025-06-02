import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./CriarProduto.css";

export default function AtualizarProduto() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ nome: "", valor: "", imagem: "" });

  useEffect(() => {
    fetch(`http://localhost:3000/produtos/${id}`)
      .then((res) => res.json())
      .then((data) => setForm(data));
  }, [id]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:3000/produtos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, valor: parseFloat(form.valor) }),
    });
    navigate("/produtos");
  };

  return (
    <div className="form-container">
      <h2>Atualizar Produto</h2>
      <form onSubmit={handleSubmit}>
        <input name="nome" value={form.nome} onChange={handleChange} required />
        <input name="valor" type="number" step="0.01" value={form.valor} onChange={handleChange} required />
        <input name="imagem" value={form.imagem} onChange={handleChange} required />
        <button type="submit">Atualizar</button>
      </form>
    </div>
  );
}
