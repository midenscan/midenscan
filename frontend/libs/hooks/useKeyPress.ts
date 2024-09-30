import { useCallback, useEffect, useRef } from "react";

export function useKeyPress(keys: any, callback: any, node = null) {
  // implement the callback ref pattern
  const callbackRef = useRef(callback);
  useEffect(() => {
    callbackRef.current = callback;
  });

  // handle what happens on key press
  const handleKeyPress = useCallback(
    (event: any) => {
      // check if one of the key is part of the ones we want
      if (event.key === keys && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        callbackRef.current(event);
      }
    },
    [keys]
  );

  useEffect(() => {
    // target is either the provided node or the document
    const targetNode = node ?? document;
    // attach the event listener
    targetNode && targetNode.addEventListener("keydown", handleKeyPress);

    // remove the event listener
    return () =>
      targetNode && targetNode.removeEventListener("keydown", handleKeyPress);
  }, [handleKeyPress, node]);
}
