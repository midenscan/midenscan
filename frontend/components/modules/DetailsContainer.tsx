import { ReactNode } from "react";

export function DetailsContainer({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <>
      <div className="bg-[#f6f5f5] dark:bg-darkBg pb-32"></div>
      <main className="-mt-32 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          {/* overflow auto so you can scroll horizontally on mobile */}
          <div className="bg-white dark:bg-darkMuted shadow overflow-auto sm:rounded-lg">
            <div className="pl-4 py-5 sm:pl-6 flex flex-wrap justify-between gap-y-6">
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white flex gap-x-1 items-center">
                  <div>{title}</div>
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-white">
                  {description}
                </p>
              </div>
            </div>

            {children}
          </div>
        </div>
      </main>
    </>
  );
}
