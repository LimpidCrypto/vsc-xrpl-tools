import { LcResponse, LcError } from "./lcDocumentationTypes";

export type LcResult = {
    success: boolean;
    status: number;
    result?: Pick<LcResponse, keyof LcResponse>;
    error?: LcError["error"];
};
