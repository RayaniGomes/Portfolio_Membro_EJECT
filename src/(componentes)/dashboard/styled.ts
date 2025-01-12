import styled from "styled-components";

export const ContainerDashboard = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url('/bg_dashboard.svg') no-repeat center center / cover;
    
    .container {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0rem 5rem;
        gap: 1rem;
    }

    .container-foto {
        min-width: 40%;
        display: flex;
        align-items: center;
        justify-content: center;   

        img {
            width: 450px;
            height: 450px;
            object-fit: cover;
            border-radius: 50%;
        }
    }

    .container-info {
        width: 60%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 5rem;    
    }

    .info {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 0 3rem;

        h4 {
            font-weight: 400;
        }
    }

    .container-reconhecimento {
        display: flex;
        align-items: flex-start;
        gap: 1rem;
        position: relative;

        button:hover {
            filter: drop-shadow(rgba(219, 202, 9, 0.9) 0px 0px 5px);
        }
    }

    .reconhecimento {
        width: 160px;
        position: absolute;
        top: 0;
        right: 3rem;
        border: 1px solid var(--azul-escuro);
        border-radius: 10px;
        padding: .5rem;
        background-color: var(--branco);
        display: flex;
        flex-direction: column;

        li {
            margin-left: 1.5rem;
        }

    }

    .close {
        display: none;
        position: absolute;
    }

    .indices {
        width: 100%;
        display: flex;
        justify-content: space-around;
    }

    @media (max-width: 1024px) {
        width: auto;
        height: 80vh;
        margin-top: 80px;

        .container {
            padding: 0rem 2rem;
        }

        .container-foto {
            img {
                width: 350px;
                height: 350px;
            }                       
        }

        .container-info {
            gap: 3rem;    
        }

        .info {
            padding: 0 1rem;
        }
    }

    @media (max-width: 768px) {
        width: auto;
        height: 100%;
        background: none;

        .container {
            flex-wrap: wrap;
            padding: 3rem 1rem;
        }

        .container-foto {                       
            img {
                width: 250px;
                height: 250px;
            }                       
        }

        .container-info {
            width: 100%;
            padding: 0 2rem;
            gap: 2rem;    
        }

        .info {
            padding: 0;
            justify-content: space-between;

            h2 {
                font-size: 30px;
            }
            h4 {
                font-size: 16px;
            }
        }

        .indices {
            justify-content: center;
            gap: 1.5rem;
        }
    }

    @media (max-width: 450px) {
        width: auto;
        height: 100%;

        .container-info {
            padding: 0;
        }

        .info {
            h2 {
                font-size: 24px;
            }
            h4 {
                font-size: 12px;
            }
        }

        .indices {
            gap: 1rem;
        }
    }
`