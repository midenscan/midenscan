export function classNames(...classes: String[]) {
  return classes.filter(Boolean).join(" ");
}

export function animation(speed: number) {
  return `transition-all duration-${speed} ease-in-out`;
}

export const animateCard = animation(200);
