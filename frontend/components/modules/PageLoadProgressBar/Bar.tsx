import React from "react";

export function Bar({
  animationDuration,
  progress,
}: {
  animationDuration: number;
  progress: number;
}) {
  return (
    <div
      className="h-1 xl:h-1.5 w-full left-0 top-0 fixed z-50 rounded-full ease-in-out bg-[#74b0ff] dark:bg-darkPrimary"
      style={{
        marginLeft: `${(-1 + progress) * 100}%`,
        transition: `margin-left ${animationDuration}ms`,
      }}
    ></div>
  );
}
