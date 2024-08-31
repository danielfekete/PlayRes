import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Pencil } from "lucide-react";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";

export default function UpdateGameDialog({ gameName }: { gameName: string }) {
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
          <DialogTitle>
            Add/update game information about {gameName}
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid w-full gap-1.5">
            <Label htmlFor="name">Game details</Label>

            <Textarea
              id="name"
              name="name"
              className="w-full px-3 py-2 border rounded-md min-h-[200px]"
            />
            <p className="text-sm text-muted-foreground">
              Please write down any missing or incorrect information about the
              game.
            </p>
            <p className="text-sm text-muted-foreground">
              I'll review it and update the information.
            </p>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
