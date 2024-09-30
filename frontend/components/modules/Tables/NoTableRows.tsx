import React from "react";

export function NoTableRows({
  message,
  colSpan,
}: {
  message: string;
  colSpan: number;
}) {
  return (
    <tr>
      <td colSpan={colSpan} className="px-2 py-6 text-center my-8">
        {message}
      </td>
    </tr>
  );
}
