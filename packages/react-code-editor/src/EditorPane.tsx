import Editor from "@monaco-editor/react";
import { File } from "./types";
import { getLanguageFromFileName } from "./utils/languageUtils";

interface EditorPaneProps {
  file: File;
  value: string;
  onChange: (value: string) => void;
}

export function EditorPane({ file, value, onChange }: EditorPaneProps) {
  const language = getLanguageFromFileName(file.name);

  return (
    <div className="flex-1 flex bg-white dark:bg-gray-900">
      <Editor
        className="flex-1"
        height="100%"
        defaultLanguage={language}
        value={value}
        onChange={(value) => onChange(value ?? "")}
        theme="vs-dark"
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          lineNumbers: "on",
          scrollBeyondLastLine: false,
          automaticLayout: true,
          tabSize: 2,
          wordWrap: "on",
          renderWhitespace: "selection",
          scrollBeyondLastColumn: 0,
        }}
      />
    </div>
  );
}
