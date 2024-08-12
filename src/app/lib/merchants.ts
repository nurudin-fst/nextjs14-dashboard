"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const FormSchema = z.object({
  id: z.string(),
  merchantFullName: z.string({
    invalid_type_error: "Please enter a merchant full name.",
  }),
  merchantShortName: z.string({
    invalid_type_error: "Please enter a merchant short name.",
  }),
  city: z.string({
    invalid_type_error: "Please enter a city.",
  }),
  postcode: z.string({
    invalid_type_error: "Please enter a postcode.",
  }),
  criteria: z.string({
    invalid_type_error: "Please enter a criteria.",
  }),
  terminalQuantity: z.string({
    invalid_type_error: "Please enter a terminal quantity.",
  }),
  merchantType: z.string({
    invalid_type_error: "Please enter a merchant type.",
  }),
  npwp: z.string({
    invalid_type_error: "Please enter a npwp.",
  }),
  qrType: z.string({
    invalid_type_error: "Please enter a qr type.",
  }),
  date: z.string(),
});

export type State = {
  errors?: {
    merchantFullName?: string[];
    merchantShortName?: string[];
    city?: string[];
    postcode?: string[];
    criteria?: string[];
    terminalQuantity?: string[];
    merchantType?: string[];
    npwp?: string[];
    qrType?: string[];
  };
  message?: string | null;
};

const CreateMerchant = FormSchema.omit({ id: true, date: true });

export async function createMerchant(prevState: State, formData: FormData) {
  // Validate form fields using Zod
  const validatedFields = CreateMerchant.safeParse({
    merchantFullName: formData.get("merchantFullName"),
    merchantShortName: formData.get("merchantShortName"),
    city: formData.get("city"),
    postcode: formData.get("postcode"),
    criteria: formData.get("criteria"),
    terminalQuantity: formData.get("terminalQuantity"),
    merchantType: formData.get("merchantType"),
    npwp: formData.get("npwp"),
    qrType: formData.get("qrType"),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Merchant.",
    };
  }
  // Test it out:
  // console.log(rawFormData);
  // Prepare data for insertion into the database
  const {
    merchantFullName,
    merchantShortName,
    city,
    postcode,
    criteria,
    terminalQuantity,
    merchantType,
    npwp,
    qrType,
  } = validatedFields.data;

  // Insert data into the database
  try {
    await fetch(
      "https://61a0ea8a6c3b400017e69ae8.mockapi.io/api/v1/users/merchants",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          merchantFullName,
          merchantShortName,
          city,
          postcode,
          criteria,
          terminalQuantity,
          merchantType,
          npwp,
          qrType,
        }),
      }
    );
  } catch (error) {
    // If a API error occurs, return a more specific error.
    return {
      message: "API Error: Failed to Create Merchant.",
    };
  }

  // Revalidate the cache for the merchants page and redirect the merchant.
  revalidatePath("/dashboard/merchants");
  redirect("/dashboard/merchants");
}

const UpdateMerchant = FormSchema.omit({ id: true, date: true });

export async function updateMerchant(
  id: string,
  prevState: State,
  formData: FormData
) {
  // Validate form fields using Zod
  const validatedFields = UpdateMerchant.safeParse({
    merchantFullName: formData.get("merchantFullName"),
    merchantShortName: formData.get("merchantShortName"),
    city: formData.get("city"),
    postcode: formData.get("postcode"),
    criteria: formData.get("criteria"),
    terminalQuantity: formData.get("terminalQuantity"),
    merchantType: formData.get("merchantType"),
    npwp: formData.get("npwp"),
    qrType: formData.get("qrType"),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Update Merchant.",
    };
  }
  // Test it out:
  // console.log(rawFormData);
  // Prepare data for insertion into the database
  const {
    merchantFullName,
    merchantShortName,
    city,
    postcode,
    criteria,
    terminalQuantity,
    merchantType,
    npwp,
    qrType,
  } = validatedFields.data;

  // Insert data into the database
  try {
    await fetch(
      `https://61a0ea8a6c3b400017e69ae8.mockapi.io/api/v1/users/merchants/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          merchantFullName,
          merchantShortName,
          city,
          postcode,
          criteria,
          terminalQuantity,
          merchantType,
          npwp,
          qrType,
        }),
      }
    );
  } catch (error) {
    // If a API error occurs, return a more specific error.
    return {
      message: "API Error: Failed to Update Merchant.",
    };
  }

  // Revalidate the cache for the merchants page and redirect the merchant.
  revalidatePath("/dashboard/merchants");
  redirect("/dashboard/merchants");
}

export async function deleteMerchant(id: string) {
  try {
    await fetch(
      `https://61a0ea8a6c3b400017e69ae8.mockapi.io/api/v1/users/merchants/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    revalidatePath("/dashboard/merchant");
    return { message: "Deleted Merchant." };
  } catch (error) {
    return { message: "Database Error: Failed to Delete Merchant." };
  }
}
