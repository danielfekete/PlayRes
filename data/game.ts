import { db } from "@/lib/db";

export const getGame = async (id: string) => {
  try {
    const data = await db.game.findUnique({
      where: {
        id,
      },
      include: {
        developer: true,
        genres: {
          include: {
            genre: true,
          },
        },
        performances: {
          include: {
            console: true,
            performanceModes: true,
          },
        },
        releaseDates: true,
        publisher: true,
        platforms: {
          include: {
            platform: true,
          },
        },
      },
    });
    return data;
  } catch (e) {
    console.error(e);
  }
};
