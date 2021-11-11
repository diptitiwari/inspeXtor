<template>
  <div class="user">
    <b-container fluid>
      <b-row>
        <b-col
          md="12"
          class="mt-4"
        >
          <h4 class="card-title">
            MANAGE USER
          </h4>
        </b-col>
      </b-row>
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
          lg="8"
          md="8"
          class="text-right"
        >
          <b-btn
            v-b-modal="apiModelId"
            variant="primary"
          >
            New User
          </b-btn>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="12">
          <user-data-table
            :tbl-fields="fields"
            :item-list="items"
            :pages="pages"
            :search="search"
          >
            <template slot-scope="data">
              <!-- <button class="btn-icon">
                <img
                  src="icon/eye.svg"
                  class="tbl-icon"
                  title="view"
                >
              </button> -->
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
          </user-data-table>
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
            sm="6"
          >
            <b-form-group label="First Name">
              <b-form-input
                v-model="user.firstName" 
                placeholder="Enter First Name"
                required
              />
            </b-form-group>
          </b-col>
          <b-col
            md="6"
            lg="6"
            sm="6"
          >
            <b-form-group label="Last Name">
              <b-form-input
                v-model="user.lastName" 
                placeholder="Enter Last Name"
                required
              />
            </b-form-group>
          </b-col>
          <b-col
            md="6"
            lg="6"
            sm="6"
          >
            <b-form-group label="Email">
              <b-form-input
                v-model="user.email" 
                placeholder="Enter Email Id"
                type="email"
                required
              />
            </b-form-group>
          </b-col>
          <b-col
            md="6"
            lg="6"
            sm="6"
          >
            <b-form-group label="Contact Number">
              <b-form-input
                v-model="user.phone" 
                placeholder="Enter Phone Number"
                required
              />
            </b-form-group>
          </b-col>
          <b-col
            md="6"
            lg="6"
            sm="6"
          >
            <b-form-group label="User Name">
              <b-form-input
                v-model="user.userName" 
                placeholder="Enter User Name"
                required
              />
            </b-form-group>
          </b-col>
          <b-col
            md="6"
            lg="6"
            sm="6"
          >
            <b-form-group label="Password">
              <b-form-input
                v-model="user.password" 
              
                placeholder="************"
                type="password"
                required
              />
            </b-form-group>
          </b-col>
          <b-col
            md="12"
            lg="12"
            sm="12"
          >
            <b-form-group label="User Role(s)">
              <v-select
                v-model="user.roles"
                :options="userRoles"
                placeholder="Select User Role(s)"
                :multiple="true"
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
              @click="addUser"
            >
              {{ !isUpdate ? 'Save!' : 'Update!' }}
            </b-button>
          </b-col>
        </b-row>
      </form>
    </b-modal>
  </div>
</template>

<script>
import UserDataTable from "@/components/Table/Index.vue";
import { tFields, tItems, tPages } from "./config.js";
import _ from 'lodash';

const initialUserState = {
  firstName:'',
  lastName:'',
  email:'',
  phone:'',
  userName:'',
  password:'',
  roleValue:[],
  id:0,
  active:false
};

export default {
  name: "User",
  components: {
    UserDataTable
  },
  data() {
    return {
      title:'',
      isUpdate: false,
      search:'',
      apiModelId: "Enter User Detail",
      titleText:'',
      fields: tFields,
      items: tItems,
      pages: tPages,
      userRoles:['admin','gest','super admin'],
      initialUserState,
      user: initialUserState,
    };
  },
  mounted(){
    // if(this.isUpdate){
    //   this.titleText = "EDIT POLICY DEFINATION";
    // }else{
    //   this.titleText = "NEW POLICY DEFINATION";
    // }

},
  methods: {
    // handleSubmitFile() {
    //   this.$nextTick(() => {
    //     this.$refs.modal.hide();
    //   });
    // },
    addUser(){
      if(this.isUpdate) {
        let index = _.findIndex(this.items, {id: this.user.id});
        this.items.splice(index, 1, this.user);
      } else {
        let newId = this.items[this.items.length-1].id;
        newId++;
        this.user.id = newId;
        this.items.push(this.user);
      }
      this.user = this.initialUserState;
      this.$refs.modal.hide();
    },
    async deleteRow(id) {
      this.items.splice(await this.items.findIndex(e => e.id === id), 1);
    },
    editRow(item) {
      this.user = item;
      this.isUpdate = true;
    },
    resetModal() {
      this.isUpdate = false;
      this.user = this.initialUserState;
    }
  }
};
</script>

<style scoped>
</style>
