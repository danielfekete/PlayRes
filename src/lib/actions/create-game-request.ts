'use server'

import { FormState } from '@/types/form-state'
import { z } from 'zod'
import payload from '../payload'

export async function createGameRequest(_: FormState, values: FormData): Promise<FormState> {
  const data = Object.fromEntries(values)

  const validatedFields = z
    .object({
      name: z.string(),
      performance: z.string(),
    })
    .safeParse(data)

  if (!validatedFields.success) {
    return {
      error: 'Invalid form data.',
      issues: validatedFields.error.issues.map((issue) => issue.message),
    }
  }

  const { name, performance } = validatedFields.data

  try {
    await payload.create({
      collection: 'game-request',
      data: {
        name,
        performance,
      },
    })
  } catch (error) {
    return {
      error: 'An error occurred while creating your data.',
      fields: validatedFields.data,
    }
  }

  return {
    success: 'Your data has been successfully created.',
  }
}
