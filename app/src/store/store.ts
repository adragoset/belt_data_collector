import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { createLogger } from 'vuex'
import { RootState } from './types';
import { actions } from './actions';
import { mutations } from './mutations';
import { getters } from './getters';
import Config from '../config';

export function makeStore( app: Vue.App<Element>, config: Config) {

  const store: StoreOptions<RootState> = {
    plugins: [createLogger<RootState>()],
    state: {
      version: '1.0.0',
      loaded: false,
      apiRoot: config.baseUrl,
      errorMessage: null
    },
    getters,
    actions,
    mutations,
    modules: {
    },
    strict: process.env.NODE_ENV !== 'production',
  };

  return new Vuex.Store<RootState>(store);
}
