import "./styles.css";
import { EditorPane } from "./EditorPane";
import { OutputPane } from "./OutputPane";
import { EditorToolbar } from "./EditorToolbar";
import { useLayout } from "./hooks/useLayout";
import { File } from "./types";
import { useCallback, useRef } from "react";

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
  const { isVertical, toggleLayout, splitPosition, setSplitPosition } =
    useLayout();
  const splitPaneRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);

  const startResize = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    isDraggingRef.current = true;
    document.addEventListener("mousemove", resize);
    document.addEventListener("mouseup", stopResize);
  }, []);

  const resize = useCallback(
    (e: MouseEvent) => {
      if (!isDraggingRef.current || !splitPaneRef.current) return;
      const splitPane = splitPaneRef.current;
      const { left, top, width, height } = splitPane.getBoundingClientRect();
      const newPosition = isVertical
        ? ((e.clientX - left) / width) * 100
        : ((e.clientY - top) / height) * 100;
      setSplitPosition(Math.min(Math.max(newPosition, 20), 80));
    },
    [isVertical, setSplitPosition]
  );

  const stopResize = useCallback(() => {
    isDraggingRef.current = false;
    document.removeEventListener("mousemove", resize);
    document.removeEventListener("mouseup", stopResize);
  }, [resize]);

  return (
    <div
      style={{ height: "100vh" }}
      className="w-full bg-white text-gray-900 dark:bg-gray-900 dark:text-white"
    >
      <div
        ref={splitPaneRef}
        className={`h-full w-full flex ${isVertical ? "flex-row" : "flex-col"}`}
        style={{ overflow: "hidden" }}
      >
        <div
          className="h-full flex flex-col min-w-0"
          style={{
            flexBasis: `${splitPosition}%`,
            overflow: "hidden",
          }}
        >
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
          <div
            className="flex flex-1"
            style={{ minHeight: 0, border: "1px sold red;" }}
          >
            <EditorPane
              file={activeFile}
              value={activeFile.content}
              onChange={onFileContentChange}
            />
          </div>
        </div>
        <div
          className={`bg-gray-300 hover:bg-gray-400 transition-colors ${
            isVertical ? "w-1 cursor-col-resize" : "h-1 cursor-row-resize"
          }`}
          onMouseDown={startResize}
        />
        <div
          className="h-full min-w-0"
          style={{
            flexBasis: `${100 - splitPosition}%`,
            overflow: "hidden",
          }}
        >
          <OutputPane output={output} />
        </div>
      </div>
    </div>
  );
}
