<template>
  <div class="terminal">
    <b-container fluid>
      <b-row>
        <b-col
          lg="12"
          md="12"
          sm="12"
          class="mx-auto mt-4"
        >
          <b-card class=" mx-auto">
            <template v-slot:header>
              <h4>
                <i class="fa fa-terminal" /> Terminal
              </h4>
            </template>
            <b-form>
              <b-row>
                <b-col
                  lg="4"
                  md="4"
                  sm="12"
                >
                  <b-form-group
                    id="input-group-cluster"
                    label="Cluster"
                  >
                    <a-tree-select 
                      v-model="value"
                      :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
                      :tree-data="treeData"
                      placeholder="Please select Cluster"
                      tree-default-expand-all
                    >
                      <span
                        v-if="key='0-0-1'"
                        slot="title"
                        slot-scope="{key, value}"
                        style="color: #08c"
                      >{{ value }}</span>
                    </a-tree-select>
                  </b-form-group>
                </b-col>
                <b-col
                  lg="4"
                  md="4"
                  sm="12"
                >
                  <b-form-group
                    id="input-group-requestType"
                    label="Request Type"
                  >
                    <v-select
                      v-model="setting.requestType"
                      placeholder="Select"
                      :options="setting.requestItem"
                    />
                  </b-form-group>
                </b-col>
                <!-- <b-col
                  lg="4"
                  md="4"
                  sm="12"
                >
                  <b-form-group
                    id="input-group-nodes"
                    label="Nodes"
                  >
                    <v-select
                      v-model="setting.nodesType"
                      placeholder="Select"
                      :options="setting.nodesItem"
                    />
                  </b-form-group>
                </b-col> -->
                <b-col
                  lg="4"
                  md="4"
                  sm="12"
                >
                  <b-form-group
                    id="input-group-nodes"
                    label="Type Of Fixture"
                  >
                    <v-select
                      v-model="setting.fixtureType"
                      placeholder="Select"
                      :options="setting.fixtureTypeItem"
                    />
                  </b-form-group>
                </b-col>
                <b-col
                  lg="4"
                  md="4"
                  sm="12"
                >
                  <b-form-group
                    id="input-group-nodes"
                    label="Fixture"
                  >
                    <v-select
                      v-model="setting.fixture"
                      placeholder="Select"
                      :options="setting.fixtureItem"
                    />
                  </b-form-group>
                </b-col>
                <b-col
                  lg="4"
                  md="4"
                  sm="12"
                >
                  <b-form-group
                    id="input-group-nodes"
                    label="Property"
                  >
                    <v-select
                      v-model="setting.property"
                      placeholder="Select"
                      :options="setting.propertyItem"
                    />
                  </b-form-group>
                </b-col>
                <b-col
                  lg="4"
                  md="4"
                  sm="12"
                >
                  <b-form-group
                    id="input-group-nodes"
                    label="Or IP"
                  >
                    <b-form-input
                      id="txtip"
                      v-model="setting.ip"
                      placeholder="Enter IP"
                      required
                    />
                  </b-form-group>
                </b-col>
              </b-row>
              <b-form-group class="text-center">
                <b-btn
                  variant="primary"
                  class="btn btn-cons text-uppercase mb-1"
                  type="submit"
                  @click.prevent
                >
                  Send Command To Node
                </b-btn>
              </b-form-group>
              <b-row>
                <b-col
                  lg="12"
                  md="12"
                  sm="12"
                >
                  <h5>Result :</h5>
                </b-col>
                <b-col
                  lg="12"
                  md="12"
                  sm="12"
                />
              </b-row>
            </b-form>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
 
 <script>
import { propertyval, treeData } from "./config.js";

export default {
  data: () => {
    return {
      value: undefined,
      treeData,
      setting: {
        requestType: "GET",
        requestItem: ["GET", "PUT"],
        ip: "",
        fixtureType: "",
        fixtureTypeItem: [],
        fixture: "",
        fixtureItem: [],
        property: "",
        propertyItem: propertyval
      }
    };
  },
  watch: {
    value(value) {
      console.log(value);
    }
  }
};
</script>
<style>
.ant-select-selection--single {
  height: 37px !important;
}
</style> 
