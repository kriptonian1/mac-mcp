import type {
    createFileInput,
    createFolderInput,
    listAllDirectoryInput,
    readFileContentInput,
} from "@/schema/index.type";
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
    const output = await $`ls -al ${directory}`.text();
    return {
        content: [{ type: "text", text: output }],
    };
}

/**
 * Reads the content of a file at the specified path using a shell command.
 *
 * @param filePath - The path to the file to be read.
 * @returns An object containing the file content as an array with a single text item.
 */
export async function readFileContent({
    filePath,
}: readFileContentInput): Promise<CallToolResult> {
    const output = await $`cat ${filePath}`.text();
    return {
        content: [{ type: "text", text: output }],
    };
}

/**
 * Creates (or updates the modification time of) an empty file at the specified directory path
 * by invoking the system `touch` command through the `$` shell template.
 *
 * @param filePath Directory path in which the file should be created. Must already exist.
 * @param filename Name of the file to create (or update). Should not contain path separators.
 * @returns A promise resolving to a CallToolResult whose text payload is the stdout from `touch`
 *          (typically an empty string on success).
 */
export async function createFile({
    filePath,
    fileName,
}: createFileInput): Promise<CallToolResult> {
    const output = await $`touch ${filePath}/${fileName}`.text();
    return {
        content: [{ type: "text", text: output }],
    };
}

export async function createFolder({
    folderName,
    folderPath,
}: createFolderInput): Promise<CallToolResult> {
    const output = await $`mkdir ${folderPath}/${folderName}`.text();
    return {
        content: [{ type: "text", text: output }],
    };
}
