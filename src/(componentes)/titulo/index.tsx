'use client';
import { ContainerTitulo } from "./styled";

interface PropsTitulo {
    color1: string;
    color2: string;
    children: React.ReactNode
}

export default function Titulo({ color1, color2, children }: PropsTitulo) {
    return (
        <ContainerTitulo $color1={color1} $color2={color2}>
            <div className="linha"></div>
            <h2>{children}</h2>
        </ContainerTitulo>
    )
}