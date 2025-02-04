"use client";

import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const createCategorySchema = z.object({
  name: z.string().nonempty(),
});

type CreateCategoryForm = z.infer<typeof createCategorySchema>;

export function CreateCategory() {
  const form = useForm<CreateCategoryForm>({
    resolver: zodResolver(createCategorySchema),
  });

  async function handleSubmit(data: CreateCategoryForm) {
    console.log(data);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Create Category</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Category</DialogTitle>
          <DialogDescription>
            Create category for a new expense
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="gap-5 flex flex-col items-end w-full"
        >
          <div className="w-full">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              placeholder="category name"
              className="col-span-3"
              {...form.register("name")}
            />
          </div>
          <Button type="submit">Create Category</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
