import RecentlyReleased from '@/components/showcase/recently-released'
// import RecentlyUpdated from '@/components/showcase/recently-updated'
import MostHyped from '@/components/showcase/most-hyped'
import { ShowcaseSkeleton } from '@/components/skeletons'
import { Welcome } from '@/components/welcome'
import { Suspense } from 'react'
import Masterpieces from '@/components/showcase/masterpieces'

export default async function Home() {
  return (
    <div className="w-full">
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
          <Masterpieces />
        </Suspense>
      </div>
    </div>
  )
}
