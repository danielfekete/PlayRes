import { db } from "@/lib/db";

export const getShowcase = async () => {
  try {
    // Get the 5 most recently released games
    const showcase = await db.game.findMany({
      include: {
        releaseDates: {
          orderBy: {
            date: "desc",
          },
        },
        // developer: true,
        // publisher: true,
        platforms: true,
      },
      take: 5,
    });

    return showcase;
  } catch (e) {
    console.error(e);
  }
};
