import { createContext, useContext, useState } from "react";

const CarrinhoContext = createContext();

export function CarrinhoProvider({ children }) {
  const [itens, setItens] = useState([]);

  // Adiciona item novo ou incrementa quantidade se já existir
  const adicionarAoCarrinho = (produto) => {
    setItens((prev) => {
      const existe = prev.find((item) => item.id === produto.id);
      if (existe) {
        return prev.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      }
      return [...prev, { ...produto, quantidade: 1 }];
    });
  };

  // Altera a quantidade (+1 ou -1)
  const alterarQuantidade = (id, delta) => {
    setItens((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantidade: item.quantidade + delta }
            : item
        )
        .filter((item) => item.quantidade > 0)
    );
  };

  // Remove completamente um item do carrinho
  const removerDoCarrinho = (id) => {
    setItens((prev) => prev.filter((item) => item.id !== id));
  };

  // Soma total geral
  const total = itens.reduce(
    (soma, item) => soma + item.valor * item.quantidade,
    0
  );

  return (
    <CarrinhoContext.Provider
      value={{
        itens,
        adicionarAoCarrinho,
        alterarQuantidade,
        removerDoCarrinho,
        total,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}

export function useCarrinho() {
  return useContext(CarrinhoContext);
}
