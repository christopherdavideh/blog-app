import React from "react";
import { Tag as TagIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TagProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export const Tag: React.FC<TagProps> = React.memo(
  ({ label, active = false, onClick, className }) => {
    const baseClasses = "tag";
    const stateClasses = active ? "tag--active" : "tag--inactive";

    const classes = cn(baseClasses, stateClasses, className);

    return (
      <button className={classes} onClick={onClick}>
        <TagIcon size={16} className="tag__icon" />
        {label}
      </button>
    );
  }
);

export interface TagListProps {
  tags: string[];
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
  className?: string;
}

export const TagList: React.FC<TagListProps> = ({
  tags,
  selectedTags,
  onTagToggle,
  className,
}) => {
  return (
    <div className={cn("tag-list", className)}>
      {tags.map((tag) => (
        <Tag
          key={tag}
          label={tag}
          active={selectedTags.includes(tag)}
          onClick={() => onTagToggle(tag)}
        />
      ))}
    </div>
  );
};
