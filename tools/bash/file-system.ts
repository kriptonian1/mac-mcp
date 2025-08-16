import { getMcpServer } from "@/mcp-server";
import { listAllDirectoryInputSchema } from "@/schema";
import { listAllDirectory } from "@/utils";

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
}
