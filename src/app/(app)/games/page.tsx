import AddYourGame from '@/components/games/add-your-game'
import FilterGamesWrapper from '@/components/games/filter-games-wrapper'
import GamesList from '@/components/games/games-list'
import { FilterGamesSkeleton, GamesListSkeleton } from '@/components/skeletons'
import { Suspense } from 'react'

export default async function Games({
  searchParams,
}: {
  searchParams?: {
    page?: string
    name?: string
    genres?: string | string[]
    developers?: string | string[]
    publishers?: string | string[]
    platforms?: string | string[]
    sortBy?: string
  }
}) {
  return (
    <div className="py-4 bg-white container relative">
      <div className="space-y-6">
        <div className="grid grid-cols-4">
          {/* <div className="col-span-1"></div>
            <div className="col-span-3 space-y-4">Applied filters go here</div> */}
          <div className="col-span-1">
            <Suspense fallback={<FilterGamesSkeleton />}>
              <FilterGamesWrapper />
            </Suspense>
            <AddYourGame />
          </div>
          <div className="col-span-3 space-y-4">
            {/* <GamesPagination totalPages={totalPages} /> */}
            {/* A list of games */}
            {/* <GamesListSkeleton /> */}
            <Suspense fallback={<GamesListSkeleton />}>
              <GamesList searchParams={searchParams || {}} />
            </Suspense>
            {/* Bottom pagination */}
            {/* <GamesPagination totalPages={totalPages} /> */}
          </div>
        </div>
      </div>
    </div>
  )
}
