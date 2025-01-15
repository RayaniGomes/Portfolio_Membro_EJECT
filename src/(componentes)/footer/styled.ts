import styled from "styled-components";

export const ContainerFooter = styled.footer`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    background-color: var(--azul-escuro);
    color: var(--branco);
    padding: 1rem 5rem;
    gap: 2rem;

    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        gap: 2rem;
    }

    .fluxo {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: flex-start;

        h6 {
            color: #9C9C9C;
            font-weight: 400;
        }
    }

    @media (max-width: 1024px) {
        padding: 1rem 2rem;

        .fluxo {
            flex-wrap: wrap;
            gap: 1rem;
        }
    }

    @media (max-width: 768px) {
        padding: 1rem;
        gap: 0.5rem;
        
        img {
            width: 90px;
            height: 40px;
        }

        .container {
            gap: 1rem;
        }
        
        .fluxo {
            flex-wrap: wrap;

            

        }
        h6 {
            font-size: x-small;
        }
    }

    @media (max-width: 450px) {
        .container {
            flex-direction: column;
            gap: 0.5rem;
        }

        .fluxo {
            gap: 0.5rem;
        }

        .sobre, .servicos {
            display: none;
        }
    }
`;