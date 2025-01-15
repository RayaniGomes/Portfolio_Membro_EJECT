import Image from "next/image";
import { ContainerFooter } from "./styled";

export default function Footer() {
    return (
        <ContainerFooter>
            <div className="container">
                <Image
                    src="/logoBranca.png"
                    alt="logo"
                    width={150}
                    height={60}
                />
                <div className="fluxo">
                    <div className="sobre">
                        <h5>Sobre</h5>
                        <h6>Home</h6>
                        <h6>Quem somos</h6>
                        <h6>Solução</h6>
                        <h6>Contato</h6>
                    </div>
                    <div className="servicos">
                        <h5>Serviços</h5>
                        <h6>Site e sistemas</h6>
                        <h6>E-commerce</h6>
                        <h6>Concepção</h6>
                    </div>
                    <div>
                        <h5>Endereço</h5>
                        <h6>inPACTA -R. Monte Sinai, 1828,<br />Capim Macio, 59078-360,<br />Natal- RN, </h6>
                    </div>
                    <div>
                        <h5>Fale conosco</h5>
                        <h6>+55 (84) 99226-4221</h6>
                        <h6>contato@eject.com.br</h6>
                    </div>
                </div>
            </div>
            <h6>Feito com foco e compromisso pela EJECT © Rayani Gomes</h6>
        </ContainerFooter>
    );
}