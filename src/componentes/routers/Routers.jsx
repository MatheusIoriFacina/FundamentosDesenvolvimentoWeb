import { Routes, Route } from "react-router-dom";

import Login from "../../pages/Login";
import CriarConta from "../../pages/CriarConta";

import Produtos from "../../pages/produtos/Produtos";
import CriarProduto from "../../pages/produtos/CriarProduto";
import AtualizarProduto from "../../pages/produtos/AtualizarProduto";
import Carrinho from "../../pages/carrinho/Carrinho";

import PrivateRoute from "./PrivateRouters";

export default function Routers() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/criar-conta" element={<CriarConta />} />

      <Route
        path="/produtos"
        element={
          <PrivateRoute>
            <Produtos />
          </PrivateRoute>
        }
      />
      <Route
        path="/produtos/novo"
        element={
          <PrivateRoute>
            <CriarProduto />
          </PrivateRoute>
        }
      />
      <Route
        path="/produtos/editar/:id"
        element={
          <PrivateRoute>
            <AtualizarProduto />
          </PrivateRoute>
        }
      />
      <Route
        path="/carrinho"
        element={
          <PrivateRoute>
            <Carrinho />
          </PrivateRoute>
        }
      />

      <Route path="*" element={<Login />} />
    </Routes>
  );
}
