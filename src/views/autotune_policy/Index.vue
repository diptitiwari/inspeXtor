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
              AUTO TUNE POLICY
            </h4>
            <b-form>
              <b-row class="my-2">
                <b-col
                  lg="4"
                  md="4"
                >
                  <b-form-group>
                    <b-form-input
                      v-model="search"
                      placeholder="Search"
                    />
                  </b-form-group>
                </b-col>
                <b-col
                  lg="4"
                  md="4"
                >
                  <b-form-group>
                    <v-select
                      v-model="filterValue"
                      :options="filterItem"
                      placeholder="Select Filter"
                      @input="handleFilterChange"
                    >
                      <template v-slot:option="option">
                        {{ option.Name }}
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
                    variant="primary"
                    class="btn btn-cons text-uppercase mb-1"
                    @click.prevent="create"
                  >
                    New Auto Tune Policy
                  </b-btn>
                  <b-btn
                    v-if="filterValue === 'Filter by Cluster'"
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
                  :items="atPolicies"
                  :fields="fields"
                  :per-page="showPerPage"
                  :current-page="currentPage"
                  :filter="search"
                >
                  <template v-slot:cell(Cluster)="data">
                    {{ getCluster(data.item.ClusterID) }}
                  </template>
                  <template v-slot:cell(Time)="data">
                    {{ getTime(data.item) }}
                  </template>
                  <template v-slot:cell(action)="data">
                    <button class="mr-2 btn-icon">
                      <img
                        v-b-modal.modal-prevent-edittbl
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
                    :total-rows="atPolicies.length"
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
  </div>
</template>

<script>
import _ from "lodash";
import moment from "moment";
import { tFields, tPages } from "./config.js";
export default {
  data: () => {
    return {
      fields: tFields,
      pages: tPages,
      search: "",
      atPolicies: [],
      clusterValue: "",
      currentPage: 1,
      showPerPage: 10,
      pagesList: [],
      filterValue: "All",
      filterValueId: "None",
    };
  },
  computed: {
    filterItem() {
      return _.concat([{ ID: "None", Name: "All" }], this.$store.state.cluster.clusters);
    }
  },
  mounted() {
    this.showPerPage = this.perPage;
    this.pagesList = this.pages;
    if(this.$store.state.autoTunePolicy.autoTunePolicies.length > 0) {
      this.atPolicies = this.$store.state.autoTunePolicy.autoTunePolicies;
    }
  },
  created() {
    this.$store.dispatch('cluster/getAllClusters');
    this.$store.dispatch('autoTunePolicy/getAllAutoTunePolicy')
  },
  methods: {
    async create() {
      this.$router.push({ name: "createautotunepolicy" });
    },
    async deleteRow(id) {
      this.$store.dispatch('autoTunePolicy/deleteAutoTunePolicy', id).then(() =>{
        this.handleFilterChange({ID: this.filterValueId, Name: this.filterValue});
      });
    },
    editRow(id) {
      this.$router.push(`/at-policy/edit/${id}`);
    },
    getCluster(ClusterID) {
      const cluster = _.find(this.$store.state.cluster.clusters, { ID: ClusterID });
      return cluster.Name;
    },
    getTime(item) {
      return `${moment(item.StartTime, "HH:mm:ss").format("LT")} - ${moment(
        item.EndTime,
        "HH:mm:ss"
      ).format("LT")}`;
    },
    handleFilterChange(value) {
      this.filterValue = value.Name;
      if (value.Name === "All") {
        this.atPolicies = this.$store.state.autoTunePolicy.autoTunePolicies;
      } else {
        let atPolicies = _.filter(
          this.$store.state.autoTunePolicy.autoTunePolicies,
          autoTunePolicy => {
            return autoTunePolicy.ClusterID === value.ID;
          }
        );
        this.atPolicies = atPolicies;
      }
    }
  }
};
</script>

