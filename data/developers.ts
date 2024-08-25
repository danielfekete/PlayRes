import { db } from "@/lib/db";

export const getDevelopers = async () => {
  try {
    const developers = await db.developer.findMany();
    return developers;
  } catch (err) {
    console.log(err);
  }
};
