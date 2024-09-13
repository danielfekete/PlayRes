import { Game, Media, Platform } from 'payload-types'

export const FSR = 'FSR'
export const RAY_TRACING = 'Ray Tracing'
export const HDR = 'HDR'
export const THREE_D_AUDIO = '3D Audio'
export const NATIVE_4k = 'Native 4K'
export const SIXTY_FPS = '60 FPS'
export const PERFORMANCE_TAGS = [FSR, RAY_TRACING, HDR, THREE_D_AUDIO, NATIVE_4k, SIXTY_FPS]

export const getArrayParamValue = (param?: string | string[]) =>
  param ? (Array.isArray(param) ? param : [param]) : undefined

export const listGamesMap = (game: Game) => {
  let performances: Game['performances'] = []

  if (game.performances && game.performances.length > 0) {
    for (const perf of game.performances) {
      if (!perf || typeof perf === 'number') {
        continue
      }
      performances.push(perf)
    }
  }

  return {
    id: game.id,
    name: game.name,
    rating: game.rating,
    coverImage: game.coverImage as Media,
    platforms: game.platforms as Platform[],
    performanceTags: getPerformanceTags(performances),
  }
}

export const getPerformanceTags = (performances: Game['performances']) => {
  const tags = new Set<string>()

  if (!performances || !performances.length) {
    return []
  }

  for (const performance of performances) {
    if (!performance) {
      continue
    }
    if (performance.hdr) {
      tags.add(HDR)
    }
    if (performance.threeDAudio) {
      tags.add(THREE_D_AUDIO)
    }

    if (!performance.performanceModes) {
      continue
    }

    for (const performanceMode of performance.performanceModes) {
      if (
        performanceMode.upscalingMethod &&
        typeof performanceMode.upscalingMethod !== 'number' &&
        performanceMode.upscalingMethod.name.toUpperCase().includes(FSR)
      ) {
        tags.add(FSR)
      }
      if (performanceMode.rayTracing) {
        tags.add(RAY_TRACING)
      }
      if (performanceMode.frameRate.toUpperCase().includes(SIXTY_FPS)) {
        tags.add(SIXTY_FPS)
      }
      if (performanceMode.maxResolution === 2160) {
        tags.add(NATIVE_4k)
      }
    }
  }

  return Array.from(tags)
}
