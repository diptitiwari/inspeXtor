<template>
  <div class="policy">
    <b-container fluid>
      <b-row>
        <b-col
          lg="12"
          md="12"
          sm="12"
          class="mx-auto mt-4"
        >
          <div class="mx-auto">
            <h4 class="card-title">
              POLICY DEFINATION
            </h4>
            <b-form>
              <b-row class="mb-2">
                <b-col
                  lg="3"
                  md="3"
                >
                  <b-form-group>
                    <b-form-input
                      v-model="search"
                      placeholder="Search"
                    />
                  </b-form-group>
                </b-col>
                <b-col
                  lg="3"
                  md="3"
                >
                  <b-form-group>
                    <v-select
                      v-model="filterValue"
                      :options="filterItem"
                      placeholder="Select Filter"
                    />
                  </b-form-group>
                </b-col>
                <b-col
                  v-if="filterValue === 'Filter by Cluster'"
                  lg="3"
                  md="3"
                >
                  <v-select
                    v-model="clusterValue"
                    :options="clusterItem"
                    placeholder="Select Cluster"
                    @input="handleClusterChange"
                  >
                    <template
                      v-slot:option="option"
                    >
                      {{ option.Name }}({{ $store.state.policy.clusterWisePolicy[option.Name].length }})
                    </template>
                  </v-select>
                </b-col>
                <b-col
                  v-if="filterValue === 'All Policy'"
                  lg="6"
                  md="6"
                  class="text-right"
                >
                  <b-btn
                    variant="primary"
                    class="btn btn-cons text-uppercase mb-1"
                    @click.prevent="create"
                  >
                    Create New Policy
                  </b-btn>
                </b-col>
                <b-col
                  v-if="filterValue === 'Filter by Cluster'"
                  lg="3"
                  md="3"
                  class="text-right"
                >
                  <b-btn
                    v-b-modal.modal-link-policy
                    variant="primary"
                    class="btn btn-cons text-uppercase mb-1"
                  >
                    Link Policy
                  </b-btn>
                </b-col>
              </b-row>
            </b-form>
            <b-col>
              <b-row class="table-standard">
                <b-table
                  :responsive="true"
                  head-variant="light"
                  :items="policies"
                  :fields="fields"
                  :per-page="showPerPage"
                  :current-page="currentPage"
                  :filter="search"
                >
                  <template v-slot:cell(PolicyID)="data">
                    {{ getPolicyType(data.item.PolicyID) }}
                  </template>
                  <template v-slot:cell(Time)="data">
                    {{ getTime(data.item) }}
                  </template>
                  <template
                    v-if="filterValue === 'All Policy'"
                    v-slot:cell(action)="data"
                  >
                    <button class="mr-2 btn-icon">
                      <img
                        src="icon/edit.svg"
                        class="tbl-icon"
                        title="edit"
                        @click="editRow(data.item.ID)"
                      >
                    </button>
                    <button class="btn-icon">
                      <img
                        src="icon/trash-2.svg"
                        class="tbl-icon"
                        title="delete"
                        @click="deleteRow(data.item.ID)"
                      >
                    </button>
                    <button class="btn-icon">
                      <img
                        src="icon/link.svg"
                        class="tbl-icon"
                        title="merge"
                        @click="mergePolicy(data.item)"
                      >
                    </button>
                  </template>
                </b-table>
              </b-row>
              <b-row class="d-flex mt-2">
                <div class="col-md-3 mb-2">
                  <span class="mr-2">Show</span>
                  <b-form-select
                    v-model="showPerPage"
                    class="w-50"
                    :options="pagesList"
                  />
                  <span class="ml-2">per page</span>
                </div>
                <div class="col-md-6 mb-2">
                  <b-pagination
                    v-model="currentPage"
                    class="paginate-events"
                    :total-rows="policies.length"
                    :per-page="showPerPage"
                    prev-text="<"
                    next-text=">"
                    align="center"
                    hide-goto-end-buttons
                  />
                </div>
              </b-row>
            </b-col>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-modal
      id="modal-link-policy"
      ref="mergeModal"
      centered
      title="Link Policy"
      @ok="handleLinkPolicy"
    >
      <form ref="form">
        <b-row>
          <b-col v-if="filterValue === 'All Policy'">
            <b-form-group
              id="input-group-clintId"
              label="Select Cluster"
            >
              <v-select
                v-model="selectedCluster"
                :options="clusterItem"
                placeholder="Select Cluster"
                @input="handleLinkClusterChange"
              >
                <template v-slot:option="option">
                  {{ option.Name }}
                </template>
              </v-select>
            </b-form-group>
          </b-col>
          <b-col v-if="filterValue === 'Filter by Cluster'">
            <b-form-group
              id="input-group-clintId"
              label="Select Policy"
            >
              <v-select
                v-model="selectedPolicyValue"
                :options="policyItem"
                placeholder="Select Policy"
                @input="handlePolicyChange"
              >
                <template v-slot:option="option">
                  {{ option.Name }}
                </template>
              </v-select>
            </b-form-group>
          </b-col>
        </b-row>
      </form>
    </b-modal>
  </div>
</template>

<script>
import _ from "lodash";
import moment from "moment";
import { mapActions } from 'vuex';
import {
  tFields,
  tPages,
  policyType
} from "./config.js";
export default {
  data: () => {
    return {
      fields: tFields,
      search:'',
      pages: tPages,
      clusterValue: '',
      filterValue: "All Policy",
      filterItem: ["All Policy", "Filter by Cluster"],
      currentPage: 1,
      showPerPage: 10,
      pagesList: [],
      policyType: policyType,
      selectedPolicy: {},
      selectedCluster: "",
      selectedPolicyValue: ""
    };
  },
  computed: {
    policies(){
      return this.$store.getters["policy/getPloicyList"];
    },
    policyItem() {
      if(!_.isEmpty(this.$store.state.policy.policies) && !_.isEmpty(this.$store.state.policy.clusterWisePolicy))
        return _.difference(
          this.$store.state.policy.policies,
          this.$store.state.policy.clusterWisePolicy[this.clusterValue]
        );
      return null;
    },
    clusterItem() {
      return _.map(this.$store.state.cluster.clusters, (cluster) => ({ID: cluster.ID, Name: cluster.Name}));
    },
  },
  watch: {
    clusterValue: {
      handler: function(value) {
        this.policies = this.$store.state.policy.clusterWisePolicy[value];
      },
      deep: true
    },
    filterValue: {
      handler: function(value, oldVal) {
        if (value !== oldVal && value === "All Policy") {
          this.policies = this.$store.state.policy.policies;
        } else if(value !== oldVal && value === "Filter by Cluster"){
          this.handleClusterChange(this.clusterItem[0]);
        }
      },
      deep: true
    }
  },
  created() {
    this.getAllPolicies();
    this.getAllClusters();
  },
  mounted() {
    this.showPerPage = this.perPage;
    this.pagesList = this.pages;
  },
  methods: {
    async create() {
      this.$router.push({ name: "createpolicy" });
    },
    async deleteRow(id) {
      this.$store.dispatch('policy/deletePolicy', id);
    },
    editRow(id) {
      this.$router.push(`/policy/edit/${id}`);
    },
    mergePolicy(policy) {
      //this.$router.push({ name: "MergePolicy" , params: {cluster: this.clusterValue}});
      this.selectedPolicy = policy;
      this.$refs.mergeModal.show();
    },
    handleLinkPolicy() {
      let cluster =
        this.filterValue === "All Policy"
          ? this.selectedCluster
          : this.clusterValue;
      this.$store.dispatch('policy/linkPolicy', {cluster, policy: this.selectedPolicy});
      this.selectedPolicyValue = "";
      this.resetModalForm();
    },
    resetModalForm() {
      this.selectedPolicy = {};
      this.selectedCluster = "";
    },
    getPolicyType(PolicyID) {
      const type = _.find(policyType, { id: parseInt(PolicyID) });
      if (!_.isEmpty(type)) {
        return type.name;
      }
      return "No Policy Type Assigned";
    },
    getTime(item) {
      return `${moment(item.StartTime, "HH:mm:ss").format("LT")} - ${moment(
        item.EndTime,
        "HH:mm:ss"
      ).format("LT")}`;
    },
    handlePolicyChange(policy) {
      this.selectedPolicy = policy;
      this.selectedPolicyValue = policy.Name;
    },
    handleClusterChange(value) {
      this.clusterValue = value.Name;
      this.getPolicyClusterWise();
    },
    handleLinkClusterChange(value) {
      this.selectedCluster = value.Name;
    },
    ...mapActions('policy', ['getAllPolicies', 'getPolicyClusterWise','linkPolicy']),
    ...mapActions('cluster', ['getAllClusters'])
  }
};
</script>
 
