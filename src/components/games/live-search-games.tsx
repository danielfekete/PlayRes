'use client'
import React, { useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { SearchIcon } from 'lucide-react'
import { useDebouncedCallback } from 'use-debounce'
import { useRouter } from 'next/navigation'
import { Media, Platform } from 'payload-types'
import Image from 'next/image'
import Link from 'next/link'

export default function LiveSearchGames() {
  const [searchResults, setSearchResults] = useState<
    {
      id: number
      name: string
      coverImage: Media
      platforms: Platform[]
    }[]
  >([])
  const [showResults, setShowResults] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const { push } = useRouter()

  const handleSearch = useDebouncedCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()

    const params = new URLSearchParams()
    setSearchQuery(value)

    if (value === '' || value.length < 3) {
      setSearchResults([])
      setShowResults(false)
      return
    }
    params.set('q', value)

    const res = await fetch(`/api/games?${params.toString()}`)
    const data = await res.json()
    setSearchResults(data.games)
    setShowResults(true)
  }, 300)

  const handleSearchClick = async () => {
    const params = new URLSearchParams()
    params.set('name', searchQuery)

    push(`/games?${params.toString()}`)
  }

  return (
    <div>
      <div className="relative">
        <Input
          type="search"
          placeholder="Search for games..."
          className="pr-12 bg-muted text-foreground rounded-md w-full"
          onChange={handleSearch}
        />
        <Button variant="ghost" size="icon" className="absolute top-1/2 right-3 -translate-y-1/2">
          <SearchIcon className="w-5 h-5 text-muted-foreground" onClick={handleSearchClick} />
        </Button>
      </div>
      {showResults && (
        <div className="mt-4 bg-muted rounded-md shadow-md">
          {searchResults.length === 0 ? (
            <p className="p-4"> No results</p>
          ) : (
            <ul className="divide-y divide-muted/50">
              {searchResults.map(({ id, coverImage, name }) => (
                <Link key={id} href={`/games/${id}`}>
                  <li className="p-4 hover:bg-muted/50 cursor-pointer">
                    <div className="flex gap-3">
                      <div>
                        <Image
                          src={coverImage.url || ''}
                          alt={coverImage.text || ''}
                          width={60}
                          height={60}
                        />
                      </div>
                      <div className="flex items-center">
                        <h3 className="text-xl">{name}</h3>
                      </div>
                    </div>
                  </li>
                </Link>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}
