interface OutputPaneProps {
  output: string;
}

export function OutputPane({ output }: OutputPaneProps) {
  return (
    <div className="h-full flex flex-col">
      <div className="bg-gray-100 dark:bg-gray-800 px-4 h-10 flex items-center border-b border-gray-200 dark:border-gray-700">
        Output
      </div>
      <div className="flex-1 bg-white dark:bg-gray-900 p-4 font-mono whitespace-pre-wrap overflow-auto text-gray-900 dark:text-white">
        {output || 'Click "Run" to see the output'}
      </div>
    </div>
  );
}
