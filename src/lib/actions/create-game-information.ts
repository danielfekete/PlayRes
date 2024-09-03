'use server'

import { FormState } from '@/types/form-state'
import { z } from 'zod'
import payload from '../payload'

export async function createGameInformation(
  { gameId }: { gameId: string },
  _: FormState,
  values: FormData,
): Promise<FormState> {
  const data = Object.fromEntries(values)
  const validatedFields = z
    .object({
      information: z.string(),
    })
    .safeParse(data)

  if (!validatedFields.success) {
    return {
      error: 'Invalid form data.',
      issues: validatedFields.error.issues.map((issue) => issue.message),
    }
  }

  const { information } = validatedFields.data

  try {
    await payload.create({
      collection: 'information',
      data: {
        gameId: Number(gameId),
        information,
      },
    })
  } catch (error) {
    return {
      error: 'An error occurred while creating your data.',
    }
  }
  return {
    success: 'Your data has been successfully created.',
  }
}
