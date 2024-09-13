import RecentlyReleased from '@/components/showcase/recently-released'
// import RecentlyUpdated from '@/components/showcase/recently-updated'
import MostHyped from '@/components/showcase/most-hyped'
import { ShowcaseSkeleton } from '@/components/skeletons'
import { Welcome } from '@/components/welcome'
import { Suspense } from 'react'
import CriticallyAcclaimed from '@/components/showcase/critically-acclaimed'

export default async function Home() {
  return (
    <div className="w-full py-4">
      <Welcome />
      <div className="space-y-12 container py-4">
        {/* Showcases */}
        {/* Recently released */}
        <Suspense fallback={<ShowcaseSkeleton />}>
          <RecentlyReleased />
        </Suspense>
        {/* Performance recently updated */}
        {/* <Suspense fallback={<ShowcaseSkeleton />}>
          <RecentlyUpdated />
        </Suspense> */}
        {/* System sellers */}
        <Suspense fallback={<ShowcaseSkeleton />}>
          <MostHyped />
        </Suspense>
        <Suspense fallback={<ShowcaseSkeleton />}>
          <CriticallyAcclaimed />
        </Suspense>
      </div>
    </div>
  )
}
