import Dashboard from "@/(componentes)/dashboard";
import Navbar from "@/(componentes)/navbar";
import { use } from "react";

type Params = Promise<{ id: string }>;

export default function Portifolio(props: { params: Params }) {
    const urlParams = use(props.params);

    return (
        <main>
            <Navbar />
            <Dashboard />
        </main>
    )
}