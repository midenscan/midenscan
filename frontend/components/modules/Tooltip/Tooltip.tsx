import { Dispatch, SetStateAction } from "react";
import { usePopper } from "react-popper";

export function Tooltip({
  popperText,
  setPopperElement,
  referenceElement,
  popperElement,
  offsetOptions,
  flipOptions,
}: {
  popperText: string;
  setPopperElement: Dispatch<SetStateAction<HTMLDivElement | null>>;
  referenceElement: HTMLDivElement | null;
  popperElement: HTMLDivElement | null;
  offsetOptions?: any; // don't know where Offset type is defined
  flipOptions?: any; // don't know where Flip type is defined
}) {
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "top",
    modifiers: [
      { name: "offset", options: offsetOptions },
      {
        name: "flip",
        options: flipOptions,
      },
    ],
  });
  return (
    <div
      ref={setPopperElement}
      style={styles.popper}
      className="bg-gray-900 opacity-75 rounded-lg shadow-lg text-white px-3 py-1.5 whitespace-pre-line"
      {...attributes.popper}
      data-popper-placement="bottom"
    >
      {popperText}
    </div>
  );
}
