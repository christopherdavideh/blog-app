import { Calendar } from "lucide-react";
import "@/styles/components/ui/_timeline.scss";

interface TimelineItem {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
}

interface TimelineProps {
  items: TimelineItem[];
}

export const Timeline = ({ items }: TimelineProps) => {
  return (
    <div className="timeline">
      <div className="timeline__list">
        {items.map((item) => (
          <div key={item.id} className="timeline__item">
            <div className="timeline__header">
              <div>
                <h4 className="timeline__position">{item.title}</h4>
                <p className="timeline__company">{item.company}</p>
              </div>
              <div className="timeline__period">
                <Calendar size={16} className="timeline__period-icon" />
                {item.period}
              </div>
            </div>
            <p className="timeline__desc">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
