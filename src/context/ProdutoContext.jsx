import { createContext, useContext, useState } from "react";

const ProdutoContext = createContext();

export function ProdutoProvider({ children }) {
  const [produtos, setProdutos] = useState([]);

  const criarProduto = (produto) => {
    const novo = { ...produto, id: Date.now() };
    setProdutos((prev) => [...prev, novo]);
  };

  const atualizarProduto = (id, dadosAtualizados) => {
    setProdutos((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...dadosAtualizados } : p))
    );
  };

  const removerProduto = (id) => {
    setProdutos((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <ProdutoContext.Provider
      value={{ produtos, criarProduto, atualizarProduto, removerProduto }}
    >
      {children}
    </ProdutoContext.Provider>
  );
}

export function useProduto() {
  return useContext(ProdutoContext);
}
