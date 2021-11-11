<template>
  <div class="apiuser">
    <b-container fluid>
      <b-row>
        <b-col
          md="12"
          class="mt-4"
        >
          <h4 class="card-title">
            MANAGE API USER
          </h4>
        </b-col>
      </b-row>
      <b-row class="my-2 ">
        <b-col
          lg="4"
          md="4"
          class="mt-2"
        >
          <b-form-input
            v-model="search"
            class=""
            placeholder="Search"
          />
        </b-col>
        <b-col
          lg="8"
          md="8"
          class="text-right"
        >
          <b-btn
            v-b-modal="apiModelId"
            class="mr-2 mt-2"
            variant="primary"
          >
            Add New Client
          </b-btn>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="12">
          <api-user-data-table
            :tbl-fields="fields"
            :search="search"
            :item-list="items"
            :pages="pages"
          >
            <template slot-scope="data">
              <button class="mr-2 btn-icon">
                <img
                  v-b-modal="apiModelId"
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
                  @click="deleteRow(data.item.id)"
                >
              </button>
            </template>
          </api-user-data-table>
        </b-col>
      </b-row>
    </b-container>
    <b-modal
      :id="apiModelId"
      ref="modal"
      hide-footer
      :title="title"
      @hidden="resetModal"
    >
      <form ref="form">
        <b-row>
          <b-col
            md="6"
            lg="6"
            sm="12"
          >
            <b-form-group label="Client Id">
              <b-form-input
                v-model="apiUser.clientId"
                placeholder="Enter client Id"
                required
                :readonly="isUpdate"
              />
            </b-form-group>
          </b-col>
          <b-col
            md="6"
            lg="6"
            sm="12"
          >
            <b-form-group label="Active">
              <v-select
                v-model="apiUser.active"
                :options="activeStatus"
              />
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col
            md="6"
            lg="6"
            sm="12"
          >
            <b-form-group label="Client Secret ">
              <b-form-input
                v-model="apiUser.clientSecret"
                placeholder="Enter Clint Secret"
                required
                type="password"
              />
            </b-form-group>
          </b-col>
          <b-col
            md="6"
            lg="6"
            sm="12"
          >
            <b-form-group label="Client Secret Confirm">
              <b-form-input
                v-model="apiUser.clientSecretConfirm"
                placeholder="Enter secret confirm"
                required
                type="password"
              />
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col
            md="12"
            align="right"
          >
            <b-button
              variant="primary"
              @click="addClient"
            >
              {{ isUpdate? 'Update!' : 'Save!' }}
            </b-button>
          </b-col>
        </b-row>
      </form>
    </b-modal>
  </div>
</template>

<script>

import _ from 'lodash';
import moment from 'moment';
import ApiUserDataTable from "@/components/Table/Index.vue";
import { tFields, tItems, tPages } from "./config.js";

const initialApiUserState = {
  id: '',
  apiToken: '123456789',
  assignedOn: moment().format('YYYY-MM-DD hh:mm:ss'),
  expiresOn: moment().add(2, 'days').format('YYYY-MM-DD hh:mm:ss'),
  clientSecret: '',
  clientSecretConfirm: '',
  active: ''
}

export default {
  name: "ApiUser",
  components: {
    ApiUserDataTable
  },
  data() {
    return {
      title: "API Client Details",
      apiModelId: "modal-prevent-client",
      isUpdate: false,
      search:'',
      fields: tFields,
      items: tItems,
      pages: tPages,
      activeStatus: ["Yes", "No"],
      activeValue: '',
      initialApiUserState,
      apiUser: initialApiUserState
    };
  },
  methods: {
    addClient() {
      if(this.isUpdate) {
        let index = _.findIndex(this.items, {clientId: this.apiUser.clientId});
        this.items.splice(index, 1, this.apiUser);
      } else {
        this.items.push(this.apiUser);
      }
      this.$refs.modal.hide();
    },
    async deleteRow(id) {
      this.items.splice(await this.items.findIndex(e => e.id === id), 1);
    },
    editRow(item) {
      this.isUpdate = true;
      this.apiUser = _.cloneDeep(item);
    },
    resetModal() {
      this.isUpdate = false;
      this.apiUser = this.initialApiUserState;
    }
  }
};
</script>

<style scoped>
</style>
