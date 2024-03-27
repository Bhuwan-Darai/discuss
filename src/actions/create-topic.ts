"use server";

export async function createTopic(formData: FormData) {
  // TODO: revalidate the homepage after creating a topic
  const name = formData.get("name");
  const description = formData.get("description");
  console.log(name, description);
}
