import { File } from "../types";

export function createNewFile(fileName: string): File {
  const language = fileName.split(".").pop()?.toLowerCase();
  return {
    id: `file-${Date.now()}`,
    name: fileName,
    language: language || "javascript",
    content: getInitialContent(fileName),
  };
}

function getInitialContent(fileName: string): string {
  const ext = fileName.split(".").pop()?.toLowerCase();

  switch (ext) {
    case "html":
      return "<!DOCTYPE html>\n<html>\n<head>\n  <title>New Page</title>\n</head>\n<body>\n\n</body>\n</html>";
    case "css":
      return "/* Styles for " + fileName + " */\n\n";
    case "js":
    case "jsx":
      return "// JavaScript code for " + fileName + "\n\n";
    case "ts":
    case "tsx":
      return "// TypeScript code for " + fileName + "\n\n";
    case "json":
      return "{\n  \n}";
    case "md":
      return "# " + fileName.split(".")[0] + "\n\n";
    default:
      return "";
  }
}
