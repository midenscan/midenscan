import Link from "next/link";
import React from "react";

export function LinkRef({
  children,
  className,
  href,
  openNewTab = false,
}: {
  children: React.ReactNode;
  className?: string;
  href: string;
  openNewTab?: boolean;
}) {
  if (openNewTab) {
    return (
      <Link href={href} legacyBehavior>
        <a target="_blank" rel="noopener noreferrer" className={className}>
          {children}
        </a>
      </Link>
    );
  } else {
    return (
      <Link href={href} legacyBehavior>
        <a className={className}>{children}</a>
      </Link>
    );
  }
}
