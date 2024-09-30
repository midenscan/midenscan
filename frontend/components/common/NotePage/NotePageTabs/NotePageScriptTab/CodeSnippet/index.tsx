import React from "react";
import { useTheme } from "next-themes";
import { ThemeMode } from "libs/types";

// create components using React.lazy
const CodeSnippetLightTheme = React.lazy(() =>
  import("./CodeSnippetLightTheme").then((module) => ({
    default: module.CodeSnippetLightTheme,
  }))
);
const CodeSnippetDarkTheme = React.lazy(() =>
  import("./CodeSnippetDarkTheme").then((module) => ({
    default: module.CodeSnippetDarkTheme,
  }))
);

export function CodeSnippet({ code }: { code: string }) {
  const { resolvedTheme } = useTheme();
  return (
    <div className="block bg-white dark:bg-[#0d1117] rounded p-2 overflow-auto min-h-[420px] max-h-[800px]">
      <React.Suspense fallback={<></>}>
        {resolvedTheme === ThemeMode.light && (
          <CodeSnippetLightTheme code={code} />
        )}
        {resolvedTheme === ThemeMode.dark && (
          <CodeSnippetDarkTheme code={code} />
        )}
      </React.Suspense>
    </div>
  );
}
