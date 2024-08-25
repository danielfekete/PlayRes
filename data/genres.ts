import { db } from "@/lib/db";

export const getGenres = async () => {
  try {
    const genres = await db.genre.findMany();
    return genres;
  } catch (err) {
    console.log(err);
  }
};
