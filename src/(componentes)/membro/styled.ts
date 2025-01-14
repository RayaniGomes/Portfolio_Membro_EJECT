import styled from "styled-components";

interface bgMembro {
    $bgMembro: string
}

export const ContainerMembro = styled.div<bgMembro>`
        width: 170px;
        height: 170px;
        margin: 0 auto;
        background: url(${props => props.$bgMembro}) no-repeat center center;
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
        padding: .5rem;
        opacity: 0;
        scale: 0 1;
        transform-origin: center;
        transition: scale 0.5s;

        p {
            padding: 0 .5rem;
            margin: 0;
        }
    }

    &:hover {
        .hover {
            opacity: 1;
            scale: 1;
        }
    }
`;