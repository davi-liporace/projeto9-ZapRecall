import setavirar from "./assets/img/seta_virar.png"
import styled from "styled-components";
import setaplay from "./assets/img/seta_play.png"
import React, { useState } from "react";
import errado from "./assets/img/icone_erro.png"
import certo from "./assets/img/icone_certo.png"
import quase from "./assets/img/icone_quase.png"


export default function ViraPerguntaAberta(props) {
  const {contadorFinal, setContadorFinal} = props
  const [contador, setContador] = useState(0)
  const [imagem, setImagem] = useState(setaplay)
  const [corPergunta, setCorPergunta] = useState("#000000")
  const [respondido, setRespondido] = useState("")
  function botaoPergunta() {
    return (
      setContador(contador + 1)
    )
  }
    function rodaBotaoVermelho(){
      setContadorFinal(contadorFinal+1)
      setContador(0)
      setImagem(errado)
      setRespondido("line-through")
      setCorPergunta("#FF3030")
    }
    function rodaBotaoAmarelo(){
      setContadorFinal(contadorFinal+1)
      setContador(0)
      setImagem(quase)
      setRespondido("line-through")
      setCorPergunta("#FF922E")
    }
    function rodaBotaoVerde(){
      setContadorFinal(contadorFinal+1)
      setContador(0)
      setImagem(certo)
      setRespondido("line-through")
      setCorPergunta("#2FBE34")
    }
  

  if (contador === 0) {
    return (
      <PerguntaFechada data-identifier="flashcard-index-item" corPergunta = {corPergunta} respondido = {respondido}>
        <p>Pergunta {props.id}</p>
        <img src={imagem} alt={imagem} onClick={botaoPergunta} data-identifier="flashcard-show-btn" />
      </PerguntaFechada>)
  } else if (contador === 1) {
    return (
      <PerguntaAberta data-identifier="flashcard-question">
        <p>{props.pergunta}</p>
        <img src={setavirar} alt={setavirar} onClick={botaoPergunta} data-identifier="flashcard-turn-btn"/>
      </PerguntaAberta>)
  }
  else {
    return (<PerguntaAberta data-identifier="flashcard-answer">
      <p>{props.resposta}</p>
      <ContainerBotoes>
            <BotaoVermelho onClick={rodaBotaoVermelho}>Não lembrei</BotaoVermelho>
            <BotaoAmarelo onClick={rodaBotaoAmarelo}>Quase não lembrei</BotaoAmarelo>
            <BotaoVerde onClick={rodaBotaoVerde}>Zap!</BotaoVerde>
        </ContainerBotoes>
    </PerguntaAberta>)

  }

}

const ContainerBotoes = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin: 20px;
`
const BotaoVermelho = styled.button`
width: 70px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #FFFFFF;
  background: #FF3030;
  border-radius: 5px;
  border: 1px solid blue;
  padding:5px;`


const BotaoVerde = styled.button`
width: 70px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #FFFFFF;
  background: #2FBE34;
  border-radius: 5px;
  border: 1px solid blue;
  padding:5px;`

const BotaoAmarelo = styled.button`
width: 70px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #FFFFFF;
  background:#FF922E;
  border-radius: 5px;
  border: 1px solid blue;
  padding:5px;`


const PerguntaFechada = styled.div`
width: 300px;
  height: 35px;
  background-color: #FFFFFF;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p{font-family: 'Recursive';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-decoration: ${props => props.respondido} ;
  color:${props => props.corPergunta} }
`


const PerguntaAberta = styled.div`
width: 300px;
  margin: 12px;
  height: 131px;
  padding: 15px;
  min-height: 100px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img{
    position: absolute;
  bottom: 10px;
  right: 10px;
  }
`