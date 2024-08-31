import React from "react";
import { Button } from "../ui/button";

export default function SortGames() {
  return (
    <Button variant="outline" size="icon">
      {/* <SortIco className="h-6 w-6" /> */}
      <span className="sr-only">Filter games</span>
    </Button>
  );
}
