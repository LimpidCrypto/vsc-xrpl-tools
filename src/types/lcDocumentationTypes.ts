import { components, paths } from "./lcDocumentation"

export type LcSchemas = components["schemas"];
export type LcRes = Omit<components["schemas"], "Error">;
export type LcError = LcSchemas["Error"];
export type LcResponse = LcRes | LcError;
export type LcPaths = paths;
