import { useState } from "react";
import { Tooltip } from "./Tooltip";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

export function InfoTooltip({ message }: { message: string }) {
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
      >
        <InformationCircleIcon className="h-4 w-4 text-gray-500 dark:text-gray-200 cursor-help" />
      </div>
      {showPopper && (
        <Tooltip
          popperText={message}
          setPopperElement={setPopperElement}
          referenceElement={referenceElement}
          popperElement={popperElement}
          offsetOptions={{ offset: [0, 7] }}
        />
      )}
    </>
  );
}
