'use client';
import Benner from "@/(componentes)/benner";
import Membro from "@/(componentes)/membro";
import Navbar from "@/(componentes)/navbar";
import Titulo from "@/(componentes)/titulo";
import { Section } from "./styled";
import Footer from "@/(componentes)/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Benner />
      <Section >
        <Titulo color1="var(--laranja)" color2="var(--amarelo)">membros ativos</Titulo>
        <div className="membros">
          <Membro />
        </div>
      </Section>
      <Section>
        <Titulo color1="var(--laranja)" color2="var(--amarelo)">pós-junior</Titulo>
        <div className="membros">
          <Membro />
        </div>
      </Section>
      <Footer />
    </main>
  );
}
