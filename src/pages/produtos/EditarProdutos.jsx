import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Produtos.css";

export default function EditarProdutos() {
  const [produtos, setProdutos] = useState([]);
  const navigate = useNavigate();

  const carregarProdutos = () => {
    fetch("http://localhost:3000/produtos")
      .then((res) => res.json())
      .then(setProdutos);
  };

  const removerProduto = (id) => {
    fetch(`http://localhost:3000/produtos/${id}`, { method: "DELETE" })
      .then(() => carregarProdutos());
  };

  useEffect(() => {
    carregarProdutos();
  }, []);


  return (
    <div className="produtos-wrapper">
      <div className="produtos-header">
        <h1>Editar Produtos</h1>
        <div style={{ display: "flex", gap: "1rem" }}>
          <button onClick={() => navigate("/produtos/novo")} className="botao-carrinho">+ Criar Produto</button>
          <button onClick={() => navigate("/produtos")} className="botao-carrinho">← Voltar</button>
        </div>
      </div>


      <div className="produtos-container">
        {produtos.map((p) => (
          <div className="produto-card" key={p.id}>
            <img src={p.imagem} alt={p.nome} />
            <h3>{p.nome}</h3>
            <p className="preco">R$ {p.valor.toFixed(2)}</p>
            <button
              className="botao-comprar"
              onClick={() => navigate(`/produtos/editar/${p.id}`)}
            >
              Editar
            </button>
            <button
              className="botao-comprar"
              style={{ backgroundColor: "#d9534f", marginTop: "0.5rem" }}
              onClick={() => removerProduto(p.id)}
            >
              Remover</button>
          </div>
        ))}
      </div>
    </div>
  );
}
