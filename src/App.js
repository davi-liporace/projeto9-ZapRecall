import styled from "styled-components"
import Titulo from "./Titulo"
import ListaPerguntas from "./ListaPerguntas"
import Respostas from "./Respostas"
export default function App(){
    return( 
        <Screencontainer>
    
     <Titulo />
    <ListaPerguntas />
    <Respostas /> 

</Screencontainer>
    )
    
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