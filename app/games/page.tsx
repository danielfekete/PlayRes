import FilterGames from "@/components/games/filter-games";
import GamesList from "@/components/games/games-list";
import GamesPagination from "@/components/games/games-pagination";
import SearchGames from "@/components/games/search-games";
import SortGames from "@/components/games/sort-games";
import { getDevelopers } from "@/data/developers";
import { getGamesTotalPages } from "@/data/games";
import { getGenres } from "@/data/genres";
import { getPlatforms } from "@/data/platforms";
import { getPublishers } from "@/data/publishers";

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
  const publishers = (await getPublishers()) || [];
  const developers = (await getDevelopers()) || [];
  const genres = (await getGenres()) || [];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 py-11 relative ">
      {/* A search bar where user can search for particular game */}
      <div className="fixed w-full px-24 bg-white z-50">
        <div className="flex gap-3">
          <SearchGames className="flex-1" />
          <FilterGames
            platforms={platforms}
            developers={developers}
            genres={genres}
            publishers={publishers}
          />
        </div>
      </div>

      {/* A filter component to filter games based on genre */}
      {/* <FilterGames /> */}
      {/* Top pagination */}
      <div className="mt-12 space-y-6">
        <div>
          <GamesPagination totalPages={totalPages} />
          <SortGames />
        </div>
        {/* A list of games */}
        <GamesList searchParams={searchParams} />
        {/* Bottom pagination */}
        <GamesPagination totalPages={totalPages} />
      </div>
    </main>
  );
}
