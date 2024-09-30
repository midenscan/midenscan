import "highlight.js/styles/github-dark.css";

export function CodeSnippetDarkTheme({ code }: { code: string }) {
  return (
    <pre className="hljs text-xs">
      <code dangerouslySetInnerHTML={{ __html: code }} />
    </pre>
  );
}
