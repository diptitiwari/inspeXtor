import * as types from './types';

export default {
    setUser({ commit }, data) {
        commit(types.SET_USER, data);
    }, 
}
