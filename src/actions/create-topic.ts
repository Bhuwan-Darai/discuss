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

interface CreateTopicFormState {
  errors: {
    name?: string[];
    descrition?: string[];
  };
}

export async function createTopic(
  formState: CreateTopicFormState,
  formData: FormData
): Promise<CreateTopicFormState> {
  // TODO: revalidate the homepage after creating a topic
  const result = createTopicSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
  });
  // you'll get error if result.error
  // because typescrpt want you to look at rsult.success
  if (!result.success) {
    //to get more precise well formatted error message as object
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }
  return {
    errors: {},
  };
}
