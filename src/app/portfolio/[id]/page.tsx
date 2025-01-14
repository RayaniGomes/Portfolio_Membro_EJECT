'use client';
import CardProjeto from "@/(componentes)/cardProjeto";
import Dashboard from "@/(componentes)/dashboard";
import Footer from "@/(componentes)/footer";
import Navbar from "@/(componentes)/navbar";
import Timeline from "@/(componentes)/timeline";
import Titulo from "@/(componentes)/titulo";
import { Section, SectionAmarela } from "@/app/styled";
import { MembroProp } from "@/interface";
import { use, useEffect, useState } from "react";
import api from "@/service/api";

type Params = Promise<{ id: string }>;

export default function Portifolio(props: { params: Params }) {
    const urlParams = use(props.params);
    const [membro, setMembro] = useState({} as MembroProp);
    console.log(membro);

    const getIDMembro = () => {
        api.get(`/employees/${urlParams.id}`)
            .then((response) => {
                console.log(response.data);
                setMembro(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => {
        getIDMembro();
        // eslint-disable-next-line
    }, [urlParams.id]);

    return (
        <main>
            <Navbar />
            <Dashboard membro={membro} />
            <Section>
                <Titulo color1="var(--laranja)" color2="var(--amarelo)">timiline</Titulo>
                <div className="timeline">
                    {Array.isArray(membro.timeline) && membro.timeline.map((info, index) => (
                        <Timeline
                            key={info._id}
                            timeline={info}
                            side={index % 2 === 0 ? 'left' : 'right'}
                        />
                    ))}
                </div>

            </Section>
            <SectionAmarela>
                <Titulo color1="var(--azul-escuro)" color2="var(--azul-medio)">
                    projetos que fez parte
                </Titulo>
                <div className="projetos">
                    {Array.isArray(membro.projetos) && membro.projetos.map((projeto, index) => (
                        <CardProjeto key={index} projeto={projeto} />
                    ))}
                </div>
            </SectionAmarela>


            <Footer />
        </main>
    );
}
