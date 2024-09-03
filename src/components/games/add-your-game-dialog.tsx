'use client'
import React from 'react'
import { Button } from '../ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { CirclePlus } from 'lucide-react'
import AddYourGameDialogForm from './add-your-game-dialog-form'

export default function AddYourGameDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="mt-4 bg-primary text-white py-2 px-4 rounded-md space-x-2">
          <CirclePlus />
          <span>Add game</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[1200px]">
        <DialogHeader>
          <DialogTitle>Add your game</DialogTitle>
        </DialogHeader>
        <AddYourGameDialogForm />
      </DialogContent>
    </Dialog>
  )
}
