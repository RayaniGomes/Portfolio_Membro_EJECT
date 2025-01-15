import Image from "next/image";
import { Card } from "./styled";
import { ProjetoProp } from "@/interface";

type CardProjetoProps = {
    projeto: ProjetoProp;
};

export default function CardProjeto({ projeto }: CardProjetoProps) {
    return (
        <Card>
            <div className="container-logo">
                <Image
                    src={projeto.logo || "/favicon.png"}
                    alt={projeto.nome || "Logo do projeto"}
                    width={100}
                    height={100}
                />

            </div>
            <div className="container-nome">
                <p>{projeto.nome}</p>
            </div>
        </Card>
    );
}
