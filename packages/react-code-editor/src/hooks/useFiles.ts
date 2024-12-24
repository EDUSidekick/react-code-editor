import { useState } from "react";
import { File } from "../types";
import { createNewFile } from "../utils/fileUtils";

export function useFiles(initialFiles: File[]) {
  const [activeFile, setActiveFile] = useState(initialFiles[0]);
  const [files, setFiles] = useState(initialFiles);

  const updateFileContent = (newContent: string) => {
    const updatedFiles = files.map((f) =>
      f.id === activeFile.id ? { ...f, content: newContent } : f
    );
    setFiles(updatedFiles);
    setActiveFile({ ...activeFile, content: newContent });
  };

  const createFile = (fileName: string) => {
    const newFile = createNewFile(fileName);
    setFiles([...files, newFile]);
    setActiveFile(newFile);
  };

  const deleteFile = (fileId: string) => {
    const fileIndex = files.findIndex((f) => f.id === fileId);
    if (fileIndex === -1) return;

    const newFiles = files.filter((f) => f.id !== fileId);
    setFiles(newFiles);

    // If the active file is being deleted, switch to another file
    if (activeFile.id === fileId) {
      const newActiveFile = newFiles[Math.min(fileIndex, newFiles.length - 1)];
      setActiveFile(newActiveFile);
    }
  };

  return {
    activeFile,
    files,
    setActiveFile,
    updateFileContent,
    createFile,
    deleteFile,
  };
}
