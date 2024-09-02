import UpdateGameDialog from '@/components/games/update-game-dialog'
import NavigateBack from '@/components/navigate-back'
import { Badge } from '@/components/ui/badge'
import { getGame } from '@/data/game'
import { format } from 'date-fns'
import Image from 'next/image'

export default async function Game({ params: { gameId } }: { params: { gameId: string } }) {
  const data = await getGame(Number(gameId))

  console.log(JSON.stringify(data))
  if (!data) return <div>Game not found</div>

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-12 space-y-4">
      <div className="flex gap-3">
        <NavigateBack />
        <h1 className="flex-1 text-4xl font-bold">{data.name}</h1>
      </div>
      <div className="grid gap-8 md:grid-cols-3 items-start">
        <div className="space-y-4">
          <Image
            src={data.cover.url || ''}
            alt={data.cover.text || ''}
            width={data.cover.width || 264}
            height={data.cover.height || 352}
            className="rounded-lg object-cover max-h-[400px] "
          />
        </div>
        <div className="col-span-2 grid gap-4 py-4">
          <div>
            <div className="text-sm font-medium text-muted-foreground">Genres</div>
            <div className="flex flex-wrap gap-2 mt-2">
              {data.genres.map(({ name, id }) => (
                <Badge key={id} variant="outline">
                  {name}
                </Badge>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <div className="text-sm font-medium text-muted-foreground">Developer</div>
              <div className="text-base font-medium">
                {data.developer ? data.developer.name : '-'}
              </div>
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground">Publisher</div>
              <div className="text-base font-medium">
                {data.publisher ? data.publisher.name : '-'}
              </div>
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground">Platforms</div>
              <div className="text-base font-medium space-x-2">
                {data.platforms.map(({ id, logo }) => (
                  <Image
                    key={id}
                    src={logo.url}
                    alt={logo.text}
                    width={20}
                    height={20}
                    className="inline-block"
                  />
                ))}
              </div>
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground">Release Date(s)</div>
              {data.releaseDates.map(({ region, date }) =>
                date ? (
                  <div key={region} className="text-base font-medium">
                    {region}: {format(date, 'MMMM dd, yyyy')}
                  </div>
                ) : null,
              )}
            </div>
          </div>
          <div className="space-y-2 py-4">
            <div className="text-base">Is there missing or incorrect information?</div>
            <UpdateGameDialog gameName={data.name} />
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-2xl font-bold">Performance</h3>
        <div className="space-y-4">
          {data.performances.map(
            ({ console: { name }, hdr, threeDAudio, updated, performanceModes, id }) => {
              return (
                <div key={id} className="border border-gray-300 p-4 rounded-lg shadow-md">
                  <div className="text-base font-medium">{name}</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                    {performanceModes.map(
                      ({ id, frameRate, resolution, rayTracing, upscalingMethod, name }) => (
                        <div key={id} className="px-4">
                          <div className="text-base font-medium py-2">{name}</div>
                          <div className="space-y-4">
                            <div>
                              <div className="text-base font-medium">Frame rate</div>
                              <div className="text-sm text-muted-foreground">{frameRate}</div>
                            </div>
                            <div>
                              <div className="text-base font-medium">Resolution</div>
                              <div className="text-sm text-muted-foreground">{resolution}</div>
                            </div>
                            {upscalingMethod ? (
                              <div>
                                <div className="text-base font-medium">Upscaling method</div>
                                <div className="text-sm text-muted-foreground">
                                  {upscalingMethod}
                                </div>
                              </div>
                            ) : null}
                            <div>
                              <div className="text-base font-medium">RayTracing</div>
                              <div className="text-sm text-muted-foreground">
                                {rayTracing ? 'Supported' : 'Not Supported'}
                              </div>
                            </div>
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                  <div className="space-x-2 pt-4">
                    {hdr ? <Badge>HDR</Badge> : null}
                    {threeDAudio ? <Badge>3D audio</Badge> : null}
                  </div>
                </div>
              )
            },
          )}
        </div>
      </div>
    </div>
  )
}
