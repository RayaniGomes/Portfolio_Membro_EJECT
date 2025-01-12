import styled from "styled-components";

export const ContainerIndice = styled.div`
    width: 150px;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 10px;
    background: var(--gradiente-radial-laranja);
    color: var(--branco);
    box-shadow: var(--drop-shadow);

    @media (max-width: 1024px) {
        width: 130px;
        height: 130px;
    }

    @media (max-width: 768px) {
        width: 110px;
        height: 110px;

        h4 {
            font-size: 16px;
        }

        h2 {
            font-size: 30px;
        }
    }

    @media (max-width: 450px) {
        width: 90px;
        height: 90px;
        padding: .5rem;

        h4 {
            font-size: 14px;
        }

        h2 {
            font-size: 24px;
        }
    }
`;