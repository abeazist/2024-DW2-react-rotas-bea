import { useState } from "react";
import { Pagina } from "../components/Pagina";

export function Tradutor() {
  const [texto, setTexto] = useState("");
  const [traduzido, setTraduzido] = useState("");

  const traduzir = () => {
    fetch(
      `https://api.mymemory.translated.net/get?q=${texto}&langpair=pt-br|it`
    )
      .then((resposta) => resposta.json())
      .then((dados) => setTraduzido(dados.responseData.translatedText)) // Converte a resposta para um objeto JSON
      .catch((error) => {
        alert("Erro ao traduzir dados:", error);
      });
    console.log(traduzido);
  };

  return (
    <Pagina titulo="Tradutor" subtitulo="página de Tradução">
      <div className="flex col ">
        <p>Português</p>
        <div className="flex-row w-60 h-48 bg-white">
          <input
            value={texto}
            onChange={(evento) => setTexto(evento.target.value)}
            type="text"
            className=" flex-row outline-none text-black w-60 h-7"
          />
          <button
            onClick={traduzir}
            className="bg-orange-400 w-20 text-black rounded-md"
          >
            Traduzir
          </button>
        </div>
        <br />
        <p>Italiano</p>
        <div className="flex-row w-60 h-48 bg-white">
          <input
            value={traduzido}
            type="text"
            className=" flex-row outline-none text-black w-60 h-7"
            // onChange={""}
          />
        </div>
      </div>
    </Pagina>
  );
}
