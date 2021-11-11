<template>
  <div class="user">
    <b-container fluid>
      <b-row>
        <b-col
          md="12"
          lg="12"
          sm="12"
        >
          <b-row>
            <b-col
              md="12"
              class="mt-4"
            >
              <h4 class="card-title">
                ALERT DEFINITION
              </h4>
            </b-col>
          </b-row>
          <b-row class="my-2 text-right">
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
              <b-form-group>
                <b-btn
                  v-b-modal.modal-prevent-new
                  class="mr-2 mb-2"
                  variant="primary"
                >
                  Create New Alert
                </b-btn>
              
                <b-btn
                  v-b-modal.modal-prevent-configration
                  variant="secondary"
                  class="mb-2"
                >
                  SMPT Configration
                </b-btn>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="12">
              <alert-data-table
                :tbl-fields="fields"
                :item-list="items"
                :pages="pages"
                :search="search"
              />
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
    <b-modal
      id="modal-prevent-new"
      ref="modal"
      title="Alert Defination"
      hide-footer;
    >
      <form ref="form">
        <b-row>
          <b-col
            md="4"
            lg="4"
            sm="12"
          >
            <b-form-group
              id="input-group-cluster"
              label="Cluster"
            >
              <v-select
                v-model="alertDefinition.cluster"
                placeholder="Select Cluster"
                :options="clusterItem"
              />
            </b-form-group>
          </b-col>
          <b-col
            md="4"
            lg="4"
            sm="12"
          >
            <b-form-group
              id="input-group-severity"
              label="Severity"
            >
              <v-select
                v-model="alertDefinition.severity"
                placeholder="Select Severity"
                :options="severityItem"
              />
            </b-form-group>
          </b-col>
          <b-col
            md="4"
            lg="4"
            sm="12"
          >
            <b-form-group
              id="input-group-parameterType"
              label="parameter Type"
            >
              <v-select
                v-model="alertDefinition.parameter"
                placeholder="Select parameter Type"
                :options="parameterTypeItem"
              />
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col
            md="4"
            lg="4"
            sm="12"
          >
            <b-form-group
              id="input-group-node"
              label="Node"
            >
              <v-select
                v-model="alertDefinition.node"
                placeholder="Select Node"
                :options="nodeItem"
              />
            </b-form-group>
          </b-col>
          <b-col
            md="4"
            lg="4"
            sm="12"
          >
            <b-form-group
              id="input-group-Condition"
              label="Condition"
            >
              <v-select
                v-model="alertDefinition.condition"
                placeholder="Select Condition"
                :options="conditionItem"
              />
            </b-form-group>
          </b-col>
          <b-col
            md="4"
            lg="4"
            sm="12"
          >
            <b-form-group
              id="input-group-2"
              label="Value"
            >
              <b-form-input
                id="txtvalue"
                v-model="alertDefinition.value"
                placeholder="Enter value"
                required
              />
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="6">
            <b-form-group label="Start Time">
              <b-form-input
                id="startTime"
                v-model="alertDefinition.startTime"
                type="time"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group label="End Time">
              <b-form-input
                id="endTime"
                v-model="alertDefinition.endTime"
                type="time"
              />
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col
            md="12"
            lg="12"
            sm="12"
          >
            <b-form-group label="Days Of Week">
              <b-form-checkbox
                v-model="alertDefinition.allSelected"
                @click.prevent="selectAll"
              >
                Select All
              </b-form-checkbox>
              <b-form-checkbox-group
                id="days-of-week"
                v-model="alertDefinition.daysOfWeekValue"
                :options="daysOfWeekItem"
                name="flavour-1"
              />
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col
            md="12"
            lg="12"
            sm="12"
          >
            <b-form-group
              id="input-group-description"
              label="Description"
            >
              <b-form-input
                id="txtdescription"
                v-model="alertDefinition.description"
                placeholder="Enter Description"
                required
              />
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col
            md="12"
            lg="12"
            sm="12"
          >
            <b-form-group
              id="input-group-notification"
              label="Send Email Notification To"
            >
              <v-select
                v-model="alertDefinition.notification"
                placeholder="Select user"
                :options="notificationItem"
              />
            </b-form-group>
          </b-col>
        </b-row>
      </form>
      <b-row>
        <b-col
          md="12"
          align="right"
        >
          <b-button
            variant="primary"
            @click="handleAddAlertDef"
          >
            Save
          </b-button>
        </b-col>
      </b-row>
    </b-modal>
    <b-modal
      id="modal-prevent-configration"
      ref="modal"
      title="SMTP Configration"
    >
      <form
        ref="form"
        @submit.stop.prevent="handleSubmitConfig"
      >
        <b-row>
          <b-col
            md="12"
            lg="12"
            sm="12"
          >
            <b-form-group
              id="input-group-server"
              label="SMTP Server"
            >
              <b-form-input
                id="txtserver"
                v-model="alertDefinition.SmtpServer"
                placeholder="Enter SMTP Server"
                required
              />
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col
            md="12"
            lg="12"
            sm="12"
          >
            <b-form-group
              id="input-group-server-port"
              label="SMTP Server Port"
            >
              <b-form-input
                id="txtserverPort"
                v-model="alertDefinition.ServerPort"
                placeholder="Enter SMTP Server Port"
                required
              />
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col
            md="12"
            lg="12"
            sm="12"
          >
            <b-form-group
              id="input-group-config-description"
              label="Description"
            >
              <b-form-input
                id="txtdescription"
                v-model="alertDefinition.configdescription"
                placeholder="Enter Description"
                required
              />
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col
            md="12"
            lg="12"
            sm="12"
          >
            <b-form-group
              id="input-group-email"
              label="From Email Address"
            >
              <b-form-input
                id="txtemail"
                v-model="alertDefinition.email"
                placeholder="Enter From Email Address"
                required
              />
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col
            md="12"
            lg="12"
            sm="12"
          >
            <b-form-group
              id="input-group-password"
              label="Password"
            >
              <b-form-input
                id="txtpassword"
                v-model="alertDefinition.password"
                placeholder="Enter  Password"
                required
              />
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col
            md="12"
            lg="12"
            sm="12"
          >
            <b-form-checkbox
              id="checkbox-1"
              v-model="alertDefinition.EmailAlertNotification"
              name="checkbox-1-notification"
              checked-value="accepted"
            >
              Email Alert Notification
            </b-form-checkbox>
          </b-col>
        </b-row>
      </form>
    </b-modal>
  </div>
</template>

<script>
import _ from 'lodash';
import AlertDataTable from "@/components/Table/Index.vue";
import {
  tFields,
  tItems,
  tPages,
  cluster,
  severity,
  parameterType,
  node,
  condition,
  daysOfWeekItem
} from "./config.js";

const initialStateALertDef = {
  cluster: "",
  severity: "",
  parameter: "",
  node: "",
  condition: "",
  value: "",
  startTime: "",
  endTime: "",
  daysOfWeek: [],
  description: "",
  notification: "",
  ServerPort: "",
  SmtpServer: "",
  emailAlertNotification: false,
  configdescription:'',
  allSelected: false
};

export default {
  name: "Alert",
  components: {
    AlertDataTable
  },
  data() {
    return {
      fields: tFields,
      items: tItems,
      pages: tPages,
      search:'',
      daysOfWeekItem: daysOfWeekItem,
      notificationItem: ["vishnu khatik"],
      parameterTypeItem: parameterType,
      clusterItem: cluster,
      conditionItem: condition,
      severityItem: severity,
      nodeItem: node,
      alertDefinition: initialStateALertDef,
    };
  },
  created() {
     const today = new Date();
     const min = today.getMinutes();
     const hour = today.getHours();

     if (hour < 10 && min < 10)
       this.alertDefinition.startTime = `0${today.getHours()}:0${today.getMinutes()}`;
     else if (hour < 10 && min > 10)
       this.alertDefinition.startTime = `0${today.getHours()}:${today.getMinutes()}`;
     else if (hour > 10 && min < 10)
       this.alertDefinition.startTime = `${today.getHours()}:0${today.getMinutes()}`;
     else this.alertDefinition.startTime = today.getHours() + today.getMinutes();

     this.alertDefinition.endTime = this.alertDefinition.startTime;
  },
  methods: {
    selectAll: function(){
      this.alertDefinition.allSelected = true;
    },
    handleAddAlertDef() {
      let newId = parseInt(_.last(this.items).id);
      newId++;
      this.alertDefinition.id = newId.toString();
      this.items.push(this.alertDefinition);
    },
    handleSubmitConfig() {
    },
    resetModal() {
      this.alertDefinition = initialStateALertDef;
    }
  }
};
</script>

<style >
</style>
