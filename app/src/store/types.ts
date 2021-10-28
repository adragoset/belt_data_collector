import { ErrorMessage } from "@/models/errorMessage.model";

export interface RootState {
    version: string;
    loaded: boolean;
    apiRoot: string;
    errorMessage: ErrorMessage | null;
}
