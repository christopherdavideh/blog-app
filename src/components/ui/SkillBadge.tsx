interface SkillBadgeProps {
  name: string;
  level: "beginner" | "intermediate" | "advanced" | "expert";
  category?: string;
  icon?: string;
}

const levelColors = {
  beginner:
    "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
  intermediate:
    "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  advanced:
    "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
  expert:
    "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300",
};

const levelLabels = {
  beginner: "Principiante",
  intermediate: "Intermedio",
  advanced: "Avanzado",
  expert: "Experto",
};

export const SkillBadge = ({
  name,
  level,
  category,
  icon,
}: SkillBadgeProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center gap-3 mb-3">
        {icon && (
          <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">{icon}</span>
          </div>
        )}
        <div className="flex-1">
          <h3 className="font-bold text-gray-900 dark:text-white">{name}</h3>
          {category && (
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {category}
            </p>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${levelColors[level]}`}
        >
          {levelLabels[level]}
        </span>

        {/* Progress bar */}
        <div className="flex-1 ml-4">
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className={`h-2 rounded-full transition-all duration-300 ${
                level === "beginner"
                  ? "w-1/4 bg-green-500"
                  : level === "intermediate"
                  ? "w-1/2 bg-blue-500"
                  : level === "advanced"
                  ? "w-3/4 bg-purple-500"
                  : "w-full bg-yellow-500"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
