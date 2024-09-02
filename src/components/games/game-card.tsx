import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '../ui/badge'
import { Media, Platform } from 'payload-types'

interface GameCardProps {
  id: number
  name: string
  platforms: Platform[]
  img: Media
  tags: string[]
}

export default function GameCard({ img, platforms, name, id, tags }: GameCardProps) {
  return (
    <Card className="w-full max-w-md rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
      <Link href={`/games/${id}`}>
        <CardContent className="grid grid-cols-2 p-0">
          <div className="h-full w-full">
            <Image
              src={img.url}
              width={img.width}
              height={img.height}
              alt={img.text}
              className="object-fit w-full h-full max-h-[250px]"
            />
          </div>
          <div className=" p-4 bg-background">
            {/* Game name */}
            <div className="break-words">
              <h3 className="text-xl font-bold">{name}</h3>
            </div>
            {/* Platforms */}
            <div className="flex gap-2">
              {platforms.map(({ id, logo, name }) => (
                <Image key={id} src={logo.url} alt={name} width={20} height={20} />
              ))}
            </div>
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
