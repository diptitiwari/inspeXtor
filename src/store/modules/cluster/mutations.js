import * as types from './types';
import _ from 'lodash';

const mutations = {
    [types.GET_ALL_CLUSTERS] (state, payload) {
        Object.assign(state, {clusters: payload});
    },
    [types.SET_CLUSTERS] (state, payload) {
        Object.assign(state, {clusters: payload});
    },
    [types.DELETE_CLUSTER_NODE] (state, payload) {
        let nodes = state.nodes;
        nodes.splice(_.findIndex(nodes, {ID: payload}), 1);
        Object.assign(state, {nodes});
    },
		[types.UPDATE_CLUSTER_NODE] (state, payload) {
    	  const nodes = state.nodes;
    	  const index = _.findIndex(nodes, {ID: payload.ID});
    	  nodes.splice(index, 1, payload);
				Object.assign(state, {nodes});
		},
		[types.LINK_CLUSTER_NODE] (state, payload) {
    	  const nodes = state.nodes;
				const index = _.findIndex(nodes, {ID: payload.node.ID});
				nodes[index].ClusterIDs.push(payload.clusterId);
				Object.assign(state, {nodes});
		},
		[types.LINK_MULTPLE_NODE_CLUSTER] (state, payload) {
			const nodes = state.nodes;
			_.forEach(payload.nodes, (node) => {
				let index = _.findIndex(nodes, {ID: node.ID});
				if(index > -1) {
					nodes[index].ClusterIDs.push(payload.clusterId);
				}
			});
			Object.assign(state, {nodes});
		}
};

export default mutations;
