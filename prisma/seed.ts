import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Platforms
  const ps = await prisma.platform.upsert({
    where: { name: "PlayStation" },
    update: {},
    create: { name: "PlayStation", logo: "/playstation.png" },
  });

  const xbox = await prisma.platform.upsert({
    where: { name: "Xbox", logo: "/xbox.png" },
    update: {},
    create: { name: "Xbox", logo: "/xbox.png" },
  });

  const nintendo = await prisma.platform.upsert({
    where: { name: "Nintendo", logo: "/nintendo.png" },
    update: {},
    create: { name: "Nintendo", logo: "/nintendo.png" },
  });

  // Consoles

  const ps5 = await prisma.console.upsert({
    where: { name: "PlayStation 5" },
    update: {},
    create: { name: "PlayStation 5", platformId: ps.id },
  });

  const xboxSeriesX = await prisma.console.upsert({
    where: { name: "Xbox Series X" },
    update: {},
    create: { name: "Xbox Series X", platformId: xbox.id },
  });

  const xboxSeriesS = await prisma.console.upsert({
    where: { name: "Xbox Series S" },
    update: {},
    create: { name: "Xbox Series S", platformId: xbox.id },
  });

  const nsw = await prisma.console.upsert({
    where: { name: "Nintendo Switch" },
    update: {},
    create: { name: "Nintendo Switch", platformId: nintendo.id },
  });

  // Genres
  const actionAdventure = await prisma.genre.upsert({
    where: { name: "Action-Adventure" },
    update: {},
    create: { name: "Action-Adventure" },
  });

  const rpg = await prisma.genre.upsert({
    where: { name: "RPG" },
    update: {},
    create: { name: "RPG" },
  });

  const racing = await prisma.genre.upsert({
    where: { name: "Racing" },
    update: {},
    create: { name: "Racing" },
  });

  const hackAndSlash = await prisma.genre.upsert({
    where: { name: "Hack and slash" },
    update: {},
    create: { name: "Hack and slash" },
  });

  // Developers
  const santaMonicaStudio = await prisma.developer.upsert({
    where: { name: "Santa Monica Studio" },
    update: {},
    create: { name: "Santa Monica Studio" },
  });

  const guerrillaGames = await prisma.developer.upsert({
    where: { name: "Guerrilla Games" },
    update: {},
    create: { name: "Guerrilla Games" },
  });

  const bethesdaGameStudios = await prisma.developer.upsert({
    where: { name: "Bethesda Game Studios" },
    update: {},
    create: { name: "Bethesda Game Studios" },
  });

  const nintendoDeveloper = await prisma.developer.upsert({
    where: { name: "Nintendo" },
    update: {},
    create: { name: "Nintendo" },
  });

  const playgroundGames = await prisma.developer.upsert({
    where: { name: "Playground Games" },
    update: {},
    create: { name: "Playground Games" },
  });

  const idSoftware = await prisma.developer.upsert({
    where: { name: "id Software" },
    update: {},
    create: { name: "id Software" },
  });

  // Publishers
  const sonyInteractiveEntertainment = await prisma.publisher.upsert({
    where: { name: "Sony Interactive Entertainment" },
    update: {},
    create: { name: "Sony Interactive Entertainment" },
  });

  const bethesdaSoftworks = await prisma.publisher.upsert({
    where: { name: "Bethesda Softworks" },
    update: {},
    create: { name: "Bethesda Softworks" },
  });

  const microsoftGameStudios = await prisma.publisher.upsert({
    where: { name: "Microsoft Game Studios" },
    update: {},
    create: { name: "Microsoft Game Studios" },
  });

  const nintendoPublisher = await prisma.publisher.upsert({
    where: { name: "Nintendo" },
    update: {},
    create: { name: "Nintendo" },
  });

  // Games
  const godOfWar = await prisma.game.upsert({
    where: {
      name_developerId_publisherId: {
        name: "God of War Ragnarök",
        developerId: santaMonicaStudio.id,
        publisherId: sonyInteractiveEntertainment.id,
      },
    },
    update: {},
    create: {
      name: "God of War Ragnarök",
      coverImage:
        "https://cdn.mobygames.com/covers/11182321-god-of-war-ragnarok-playstation-5-front-cover.jpg",
      developerId: santaMonicaStudio.id,
      publisherId: sonyInteractiveEntertainment.id,
      genres: {
        create: [{ genreId: actionAdventure.id }, { genreId: hackAndSlash.id }],
      },
      platforms: {
        create: [{ platformId: ps.id }],
      },
      copiesSold: 15_000_000,
      releaseDates: {
        create: [
          {
            date: new Date("2022-09-09"),
            region: "Worldwide",
          },
        ],
      },
      performances: {
        create: [
          {
            hdr: true,
            threeDAudio: true,
            consoleId: ps5.id,
            performanceModes: {
              create: [
                {
                  frameRate: "target 60FPS",
                  resolution: "4K",
                  name: "Performance mode",
                  rayTracing: false,
                },
                {
                  frameRate: "target 30FPS",
                  resolution: "4K",
                  name: "Quality mode",
                  rayTracing: false,
                },
              ],
            },
          },
        ],
      },
    },
  });

  const horizonForbiddenWest = await prisma.game.upsert({
    where: {
      name_developerId_publisherId: {
        name: "Horizon Forbidden West",
        developerId: guerrillaGames.id,
        publisherId: sonyInteractiveEntertainment.id,
      },
    },
    update: {},
    create: {
      copiesSold: 8_400_000,
      name: "Horizon Forbidden West",
      coverImage:
        "https://cdn.mobygames.com/covers/10495868-horizon-ii-forbidden-west-playstation-5-front-cover.jpg",
      developerId: guerrillaGames.id,
      publisherId: sonyInteractiveEntertainment.id,
      genres: {
        create: [{ genreId: actionAdventure.id }, { genreId: rpg.id }],
      },
      platforms: {
        create: [{ platformId: ps.id }],
      },
      releaseDates: {
        create: [
          {
            date: new Date("2022-02-18"),
            region: "Worldwide",
          },
        ],
      },
      performances: {
        create: [
          {
            hdr: true,
            consoleId: ps5.id,
            threeDAudio: true,
            performanceModes: {
              create: [
                {
                  frameRate: "target 60FPS",
                  resolution: "4K",
                  name: "Performance mode",
                  rayTracing: false,
                },
                {
                  frameRate: "target 30FPS",
                  resolution: "4K",
                  name: "Quality mode",
                  rayTracing: false,
                },
              ],
            },
          },
        ],
      },
    },
  });

  const starfield = await prisma.game.upsert({
    where: {
      name_developerId_publisherId: {
        name: "Starfield",
        developerId: bethesdaGameStudios.id,
        publisherId: bethesdaSoftworks.id,
      },
    },
    update: {},
    create: {
      name: "Starfield",
      copiesSold: 3_000_000,
      coverImage:
        "https://cdn.mobygames.com/covers/17586252-starfield-windows-apps-front-cover.jpg",
      developerId: bethesdaGameStudios.id,
      publisherId: bethesdaSoftworks.id,
      genres: {
        create: [{ genreId: rpg.id }, { genreId: actionAdventure.id }],
      },
      platforms: {
        create: [{ platformId: xbox.id }],
      },
      releaseDates: {
        create: [
          {
            date: new Date("2023-09-06"),
            region: "Worldwide",
          },
        ],
      },
      performances: {
        create: [
          {
            hdr: true,
            threeDAudio: true,
            consoleId: xboxSeriesX.id,
            performanceModes: {
              create: [
                {
                  frameRate: "target 60FPS",
                  resolution: "4K",
                  name: "Performance mode",
                  rayTracing: true,
                },
                {
                  frameRate: "target 30FPS",
                  resolution: "4K",
                  name: "Quality mode",
                  rayTracing: false,
                },
              ],
            },
          },
          {
            hdr: false,
            threeDAudio: false,
            consoleId: xboxSeriesS.id,
            performanceModes: {
              create: [
                {
                  frameRate: "target 60FPS",
                  resolution: "1080p",
                  name: "Performance mode",
                  rayTracing: false,
                },
                {
                  frameRate: "target 30FPS",
                  resolution: "1080p",
                  name: "Quality mode",
                  rayTracing: false,
                },
              ],
            },
          },
        ],
      },
    },
  });

  const zeldaTearsOfTheKingdom = await prisma.game.upsert({
    where: {
      name_developerId_publisherId: {
        name: "The Legend of Zelda: Tears of the Kingdom",
        developerId: nintendoDeveloper.id,
        publisherId: nintendoPublisher.id,
      },
    },
    update: {},
    create: {
      copiesSold: 20_610_000,
      name: "The Legend of Zelda: Tears of the Kingdom",
      coverImage:
        "https://cdn.mobygames.com/covers/17111253-the-legend-of-zelda-tears-of-the-kingdom-nintendo-switch-front-c.jpg",
      developerId: nintendoDeveloper.id,
      publisherId: nintendoPublisher.id,
      genres: {
        create: [{ genreId: actionAdventure.id }, { genreId: rpg.id }],
      },
      platforms: {
        create: [{ platformId: nintendo.id }],
      },
      releaseDates: {
        create: [
          {
            date: new Date("2023-05-12"),
            region: "Worldwide",
          },
        ],
      },
      performances: {
        create: [
          {
            hdr: false,
            threeDAudio: false,
            consoleId: nsw.id,
            performanceModes: {
              create: [
                {
                  frameRate: "target 30FPS",
                  resolution: "1080p",
                  name: "Docked mode",
                  rayTracing: false,
                },
                {
                  frameRate: "target 30FPS",
                  resolution: "720p",
                  name: "Handheld mode",
                  rayTracing: false,
                },
              ],
            },
          },
        ],
      },
    },
  });

  const forzaHorizon5 = await prisma.game.upsert({
    where: {
      name_developerId_publisherId: {
        name: "Forza Horizon 5",
        developerId: playgroundGames.id,
        publisherId: microsoftGameStudios.id,
      },
    },
    update: {},
    create: {
      name: "Forza Horizon 5",
      copiesSold: 8_000_000,
      coverImage:
        "https://cdn.mobygames.com/covers/10095777-forza-horizon-5-windows-apps-front-cover.jpg",
      developerId: playgroundGames.id,
      publisherId: microsoftGameStudios.id,
      genres: {
        create: [{ genreId: racing.id }],
      },
      platforms: {
        create: [{ platformId: xbox.id }],
      },
      releaseDates: {
        create: [
          {
            date: new Date("2021-11-09"),
            region: "Worldwide",
          },
        ],
      },
      performances: {
        create: [
          {
            hdr: true,
            threeDAudio: true,
            consoleId: xboxSeriesX.id,
            performanceModes: {
              create: [
                {
                  frameRate: "target 60FPS",
                  resolution: "4K",
                  name: "Performance mode",
                  rayTracing: true,
                },
                {
                  frameRate: "target 30FPS",
                  resolution: "4K",
                  name: "Quality mode",
                  rayTracing: false,
                },
              ],
            },
          },
          {
            hdr: false,
            threeDAudio: false,
            consoleId: xboxSeriesS.id,
            performanceModes: {
              create: [
                {
                  frameRate: "target 60FPS",
                  resolution: "1080p",
                  name: "Performance mode",
                  rayTracing: false,
                },
                {
                  frameRate: "target 30FPS",
                  resolution: "1080p",
                  name: "Quality mode",
                  rayTracing: false,
                },
              ],
            },
          },
        ],
      },
    },
  });

  const doomEternal = await prisma.game.upsert({
    where: {
      name_developerId_publisherId: {
        name: "Doom Eternal",
        developerId: idSoftware.id,
        publisherId: bethesdaSoftworks.id,
      },
    },
    update: {},
    create: {
      name: "Doom Eternal",
      coverImage:
        "https://cdn.mobygames.com/covers/8674053-doom-eternal-windows-inside-cover.jpg",
      developerId: idSoftware.id,
      publisherId: bethesdaSoftworks.id,
      genres: {
        create: [{ genreId: hackAndSlash.id }],
      },
      platforms: {
        create: [
          { platformId: xbox.id },
          { platformId: ps.id },
          { platformId: nintendo.id },
        ],
      },
      releaseDates: {
        create: [
          {
            date: new Date("2020-03-20"),
            region: "Worldwide",
          },
        ],
      },
      performances: {
        create: [
          {
            threeDAudio: false,
            hdr: true,

            consoleId: xboxSeriesX.id,
            performanceModes: {
              create: [
                {
                  frameRate: "target 60FPS",
                  resolution: "4K",
                  name: "Performance mode",
                  rayTracing: false,
                },
                {
                  frameRate: "target 30FPS",
                  resolution: "4K",
                  name: "Quality mode",
                  rayTracing: false,
                },
              ],
            },
          },
          {
            threeDAudio: false,
            hdr: false,
            consoleId: xboxSeriesS.id,
            performanceModes: {
              create: [
                {
                  frameRate: "target 60FPS",
                  resolution: "1080p",
                  name: "Performance mode",
                  rayTracing: false,
                },
                {
                  frameRate: "target 30FPS",
                  resolution: "1080p",
                  name: "Quality mode",
                  rayTracing: false,
                },
              ],
            },
          },
          {
            hdr: true,
            threeDAudio: false,
            consoleId: ps5.id,
            performanceModes: {
              create: [
                {
                  frameRate: "target 60FPS",
                  resolution: "4K",
                  name: "Performance mode",
                  rayTracing: false,
                },
                {
                  frameRate: "target 30FPS",
                  resolution: "4K",
                  name: "Quality mode",
                  rayTracing: false,
                },
              ],
            },
          },
          {
            threeDAudio: false,
            hdr: false,
            consoleId: nsw.id,
            performanceModes: {
              create: [
                {
                  frameRate: "target 30FPS",
                  resolution: "1080p",
                  name: "Handheld mode",
                  rayTracing: false,
                },
                {
                  frameRate: "target 30FPS",
                  resolution: "720p",
                  name: "Handheld mode",
                  rayTracing: false,
                },
              ],
            },
          },
        ],
      },
    },
  });

  console.log({
    godOfWar,
    horizonForbiddenWest,
    starfield,
    zeldaTearsOfTheKingdom,
    forzaHorizon5,
    doomEternal,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
