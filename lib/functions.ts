import { Platform } from "@prisma/client";

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
}: {
  id: string;
  name: string;
  platforms: {
    platform: {
      id: string;
      name: string;
      logo: string;
    };
    gameId: string;
    platformId: string;
  }[];
  coverImage: string;
}) => ({
  id,
  name,
  coverImage,
  platforms: platforms.map(mapPlatforms),
});
