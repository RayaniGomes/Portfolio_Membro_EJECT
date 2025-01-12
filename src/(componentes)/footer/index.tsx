'use client';
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
                    <div>
                        <h3>Sobre</h3>
                        <p>Home</p>
                        <p>Quem somos</p>
                        <p>Solução</p>
                        <p>Contato</p>
                    </div>
                    <div>
                        <h3>Serviços</h3>
                        <p>Site e sistemas</p>
                        <p>E-commerce</p>
                        <p>Concepção</p>
                    </div>
                    <div>
                        <h3>Endereço</h3>
                        <p>inPACTA -R. Monte Sinai, 1828,<br />Capim Macio, 59078-360,<br />Natal- RN, </p>
                    </div>
                    <div>
                        <h3>Fale conosco</h3>
                        <p>+55 (84) 99226-4221</p>
                        <p>contato@eject.com.br</p>
                    </div>
                </div>
            </div>
            <p>Feito com foco e compromisso pela EJECT © Rayani Gomes</p>
        </ContainerFooter>
    );
}