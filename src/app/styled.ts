import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 3rem 5rem;

    .membros {
        width: 100%;
        display: flex;
        padding-top: 2rem;    
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