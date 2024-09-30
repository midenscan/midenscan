import { create } from "zustand";

type PageLoadProgressStore = {
  isAnimating: boolean;
  setIsAnimating: (isAnimating: boolean) => void;
};

export const usePageLoadProgressStore = create<PageLoadProgressStore>(
  (set) => ({
    isAnimating: false,
    setIsAnimating: (isAnimating: boolean) => {
      return set(() => ({
        isAnimating,
      }));
    },
  })
);
