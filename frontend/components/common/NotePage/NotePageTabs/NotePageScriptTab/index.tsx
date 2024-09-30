import React from "react";
import { graphql, useFragment } from "react-relay";

import { NotePageScriptTabFragment_note$key } from "libs/types/__generated__/NotePageScriptTabFragment_note.graphql";
import { InfoTooltip } from "components/modules/Tooltip";
import * as tooltipMessages from "libs/tooltipMessages";
import { CodeSnippet } from "./CodeSnippet";

const NotePageScriptTabFragmentGRAPHQL = graphql`
  fragment NotePageScriptTabFragment_note on Note {
    script_code
    inputs
  }
`;

export function NotePageScriptTab({
  noteKey,
}: {
  noteKey: NotePageScriptTabFragment_note$key;
}) {
  const note = useFragment(NotePageScriptTabFragmentGRAPHQL, noteKey);

  return (
    <dl className="sm:divide-y sm:divide-gray-200 dark:sm:divide-gray-600">
      <div className="bg-white dark:bg-darkMuted px-4 py-5 sm:grid sm:grid-cols-6 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500 dark:text-white">
          <div className="flex items-center gap-x-1">
            <InfoTooltip message={tooltipMessages.NOTE_INPUTS} />
            <div>Inputs</div>
          </div>
        </dt>
        <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-4">
          {note.inputs ? <div>{note.inputs}</div> : null}
        </dd>
      </div>
      <div className="bg-white dark:bg-darkMuted px-4 py-5 sm:grid sm:grid-cols-6 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500 dark:text-white">
          <div className="flex items-center gap-x-1">
            <InfoTooltip message={tooltipMessages.NOTE_SCRIPT} />
            <div>Script</div>
          </div>
        </dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-4">
          {note.script_code ? <CodeSnippet code={note.script_code} /> : null}
        </dd>
      </div>
    </dl>
  );
}
