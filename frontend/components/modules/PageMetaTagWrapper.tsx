import React from "react";
import { NextSeo } from "next-seo";

export function PageMetaTagWrapper({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <NextSeo title={`${title} - Midenscan`} />
      {children}
    </>
  );
}
