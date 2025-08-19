import { getMcpServer } from "@/mcp-server";
import {
    createFileInputSchema,
    createFolderInputSchema,
    listAllDirectoryInputSchema,
    readFileContentInputSchema,
} from "@/schema";
import {
    createFile,
    createFolder,
    listAllDirectory,
    readFileContent,
} from "@/utils";

export function registerFileSystemTools() {
    const server = getMcpServer();

    server.registerTool(
        "list-all-directory",
        {
            title: "List all directory tool",
            description:
                "List all files in the file mentioned, it is recomended to give the directory as a absolute file from root",
            inputSchema: listAllDirectoryInputSchema,
        },
        listAllDirectory
    );

    server.registerTool(
        "read-file-content",
        {
            title: "Read file content tool",
            description:
                "Read the content of a file, it is recomended to give the directory as a absolute file from root",
            inputSchema: readFileContentInputSchema,
        },
        readFileContent
    );

    server.registerTool(
        "create-file",
        {
            title: "Create New File",
            description:
                "Create a new file in the mentioned directory, it is recomended to give the directory as a absolute file from root",
            inputSchema: createFileInputSchema,
        },
        createFile
    );

    server.registerTool(
        "create-folder",
        {
            title: "Create new folder",
            description:
                "Create a new folder in the mentioned directory, it is recomended to give the directory as a absolute file from root",
            inputSchema: createFolderInputSchema,
        },
        createFolder
    );
}
