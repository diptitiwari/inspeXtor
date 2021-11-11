import * as types from './types';

export default {
	createSwitch({ commit }, switchData) {
		commit(types.CREATE_SWITCH, switchData);
	},
	updateSwitch({ commit }, switchData) {
		commit(types.UPDATE_SWITCH, switchData);
	},
	deleteSwitch({ commit }, switchDataId) {
		commit(types.DELETE_SWITCH, switchDataId)
	},
}
