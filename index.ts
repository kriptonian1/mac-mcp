#!/usr/bin/env bun

import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { getMcpServer } from "@/mcp-server";
import { initTools } from "./tools";

const server = getMcpServer();

initTools();

const transport = new StdioServerTransport();
await server.connect(transport);
