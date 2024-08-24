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
