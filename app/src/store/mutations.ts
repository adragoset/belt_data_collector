import { ErrorMessage } from '@/models/errorMessage.model'
import { MutationTree } from 'vuex'
import { RootState } from './types'

export const mutations: MutationTree<RootState> = {
    load(state) {
        state.loaded = true;
    },
    clearError(state) {
        state.errorMessage = null;
    },
    setError(state, payload: ErrorMessage) {
        state.errorMessage = payload;
    } 
};
