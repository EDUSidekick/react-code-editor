import { FiPlus } from "react-icons/fi";
import { FileTab } from "./FileTab";
import { File } from "../types";

interface FileTabListProps {
  files: File[];
  activeFile: File;
  onFileSelect: (file: File) => void;
  onNewFileClick: () => void;
  onDeleteFile: (fileId: File) => void;
}

export function FileTabList({
  files,
  activeFile,
  onFileSelect,
  onNewFileClick,
  onDeleteFile,
}: FileTabListProps) {
  return (
    <div className="flex-1 flex overflow-x-auto">
      {files.map((file) => (
        <FileTab
          key={file.id}
          file={file}
          isActive={file.id === activeFile.id}
          onClick={() => onFileSelect(file)}
          onDelete={() => onDeleteFile(file)}
        />
      ))}
      <button
        onClick={onNewFileClick}
        className="flex items-center gap-1 px-4 h-10 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 border-r border-gray-200 dark:border-gray-700"
      >
        <FiPlus size={16} />
        New
      </button>
    </div>
  );
}
