import { db } from "@/lib/db";
import { mapGames } from "@/lib/functions";

export const getGames = async ({
  name,
  genres,
  developers,
  publishers,
  platforms,
}: {
  name?: string;
  genres?: string[];
  developers?: string[];
  publishers?: string[];
  platforms?: string[];
}) => {
  try {
    const games = await db.game.findMany({
      include: {
        publisher: true,
        platforms: {
          include: {
            platform: true,
          },
        },
        performances: {
          include: {
            performanceModes: true,
          },
        },
      },
      where: {
        // Game name
        name: {
          contains: name,
          mode: "insensitive",
        },
        // Publisher
        publisherId: {
          in: publishers,
        },
        // Genres
        genres: {
          some: {
            genreId: {
              in: genres,
            },
          },
        },
        // Developer
        developerId: {
          in: developers,
        },
        // Platforms
        platforms: {
          some: {
            platformId: {
              in: platforms,
            },
          },
        },
      },
      orderBy: {
        name: "asc",
      },
    });
    return games.map(mapGames);
  } catch (err) {
    console.log(err);
  }
};

export const getGamesTotalPages = async () => {
  const totalGames = await db.game.count();
  return Math.ceil(totalGames / 30);
};
