import { z } from "zod";

export const addYourGameSchema = z.object({
  name: z.string().min(1, "This field is required."),
  performance: z.string().max(2500, "This field is too long."),
});
