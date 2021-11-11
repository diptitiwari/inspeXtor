import * as types from './types';
import _ from 'lodash';

const mutations = {
    [types.GET_ALL_POLICIES] (state) {
        Object.assign(state, {policies: state.policies});
    },
    [types.CLUSTER_WISE_POLICY] (state) {
        Object.assign(state, {clusterWisePolicy: state.clusterWisePolicy});
    },
    [types.GET_ALL_POLICY_TYPES] (state) {
        Object.assign(state, {policyType: state.policyType});
    },
    [types.CREATE_POLICY] (state, payload) {
        const policies = state.policies;
        let newId = (parseInt(policies[policies.length-1].ID));
        newId++;
        payload.ID = newId.toString();
        policies.push(payload);
        Object.assign(state, {policies});
    },
    [types.UPDATE_POLICY] (state, payload) {
        const policies = state.policies;
        let index = _.findIndex(policies, {ID: payload.ID});
        policies[index] = payload;
        Object.assign(state, {policies});
    },
    [types.DELETE_POLICY] (state, payload) {
        let policies = state.policies;
        policies.splice(_.findIndex(policies, {ID: payload}), 1);
        Object.assign(state, {policies});
    },
    [types.LINK_POLICY] (state, payload) {
        const clusterWisePolicy = state.clusterWisePolicy;
        clusterWisePolicy[payload.cluster].push(payload.policy);
        Object.assign(state, {clusterWisePolicy: payload});
    },
};

export default mutations;
