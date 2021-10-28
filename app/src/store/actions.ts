import { ActionTree } from 'vuex';
import { RootState } from './types';

export const actions: ActionTree<RootState, RootState> = {
    async load({ commit, dispatch }) {
        await dispatch('calibrations/loadCalibrations').then(() =>
        commit('load'));
    },
    clearError({ commit, dispatch}){
        commit('clearError');
    }
};
