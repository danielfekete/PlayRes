'use client'
import React from 'react'
import { useFormState } from 'react-dom'
import { DialogFooter } from '../ui/dialog'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'
import { Label } from '../ui/label'
import { createGameInformation } from '@/lib/actions/create-game-information'
import FormStateProvider from '../form/form-state-provider'

export default function UpdateGameDialogForm({ gameId }: { gameId: string }) {
  const [state, action] = useFormState(
    createGameInformation.bind(null, {
      gameId,
    }),
    {
      success: '',
      error: '',
      issues: [],
    },
  )

  return (
    <form action={action}>
      <FormStateProvider formState={state}>
        <div className="grid gap-4 py-4">
          <div className="grid w-full gap-1.5">
            <Label htmlFor="information">Game details</Label>

            <Textarea
              id="information"
              name="information"
              className="w-full px-3 py-2 border rounded-md min-h-[200px]"
            />
            <p className="text-sm text-muted-foreground">
              Please write down any missing or incorrect information about the game.
            </p>
            <p className="text-sm text-muted-foreground">
              I'll review it and update the information.
            </p>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Submit</Button>
        </DialogFooter>
      </FormStateProvider>
    </form>
  )
}
