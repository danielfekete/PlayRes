import React from "react";
import { Input, InputProps } from "./ui/input";
import { Button } from "./ui/button";
import { XIcon } from "lucide-react";

export default function TextField({
  onClear,
  ...inputProps
}: InputProps & { onClear: () => void }) {
  return (
    <div className="relative w-full max-w-sm">
      <Input {...inputProps} />
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
        onClick={() => onClear()}
      >
        <XIcon className="h-4 w-4" />
        <span className="sr-only">Clear</span>
      </Button>
    </div>
  );
}
