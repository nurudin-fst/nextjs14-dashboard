"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const FormSchema = z.object({
  id: z.string(),
  name: z.string({
    invalid_type_error: "Please enter a name.",
  }),
  username: z.string({
    invalid_type_error: "Please enter a username.",
  }),
  date: z.string(),
});

export type State = {
  errors?: {
    name?: string[];
    username?: string[];
  };
  message?: string | null;
};

const CreateUser = FormSchema.omit({ id: true, date: true });

export async function createUser(prevState: State, formData: FormData) {
  // Validate form fields using Zod
  const validatedFields = CreateUser.safeParse({
    name: formData.get("name"),
    username: formData.get("username"),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create User.",
    };
  }
  // Test it out:
  // console.log(rawFormData);
  // Prepare data for insertion into the database
  const { name, username } = validatedFields.data;

  // Insert data into the database
  try {
    await fetch(
      "https://61a0ea8a6c3b400017e69ae8.mockapi.io/api/v1/users/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          username,
          avatar: `https://ui-avatars.com/api/?name=${name
            .split(" ")
            .join("+")}`,
        }),
      }
    );
  } catch (error) {
    // If a API error occurs, return a more specific error.
    return {
      message: "API Error: Failed to Create User.",
    };
  }

  // Revalidate the cache for the users page and redirect the user.
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
}

const UpdateUser = FormSchema.omit({ id: true, date: true });

export async function updateUser(
  id: string,
  prevState: State,
  formData: FormData
) {
  // Validate form fields using Zod
  const validatedFields = UpdateUser.safeParse({
    name: formData.get("name"),
    username: formData.get("username"),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Update User.",
    };
  }
  // Test it out:
  // console.log(rawFormData);
  // Prepare data for insertion into the database
  const { name, username } = validatedFields.data;

  // Insert data into the database
  try {
    await fetch(
      `https://61a0ea8a6c3b400017e69ae8.mockapi.io/api/v1/users/users/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          username,
          avatar: `https://ui-avatars.com/api/?name=${name
            .split(" ")
            .join("+")}`,
        }),
      }
    );
  } catch (error) {
    // If a API error occurs, return a more specific error.
    return {
      message: "API Error: Failed to Create User.",
    };
  }

  // Revalidate the cache for the users page and redirect the user.
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
}

export async function deleteUser(id: string) {
  try {
    await fetch(
      `https://61a0ea8a6c3b400017e69ae8.mockapi.io/api/v1/users/users/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    revalidatePath("/dashboard/users");
    return { message: "Deleted Invoice." };
  } catch (error) {
    return { message: "Database Error: Failed to Delete Invoice." };
  }
}
