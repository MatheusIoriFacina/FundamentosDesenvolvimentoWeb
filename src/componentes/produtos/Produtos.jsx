import React from "react";
import { produtos } from "../data/produtos";
import "./Produtos.css";

export default function Produtos() {
  return (
    <div className="produtos-container">
      {produtos.map((produto, index) => (
        <div key={index} className="produto-card">
          <img src={produto.imagem} alt={produto.nome} />
          <h3>{produto.nome}</h3>
          <p className="preco">R$ {produto.valor.toFixed(2)}</p>
          <button>Comprar</button>
        </div>
      ))}
    </div>
  );
}
