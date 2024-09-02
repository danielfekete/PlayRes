import React from 'react'
import Showcase from './showcase'
import { getMostHypedGames } from '@/data/showcase'

export default async function MostHyped() {
  const mostHypedGames = (await getMostHypedGames()) || []

  return <Showcase games={mostHypedGames} title="Most hyped" />
}
