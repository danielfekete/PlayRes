import RecentlyReleased from "@/components/showcase/recently-released";
import RecentlyUpdated from "@/components/showcase/recently-updated";
import SystemSellers from "@/components/showcase/system-sellers";
import { ShowcaseSkeleton } from "@/components/skeletons";
import { Welcome } from "@/components/welcome";
import { Suspense } from "react";

export default async function Home() {
  return (
    <div className="w-full">
      <Welcome />

      <div className="space-y-12 container py-4">
        {/* TODO: Live search bar */}
        {/* <div className="w-full">
        <form></form>
      </div> */}
        {/* Showcases */}
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
    </div>
  );
}
