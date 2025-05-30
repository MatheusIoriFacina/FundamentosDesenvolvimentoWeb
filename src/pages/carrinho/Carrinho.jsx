import React from "react";
import { useCarrinho } from "../../context/CarrinhoContext";
import "./index.css";

export default function Carrinho() {
  const { itens, alterarQuantidade, total } = useCarrinho();

  return (
    <div className="container">
      <div className="carrinho">
        <div className="carrinho-header">
          <p>Seu carrinho tem <strong>{itens.length} itens</strong></p>
        </div>

        <div className="carrinho-center">
          {itens.length === 0 ? (
            <p style={{ color: "#fff", padding: "2rem" }}>Seu carrinho está vazio.</p>
          ) : (
            itens.map((item) => (
              <div className="carrinho-items" key={item.id}>
                <div className="carrinho-items-img">
                  <img src={item.imagem} alt={item.nome} />
                </div>
                <div className="carrinho-items-info">
                  <p className="nome-produto">{item.nome}</p>
                  <div className="carrinho-items-info-valor">
                    <p><b>R$ {item.valor.toFixed(2)}</b></p>
                    <div className="carrinho-items-info-quantidade">
                      <button
                        className="carrinho-items-info-quantidade-1"
                        onClick={() => alterarQuantidade(item.id, -1)}
                      >
                        -
                      </button>
                      <p><b>{item.quantidade}</b></p>
                      <button
                        className="carrinho-items-info-quantidade-2"
                        onClick={() => alterarQuantidade(item.id, 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="carrinho-footer">
          <div className="carrinho-footer-total">
            <p>Total:</p>
            <p className="valor-total"><b>R$ {total.toFixed(2)}</b></p>
          </div>
          <button className="carrinho-footer-finalizar">Finalizar Compra</button>
        </div>
      </div>
    </div>
  );
}
