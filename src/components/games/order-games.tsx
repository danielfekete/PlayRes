'use client'
import React, { useCallback } from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export default function OrderGames() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  // Function to handle search input change
  // It will update the name query parameter in the URL
  const onChange = useCallback(
    (value: string) => {
      const sortBy = value
      const params = new URLSearchParams(searchParams)

      params.set('page', '1')
      if (sortBy) {
        params.set('sortBy', sortBy)
      } else {
        params.delete('sortBy')
      }
      replace(`${pathname}?${params.toString()}`)
    },
    [searchParams, pathname, replace],
  )

  return (
    <Select onValueChange={onChange} defaultValue={searchParams.get('sortBy')?.toString()}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="+name">Name (A-Z)</SelectItem>
          <SelectItem value="-name">Name (Z-A)</SelectItem>
          <SelectItem value="-firstReleaseDate">Release date (newest first)</SelectItem>
          <SelectItem value="+firstReleaseDate">Release date (oldest first)</SelectItem>
          <SelectItem value="-rating">Top rated</SelectItem>
          <SelectItem value="-hype">Most hyped</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
