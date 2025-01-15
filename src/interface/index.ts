export interface MembroProp {
    _id: string;
    foto: string;
    cargo: string;
    data_ingresso: number;
    issues: number;
    nome: string;
    pra_cima: number;
    projetos: ProjetoProp[];
    tempo_de_empresa_em_meses: number;
    timeline: TimelineItem[];
    junior: boolean;
}

export interface ProjetoProp {
    id: string;
    nome: string;
    logo: string;
}

export interface TimelineItem {
    date: string;
    titulo: string;
    descricao: string;
    _id: string;
    side?: 'left' | 'right';
}

export interface MembrosStore {
    membros: MembroProp[];
    getMembros: () => void;
}