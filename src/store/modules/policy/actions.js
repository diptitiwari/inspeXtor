import * as types from './types';

export default {
    getAllPolicies({ commit }) {
        commit(types.GET_ALL_POLICIES);
    },
    getPolicyClusterWise({ commit }) {
        commit(types.CLUSTER_WISE_POLICY);
    },
    getAllPolicyType({ commit }) {
        commit(types.GET_ALL_POLICY_TYPES)
    },
    createPolicy({ commit }, policy) {
        commit(types.CREATE_POLICY, policy);
    },
    updatePolicy({ commit }, policy) {
        commit(types.UPDATE_POLICY, policy);
    },
    deletePolicy({ commit }, policyId) {
        commit(types.DELETE_POLICY, policyId)
    },
    linkPolicy({ commit }, data) {
        commit(types.LINK_POLICY, data)
    }
}
