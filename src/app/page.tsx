import Benner from "@/(componentes)/benner";
import Navbar from "@/(componentes)/navbar";
import Titulo from "@/(componentes)/titulo";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Benner />
      <section >
        <Titulo>Membros ativos</Titulo>
      </section>
    </main>
  );
}
