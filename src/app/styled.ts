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

    @media (max-width: 1024px) {
        padding: 3rem 2rem;
    }

    @media (max-width: 768px) {
        padding: 3rem 1rem;
    }
`;