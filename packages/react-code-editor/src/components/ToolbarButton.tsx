import { ReactNode } from "react";

interface ToolbarButtonProps {
  onClick: () => void;
  title: string;
  icon: ReactNode;
}

export function ToolbarButton({ onClick, title, icon }: ToolbarButtonProps) {
  return (
    <button
      onClick={onClick}
      title={title}
      className="h-10 w-10 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
    >
      {icon}
    </button>
  );
}
