import { getSystemSellers } from "@/data/showcase";
import React from "react";
import Showcase from "./showcase";

export default async function SystemSellers() {
  const systemSellers = (await getSystemSellers()) || [];

  return <Showcase games={systemSellers} title="System sellers" />;
}
