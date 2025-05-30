import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function CriarConta() {
  const [email, setEmail] = useState("");
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email);
  };

  return (
    <div>
      <h2>Criar Conta</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Criar e Entrar</button>
      </form>
    </div>
  );
}
