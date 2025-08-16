import type z from "zod/v3";
import type { listAllDirectoryInputSchema } from ".";

export type listAllDirectoryInput = {
    directory: z.infer<typeof listAllDirectoryInputSchema.directory>;
};
