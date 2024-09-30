import React, { Suspense, SuspenseProps, useEffect, useState } from "react";

// Used to avoid rendering on serverside
export function SsrSuspense(props: SuspenseProps) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <>{props.fallback}</>;
  }

  return <Suspense {...props} />;
}
