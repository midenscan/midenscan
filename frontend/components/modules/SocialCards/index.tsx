import React from "react";
import { Discord, Twitter, GitHub } from "components/modules/Icons";
import { SocialCard } from "./SocialCard";

export function SocialCards() {
  return (
    <div className="flex gap-x-2 items-end">
      <SocialCard
        href="https://x.com/0xPolygonMiden"
        icon={<Twitter className="h-5 w-5 fill-sky-400" />}
      />
      <SocialCard
        href="https://github.com/0xPolygonMiden"
        icon={<GitHub className="h-5 w-5 fill-gray-400" />}
      />
      <SocialCard
        href="https://discord.gg/0xPolygonDevs"
        icon={<Discord className="h-5 w-5 fill-indigo-400" />}
      />
    </div>
  );
}

export function SocialCardsVertical() {
  return (
    <div className="flex flex-col gap-3 items-end">
      <SocialCard
        href="https://x.com/0xPolygonMiden"
        icon={<Twitter className="h-5 w-5 fill-sky-400" />}
      />
      <SocialCard
        href="https://github.com/0xPolygonMiden"
        icon={<GitHub className="h-5 w-5 fill-gray-400" />}
      />
    </div>
  );
}
