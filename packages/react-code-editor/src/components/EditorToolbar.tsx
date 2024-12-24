interface EditorToolbarProps {
  onCreateFile: (name: string, content: string) => void;
  onDeleteFile: (file: File) => void;
}
