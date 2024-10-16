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
      <div className="flex flex-col items-center space-y-4 mt-8">
        <p className="text-lg font-bold">Português</p>
        <div className="flex flex-col w-80 p-4 bg-gray-100 border rounded-md">
          <textarea
            value={texto}
            onChange={(evento) => setTexto(evento.target.value)}
            className="p-2 outline-none border border-gray-300 rounded-md h-36 text-black"
            placeholder=""
            maxLength="250"
          />
          <div className="flex justify-end mt-2">

            <button
              onClick={traduzir}
              className="bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-orange-500"
            >
              Traduzir
            </button>
          </div>
        </div>

        <p className="text-lg font-bold">Italiano</p>
        <div className="flex flex-col w-80 p-4 bg-gray-100 border rounded-md">
          <textarea
            value={traduzido}
           
            className="p-2 outline-none border border-gray-300 rounded-md h-36  text-black"
            placeholder=""
          />
        </div>
      </div>
    </Pagina>
  );
}
