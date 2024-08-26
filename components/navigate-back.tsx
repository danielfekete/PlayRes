"use client";
import { ArrowLeftIcon } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function NavigateBack() {
  const { back } = useRouter();

  return (
    <Button variant="link" className="gap-2" onClick={() => back()}>
      <ArrowLeftIcon className="w-5 h-5" />
      Back
    </Button>
  );
}
