import FilterGames from "@/components/games/filter-games";
import GamesList from "@/components/games/games-list";
import GamesPagination from "@/components/games/games-pagination";
import SearchGames from "@/components/games/search-games";
import { useState } from "react";

export default function Games({
  searchParams,
}: {
  searchParams?: {
    name?: string;
    page?: string;
    developerId?: string;
    publisherId?: string;
  };
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* A search bar where user can search for particular game */}
      <SearchGames />
      {/* A filter component to filter games based on genre */}
      {/* <FilterGames /> */}
      {/* Top pagination */}
      {/* <GamesPagination totalPages={5} /> */}
      {/* A list of games */}
      <GamesList searchParams={searchParams} />
      {/* Bottom pagination */}
      {/* <GamesPagination
        currentPage={currentPage}
        onPageChange={handlePageChange}
        totalPages={5}
      /> */}
    </main>
  );
}
