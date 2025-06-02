import { useCarrinho } from "../../context/CarrinhoContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Carrinho.css";

export default function Carrinho() {
  const { itens, alterarQuantidade, removerDoCarrinho, limparCarrinho, total } = useCarrinho();
  const navigate = useNavigate();
  const [mensagem, setMensagem] = useState("");

  const finalizarCompra = () => {
    setMensagem("Compra realizada com sucesso!");
    setTimeout(() => {
      limparCarrinho();
      navigate("/produtos");
    }, 2000);
  };

  return (
    <div className="carrinho-container">
      <h2>Meu Carrinho</h2>
      {itens.length === 0 ? (
        <p>Carrinho vazio.</p>
      ) : (
        <>
          {itens.map((item) => (
            <div className="item-carrinho" key={item.id}>
              <img src={item.imagem} alt={item.nome} width={80} />
              <div className="info">
                <h4>{item.nome}</h4>
                <p>R$ {item.valor.toFixed(2)} x {item.quantidade}</p>
              </div>
              <div className="acoes">
                <button onClick={() => alterarQuantidade(item.id, 1)}>+</button>
                <button onClick={() => alterarQuantidade(item.id, -1)}>-</button>
                <button onClick={() => removerDoCarrinho(item.id)}>Remover</button>
              </div>
            </div>
          ))}
          <div className="total-carrinho">Total: R$ {total.toFixed(2)}</div>
          <button className="finalizar-btn" onClick={finalizarCompra}>Finalizar Compra</button>
          {mensagem && <div className="mensagem-compra">{mensagem}</div>}
        </>
      )}
    </div>
  );
}
