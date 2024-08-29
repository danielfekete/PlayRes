"use client";
import React from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { CirclePlus } from "lucide-react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export default function AddYourGameDialog() {
  const methods = useForm({
    defaultValues: {
      name: "",
      performance: "",
    },
    mode: "onBlur",
    resolver: zodResolver(
      z.object({
        name: z.string().min(1, "This field is required."),
        performance: z.string().max(2500, "This field is too long."),
      })
    ),
  });
  const { control, handleSubmit } = methods;

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
        <Form {...methods}>
          <form className="space-y-4">
            {/* Game name */}
            <div>
              <FormField
                control={control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Game name</FormLabel>
                    <FormControl>
                      <Input type="text" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {/* Performance */}
            <div>
              <FormField
                control={control}
                name="performance"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Performance details</FormLabel>
                    <FormControl>
                      <Textarea className="resize-none" {...field} />
                    </FormControl>
                    <FormDescription>
                      Please write down any performance information about the
                      game on any platform that the game released (e.g. FPS,
                      resolution, modes etc.)
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter>
              <Button type="submit">Submit</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
