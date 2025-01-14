import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 3rem 5rem;

    .membros {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
        padding-top: 2rem;
        gap: 2rem;    
    }

    .timeline {
        position: relative;
        margin: 2rem auto;
        width: 50%;
    }

    .timeline::after {
        content: '';
        position: absolute;
        width: 5px;
        background-color: var(--amarelo);
        top: 0;
        bottom: 0;
        left: 50%;
    }

    .container-amarelo {
        background-color: var(--amarelo);
    }

    @media (max-width: 1024px) {
        padding: 3rem 2rem;
    }

    @media (max-width: 768px) {
        padding: 3rem 1rem;

        .timeline {
            width: 80%;
        }
    }
`;

export const SectionAmarela = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 3rem 5rem;
    background-color: var(--amarelo);

    .projetos {
        width: 100%;
        display: grid;
        justify-content: center;
        flex-wrap: wrap;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        margin: 2rem auto;
        gap: 2em;
    }

    @media (max-width: 1024px) {
        padding: 3rem 2rem;
    }

    @media (max-width: 768px) {
        padding: 3rem 1rem;
        .projetos {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        }
    }
`