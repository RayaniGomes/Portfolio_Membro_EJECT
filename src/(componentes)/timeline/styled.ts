import styled from "styled-components";

export const ContainerTimeline = styled.section`
    .timeline-item {
        display: flex;
        justify-content: flex-end;
        position: relative;
    }

    .timeline-item.left {
        justify-content: flex-start;
    }

    .content {
        background-color: #ffd700;
        padding: 1rem;
        border-radius: 10px;
        width: 50%;
        position: relative;
        margin: 0 -3rem;   
    }

    .timeline-item::before {
        content: '';
        position: relative;
        width: 25px;
        height: 25px;
        background-color: var(--amarelo);
        border-radius: 50%;
        top: -5px;
        left: 48.5%;
        
        @media (min-width: 2560px) {
            left: 49%;
        }
    }

    @media (max-width: 1024px) {
        .timeline-item::before {
            left: 48%;
        }
    }

    @media (max-width: 425px) {
        .content{
            h4 {
                font-size: 16px;
            }

            li{
                font-size: 10px;
                margin-left: .5rem;
            }
        } 

        .timeline-item::before {
            left: 46%;
        }
    }

`