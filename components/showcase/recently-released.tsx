import React from "react";
import Showcase from "./showcase";
import { mapGames } from "@/lib/functions";
import { getRecentlyReleased } from "@/data/showcase";

export default async function RecentlyReleased() {
  const recentlyReleased = ((await getRecentlyReleased()) || []).map(mapGames);
  return <Showcase games={recentlyReleased} title="Recently released" />;
}
