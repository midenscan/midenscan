import { useState } from "react";
import { Tooltip } from "./Tooltip";

export function TooltipWrapper({
  message,
  children,
  className,
  flipOptions,
}: {
  message: string;
  children: React.ReactNode;
  className?: string;
  flipOptions?: any;
}) {
  const [showPopper, setShowPopper] = useState(false);
  const [referenceElement, setReferenceElement] =
    useState<HTMLDivElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );

  return (
    <>
      <div
        onMouseOver={() => setShowPopper(true)}
        onMouseOut={() => setShowPopper(false)}
        ref={setReferenceElement}
        className={className}
      >
        {children}
      </div>
      {showPopper && (
        <Tooltip
          popperText={message}
          setPopperElement={setPopperElement}
          referenceElement={referenceElement}
          popperElement={popperElement}
          offsetOptions={{ offset: [0, 7] }}
          flipOptions={flipOptions}
        />
      )}
    </>
  );
}
