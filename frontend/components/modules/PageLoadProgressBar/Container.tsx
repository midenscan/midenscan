import React, { ReactNode } from "react";

export function Container({
  animationDuration,
  children,
  isFinished,
}: {
  animationDuration: number;
  children: ReactNode;
  isFinished: boolean;
}) {
  return (
    <div
      className="pointer-events-none"
      style={{
        opacity: isFinished ? 0 : 1,
        transition: `opacity ${animationDuration}ms linear`,
      }}
    >
      {children}
    </div>
  );
}
