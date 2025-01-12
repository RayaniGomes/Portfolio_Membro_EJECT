'use client';
import Image from "next/image";
import { Nav } from "./styled";

export default function Navbar() {
    return (
        <Nav>
            <Image
                src="/logo.png"
                alt="logo"
                width={158}
                height={66}
            />

            <button>ENTRE EM CONTATO</button>
        </Nav>
    );
}