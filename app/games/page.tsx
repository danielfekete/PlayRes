import FilterGamesWrapper from "@/components/games/filter-games-wrapper";
import GamesList from "@/components/games/games-list";
import GamesPagination from "@/components/games/games-pagination";
import SearchGames from "@/components/games/search-games";
import { FilterGamesSkeleton, GamesListSkeleton } from "@/components/skeletons";
import { Suspense } from "react";

export default async function Games({
  searchParams,
}: {
  searchParams?: {
    name?: string;
    developerId?: string;
    publisherId?: string;
  };
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 py-11 relative ">
      {/* A search bar where user can search for particular game */}
      <div className="fixed w-full px-24 bg-white z-50">
        <div className="flex gap-3">
          <SearchGames className="flex-1" />
        </div>

        {/* A filter component to filter games based on genre */}
        {/* <FilterGames /> */}
        {/* Top pagination */}
        <div className="mt-12 space-y-6">
          <div className="grid grid-cols-4">
            {/* <div className="col-span-1"></div>
            <div className="col-span-3 space-y-4">Applied filters go here</div> */}
            <div className="col-span-1">
              <Suspense fallback={<FilterGamesSkeleton />}>
                <FilterGamesWrapper />
              </Suspense>
            </div>
            <div className="col-span-3 space-y-4">
              {/* <GamesPagination totalPages={totalPages} /> */}
              {/* A list of games */}
              {/* <GamesListSkeleton /> */}
              <Suspense fallback={<GamesListSkeleton />}>
                <GamesList searchParams={searchParams} />
              </Suspense>
              {/* Bottom pagination */}
              {/* <GamesPagination totalPages={totalPages} /> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
