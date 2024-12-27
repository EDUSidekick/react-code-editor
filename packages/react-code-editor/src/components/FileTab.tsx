import React from "react";
import { FiFile, FiX } from "react-icons/fi";
import { File } from "../types";

interface FileTabProps {
  file: File;
  isActive: boolean;
  onClick: () => void;
  onDelete: () => void;
}

export function FileTab({ file, isActive, onClick, onDelete }: FileTabProps) {
  // Default showDelete to false
  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete();
  };

  return (
    <button
      onClick={onClick}
      className={`group flex items-center gap-2 px-4 h-10 border-r border-gray-200 dark:border-gray-700
        ${
          isActive
            ? "bg-white border-t border-2 dark:bg-gray-900 text-gray-900 dark:text-white"
            : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
        }`}
    >
      <FiFile size={16} />
      <span>{file.name}</span>
      {file.deletable && ( // Conditionally render delete button based on deletable
        <button
          onClick={handleDelete}
          className="ml-2 p-1 rounded-full opacity-0 group-hover:opacity-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition-opacity"
          title="Close file"
        >
          <FiX size={14} />
        </button>
      )}
    </button>
  );
}
