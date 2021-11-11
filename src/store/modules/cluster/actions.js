import * as types from './types';

export default {
    async setClusterList({ commit }, data){
        commit(types.SET_CLUSTERS, data);
    },
    async deleteClusterNode({ commit }, nodeId) {
        commit(types.DELETE_CLUSTER_NODE, nodeId)
    },
    async updateClusterNode({commit}, node) {
        commit(types.UPDATE_CLUSTER_NODE, node)
    },
    async linkClusterNode({commit}, data) {
        commit(types.LINK_CLUSTER_NODE, data)
    },
    async linkMultipleNodeCluster({commit}, data) {
        commit(types.LINK_MULTPLE_NODE_CLUSTER, data)
    }
}
