import z from "zod";

export const listAllDirectoryInputSchema = {
    directory: z.string().min(1).max(100),
};

export const readFileContentInputSchema = {
    filePath: z.string().min(1).max(100),
};

export const createFileInputSchema = {
    filePath: z.string().min(1).max(100),
    fileName: z.string(),
};
export const createFolderInputSchema = {
    folderPath: z.string().min(1).max(100),
    folderName: z.string(),
};
