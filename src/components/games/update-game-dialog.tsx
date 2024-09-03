import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Button } from '../ui/button'
import { Pencil } from 'lucide-react'
import UpdateGameDialogForm from './update-game-dialog-form'

export default function UpdateGameDialog({
  gameName,
  gameId,
}: {
  gameName: string
  gameId: string
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="space-x-2">
          <Pencil />
          <span>Update information</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[1200px]">
        <DialogHeader>
          <DialogTitle>Add/update game information about {gameName}</DialogTitle>
        </DialogHeader>
        <UpdateGameDialogForm gameId={gameId} />
      </DialogContent>
    </Dialog>
  )
}
