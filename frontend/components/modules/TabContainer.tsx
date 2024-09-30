import { ReactNode } from "react";

export function TabContainer({ children }: { children: ReactNode }) {
  return (
    <div className="border-t border-gray-200 dark:border-gray-600">
      {children}
    </div>
  );
}
