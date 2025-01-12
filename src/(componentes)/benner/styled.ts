import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
    background: url('/bg_home.svg') no-repeat center center / cover, var(--gradiente-radial-azul);
    text-align: center;
    line-height: 35px;

    span {
        font-family: "Gwendolyn", serif;
        color: var(--laranja);
    }
    
    @media (max-width: 1024px) {
        height: 400px;
        line-height: 30px;

        h1,span {
            font-size: 100px;
        }
    }

    @media (max-width: 768px) {
        height: 300px;
        line-height: 20px;

        h1, span {
            font-size: 68px;
        }
    }

    @media (max-width: 480px) {
        height: 250px;
        line-height: 15px;

        h1, span {
            font-size: 48px;
        }
    }
`;
