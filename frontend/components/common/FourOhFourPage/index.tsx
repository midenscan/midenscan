import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { LinkRef } from "components/modules/LinkRef";

export function FourOhFourPage({
  headerComponent,
}: {
  headerComponent: React.ReactNode;
}) {
  return (
    <div className="bg-white dark:bg-darkBg">
      <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl py-16 sm:py-24">
          <div className="text-center">{headerComponent}</div>
        </div>
      </main>
    </div>
  );
}
