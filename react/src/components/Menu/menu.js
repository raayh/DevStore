import {Container} from './menu.styled';

export default function Menu(){
    return(
        <Container>
             
             <div className="logo"> 
                <div> <img src="/assets/images/logo.svg" alt="" /> </div>
                <div className="texto-logo"> <span>Dev</span> Store </div>
            </div>

            <div className="bloco-preto"> </div>

            <div className="menu-categoria"> 
                <div className="texto-ger"> Gerenciamento </div>
                <div> <img src="" alt="" /> </div>
            </div> 
            <div className="menu-aluno"> 
                <div className="texto-aluno"> Produtos </div>
                <div className="barra"> </div>
            </div>

        </Container>
    )
}