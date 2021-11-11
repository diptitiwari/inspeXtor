import * as types from './types';
import _ from 'lodash';

const mutations = {
    [types.GET_ALL_AUTOTUNEPOLICY] (state) {
        Object.assign(state, {autoTunePolicies: state.autoTunePolicies});
    },
    [types.CREATE_AUTO_TUNE_POLICY] (state, payload) {
        const autoTunePolicies = state.autoTunePolicies;
        let newId = (parseInt(autoTunePolicies[autoTunePolicies.length-1].ID));
        newId++;
        payload.ID = newId.toString();
        autoTunePolicies.push(payload);
        Object.assign(state, {autoTunePolicies});
    },
    [types.UPDATE_AUTO_TUNE_POLICY] (state, payload) {
        const autoTunePolicies = state.autoTunePolicies;
        let index = _.findIndex(autoTunePolicies, {ID: payload.ID});
        autoTunePolicies[index] = payload;
        Object.assign(state, {autoTunePolicies});
    },
    [types.DELETE_AUTO_TUNE_POLICY] (state, payload) {
        let autoTunePolicies = _.cloneDeep(state.autoTunePolicies);
        autoTunePolicies.splice(_.findIndex(autoTunePolicies, {ID: payload}), 1);
        Object.assign(state, {autoTunePolicies});
    },
}

export default mutations;
