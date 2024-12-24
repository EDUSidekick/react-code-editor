import { useState } from "react";
import { FiMaximize2, FiMinimize2, FiPlay } from "react-icons/fi";
import { File } from "./types";
import { FileTabList } from "./components/FileTabList";
import { ToolbarButton } from "./components/ToolbarButton";
import { NewFileDialog } from "./components/NewFileDialog";

interface EditorToolbarProps {
  files: File[];
  activeFile: File;
  onFileSelect: (file: File) => void;
  onLayoutToggle: () => void;
  onRun: () => void;
  isVertical: boolean;
  onCreateFile: (fileName: string) => void;
  onDeleteFile: (file: File) => void;
}

export function EditorToolbar({
  files,
  activeFile,
  onFileSelect,
  onLayoutToggle,
  onRun,
  isVertical,
  onCreateFile,
  onDeleteFile,
}: EditorToolbarProps) {
  const [showNewFileDialog, setShowNewFileDialog] = useState(false);

  return (
    <>
      <div className="flex items-center bg-gray-100 dark:bg-gray-800 h-10">
        <FileTabList
          files={files}
          activeFile={activeFile}
          onFileSelect={onFileSelect}
          onNewFileClick={() => setShowNewFileDialog(true)}
          onDeleteFile={onDeleteFile}
        />
        <div className="flex">
          <ToolbarButton
            onClick={onLayoutToggle}
            title={
              isVertical
                ? "Switch to horizontal layout"
                : "Switch to vertical layout"
            }
            icon={
              isVertical ? <FiMaximize2 size={16} /> : <FiMinimize2 size={16} />
            }
          />
          <ToolbarButton
            onClick={onRun}
            title="Run code"
            icon={<FiPlay size={16} />}
          />
        </div>
      </div>
      {showNewFileDialog && (
        <NewFileDialog
          onClose={() => setShowNewFileDialog(false)}
          onCreateFile={onCreateFile}
        />
      )}
    </>
  );
}
