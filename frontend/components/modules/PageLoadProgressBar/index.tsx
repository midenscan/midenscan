import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useNProgress } from "@tanem/react-nprogress";

import { usePageLoadProgressStore } from "libs/stores";

import { Bar } from "./Bar";
import { Container } from "./Container";

export function PageLoadProgressBar() {
  const router = useRouter();
  const setIsAnimating = usePageLoadProgressStore(
    (state) => state.setIsAnimating
  );
  const isAnimating = usePageLoadProgressStore((state) => state.isAnimating);

  const { animationDuration, isFinished, progress } = useNProgress({
    isAnimating,
  });

  useEffect(() => {
    function handleStart() {
      setIsAnimating(true);
    }

    function handleStop() {
      setIsAnimating(false);
    }

    router.events?.on("routeChangeStart", handleStart);
    router.events?.on("routeChangeComplete", handleStop);
    router.events?.on("routeChangeError", handleStop);

    return () => {
      router.events?.off("routeChangeStart", handleStart);
      router.events?.off("routeChangeComplete", handleStop);
      router.events?.off("routeChangeError", handleStop);
    };
  }, [setIsAnimating, router]);

  return (
    <Container animationDuration={animationDuration} isFinished={isFinished}>
      <Bar animationDuration={animationDuration} progress={progress} />
    </Container>
  );
}
