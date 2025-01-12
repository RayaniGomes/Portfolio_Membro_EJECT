import { ContainerIndice } from "./styled";

export interface PropsIndice {
    titulo: string;
    indice: number;
}

export default function Indice({titulo, indice}: PropsIndice) {
    return (
        <ContainerIndice>
            <h4>{titulo}</h4>
            <h2>{indice}</h2>
        </ContainerIndice>
    )
}