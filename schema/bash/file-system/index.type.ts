import type z from "zod/v3";
import type {
    createFileInputSchema,
    createFolderInputSchema,
    listAllDirectoryInputSchema,
    readFileContentInputSchema,
} from ".";

export type listAllDirectoryInput = {
    directory: z.infer<typeof listAllDirectoryInputSchema.directory>;
};

export type readFileContentInput = {
    filePath: z.infer<typeof readFileContentInputSchema.filePath>;
};

export type createFileInput = {
    filePath: z.infer<typeof createFileInputSchema.filePath>;
    fileName: z.infer<typeof createFileInputSchema.fileName>;
};

export type createFolderInput = {
    folderPath: z.infer<typeof createFolderInputSchema.folderPath>;
    folderName: z.infer<typeof createFolderInputSchema.folderName>;
};
