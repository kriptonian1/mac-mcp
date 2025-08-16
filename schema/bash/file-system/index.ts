import z from "zod";

export const listAllDirectoryInputSchema = {
    directory: z.string().min(1).max(100),
};
