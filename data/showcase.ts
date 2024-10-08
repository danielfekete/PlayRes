import { db } from "@/lib/db";
import { mapGames } from "@/lib/functions";

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
        performances: {
          include: {
            performanceModes: true,
          },
        },
      },
      take: 6,
    });

    return recentlyReleased.map(mapGames);
  } catch (e) {
    console.error(e);
  }
};

// export const getRecentlyUpdated = async () => {}

export const getSystemSellers = async () => {
  const take = 2;
  try {
    // Best selling 2 games on PlayStation
    const bestSellingPS = await db.game.findMany({
      orderBy: {
        copiesSold: "desc",
      },
      where: {
        platforms: {
          every: {
            platform: {
              name: "PlayStation",
            },
          },
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
        performances: {
          include: {
            performanceModes: true,
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
          every: {
            platform: {
              name: "Xbox",
            },
          },
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
        performances: {
          include: {
            performanceModes: true,
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
          every: {
            platform: {
              name: "Nintendo",
            },
          },
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
        performances: {
          include: {
            performanceModes: true,
          },
        },
      },
      take,
    });

    return [
      ...bestSellingPS.map(mapGames),
      ...bestSellingXbox.map(mapGames),
      ...bestSellingNintendo.map(mapGames),
    ];
  } catch (e) {
    console.error(e);
  }
};

export const getRecentlyUpdated = async () => {
  try {
    const recentlyUpdated = await db.game.findMany({
      include: {
        platforms: {
          include: {
            platform: true,
          },
        },
        performances: {
          orderBy: {
            updated: "desc",
          },
          include: {
            performanceModes: true,
          },
        },
      },
      take: 6,
    });

    return recentlyUpdated.map(mapGames);
  } catch (e) {
    console.error(e);
  }
};
