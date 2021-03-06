import {Container} from './cabecalho.styled';

export default function Cabecalho(){
    return (
        <Container>
            
            <div className="cabecalho-esquerda">

                <div className="imagem-cabecalho">
                    <div> <img src="/assets/images/foto.svg" alt=""/> </div>
                    <div className="absoluto"> 3 </div>
                </div>

                <div className="texto"> Olá, <b>Bruno de Oliveira</b> </div>

            </div>

            <div className="images-cabecalho"> 

                <div className="img1"> 
                    <img src="/assets/images/recarregar.svg" alt="" />
                </div> 
                <div className="img2"> 
                    <img src="/assets/images/log-out.svg" alt="" /> 
                </div>    

            </div>

        </Container>        
    )
}