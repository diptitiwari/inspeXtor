<template>
  <div class="policy">
    <b-container fluid>
      <b-row>
        <b-col
          lg="12"
          md="12"
          sm="12"
          class="mt-4"
        >
          <div class="mx-auto">
            <h4 class="card-title">
              CLUSTER
            </h4>
            <b-row class="my-2">
              <b-col
                lg="4"
                md="4"
              >
                <b-form-group>
                  <b-form-input
                    v-model="search"
                    class
                    placeholder="Search"
                  />
                </b-form-group>
              </b-col>
              <b-col
                lg="4"
                md="4"
              >
                <b-form-group id="input-group-2">
                  <v-select
                    v-model="selectedCluster"
                    label="Name"
                    :options="getCluster"
                    placeholder="Select Cluster"
                    @input="handlerClusterChange"
                  >
                    <template
                      v-slot:option="option"
                    >
                      {{ option.Name }}({{ getNodeCount(option.ID) }})
                    </template>
                  </v-select>
                </b-form-group>
              </b-col>
              <b-col
                lg="4"
                md="4"
                class="text-right"
              >
                <b-btn
                  class="mr-2"
                  variant="primary"
                  @click="linkMultipleNode"
                >
                  Add To Cluster List
                </b-btn>
              </b-col>
            </b-row>
            <b-row>
              <b-col
                lg="12"
                md="12"
              >
                <cluster-node-table
                  :tbl-fields="fields"
                  :search="search"
                  :item-list="getItem"
                  :pages="pages"
                  :selectable="true"
                  :on-row-selected="onRowSelected"
                  table-ref="clusterTable"
                >
                  <template slot-scope="data">
                    <button class="mr-2 btn-icon">
                      <img
                        v-b-modal.modal-prevent-edittbl
                        src="icon/edit.svg"
                        class="tbl-icon"
                        title="edit"
                        @click="editRow(data.item)"
                      >
                    </button>
                    <button class="btn-icon">
                      <img
                        src="icon/trash-2.svg"
                        class="tbl-icon"
                        title="delete"
                        @click="deleteNode(data.item.ID)"
                      >
                    </button>
                    <button class="btn-icon">
                      <img
                        v-b-modal.modal-prevent-linknode
                        src="icon/link.svg"
                        class="tbl-icon"
                        title="merge"
                        @click="link(data.item)"
                      >
                    </button>
                  </template>
                </cluster-node-table>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
      <b-modal
        id="modal-prevent-edittbl"
        ref="modalEdit"
        hide-footer
        title="Edit Cluster Node"
      >
        <form ref="form">
          <b-row>
            <b-col
              md="12"
              lg="12"
              sm="12"
            >
              <b-form-group label="Node">
                <b-form-input
                  id="txtfile"
                  v-model="node.Name"
                  required
                />
              </b-form-group>
              <b-form-group class="text-right">
                <b-btn
                  variant="primary"
                  class="btn btn-cons text-uppercase mb-1"
                  @click.prevent="updateNode"
                >
                  Save
                </b-btn>
              </b-form-group>
            </b-col>
          </b-row>
        </form>
      </b-modal>
      <b-modal
        id="modal-prevent-linknode"
        ref="modalLink"
        hide-footer
        title="Link Cluster"
        @hidden="resetModal"
      >
        <form ref="form">
          <b-row>
            <b-col
              md="12"
              lg="12"
              sm="12"
            >
              <b-form-group label="Cluster">
                <v-select
                  v-model="linkSelectedCluster"
                  label="Name"
                  :options="linkClusterItem"
                  :reduce="Name => Name.ID"
                  placeholder="Select Cluster"
                  @input="handlerLinkClusterChange"
                />
              </b-form-group>
              <b-form-group class="text-right">
                <b-btn
                  variant="primary"
                  class="btn btn-cons text-uppercase mb-1"
                  type="submit"
                  @click.prevent="linkNode"
                >
                  Link
                </b-btn>
              </b-form-group>
            </b-col>
          </b-row>
        </form>
      </b-modal>
    </b-container>
  </div>
</template>
 
<script>
import _ from "lodash";
import ClusterNodeTable from "@/components/Table/Index.vue";
import { tFields, tPages } from "./config.js";
export default {
  name: "NodeTable",
  components: {
    ClusterNodeTable
  },
  data: () => {
    return {
      fields: tFields,
      pages: tPages,
      search: "",
      selectedCluster: "",
      selectedClusterId: "",
      linkClusterItem: [],
      linkSelectedCluster: "",
      linkSelectedClusterId: "",
      nodeValue: "",
      node: {},
      selectedNodeItems: [],
      multipleNodeSelection: false
    };
  },
  computed: {
    getCluster() {
      return this.$store.getters["cluster/getClusterList"];
    },
    getNodes() {
      return this.$store.getters["cluster/getNodeList"];
    },
    getItem() {
      if (this.selectedClusterId) {
        return _.filter(this.getNodes, node => {
          return node.ClusterIDs.includes(this.selectedClusterId);
        });
      } else {
        return this.getNodes;
      }
    }
  },
  methods: {
    async deleteRow(id) {
      this.$store.dispatch("cluster/deleteClustersNode", id);
    },
    editRow(item) {
      this.node = _.cloneDeep(_.find(this.getNodes, { ID: item.ID }));
    },
    updateNode() {
      this.$store.dispatch("cluster/updateClusterNode", this.node);
      this.node = {};
      this.$refs.modalEdit.hide();
    },
    deleteNode(id) {
      this.$store.dispatch("cluster/deleteClusterNode", id);
    },
    getNodeCount(clusterID) {
      const nodes = _.filter(this.getNodes, node => {
        return node.ClusterIDs.includes(clusterID);
      });
      return nodes.length;
    },
    handlerClusterChange(cluster) {
      this.selectedCluster = cluster.Name;
      this.selectedClusterId = cluster.ID;
    },
    link(node) {
      this.linkClusterItem = _.filter(this.getCluster, cluster => {
        return !node.ClusterIDs.includes(cluster.ID);
      });
      this.node = node;
    },
    handlerLinkClusterChange(clusterId) {
      this.linkSelectedClusterId = clusterId;
    },
    linkNode() {
      if (this.multipleNodeSelection) {
        this.$store.dispatch("cluster/linkMultipleNodeCluster", {
          clusterId: this.linkSelectedClusterId,
          nodes: this.selectedNodeItems
        });
      } else {
        this.$store.dispatch("cluster/linkClusterNode", {
          clusterId: this.linkSelectedClusterId,
          node: this.node
        });
      }
    },
    onRowSelected(items) {
      this.selectedNodeItems = items;
      this.multipleNodeSelection = true;
    },
    clearSelected() {
      this.$refs.dataTable.clearSelected();
    },
    resetModal() {
      this.linkSelectedClusterId = "";
      this.linkSelectedCluster = "";
      this.linkClusterItem = [];
      this.selectedNodeItems = [];
      this.multipleNodeSelection = false;
      this.$refs.modalLink.hide();
    },
    linkMultipleNode() {
      if (!_.isEmpty(this.selectedNodeItems)) {
        this.multipleNodeSelection = true;
        this.linkClusterItem = this.getCluster;
        this.$refs.modalLink.show();
      } else {
        this.$notify({
          group: "alert",
          type: "error",
          text: "Please Select the Nodes from the table!"
        });
      }
    }
  }
};
</script>
<style>
</style> 
