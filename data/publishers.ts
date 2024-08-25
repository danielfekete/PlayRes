import { db } from "@/lib/db";

export const getPublishers = async () => {
  try {
    const publishers = await db.publisher.findMany();
    return publishers;
  } catch (err) {
    console.log(err);
  }
};
