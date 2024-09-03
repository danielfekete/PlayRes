import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '../ui/badge'
import { Media, Platform } from 'payload-types'
import { StarIcon } from 'lucide-react'

interface GameCardProps {
  id: number
  name: string
  platforms: Platform[]
  img: Media
  rating?: number | null
  tags: string[]
}

export default function GameCard({ img, platforms, name, id, tags, rating }: GameCardProps) {
  return (
    <Card className="w-full max-w-md rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
      <Link href={`/games/${id}`}>
        <CardContent className="grid grid-cols-2 p-0">
          <div className="h-full w-full">
            <Image
              src={img.url || ''}
              width={img.width || 264}
              height={img.height || 352}
              alt={img.text || ''}
              className="object-fit w-full h-full max-h-[250px]"
            />
          </div>
          <div className="p-4 bg-background space-y-2">
            {/* Game name */}
            <div className="break-words">
              <h3 className="text-xl font-bold">{name}</h3>
            </div>
            {/* Platforms */}
            <div className="flex gap-2">
              {platforms.map((platform) => {
                const logo = platform.logo as Media
                return (
                  <Image
                    key={id}
                    src={logo.url || ''}
                    alt={logo.text || ''}
                    width={20}
                    height={20}
                  />
                )
              })}
            </div>
            {/* Rating */}
            {rating ? (
              <div className="flex items-center mt-2">
                <StarIcon className="w-4 h-4 fill-yellow-500" />
                <span>{rating.toFixed(0)}/100</span>
              </div>
            ) : null}
            {/* Performance tags */}
            <div className="mt-2">
              {tags.map((tag) => (
                <Badge
                  key={tag}
                  className="px-2 mr-2 mb-2 py-1 text-xs font-semibold text-white bg-primary rounded"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  )
}
