import React from "react";

export default function FilterGames() {
  return (
    <div>
      <select
        className="w-full p-4 border border-gray-200 rounded-md"
        name="genre"
        id="genre"
      >
        <option value="all">All</option>
        <option value="action">Action</option>
        <option value="adventure">Adventure</option>
        <option value="rpg">RPG</option>
        <option value="strategy">Strategy</option>
        <option value="simulation">Simulation</option>
        <option value="puzzle">Puzzle</option>
        <option value="sports">Sports</option>
      </select>
    </div>
  );
}
