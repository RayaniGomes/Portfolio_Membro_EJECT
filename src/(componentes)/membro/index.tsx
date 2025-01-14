import Link from "next/link"
import { ContainerMembro } from "./styled";
import { MembroProp } from "@/interface";

interface PropMembro {
    membro?: MembroProp
}
export default function Membro({ membro = {} as MembroProp }: PropMembro) {
    console.log(membro);
    return (
        <ContainerMembro $bgMembro={membro.foto}>
            <Link href={`/portfolio/${membro._id}`}>
                <div className="hover">
                    <h4>{membro.nome}</h4>
                    <p>{membro.cargo}</p>
                </div>
            </Link>
        </ContainerMembro>
    );
}