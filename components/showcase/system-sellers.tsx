import { getSystemSellers } from "@/data/showcase";
import { mapGames } from "@/lib/functions";
import React from "react";
import Showcase from "./showcase";

export default async function SystemSellers() {
  const systemSellers = ((await getSystemSellers()) || []).map(mapGames);

  return <Showcase games={systemSellers} title="System sellers" />;
}
