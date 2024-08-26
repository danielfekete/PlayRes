import RecentlyReleased from "@/components/showcase/recently-released";
import RecentlyUpdated from "@/components/showcase/recently-updated";
import SystemSellers from "@/components/showcase/system-sellers";
import { ShowcaseSkeleton } from "@/components/skeletons";
import { Suspense } from "react";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* TODO: Live search bar */}
      {/* <div className="w-full">
        <form></form>
      </div> */}
      {/* Showcases */}
      <div className="space-y-12 w-full">
        {/* Recently released */}
        <Suspense fallback={<ShowcaseSkeleton />}>
          <RecentlyReleased />
        </Suspense>
        {/* Performance recently updated */}
        <Suspense fallback={<ShowcaseSkeleton />}>
          <RecentlyUpdated />
        </Suspense>
        {/* System sellers */}
        <Suspense fallback={<ShowcaseSkeleton />}>
          <SystemSellers />
        </Suspense>
      </div>
    </main>
  );
}
