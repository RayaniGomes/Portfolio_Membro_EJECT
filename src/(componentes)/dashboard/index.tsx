'use client';
import Image from "next/image";
import { ContainerDashboard } from "./styled";
import Indice from "../indice";
import { useState } from "react";

export default function Dashboard() {
    const [isAtivar, setIsAtivar] = useState(false);

    const handleAtivar = () => {
        setIsAtivar(!isAtivar);
    }

    return (
        <ContainerDashboard>
            <div className="container">
                <div className="container-foto">
                    <Image
                        src="/membro1.jpg"
                        alt="logo"
                        width={450}
                        height={450}
                    />
                </div>
                <div className="container-info">
                    <div className="info">
                        <div>
                            <h2>Rômulo Deyvid</h2>
                            <h4><strong>Cargo:</strong> Font-end</h4>
                            <h4><strong>Tempo de empresa:</strong> 24 meses</h4>
                        </div>

                        <div className="container-reconhecimento">
                            <button onClick={handleAtivar}>
                                <Image 
                                    src="/icon_trofel.svg" 
                                    alt="trofel" 
                                    width={40} 
                                    height={40} 
                                />
                            </button>
                            <div className={isAtivar ? 'reconhecimento' : 'close'}>
                                <p>Astronauta do mês</p>
                                <ul>
                                    <li>Nov/2024</li>
                                    <li>Nov/2024</li>
                                    <li>Nov/2024</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="indices">
                        <Indice titulo='Projetos' indice={10} />
                        <Indice titulo='issues' indice={10} />
                        <Indice titulo='#pracima' indice={10} />
                    </div>
                </div>
            </div>
        </ContainerDashboard>
    );
}