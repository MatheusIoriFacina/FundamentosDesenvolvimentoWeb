import { useState, useEffect } from "react";
import { useProduto } from "../../context/ProdutoContext";
import { useNavigate, useParams } from "react-router-dom";

export default function AtualizarProduto() {
  const { produtos, atualizarProduto } = useProduto();
  const { id } = useParams();
  const navigate = useNavigate();
  const produto = produtos.find((p) => p.id === Number(id));

  const [form, setForm] = useState(produto || { nome: "", valor: "", imagem: "" });

  useEffect(() => {
    if (!produto) navigate("/produtos");
  }, [produto]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    atualizarProduto(produto.id, { ...form, valor: parseFloat(form.valor) });
    navigate("/produtos");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Atualizar Produto</h2>
      <form onSubmit={handleSubmit}>
        <input name="nome" value={form.nome} onChange={handleChange} />
        <input name="valor" type="number" step="0.01" value={form.valor} onChange={handleChange} />
        <input name="imagem" value={form.imagem} onChange={handleChange} />
        <button type="submit">Atualizar</button>
      </form>
    </div>
  );
}
