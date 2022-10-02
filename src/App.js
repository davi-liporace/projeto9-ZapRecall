import styled from "styled-components"
import Titulo from "./Titulo"
import ListaPerguntas from "./ListaPerguntas"
import Respostas from "./Respostas"
import arrayperguntas from "./mock";
import ViraPerguntaAberta from "./PerguntaAberta";
import react, { useState } from "react";
export default function App(){
    const [contadorFinal, setContadorFinal] = useState(0)

    return( 
        <Screencontainer>
    
     <Titulo />
    <>
    {arrayperguntas.map((p) =><ViraPerguntaAberta contadorFinal={contadorFinal} setContadorFinal={setContadorFinal} id={p.id} pergunta ={p.pergunta} resposta = {p.resposta}/>)}
    </>
    <Respostas contadorFinal={contadorFinal}/> 

</Screencontainer>)
}



const Screencontainer = styled.div`
  background-color: #FB6B6B;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`