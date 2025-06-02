import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { CarrinhoProvider } from "./context/CarrinhoContext";
import Routers from "./routes/Routers";


export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CarrinhoProvider>
          <Routers />
        </CarrinhoProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
