import { getRecentlyUpdated } from "@/data/showcase";
import React from "react";
import Showcase from "./showcase";

export default async function RecentlyUpdated() {
  const recentlyUpdated = (await getRecentlyUpdated()) || [];
  return <Showcase games={recentlyUpdated} title="Recently updated" />;
}
