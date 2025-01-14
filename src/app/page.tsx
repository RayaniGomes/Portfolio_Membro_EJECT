'use client';
import Benner from "@/(componentes)/benner";
import Membro from "@/(componentes)/membro";
import Navbar from "@/(componentes)/navbar";
import Titulo from "@/(componentes)/titulo";
import { Section } from "./styled";
import Footer from "@/(componentes)/footer";
import { useMembro } from "@/stores/membrosStore";
import { useEffect } from "react";

export default function Home() {
  const { membros, getMembros } = useMembro();

  useEffect(() => {
    getMembros();
    // eslint-disable-next-line
  }, []);

  const membrosAtivos = membros.filter((membro) => membro.junior);
  const posJunior = membros.filter((membro) => !membro.junior);

  return (
    <main>
      <Navbar />
      <Benner />
      <Section>
        <Titulo color1="var(--laranja)" color2="var(--amarelo)">membros ativos</Titulo>
        <div className="membros">
          {membrosAtivos.map((membro) => (
            <Membro
              key={membro._id}
              membro={membro}
            />
          ))}
        </div>
      </Section>
      <Section>
        <Titulo color1="var(--laranja)" color2="var(--amarelo)">pós-junior</Titulo>
        <div className="membros">
          {posJunior.map((membro) => (
            <Membro
              key={membro._id}
              membro={membro}
            />
          ))}
        </div>
      </Section>
      <Footer />
    </main>
  );
}
