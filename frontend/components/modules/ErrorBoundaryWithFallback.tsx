import React from "react";

interface ErrorBoundaryProps {
  renderFallbackComponent: (error: Error) => React.ReactNode;
  children?: React.ReactNode;
}
interface ErrorBoundaryState {
  hasError: boolean;
  error: Nullable<Error>;
}

export class ErrorBoundaryWithFallback extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  public state: ErrorBoundaryState = {
    hasError: false,
    error: null,
  };

  constructor(props: ErrorBoundaryProps) {
    super(props);
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error: error,
    };
  }

  render() {
    const { error } = this.state;
    const { children: children, renderFallbackComponent } = this.props;

    if (error) {
      return renderFallbackComponent(error);
    }

    return children;
  }
}
