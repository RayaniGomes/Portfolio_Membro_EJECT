import { ContainerTimeline } from "./styled";

interface ITimeline {
    ano: number;
    eventos: string[];
    side: 'left' | 'right';
}

export default function Timeline({ ano, eventos, side }: ITimeline) {

    return (
        <ContainerTimeline>
            <div className={`timeline-item ${side}`}>
                <div className="content">
                    <div className="iten">
                        <h4>{ano}</h4>
                        <ul>
                            {eventos.map((evento, index) => (
                                <li key={index}>{evento}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </ContainerTimeline>
    )
}