import { Calendar, MapPin, Building } from "lucide-react";

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
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#112240]" />

      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={item.id} className="relative flex items-start group">
            {/* Timeline dot */}
            <div className="absolute left-6 w-4 h-4 bg-[#64ffda] rounded-full border-4 border-[#0a192f] shadow-lg transform -translate-x-1/2 group-hover:scale-125 transition-transform duration-300" />

            {/* Content */}
            <div className="ml-16 bg-[#112240] rounded-xl p-6 shadow-xl flex-1 border border-[#112240] hover:border-[#64ffda]/20 transition-all duration-300 group-hover:shadow-2xl">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-bold text-[#ccd6f6] mb-2 md:mb-0 group-hover:text-[#64ffda] transition-colors duration-300">
                  {item.title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-[#64ffda]">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    {item.period}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-4 text-sm text-[#8892b0]">
                <div className="flex items-center gap-1">
                  <Building size={16} />
                  {item.company}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={16} />
                  {item.location}
                </div>
              </div>

              <p className="text-[#8892b0] mb-4 leading-relaxed">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-[#0a192f] text-[#64ffda] text-sm rounded-full border border-[#64ffda]/20 hover:border-[#64ffda]/40 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
