"use server";

import { revalidatePath } from "next/cache";
import { getClient } from "../client";

export const addAction = async (data: FormData) => {
  const description = data.get("description")?.toString();
  if (!description) {
    return;
  }
  const client = await getClient();
  await client.task.create({
    data: {
      description,
    },
  });
  revalidatePath("/");
};
