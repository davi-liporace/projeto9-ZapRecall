
import arrayperguntas from "./mock";
import ViraPerguntaAberta from "./PerguntaAberta";


export default function ListaPerguntas(){
return(
    arrayperguntas.map((p) =><ViraPerguntaAberta id={p.id} pergunta ={p.pergunta} resposta = {p.resposta}/>)
)
}