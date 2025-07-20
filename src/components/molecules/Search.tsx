import React from "react";
import { Search as SearchIcon } from "lucide-react";
import { Input } from "@/components/atoms/Input";

export interface SearchProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export const Search: React.FC<SearchProps> = ({
  placeholder = "Buscar...",
  value,
  onChange,
  className,
}) => {
  return (
    <div className={`search ${className || ""}`.trim()}>
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        icon={<SearchIcon size={20} />}
        className="search__input"
      />
    </div>
  );
};
