import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    height: 550px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
    background: url('/bg_home.svg') no-repeat center center, var(--gradiente-radial-azul);
    text-align: center;
    line-height: 35px;

    span {
        font-family: "Gwendolyn", serif;
        color: var(--laranja);
    }
`