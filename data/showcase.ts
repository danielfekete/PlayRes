import { db } from "@/lib/db";

export const getRecentlyReleased = async () => {
  try {
    // Get the 6 most recently released games
    const recentlyReleased = await db.game.findMany({
      include: {
        releaseDates: {
          orderBy: {
            date: "desc",
          },
        },
        // developer: true,
        // publisher: true,
        platforms: {
          include: {
            platform: true,
          },
        },
      },
      take: 6,
    });

    return recentlyReleased;
  } catch (e) {
    console.error(e);
  }
};

// export const getRecentlyUpdated = async () => {}

export const systemSellers = async () => {
  const take = 2;
  try {
    // Best selling 2 games on PlayStation
    const bestSellingPS = await db.game.findMany({
      orderBy: {
        copiesSold: "desc",
      },
      where: {
        platforms: {
          some: {
            platform: {
              name: "PlayStation",
            },
          },
        },
      },
      include: {
        platforms: {
          include: {
            platform: true,
          },
        },
      },
      take,
    });

    // Best selling 2 games on Xbox
    const bestSellingXbox = await db.game.findMany({
      orderBy: {
        copiesSold: "desc",
      },
      where: {
        platforms: {
          some: {
            platform: {
              name: "Xbox",
            },
          },
        },
      },
      include: {
        platforms: {
          include: {
            platform: true,
          },
        },
      },
      take,
    });

    // Best selling 2 games on Nintendo
    const bestSellingNintendo = await db.game.findMany({
      orderBy: {
        copiesSold: "desc",
      },
      where: {
        platforms: {
          some: {
            platform: {
              name: "Nintendo",
            },
          },
        },
      },
      include: {
        platforms: {
          include: {
            platform: true,
          },
        },
      },
      take,
    });

    return [...bestSellingPS, ...bestSellingXbox, ...bestSellingNintendo];
  } catch (e) {
    console.error(e);
  }
};
