'use client';
import Link from "next/link"
import { ContainerMembro } from "./styled";

export default function Membro({ id }: { id: string }) {
    return (
        <ContainerMembro>
            <Link href={`/portfolio/${id}`}>
                <div className="hover">
                    <h4 >Rômulo Deyvid</h4>
                    <p>Font-end</p>
                </div>
            </Link>
        </ContainerMembro>
    );
}