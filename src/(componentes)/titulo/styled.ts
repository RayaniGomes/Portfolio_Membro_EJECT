import styled from "styled-components";

export const ContainerTitulo = styled.div<{color1: string, color2: string}>`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    text-transform: uppercase;

    .linha {
        width: 7px;
        height: 35px;
        background: linear-gradient(180deg, ${props => props.color1} 0%, ${props => props.color2} 71%);
        border-radius: 100px
    }
`