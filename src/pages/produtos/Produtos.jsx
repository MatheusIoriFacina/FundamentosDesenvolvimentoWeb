import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCarrinho } from "../../context/CarrinhoContext";
import { useAuth } from "../../context/AuthContext";
import Toast from "../../components/Toast";
import "./Produtos.css";

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const [toastVisivel, setToastVisivel] = useState(false);
  const navigate = useNavigate();
  const { adicionarAoCarrinho } = useCarrinho();
  const { logout } = useAuth();

  const carregarProdutos = () => {
    fetch("http://localhost:3000/produtos")
      .then((res) => res.json())
      .then(setProdutos);
  };

  const comprar = (produto) => {
    adicionarAoCarrinho(produto);
    setToastVisivel(true);
  };


  useEffect(() => {
    carregarProdutos();
  }, []);

  return (
    <div className="produtos-wrapper">
      <div className="produtos-header">
        <h1>Produtos</h1>
        <div style={{ display: "flex", gap: "1rem" }}>
          <button onClick={() => navigate("/carrinho")} className="botao-carrinho">Ver Carrinho</button>
          <button onClick={() => navigate("/editar-produtos")} className="botao-carrinho">Editar Produtos</button>
        </div>
      </div>

      <div className="produtos-container">
        {produtos.map((p) => (
          <div className="produto-card" key={p.id}>
            <img src={p.imagem} alt={p.nome} />
            <h3>{p.nome}</h3>
            <p className="preco">R$ {p.valor.toFixed(2)}</p>
            <button className="botao-comprar" onClick={() => comprar(p)}>Comprar</button>
          </div>
        ))}
      </div>

      {toastVisivel && (
        <Toast mensagem="Produto adicionado ao carrinho" onClose={() => setToastVisivel(false)} />
      )}

      <button className="logout-btn" onClick={logout}>Encerrar Sessão</button>
    </div>
  );
}
