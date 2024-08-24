import { db } from "@/lib/db";

export const getPlatforms = async () => {
  try {
    const platforms = await db.platform.findMany();
    return platforms;
  } catch (e) {
    console.error(e);
  }
};
