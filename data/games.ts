import { db } from "@/lib/db";

export const getGames = async ({
  name,
  //   genre,
  developerId,
  publisherId,
}: //   platforms,
{
  name?: string;
  //   genre?: string;
  developerId?: string;
  publisherId?: string;
  //   platforms?: string;
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
      },
      where: {
        name: {
          contains: name,
          mode: "insensitive",
        },
        developerId,
        publisherId,
      },
      orderBy: {
        name: "asc",
      },
    });
    return games;
  } catch (err) {
    console.log(err);
  }
};

export const getGamesTotalPages = async () => {
  const totalGames = await db.game.count();
  return Math.ceil(totalGames / 30);
};
