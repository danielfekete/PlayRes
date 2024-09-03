'use client'
import React from 'react'
import { DialogFooter } from '../ui/dialog'
import { Button } from '../ui/button'
import { useFormState } from 'react-dom'
import { createGameRequest } from '@/lib/actions/create-game-request'
import FormStateProvider from '../form/form-state-provider'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'

export default function AddYourGameDialogForm() {
  const [state, action] = useFormState(createGameRequest, {
    error: '',
    success: '',
    issues: [],
  })

  return (
    <form action={action}>
      <FormStateProvider formState={state}>
        <div className="space-y-4">
          {/* Game name */}
          <div className="grid w-full gap-1.5">
            <Label htmlFor="name">Title</Label>
            <Input id="name" name="name" className="w-full px-3 py-2 border rounded-md" />
          </div>
          {/* Performance */}
          <div className="grid w-full gap-1.5">
            <Label htmlFor="performance">Performance information</Label>
            <Textarea
              id="performance"
              name="performance"
              className="w-full px-3 py-2 border rounded-md min-h-[200px]"
            />
            <p className="text-sm text-muted-foreground">
              Please write down any information about you know about the game's performance on a
              specific or different platforms.
            </p>
            <p className="text-sm text-muted-foreground">
              I'll review it and add the game to the database.
            </p>
          </div>
        </div>
        <DialogFooter className="mt-4">
          <Button type="submit">Submit</Button>
        </DialogFooter>
      </FormStateProvider>
    </form>
  )
}
