<template>
  <div class="node-setting">
    <b-container fluid>
      <b-row>
        <b-col
          lg="12"
          md="12"
          sm="12"
          class="mx-auto mt-4"
        >
          <b-form class="mt-2">
            <b-card class="mx-auto">
              <template v-slot:header>
                <h4>
                  <i class="fa fa-cogs" /> NODE SETTING
                </h4>
              </template>
              <b-row>
                <b-col
                  lg="4"
                  md="4"
                >
                  <b-form-group
                    id="input-group-cluster"
                    label="Cluster"
                  >
                    <a-tree-select
                      v-model="selectedNode"
                      @change="onSelectNode"
                      :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
                      :tree-data="treeData"
                      placeholder="Please Select Node"
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
              </b-row>
            </b-card>
            <b-row v-if="nodeSetting">
              <b-col
                lg="6"
                md="6"
              >
                <b-card>
                  <template v-slot:header>
                    <h4>
                      Details
                    </h4>
                  </template>
                  <b-row class="mb-1">
                    <b-col
                      lg="4"
                      md="4"
                    >
                      <label>Name</label>
                    </b-col>
                    <b-col
                      lg="8"
                      md="8"
                    >
                      <h5>{{nodeSetting.details.Name}}</h5>
                    </b-col>
                  </b-row>
                  <b-row class="mb-1">
                    <b-col
                      lg="4"
                      md="4"
                    >
                      <label>IP Address</label>
                    </b-col>
                    <b-col
                      lg="8"
                      md="8"
                    >
                      <h5>{{nodeSetting.details.IPAddress}}</h5>
                    </b-col>
                  </b-row>
                  <b-row class="mb-1">
                    <b-col
                      lg="4"
                      md="4"
                    >
                      <label>Serial No</label>
                    </b-col>
                    <b-col
                      lg="8"
                      md="8"
                    >
                      <h5>{{nodeSetting.details.SerialNum}}</h5>
                    </b-col>
                  </b-row>
                  <b-row class="mb-1">
                    <b-col
                      lg="4"
                      md="4"
                    >
                      <label>Hardware version</label>
                    </b-col>
                    <b-col
                      lg="8"
                      md="8"
                    >
                      <h5>{{nodeSetting.details.HWVer}}</h5>
                    </b-col>
                  </b-row>
                  <b-row class="mb-1">
                    <b-col
                      lg="4"
                      md="4"
                    >
                      <label>Device Tag</label>
                    </b-col>
                    <b-col
                      lg="8"
                      md="8"
                    >
                      <h5>{{nodeSetting.details.TagID}}</h5>
                    </b-col>
                  </b-row>
                  <b-row class="mb-1">
                    <b-col
                      lg="4"
                      md="4"
                    >
                      <label>Clusters</label>
                    </b-col>
                    <b-col
                      lg="8"
                      md="8"
                    >
                      <h5>{{nodeSetting.details.Clusters}}</h5>
                    </b-col>
                  </b-row>
                </b-card>
              </b-col>
              <b-col
                lg="6"
                md="6"
              >
                <b-card>
                  <template v-slot:header>
                    <b-row>
                      <b-col
                        lg="4"
                        md="4"
                      >
                        <h4>
                          Settings
                        </h4>
                      </b-col>
                      <b-col
                        lg="8"
                        md="8"
                        class="text-right"
                      >
                        <b-btn variant="primary">
                          Apply
                        </b-btn>
                      </b-col>
                    </b-row>
                  </template>
                  <b-row class="mb-1">
                    <b-col
                      lg="5"
                      md="5"
                    >
                      <label>Auto Tune</label>
                    </b-col>
                    <b-col
                      lg="7"
                      md="7"
                    >
                      <toggle-button
                        v-model="nodeSetting.vitals.ATEnabled"
                        :color="{checked: '#ee6c4d', unchecked: '#98D1C8', disabled: '#CCCCCC'}"
                        :sync="true"
                        :width="80"
                        :height="30"
                        :font-size="12"
                        :labels="{checked: 'ON', unchecked: 'OFF'}"
                      />
                    </b-col>
                  </b-row>
                  <b-row class="mb-1">
                    <b-col
                      lg="5"
                      md="5"
                    >
                      <label>Driver 1 - Max Watt</label>
                    </b-col>
                    <b-col
                      lg="7"
                      md="7"
                    >
                      <vue-slider
                        v-model="nodeSetting.vitals.Maxwatt1"
                        :dot-size="18"
                        :tooltip="'always'"
                        :tooltip-placement="'left'"
                      />
                    </b-col>
                  </b-row>
                  <b-row class="mb-1">
                    <b-col
                      lg="5"
                      md="5"
                    >
                      <label>Driver 1 - Percentage Power</label>
                    </b-col>
                    <b-col
                      lg="7"
                      md="7"
                    >
                      <h5>{{nodeSetting.vitals.Ppower1}}</h5>
                    </b-col>
                  </b-row>
                  <b-row class="mb-1">
                    <b-col
                      lg="5"
                      md="5"
                    >
                      <label>Driver 2 - Max Watt</label>
                    </b-col>
                    <b-col
                      lg="7"
                      md="7"
                    >
                      <vue-slider
                        v-model="nodeSetting.vitals.Maxwatt2"
                        :dot-size="18"
                        :tooltip="'always'"
                        :tooltip-placement="'left'"
                      />
                    </b-col>
                  </b-row>
                  <b-row class="mb-1">
                    <b-col
                      lg="5"
                      md="5"
                    >
                      <label>Driver 2 - Percentage Power</label>
                    </b-col>
                    <b-col
                      lg="7"
                      md="7"
                    >
                      <h5>{{nodeSetting.vitals.Ppower2}}</h5>
                    </b-col>
                  </b-row>
                  <b-row class="mb-1">
                    <b-col
                      lg="5"
                      md="5"
                    >
                      <label>Occupied Status</label>
                    </b-col>
                    <b-col
                      lg="7"
                      md="7"
                    >
                      <h5>{{nodeSetting.vitals.Occupied}}</h5>
                    </b-col>
                  </b-row>
                  <b-row class="mb-1">
                    <b-col
                      lg="5"
                      md="5"
                    >
                      <label>Temperature</label>
                    </b-col>
                    <b-col
                      lg="7"
                      md="7"
                    >
                      <h5>{{nodeSetting.vitals.Temp}}F</h5>
                    </b-col>
                  </b-row>
                  <b-row class="mb-1">
                    <b-col
                      lg="5"
                      md="5"
                    >
                      <label>Motion Disabled</label>
                    </b-col>
                    <b-col
                      lg="7"
                      md="7"
                    >
                      <toggle-button
                        v-model="nodeSetting.vitals.DaylightEnabled"
                        :color="{checked: '#ee6c4d', unchecked: '#98D1C8', disabled: '#CCCCCC'}"
                        :sync="true"
                        :width="80"
                        :height="30"
                        :font-size="12"
                        :labels="{checked: 'ON', unchecked: 'OFF'}"
                      />
                    </b-col>
                  </b-row>
                  <b-row class="mb-1">
                    <b-col
                      lg="5"
                      md="5"
                    >
                      <label>LLDP Flag</label>
                    </b-col>
                    <b-col
                      lg="7"
                      md="7"
                    >
                      <toggle-button
                        v-model="nodeSetting.vitals.LLDPEnabled"
                        :color="{checked: '#ee6c4d', unchecked: '#98D1C8', disabled: '#CCCCCC'}"
                        :sync="true"
                        :width="80"
                        :height="30"
                        :font-size="12"
                        :labels="{checked: 'ON', unchecked: 'OFF'}"
                      />
                    </b-col>
                  </b-row>
                </b-card>
              </b-col>
              <b-col
                lg="6"
                md="6"
              >
                <b-card>
                  <template v-slot:header>
                    <h4>
                      Events
                    </h4>
                  </template>
                  <b-row v-if="nodeSetting.events.length">
                    <b-col v-for="(nodeEvent, index) in nodeSetting.events" :key="index" lg="12" md="12">
                      <p>{{nodeEvent.CreatedOn}} - {{nodeEvent.Message}}</p>
                      <hr>
                    </b-col>
                  </b-row>
                  <b-row v-else>
                    <b-col><p>No events to report</p></b-col>
                  </b-row>
                </b-card>
              </b-col>
              <b-col
                lg="6"
                md="6"
              >
                <b-card>
                  <template v-slot:header>
                    <b-row>
                      <b-col
                        lg="5"
                        md="5"
                      >
                        <h4>
                          Peripherals
                        </h4>
                      </b-col>
                      <b-col
                        lg="7"
                        md="7"
                      >
                        <h6>
                          Belong to clusters
                        </h6>
                      </b-col>
                    </b-row>
                  </template>
                  <div v-if="nodeSetting.peripherals.length">
                    <b-row class="mb-1" v-for="(peripheral, index) in nodeSetting.peripherals" lg="12" md="12" :key="index">
                      <b-col
                        lg="5"
                        md="5"
                      >
                        <h5>
                          <i :class="getIconClass(peripheral.Name)"/>
                          {{peripheral.Name}}
                        </h5>
                      </b-col>
                      <b-col
                        lg="7"
                        md="7"
                      >
                        <h5>{{peripheral.Clusters}}</h5>
                      </b-col>
                    </b-row>
                  </div>
                </b-card>
              </b-col>
            </b-row>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import _ from 'lodash';
import { treeData, nodes } from "./config.js";
export default {
  data: () => {
    return {
      selectedNode: null,
      treeData,
      nodeSetting: null
    };
  },
  methods: {
    onSelectNode(value, node) {
      if(!_.startsWith(node[0], 'ND-') && !_.startsWith(value, 'n_')) {
        this.$notify({
          group: "alert",
          type: "error",
          text: "Please Select the correct Nodes from the tree"
        });
        this.selectedNode = null;
      } else {
        this.nodeSetting = _.find(nodes, {details: { Name : node[0]}})
      }
    },
    getIconClass(peripheralName) {
      if(_.startsWith(peripheralName, 'DR'))
        return 'fa fa-lightbulb-o';
      else if(_.startsWith(peripheralName, 'WS'))
        return 'fa fa-power-off';
      else if(_.startsWith(peripheralName, 'OS'))
        return 'fa fa-circle-o';
    }
  }
};
</script>

