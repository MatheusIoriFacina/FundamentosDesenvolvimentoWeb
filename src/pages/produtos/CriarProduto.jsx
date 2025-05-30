import { useState } from "react";
import { useProduto } from "../../context/ProdutoContext";
import { useNavigate } from "react-router-dom";

export default function CriarProduto() {
  const { criarProduto } = useProduto();
  const navigate = useNavigate();
  const [form, setForm] = useState({ nome: "", valor: "", imagem: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    criarProduto({ ...form, valor: parseFloat(form.valor) });
    navigate("/produtos");
  };

  return (
    <div style={{ padding: "2rem" }}>
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
