import styled from "styled-components";

export const Nav = styled.nav`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0rem 5rem;
    background-color: var(--branco);
    box-shadow: 0px 4px 10px 0px #cecece;
    position: fixed;
    top: 0;
    z-index: 999;

    .contato {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 200px;
        height: 40px;
        color: var(--branco);
        border-radius: 10px;
        background: linear-gradient(92.07deg, rgb(9, 149, 219) 1.84%, rgb(17, 167, 241) 100%);
        filter: drop-shadow(rgba(9, 149, 219, 0.35) 0px 4px 4px);

        &:hover {
        transform: scale(1.02);
        filter: drop-shadow(rgba(9, 149, 219, 0.9) 0px 4px 4px);
        opacity: 0.9;
        }
    }

    @media (max-width: 1024px) {
        padding: 0rem 2rem;
    }

    @media (max-width: 768px) {
        padding: 0rem 1rem;

        img {
            width: 100px;
            height: 50px;
        }

        .contato {
            width: 140px;
            height: 35px;
            font-size: 12px;
        }
    }
`;
