import * as types from './types';

export default {
    getAllAutoTunePolicy({ commit }) {
        commit(types.GET_ALL_AUTOTUNEPOLICY);
    },
    createAutoTunePolicy({ commit }, atPolicy) {
        commit(types.CREATE_AUTO_TUNE_POLICY, atPolicy);
    },
    updateAutoTunePolicy({ commit }, atPolicy) {
        commit(types.UPDATE_AUTO_TUNE_POLICY, atPolicy);
    },
    deleteAutoTunePolicy({ commit }, atPolicyId) {
        commit(types.DELETE_AUTO_TUNE_POLICY, atPolicyId);
    },
}
