import SearchGames from "@/components/games/search-games";
import Showcase from "@/components/showcase";
import {
  getRecentlyReleased,
  getRecentlyUpdated,
  getSystemSellers,
} from "@/data/showcase";
import { mapGames } from "@/lib/functions";

export default async function Home() {
  const recentlyReleased = ((await getRecentlyReleased()) || []).map(mapGames);
  const systemSellers = ((await getSystemSellers()) || []).map(mapGames);
  const recentlyUpdated = ((await getRecentlyUpdated()) || []).map(mapGames);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* TODO: Live search bar */}
      {/* <div className="w-full">
        <form></form>
      </div> */}
      {/* Showcases */}
      <div className="space-y-12">
        {/* Recently released */}
        <Showcase title="Recently Released" games={recentlyReleased} />
        {/* Performance recently updated */}
        <Showcase title="Recently Updated" games={recentlyUpdated} />
        {/* System sellers */}
        <Showcase title="System Sellers" games={systemSellers} />
      </div>
    </main>
  );
}
