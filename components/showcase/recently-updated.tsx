import { getRecentlyUpdated } from "@/data/showcase";
import { mapGames } from "@/lib/functions";
import React from "react";
import Showcase from "./showcase";

export default async function RecentlyUpdated() {
  const recentlyUpdated = ((await getRecentlyUpdated()) || []).map(mapGames);
  return <Showcase games={recentlyUpdated} title="Recently updated" />;
}
