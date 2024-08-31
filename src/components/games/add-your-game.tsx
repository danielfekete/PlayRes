import React from "react";
import AddYourGameDialog from "./add-your-game-dialog";

export default function AddYourGame() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold">Add your game</h2>
      <p className="text-muted-foreground mt-2">
        Don't see your game listed? Add it to our database.
      </p>
      <AddYourGameDialog />
    </div>
  );
}
