import "highlight.js/styles/github.css";

export function CodeSnippetLightTheme({ code }: { code: string }) {
  return (
    <pre className="hljs text-xs">
      <code dangerouslySetInnerHTML={{ __html: code }} />
    </pre>
  );
}
