'user client';
import Image from "next/image";
import { ContainerDashboard } from "./styled";
import Indice from "../indice";
import { useState } from "react";
import { MembroProp } from "@/interface";

interface DashboardProps {
    membro?: MembroProp;
}

export default function Dashboard({ membro = {} as MembroProp }: DashboardProps) {
    const [isAtivar, setIsAtivar] = useState(false);

    const handleAtivar = () => {
        setIsAtivar(!isAtivar);
    }



    return (
        <ContainerDashboard>
            <div className="container">
                <div className="container-foto">
                    <Image
                        src={membro.foto || "/avatar.png"}
                        alt={membro.nome || "Foto do membro"}
                        width={450}
                        height={450}
                    />
                </div>
                <div className="container-info">
                    <div className="info">
                        <div>
                            <h2>{membro.nome}</h2>
                            <h4><strong>Cargo:</strong> {membro.cargo}</h4>
                            <h4><strong>Tempo de empresa:</strong> {membro.tempo_de_empresa_em_meses} meses</h4>
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
                        <Indice titulo='Projetos' indice={membro.projetos ? membro.projetos.length : 0} />
                        <Indice titulo='issues' indice={membro.issues || 0} />
                        <Indice titulo='#pracima' indice={membro.pra_cima || 0} />
                    </div>

                </div>
            </div>
        </ContainerDashboard>
    );
}