import { useEffect } from "react";
import "./Toast.css";

export default function Toast({ mensagem, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // fecha após 3 segundos

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="toast">
      {mensagem}
    </div>
  );
}
