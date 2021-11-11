import * as types from './types';

const mutations = {
    [types.SET_USER] (state, payload) {
        Object.assign(state, payload);
    },
}

export default mutations;