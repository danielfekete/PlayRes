"use client";
import React, { useEffect } from "react";
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
import { useFormState } from "react-dom";
import { addYourGameSchema } from "@/schemas/addYourGame";
import { addYourGame } from "@/lib/actions/addYourGame";
import FormStateProvider from "../form/form-state-provider";

export default function AddYourGameDialog() {
  const [state, dispatch] = useFormState(addYourGame, {
    error: "",
    success: "",
  });

  const formRef = React.useRef<HTMLFormElement>(null);

  const methods = useForm({
    defaultValues: {
      name: "",
      performance: "",
      ...(state?.fields ?? {}),
    },
    mode: "onBlur",
    resolver: zodResolver(addYourGameSchema),
  });
  const { control, handleSubmit, reset } = methods;

  useEffect(() => {
    if (state?.fields) {
      reset(state.fields);
    }
    reset();
  }, [state]);

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
          <FormStateProvider formState={state}>
            <form
              ref={formRef}
              className="space-y-4"
              noValidate
              onSubmit={(evt) => {
                evt.preventDefault();
                handleSubmit(() => {
                  const formData = new FormData(formRef.current!);
                  dispatch(formData);
                })(evt);
              }}
            >
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
          </FormStateProvider>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
