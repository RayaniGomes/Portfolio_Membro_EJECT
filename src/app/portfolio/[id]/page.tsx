'use client';
import Dashboard from "@/(componentes)/dashboard";
import Navbar from "@/(componentes)/navbar";
import Timeline from "@/(componentes)/timeline";
import Titulo from "@/(componentes)/titulo";
import { Section } from "@/app/styled";
import { use } from "react";

type Params = Promise<{ id: string }>;


const lista = [
    {
        ano: 2021,
        eventos: [
            "Foi efetivado na empresa",
            "Iniciou o curso de Desenvolvimento Web",
            "Terminou o curso de Desenvolvimento Web",
        ]
    },
    {
        ano: 2022,
        eventos: [
            "Foi efetivado na empresa",
            "Iniciou o curso de Desenvolvimento Web",
            "Terminou o curso de Desenvolvimento Web",
        ]
    },
    {
        ano: 2023,
        eventos: [
            "Foi efetivado na empresa",
            "Iniciou o curso de Desenvolvimento Web",
            "Terminou o curso de Desenvolvimento Web",
        ]
    },
    {
        ano: 2023,
        eventos: [
            "Foi efetivado na empresa",
            "Iniciou o curso de Desenvolvimento Web",
            "Terminou o curso de Desenvolvimento Web",
        ]
    },
    {
        ano: 2023,
        eventos: [
            "Foi efetivado na empresa",
            "Iniciou o curso de Desenvolvimento Web",
            "Terminou o curso de Desenvolvimento Web",
        ]
    },
];

export default function Portifolio(props: { params: Params }) {
    const urlParams = use(props.params);

    return (
        <main>
            <Navbar />
            <Dashboard />
            <Section>
                <Titulo color1="var(--laranja)" color2="var(--amarelo)">timiline</Titulo>
                <div className="timeline">
                    {lista.map((item, index) => (
                        <Timeline 
                            key={index}
                            ano={item.ano}
                            eventos={item.eventos}
                            side={index % 2 === 0 ? "left" : "right"} 
                        />
                    ))}
                </div>
            </Section>
        </main>
    )
}