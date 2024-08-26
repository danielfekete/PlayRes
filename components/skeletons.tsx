import React from "react";
import { Card } from "./ui/card";

const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function GameCardSkeleton() {
  return (
    <Card
      className={`${shimmer} relative overflow-hidden rounded-xl bg-white p-2 shadow-sm`}
    >
      <div className="flex items-center justify-center truncate rounded-xl bg-gray-200 px-4 py-[100px]"></div>
      <div className="p-4 space-y-2">
        <div className="h-6 w-2/5 rounded-md bg-gray-200 text-sm font-medium" />
        <div className="h-6 w-1/6 rounded-md bg-gray-200 text-sm font-medium" />
      </div>
    </Card>
  );
}

export function GamesListSkeleton({ count = 6 }) {
  return (
    <div className="w-full space-y-4">
      <div className="flex justify-center">
        <div className="h-10 bg-gray-200 w-1/5"></div>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {[...Array(count)].map((_, index) => (
          <GameCardSkeleton key={index} />
        ))}
      </div>
      <div className="flex justify-center">
        <div className="h-10 bg-gray-200 w-1/5"></div>
      </div>
    </div>
  );
}

export function FilterGamesSkeleton() {
  return (
    <div className="flex flex-col gap-4 px-4">
      <div className="h-6 w-2/5 rounded-md bg-gray-200 text-sm font-medium"></div>
      <div className="h-24 w-full rounded-md bg-white grid grid-cols-3 gap-3">
        <div className="h-full bg-gray-200 rounded-md"></div>
        <div className="h-full bg-gray-200 rounded-md"></div>
        <div className="h-full bg-gray-200 rounded-md"></div>
      </div>
      <div className="h-6 w-2/5 rounded-md bg-gray-200 text-sm font-medium"></div>
      <div className="h-10 w-full rounded-md bg-gray-200 text-sm font-medium"></div>
      <div className="h-6 w-2/5 rounded-md bg-gray-200 text-sm font-medium"></div>
      <div className="h-10 w-full rounded-md bg-gray-200 text-sm font-medium"></div>
      <div className="h-6 w-2/5 rounded-md bg-gray-200 text-sm font-medium"></div>
      <div className="h-10 w-full rounded-md bg-gray-200 text-sm font-medium"></div>
      <div className="h-6 w-1/5 rounded-md bg-gray-200 text-sm font-medium"></div>
    </div>
  );
}

export function ShowcaseSkeleton() {
  return (
    <div className="w-full space-y-4">
      <div className="h-10 w-1/5 rounded-md bg-gray-200 text-sm font-medium"></div>
      <div className="grid grid-cols-3 gap-5">
        {[...Array(6)].map((_, index) => (
          <GameCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}
