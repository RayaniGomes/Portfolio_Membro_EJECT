import Image from "next/image";
import { Card } from "./styled";

export default function CardProjeto() {
    return (
        <Card>
            <div className="container-logo">
                <Image
                    src="/logo-projeto.svg"
                    alt="projeto1"
                    width={100}
                    height={100}
                />
            </div>
            <div className="container-nome">
                <p>Nome do projeto</p>
            </div>
        </Card>
    )
}