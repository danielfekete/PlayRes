"use client";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {
  Command,
  CommandInput,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import { Badge } from "./ui/badge";

interface ComboboxProps {
  items: { value: string; label: string }[];
  value?: string[];
  defaultValue?: string[];
  onSelect: (selected: string[]) => void;
  emptyText?: string;
}

export function Combobox({
  items,
  value,
  defaultValue,
  onSelect,
  emptyText = "Select...",
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(defaultValue || []);

  useEffect(() => {
    setSelected(value || []);
  }, [value]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between items-center h-auto"
        >
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-wrap items-center">
              {selected.length
                ? items
                    .filter(({ value }) => selected.includes(value))
                    .map(({ label, value }) => (
                      <Badge key={value}>{label}</Badge>
                    ))
                : emptyText}
            </div>
          </div>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {items.map(({ label, value }) => (
                <CommandItem
                  key={value}
                  value={value}
                  onSelect={(currentValue) => {
                    if (selected.includes(currentValue)) {
                      // Deselect if already selected
                      const newValue = selected.filter(
                        (item) => item !== currentValue
                      );
                      setSelected(newValue);
                      onSelect(newValue);
                    } else {
                      // Select if not already selected
                      const newValue = [...selected, currentValue];
                      onSelect(newValue);
                      setSelected(newValue);
                    }
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      selected.includes(value) ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
