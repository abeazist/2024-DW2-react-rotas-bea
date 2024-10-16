import { useState } from "react";
import { Pagina } from "../components/Pagina";

export function Tradutor() {
  const [texto, setTexto] = useState("");
  const [traduzido, setTraduzido] = useState("");
  const maxCaracteres = 250;  // Limite de caracteres

  const traduzir = () => {
    fetch(
      `https://api.mymemory.translated.net/get?q=${texto}&langpair=pt-br|it`
    )
    .then((resposta) => resposta.json())
    .then((dados) => setTraduzido(dados.responseData.translatedText))
    .catch((error) => {
      alert("Erro ao traduzir dados:", error);
    });
  };

  const contador = (evento) => {
    const novoTexto = evento.target.value;
    if (novoTexto.length <= maxCaracteres) {
      setTexto(novoTexto);  // Atualiza o texto conforme o usuário digita
    }
  };

  return (
    <Pagina titulo="Tradutor" subtitulo="página de Tradução">
      <div className="flex flex-col items-center space-y-4 mt-8">
        <p className="text-lg font-bold">Português</p>
        <div className="flex flex-col w-80 p-4 bg-gray-100 border rounded-md">
          <textarea
            value={texto}
            onChange={contador}  // função para atualizar o texto
            className="p-2 outline-none border border-gray-300 rounded-md h-36 text-black"
            maxLength={maxCaracteres}
          
          />
          <div className="flex justify-between mt-2">
            <span className="text-gray-500 px-4 py-2 text-md">
              {texto.length}/{maxCaracteres} {/* Contador de caracteres */}
            </span>
            <button
              onClick={traduzir}
              className="bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-500"
            >
              Traduzir
            </button>
          </div>
        </div>

        <p className="text-lg font-bold">Italiano</p>
        <div className="flex flex-col w-80 p-4 bg-gray-100 border rounded-md">
          <textarea
            value={traduzido}
            readOnly
            className="p-2 outline-none border border-gray-300 rounded-md h-36 text-black"
            
          />
        </div>
      </div>
    </Pagina>
  );
}
