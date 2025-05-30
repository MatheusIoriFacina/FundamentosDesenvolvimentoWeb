import { useNavigate } from "react-router-dom";
import { useProduto } from "../../context/ProdutoContext";

export default function Produtos() {
  const navigate = useNavigate();
  const { produtos, removerProduto } = useProduto();

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Produtos</h2>
      <button onClick={() => navigate("/produtos/novo")}>+ Criar Produto</button>

      <ul>
        {produtos.map((p) => (
          <li key={p.id}>
            <strong>{p.nome}</strong> – R$ {p.valor.toFixed(2)}{" "}
            <button onClick={() => navigate(`/produtos/editar/${p.id}`)}>Editar</button>
            <button onClick={() => removerProduto(p.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
