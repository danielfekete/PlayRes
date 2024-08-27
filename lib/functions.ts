export const FSR = "FSR";
export const RAY_TRACING = "Ray Tracing";
export const HDR = "HDR";
export const THREE_D_AUDIO = "3D Audio";
export const NATIVE_4k = "Native 4K";
export const SIXTY_FPS = "60 FPS";
export const PERFORMANCE_TAGS = [
  FSR,
  RAY_TRACING,
  HDR,
  THREE_D_AUDIO,
  NATIVE_4k,
  SIXTY_FPS,
];

export const mapPlatforms = ({
  platform,
}: {
  platform: {
    id: string;
    name: string;
    logo: string;
  };
  gameId: string;
  platformId: string;
}) => platform;

export const mapGames = ({
  id,
  name,
  platforms,
  coverImage,
  performances,
}: {
  id: string;
  name: string;
  coverImage: string;
  platforms: {
    platform: {
      id: string;
      name: string;
      logo: string;
    };
    gameId: string;
    platformId: string;
  }[];
  performances: {
    hdr: boolean;
    threeDAudio: boolean;
    performanceModes: {
      id: string;
      name: string;
      resolution: string;
      frameRate: string;
      upscalingMethod: string | null;
      rayTracing: boolean;
    }[];
  }[];
}) => ({
  id,
  name,
  coverImage,
  platforms: platforms.map(mapPlatforms),
  performanceTags: getPerformanceTags(performances),
});

export const getArrayParamValue = (param?: string | string[]) =>
  param ? (Array.isArray(param) ? param : [param]) : undefined;

export const getPerformanceTags = (
  performances: {
    hdr: boolean;
    threeDAudio: boolean;
    performanceModes: {
      id: string;
      name: string;
      resolution: string;
      frameRate: string;
      upscalingMethod: string | null;
      rayTracing: boolean;
    }[];
  }[]
) => {
  const tags = new Set<string>();

  performances.forEach(({ performanceModes, hdr, threeDAudio }) => {
    if (hdr) {
      tags.add(HDR);
    }
    if (threeDAudio) {
      tags.add(THREE_D_AUDIO);
    }
    performanceModes.forEach(
      ({ frameRate, rayTracing, resolution, upscalingMethod }) => {
        if (upscalingMethod && upscalingMethod.toUpperCase().includes(FSR)) {
          tags.add(FSR);
        }
        if (rayTracing) {
          tags.add(RAY_TRACING);
        }
        if (frameRate.toUpperCase().includes(SIXTY_FPS)) {
          tags.add(SIXTY_FPS);
        }
        if (resolution.toUpperCase().includes("4K")) {
          tags.add(NATIVE_4k);
        }
      }
    );
  });

  return Array.from(tags);
};
