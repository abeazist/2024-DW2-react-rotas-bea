import { Pagina } from "../components/Pagina";

export function Tradutor() {
    return (
    <Pagina titulo="Tradutor" subtitulo="página de Tradução">
       <div className="flex col " >
            <p>Português</p>
            <div className="flex-row w-60 h-48 bg-white">
                <input type="text" className=" flex-row outline-none text-black w-60 h-7"/>
                <button className="bg-orange-400 w-20 text-black rounded-md">Traduzir</button>
            </div>
            <br/>
            <p>Italiano</p>
            <div className="flex-row w-60 h-48 bg-white">
                <input type="text" className=" flex-row outline-none text-black w-60 h-7"/>
                <button className="bg-orange-400 text-black w-20 rounded-md">Traduzir</button>
            </div>
            
       </div>
      </Pagina>

    )
    
}