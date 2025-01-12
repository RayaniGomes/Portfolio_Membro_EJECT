'use client';
import Link from "next/link"
import { ContainerMembro } from "./styled";

export default function Membro() {
    return (
        <ContainerMembro>
            <Link href="/">
                <div className="hover">
                    <h4 >Rômulo Deyvid</h4>
                    <p>Font-end</p>
                </div>
            </Link>
        </ContainerMembro>
    );
}