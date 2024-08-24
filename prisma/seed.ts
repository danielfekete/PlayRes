import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Platforms
  const ps5 = await prisma.platform.upsert({
    where: { name: "PlayStation 5" },
    update: {},
    create: { name: "PlayStation 5" },
  });

  const xboxSeriesX = await prisma.platform.upsert({
    where: { name: "Xbox Series X" },
    update: {},
    create: { name: "Xbox Series X" },
  });

  const xboxSeriesS = await prisma.platform.upsert({
    where: { name: "Xbox Series S" },
    update: {},
    create: { name: "Xbox Series S" },
  });

  const nsw = await prisma.platform.upsert({
    where: { name: "Nintendo Switch" },
    update: {},
    create: { name: "Nintendo Switch" },
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

  // Developers & Publishers
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
        create: [{ platformId: ps5.id }],
      },
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
            frameRate: "locked 30FPS",
            resolution: "4K",
            hdr: true,
            notes: "Enhanced for PlayStation 5",
            platformId: ps5.id,
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
      name: "Horizon Forbidden West",
      coverImage:
        "https://cdn.mobygames.com/covers/10495868-horizon-ii-forbidden-west-playstation-5-front-cover.jpg",
      developerId: guerrillaGames.id,
      publisherId: sonyInteractiveEntertainment.id,
      genres: {
        create: [{ genreId: actionAdventure.id }, { genreId: rpg.id }],
      },
      platforms: {
        create: [{ platformId: ps5.id }],
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
            frameRate: "target 60FPS",
            resolution: "4K",
            hdr: true,
            notes: "Performance mode available",
            platformId: ps5.id,
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
      coverImage:
        "https://cdn.mobygames.com/covers/17586252-starfield-windows-apps-front-cover.jpg",
      developerId: bethesdaGameStudios.id,
      publisherId: bethesdaSoftworks.id,
      genres: {
        create: [{ genreId: rpg.id }, { genreId: actionAdventure.id }],
      },
      platforms: {
        create: [
          { platformId: xboxSeriesX.id },
          { platformId: xboxSeriesS.id },
        ],
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
            frameRate: "locked 30FPS",
            resolution: "4K",
            hdr: true,
            notes: "Optimized for Xbox Series X",
            platformId: xboxSeriesX.id,
          },
          {
            frameRate: "locked 30FPS",
            resolution: "1080p",
            hdr: false,
            notes: "Optimized for Xbox Series S",
            platformId: xboxSeriesS.id,
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
      name: "The Legend of Zelda: Tears of the Kingdom",
      coverImage:
        "https://cdn.mobygames.com/covers/17111253-the-legend-of-zelda-tears-of-the-kingdom-nintendo-switch-front-c.jpg",
      developerId: nintendoDeveloper.id,
      publisherId: nintendoPublisher.id,
      genres: {
        create: [{ genreId: actionAdventure.id }, { genreId: rpg.id }],
      },
      platforms: {
        create: [{ platformId: nsw.id }],
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
            frameRate: "target 30FPS",
            resolution: "Dynamic 720p-900p",
            hdr: false,
            notes: "Performance varies in large areas",
            platformId: nsw.id,
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
      coverImage:
        "https://cdn.mobygames.com/covers/10095777-forza-horizon-5-windows-apps-front-cover.jpg",
      developerId: playgroundGames.id,
      publisherId: microsoftGameStudios.id,
      genres: {
        create: [{ genreId: racing.id }],
      },
      platforms: {
        create: [
          { platformId: xboxSeriesX.id },
          { platformId: xboxSeriesS.id },
        ],
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
            frameRate: "target 60FPS",
            resolution: "4K",
            hdr: true,
            notes: "Performance mode available",
            platformId: xboxSeriesX.id,
          },
          {
            frameRate: "target 60FPS",
            resolution: "1080p",
            hdr: false,
            notes: "Performance mode available",
            platformId: xboxSeriesS.id,
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
