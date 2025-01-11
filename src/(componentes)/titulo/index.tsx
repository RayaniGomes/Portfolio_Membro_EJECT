'use client';
import { ContainerTitulo } from "./styled";

export default function Titulo({ children }: { children: string }) {
    return (
        <ContainerTitulo color1="var(--laranja)" color2="var(--amarelo)">
            <div className="linha"></div>
            <h2>{children}</h2>
        </ContainerTitulo>
    )       
}