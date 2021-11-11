<template>
  <div class="switches">
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
              MANAGE CISCO SWITCHES
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
                  lg="8"
                  md="8"
                  class="text-right"
                >
                  <b-btn
                    v-b-modal="modalId"
                    variant="primary"
                    class="btn btn-cons text-uppercase mb-1"
                  >
                    Add New Switch
                  </b-btn>
                </b-col>
              </b-row>
            </b-form>
            <b-col>
              <b-row class="table-standard">
                <b-table
                  :responsive="true"
                  head-variant="light"
                  :items="getCiscoSwitches"
                  :fields="fields"
                  :per-page="showPerPage"
                  :current-page="currentPage"
                  :filter="search"
                >
                  <template v-slot:cell(action)="data">
                    <button class="mr-2 btn-icon" v-b-modal="modalId">
                      <img
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
                        @click="deleteRow(data.item.ID)"
                      >
                    </button>
                  </template>
                </b-table>
              </b-row>
              <b-row class="d-flex mt-2">
                <div class="col-md-3">
                  <span class="mr-2">Show</span>
                  <b-form-select
                    v-model="showPerPage"
                    class="w-50"
                    :options="pagesList"
                  />
                  <span class="ml-2">per page</span>
                </div>
                <div class="col-md-6">
                  <b-pagination
                    v-model="currentPage"
                    class="paginate-events"
                    :total-rows="getCiscoSwitches.length"
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
      :id="modalId"
      ref="modal"
      hide-footer
      :title="modalTitle"
      @hidden="resetModal"
    >
      <form ref="form">
        <b-row>
          <b-col
            md="12"
            lg="12"
            sm="12"
          >
            <b-form-group label="Name">
              <b-form-input
                v-model="apiSwitch.Name"
                placeholder="Enter Name"
                required
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
            <b-form-group label="IPAddress">
              <b-form-input
                v-model="apiSwitch.IPAddress"
                placeholder="Enter IPAddress"
                required
              />
            </b-form-group>
          </b-col>
          <b-col
            md="6"
            lg="6"
            sm="12"
          >
            <b-form-group label="User Id">
              <b-form-input
                v-model="apiSwitch.UserID"
                placeholder="Enter User Id"
                required
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
            <b-form-group label="Password">
              <b-form-input
                v-model="apiSwitch.Password"
                placeholder="Enter Password"
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
            <b-form-group label="Confirm Password">
              <b-form-input
                v-model="ConFirmPassword"
                placeholder="Enter Confirm Password"
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
              @click="addSwitch"
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
	import _ from 'lodash'
	import moment from 'moment'
	import { tFields, tPages } from './config.js'

  const initialSwitchState = {
    id: "",
    Name: "",
    IPAddress: "0.0.0.0",
    UserID: "",
    Password: "",
    Status: "0"
  }

	export default {
		data: () => {
			return {
				fields: tFields,
				search: '',
				clusterValue: '',
				currentPage: 1,
				showPerPage: 10,
				pagesList: tPages,
        isUpdate: false,
        modalId: 'modal-create-update-switches',
        modalTitle: "Switch Definition",
        apiSwitch: initialSwitchState,
        ConFirmPassword: ""
			}
		},
		computed: {
			getCiscoSwitches() {
			  debugger
				return this.$store.getters["support/getCiscoSwitches"];
			}
		},
		methods: {
			async addSwitch() {
        if(this.isUpdate) {
          this.$store.dispatch('support/updateSwitch', this.apiSwitch);
        } else {
          this.$store.dispatch('support/createSwitch', this.apiSwitch);
        }
        this.$refs.modal.hide();
			},
			async deleteRow (id) {
        this.$store.dispatch('support/deleteSwitch', id);
			},
			editRow (item) {
        this.isUpdate = true;
        this.apiSwitch = _.cloneDeep(item);
      },
      resetModal() {
        this.isUpdate = false;
        this.apiSwitch = initialSwitchState;
      }
		}
	}
</script>

