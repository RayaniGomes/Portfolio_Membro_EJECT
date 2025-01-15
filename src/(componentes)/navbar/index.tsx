import Image from "next/image";
import { Nav } from "./styled";
import Link from "next/link";

export default function Navbar() {
    return (
        <Nav>
            <Link href="https://www.ejectufrn.com.br/">
                <Image
                    src="/logo.png"
                    alt="logo"
                    width={158}
                    height={66}
                    priority={true}
                />
            </Link>

            <button>ENTRE EM CONTATO</button>
        </Nav>
    );
}