import { getMasterpieceGames } from '@/data/showcase'
import React from 'react'
import Showcase from './showcase'

export default async function Masterpieces() {
  const games = (await getMasterpieceGames()) || []

  return <Showcase games={games} title="Masterpieces" />
}
