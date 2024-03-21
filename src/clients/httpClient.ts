import axios, { AxiosResponse } from "axios";
import { LcResult } from "../types/response";
import { LcPaths, LcResponse, LcError, LcRes } from "../types/lcDocumentationTypes";

export class LcHttpClient {
    constructor(private baseUrl: string) { }

    public async get(path: keyof LcPaths): Promise<LcResult> {
        const axiosResponse = await axios.get(`${this.baseUrl}${path}`);
        return this.handle_response(axiosResponse);
    }

    private handle_response(response: AxiosResponse): LcResult {
        const data: LcResponse = response.data;
        const status = response.status;
        if (status >= 200 && status < 300) {
            return {
                success: true,
                status: status,
                result: data as LcRes
            };
        } else {
            return {
                success: false,
                status: status,
                error: (data as LcError).error
            };
        }
    }
}
