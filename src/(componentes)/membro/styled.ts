import styled from "styled-components";

export const ContainerMembro = styled.div`
        width: 170px;
        height: 170px;
        background: url('/membro1.jpg') no-repeat center center;
        background-size: cover;
        border-radius: 50%;
        box-shadow: var(--drop-shadow);
    a {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-decoration: none;
    }

    .hover {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        color: var(--branco);
        background-color: #189BE180;
        border-radius: 50%;
        opacity: 0;
        scale: 0 1;
        transform-origin: center;
        transition: scale 0.5s;
    }

    &:hover {
        .hover {
            opacity: 1;
            scale: 1;
        }
    }
`;