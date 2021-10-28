// profile/getters.ts
import { ErrorMessage } from '@/models/errorMessage.model';
import { GetterTree } from 'vuex';
import { RootState } from './types';

export const getters: GetterTree<RootState, RootState> = {
    isLoaded(state): boolean {
        return state.loaded;
    },
    apiBaseUrl(state): string {
        return state.apiRoot;
    },
    errorMessage(state): ErrorMessage | null {
        return state.errorMessage;
    }
};