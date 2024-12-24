# @edusidekick/react-code-editor

A React component that provides a Monaco-based code editor with split-pane layout and output display. Built for seamless integration with React and Astro applications.

## Installation

```bash
npm install @edusidekick/react-code-editor
```

## Features

- Monaco Editor for powerful code editing
- Split-pane layout with resizable panels
- File tabs with create/delete functionality
- Output display panel
- Dark mode support
- Built with TypeScript for type safety

## Quick Start

```tsx
import { CodeEditor } from '@edusidekick/react-code-editor';
import type { File } from '@edusidekick/react-code-editor/types';

const files = [{
  name: "example.js",
  content: "console.log('Hello!');",
  language: "javascript"
}];

function MyEditor() {
  return (
    <CodeEditor
      files={files}
      activeFile={files[0]}
      onFileSelect={(file) => {}}
      onFileContentChange={(content) => {}}
      output=""
      onRun={() => {}}
    />
  );
}
```

## API Reference

### File Type

```typescript
interface File {
  name: string;
  content: string;
  language: string;
}
```

### Component Props

```typescript
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
```

## License

MIT © [EduSidekick](../../LICENSE) 