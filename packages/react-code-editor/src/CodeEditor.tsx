import { Allotment } from "allotment";
import "allotment/dist/style.css";
import "./styles.css";
import { EditorPane } from "./EditorPane";
import { OutputPane } from "./OutputPane";
import { EditorToolbar } from "./EditorToolbar";
import { useLayout } from "./hooks/useLayout";
import { File } from "./types";

interface CodeEditorProps {
  files: File[];
  activeFile: File;
  onFileSelect: (file: File) => void;
  onFileContentChange: (content: string) => void;
  onCreateFile: (name: string) => void;
  onDeleteFile: (file: File) => void;
  output: string;
  onRun: () => void;
}

export function CodeEditor({
  files,
  activeFile,
  onFileSelect,
  onFileContentChange,
  onCreateFile,
  onDeleteFile,
  output,
  onRun,
}: CodeEditorProps) {
  const { isVertical, toggleLayout, key } = useLayout();

  return (
    <div className="h-full w-full bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      <Allotment
        key={key}
        vertical={isVertical}
        defaultSizes={[50, 50]}
        minSize={200}
      >
        <Allotment.Pane minSize={200}>
          <div className="h-full flex flex-col">
            <EditorToolbar
              files={files}
              activeFile={activeFile}
              onFileSelect={onFileSelect}
              onLayoutToggle={toggleLayout}
              onRun={onRun}
              isVertical={isVertical}
              onCreateFile={onCreateFile}
              onDeleteFile={onDeleteFile}
            />
            <EditorPane
              file={activeFile}
              value={activeFile.content}
              onChange={onFileContentChange}
            />
          </div>
        </Allotment.Pane>
        <Allotment.Pane minSize={200}>
          <OutputPane output={output} />
        </Allotment.Pane>
      </Allotment>
    </div>
  );
}
