export type SearchResultsForCategory = {
  categoryName: string;
  results: SearchResultItem[];
};

export type SearchResultItem = {
  id: string;
  icon: any;
  headerComponent: React.ReactNode;
  footerComponent: React.ReactNode;
  routeUrl: string;
};

export function HeaderTextContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="text-sm font-medium group-hover:underline flex gap-x-1 items-center">
      {children}
    </div>
  );
}

export function BadgeContainer({ children }: { children: React.ReactNode }) {
  return <div className="mt-1.5">{children}</div>;
}

export function FooterTextContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="text-xs font-mono pt-0.5 dark:text-gray-300 text-gray-700">
      {children}
    </div>
  );
}
