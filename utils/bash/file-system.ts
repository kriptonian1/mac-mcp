import type { listAllDirectoryInput } from "@/schema/index.type";
import type { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import { $ } from "bun";

/**
 * Lists all files and directories within the specified directory using the `ls -al` command.
 *
 * @param directory - The path of the directory to list.
 * @returns A promise that resolves to a `CallToolResult` containing the output as text.
 */
export async function listAllDirectory({
    directory,
}: listAllDirectoryInput): Promise<CallToolResult> {
    const outout = await $`ls -al ${directory}`.text();
    return {
        content: [{ type: "text", text: outout }],
    };
}
