export function TableHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="mb-6 sm:flex sm:items-center sm:justify-between w-full">
      <div className="sm:flex-auto z-10">
        <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
          {title}
        </h1>
        <p className="mt-2 text-sm text-gray-700 dark:text-darkPrimary">
          {description}
        </p>
      </div>
    </div>
  );
}
