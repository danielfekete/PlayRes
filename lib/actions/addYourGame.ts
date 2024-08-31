import { createAddYourGame } from "@/data/addYourGame";
import { addYourGameSchema } from "@/schemas/addYourGame";
import { FormState } from "@/types/formState";

export const addYourGame = async (
  _: FormState,
  formData: FormData
): Promise<FormState> => {
  const data = Object.fromEntries(formData);
  const validatedFields = addYourGameSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      error: "There was an error with your submission.",
      fields: validatedFields.data,
      issues: validatedFields.error.issues.map((issue) => issue.message),
    };
  }

  const { name, performance } = validatedFields.data;

  // Create a new record in the database
  try {
    await createAddYourGame({
      name,
      information: performance,
    });
  } catch (e) {
    return {
      error: "There was an error with your submission.",
      fields: validatedFields.data,
    };
  }

  return {
    success: "Your game has been successfully submitted.",
  };
};
