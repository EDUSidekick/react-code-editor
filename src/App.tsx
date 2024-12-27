import { useState, useRef } from "react";
import { CodeEditor } from "@edusidekick/react-code-editor";
import { File } from "@edusidekick/react-code-editor/types";
import { DEFAULT_FILES } from "./constants";

function App() {
  const [files, setFiles] = useState<File[]>(DEFAULT_FILES);
  const [activeFile, setActiveFile] = useState<File>(files[0]);
  const [output, setOutput] = useState("");

  const activeFileContentRef = useRef(activeFile.content);

  const handleFileContentChange = (content: string) => {
    activeFileContentRef.current = content;
    setFiles(
      files.map((f) => (f.name === activeFile.name ? { ...f, content } : f))
    );
  };

  const handleFileSelect = (file: File) => {
    activeFileContentRef.current = file.content;
    setActiveFile(file);
  };

  const handleCreateFile = (name: string) => {
    // TODO: create the initial content based on the file type
    const newFile = {
      name,
      content: "// sample js file",
      language: "javascript",
      deletable: true,
    };
    setFiles([...files, newFile]);
    setActiveFile(newFile);
  };

  const handleDeleteFile = (file: File) => {
    setFiles(files.filter((f) => f.name !== file.name));
    if (activeFile.name === file.name) {
      setActiveFile(files[0]);
    }
  };

  const handleRun = () => {
    const updatedActiveFile = {
      ...activeFile,
      content: activeFileContentRef.current,
    };
    setActiveFile(updatedActiveFile);
    setOutput(
      `Running ${updatedActiveFile.name}...\n${updatedActiveFile.content}`
    );
  };

  return (
    <div className="w-full h-screen gap-4">
      <CodeEditor
        files={files}
        activeFile={activeFile}
        onFileSelect={handleFileSelect}
        onFileContentChange={handleFileContentChange}
        onCreateFile={handleCreateFile}
        onDeleteFile={handleDeleteFile}
        output={output}
        onRun={handleRun}
      />
    </div>
  );
}

export default App;
