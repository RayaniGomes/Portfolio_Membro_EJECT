import Image from "next/image";
import { Nav } from "./styled";
import Link from "next/link";

export default function Navbar() {
    return (
        <Nav>
            <Link href="/">
                <Image
                    src="/logo.png"
                    alt="logo"
                    width={158}
                    height={66}
                    priority={true}
                />
            </Link>

            <Link 
                href="https://www.ejectufrn.com.br/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contato"
            >
                ENTRE EM CONTATO
            </Link>
        </Nav>
    );
}