import Image from "next/image";
import { Card } from "./styled";

type CardProjetoProps = {
    projeto: string;
};

export default function CardProjeto({ projeto }: CardProjetoProps) {
    return (
        <Card>
            <div className="container-logo">
                <Image
                    src="/logo-projeto.svg"
                    alt="Logo do Projeto"
                    width={100}
                    height={100}
                />
            </div>
            <div className="container-nome">
                <p>{projeto}</p>
            </div>
        </Card>
    );
}
