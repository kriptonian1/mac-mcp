import { getMcpServer } from "@/mcp-server";
import { listAllDirectoryInputSchema } from "@/schema/bash";
import type { listAllDirectoryInput } from "@/schema/bash/index.types";
import { listAllDirectory } from "@/utils/bash";
import { $ } from "bun";

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
