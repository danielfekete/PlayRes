import FilterGames from "@/components/games/filter-games";
import GamesList from "@/components/games/games-list";
import GamesPagination from "@/components/games/games-pagination";
import SearchGames from "@/components/games/search-games";
import { getGamesTotalPages } from "@/data/games";
import { getPlatforms } from "@/data/platforms";

export default async function Games({
  searchParams,
}: {
  searchParams?: {
    name?: string;
    developerId?: string;
    publisherId?: string;
  };
}) {
  const totalPages = (await getGamesTotalPages()) || 0;
  const platforms = (await getPlatforms()) || [];

  console.log("platforms", platforms);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 py-11 relative ">
      {/* A search bar where user can search for particular game */}
      <div className="fixed w-full px-24 bg-white z-50">
        <div className="flex gap-3">
          <SearchGames className="flex-1" />
          <FilterGames
            platforms={platforms.map(({ id, name }) => ({
              value: id,
              label: name,
            }))}
          />
        </div>
      </div>

      {/* A filter component to filter games based on genre */}
      {/* <FilterGames /> */}
      {/* Top pagination */}
      <div className="mt-12">
        <GamesPagination totalPages={totalPages} />
        {/* A list of games */}
        <GamesList searchParams={searchParams} />
        {/* Bottom pagination */}
        <GamesPagination totalPages={totalPages} />
      </div>
    </main>
  );
}
