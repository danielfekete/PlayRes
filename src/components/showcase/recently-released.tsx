import React from 'react'
import Showcase from './showcase'
import { getRecentlyReleasedGames } from '@/data/showcase'

export default async function RecentlyReleased() {
  const recentlyReleased = (await getRecentlyReleasedGames()) || []
  return <Showcase games={recentlyReleased} title="Recently released" />
}
