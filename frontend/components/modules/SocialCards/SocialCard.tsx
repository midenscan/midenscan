import { ReactNode } from "react";

export function SocialCard({ href, icon }: { href: string; icon: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <div className="pointer-events-auto inline-flex rounded-md bg-white dark:bg-darkMuted text-[0.8125rem] font-medium leading-5 text-slate-700 shadow-sm ring-1 ring-slate-700/10 hover:bg-slate-50 hover:text-slate-900">
        <div className="flex py-2 px-2.5">{icon}</div>
      </div>
    </a>
  );
}
