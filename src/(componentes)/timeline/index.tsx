import { TimelineItem } from "@/interface";
import { ContainerTimeline } from "./styled";

interface PropTimeline {
    timeline?: TimelineItem
    side: string
}

export default function Timeline({ timeline = {} as TimelineItem, side }: PropTimeline) {
    return (
        <ContainerTimeline>
            <div className={`timeline-item ${side}`}>
                <div className="content">
                    <div className="iten">
                        <h4>{timeline.date}</h4>
                        <h4>{timeline.titulo}</h4>
                        <p>{timeline.descricao}</p>
                    </div>
                </div>
            </div>
        </ContainerTimeline>
    )
}