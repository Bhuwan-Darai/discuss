"use server";

import { z } from "zod";

//create schema object for validation
const createTopicSchema = z.object({
  name: z
    .string()
    .min(3)
    .regex(/^[a-z-]+$/, {
      message: "Must be lowercase letters or dashes without space",
    }),
  description: z.string().min(10),
});

export async function createTopic(formData: FormData) {
  // TODO: revalidate the homepage after creating a topic
  const result = createTopicSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
  });
  // you'll get error if result.error
  // because typescrpt want you to look at rsult.success
  if (!result.success) {
    //to get more precise well formatted error message as object
    console.log(result.error.flatten().fieldErrors);
  }
}
