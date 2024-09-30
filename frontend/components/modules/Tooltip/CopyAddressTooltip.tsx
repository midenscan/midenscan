import { useState } from "react";
import { Tooltip } from "./Tooltip";

export function CopyAddressTooltip({
  address,
  children,
  offsetOptions,
}: {
  address: string;
  children: React.ReactNode;
  offsetOptions?: any; // don't know where Offset type is defined
}) {
  const [showPopper, setShowPopper] = useState(false);
  const [popperText, setPopperText] = useState("Copy");

  const [referenceElement, setReferenceElement] =
    useState<HTMLDivElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );

  function switchPopperText(text: string) {
    setPopperText(text);
    setTimeout(() => {
      setPopperText("Copy");
    }, 1500);
  }

  async function copyToClipboard() {
    await navigator.clipboard.writeText(address).then(
      () => {
        switchPopperText("Copied");
      },
      (err) => {
        switchPopperText("Failed to copy");
      }
    );
  }

  return (
    <>
      <div
        onClick={copyToClipboard}
        onMouseOver={() => setShowPopper(true)}
        onMouseOut={() => setShowPopper(false)}
        ref={setReferenceElement}
      >
        {children}
      </div>

      {showPopper && (
        <Tooltip
          popperText={popperText}
          setPopperElement={setPopperElement}
          referenceElement={referenceElement}
          popperElement={popperElement}
          offsetOptions={offsetOptions}
        />
      )}
    </>
  );
}
