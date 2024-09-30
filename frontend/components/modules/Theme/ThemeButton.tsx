import { SunIcon, MoonIcon } from "@heroicons/react/20/solid";
import { ThemeMode } from "libs/types";
import { useTheme } from "next-themes";

export function ThemeButton() {
  const { resolvedTheme, setTheme } = useTheme();

  function handleClick() {
    if (resolvedTheme === ThemeMode.dark) {
      setTheme(ThemeMode.light);
    } else if (resolvedTheme === ThemeMode.light) {
      setTheme(ThemeMode.dark);
    }
  }

  return (
    <button
      className="flex h-8 w-8 items-center justify-center rounded-lg shadow-md shadow-black/5 ring-1 ring-black/5 dark:bg-darkMuted dark:ring-inset dark:ring-white/5"
      onClick={() => handleClick()}
    >
      <SunIcon className="h-6 w-6 fill-secondary dark:hidden" />
      <MoonIcon className="h-6 w-6 hidden dark:inline-block dark:fill-darkPrimary" />
    </button>
  );
}
