import * as types from './types';
import _ from 'lodash';

const mutations = {
	[types.CREATE_SWITCH] (state, payload) {
		const ciscoSwitches = state.ciscoSwitches;
		let newId = (parseInt(ciscoSwitches[ciscoSwitches.length-1].ID));
		newId++;
		payload.ID = newId.toString();
		ciscoSwitches.push(payload);
		Object.assign(state, {ciscoSwitches});
	},
	[types.UPDATE_SWITCH] (state, payload) {
		const ciscoSwitches = state.ciscoSwitches;
		ciscoSwitches.splice(_.findIndex(ciscoSwitches, {ID: payload.ID}), 1, payload);
		Object.assign(state, {ciscoSwitches});
	},
	[types.DELETE_SWITCH] (state, payload) {
		let ciscoSwitches = state.ciscoSwitches;
		ciscoSwitches.splice(_.findIndex(ciscoSwitches, {ID: payload}), 1);
		Object.assign(state, {ciscoSwitches});
	},
}

export default mutations;
