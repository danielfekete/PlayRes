import React from "react";
import Showcase from "./showcase";
import { getRecentlyReleased } from "@/data/showcase";

export default async function RecentlyReleased() {
  const recentlyReleased = (await getRecentlyReleased()) || [];
  return <Showcase games={recentlyReleased} title="Recently released" />;
}
