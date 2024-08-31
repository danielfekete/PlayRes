import { db } from "@/lib/db";

export const createAddYourGame = async ({
  name,
  information,
}: {
  name: string;
  information: string;
}) => {
  try {
    await db.addYourGame.create({
      data: {
        name,
        information,
      },
    });
  } catch (e) {
    console.error(e);
  }
};
