import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    box-shadow: var(--drop-shadow);
    border-radius: 10px;

    .container-logo {
        width: 100%;
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--branco);
        border-radius: 10px 10px 0px 0px;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            margin: 0 auto;
        }
    }

    .container-nome {
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--azul-escuro);
        color: var(--branco);
        border-radius: 0px 0px 10px 10px;
    }
`