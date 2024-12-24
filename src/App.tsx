import { useState } from "react";
import { CodeEditor } from "@edusidekick/react-code-editor";
import { File } from "@edusidekick/react-code-editor/types";

const DEFAULT_FILES: File[] = [
  {
    name: "main.js",
    content: 'console.log("Hello World!");',
    language: "javascript",
  },
  // ... other default files
];

function App() {
  const [files, setFiles] = useState<File[]>(DEFAULT_FILES);
  const [activeFile, setActiveFile] = useState<File>(files[0]);
  const [output, setOutput] = useState("");

  const handleFileContentChange = (content: string) => {
    setFiles(
      files.map((f) => (f.name === activeFile.name ? { ...f, content } : f))
    );
  };

  const handleCreateFile = (name: string, content: string) => {
    const newFile = { name, content, language: "javascript" };
    setFiles([...files, newFile]);
  };

  const handleDeleteFile = (file: File) => {
    setFiles(files.filter((f) => f.name !== file.name));
    if (activeFile.name === file.name) {
      setActiveFile(files[0]);
    }
  };

  const handleRun = () => {
    setOutput(`Running ${activeFile.name}...\n${activeFile.content}`);
  };

  return (
    <div className=" w-full h-96 gap-4">
      <CodeEditor
        files={files}
        activeFile={activeFile}
        onFileSelect={setActiveFile}
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
