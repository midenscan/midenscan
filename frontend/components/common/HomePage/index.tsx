import React from "react";

import { HomePageStatsSummary } from "./HomePageStatsSummary";
import { Tables } from "./Tables";

export function HomePage() {
  return (
    <main className="bg-white pb-32 dark:bg-darkBg">
      <HomePageStatsSummary />
      <Tables />
    </main>
  );
}
