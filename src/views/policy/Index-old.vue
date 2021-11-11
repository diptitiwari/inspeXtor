<template>
  <div class="policy">
    <b-container fluid>
      <b-row>
        <b-col
          lg="3"
          md="3"
          sm="12"
          class="mt-4"
        >
          <b-card class=" tree-view-panel">
            <a-tree
              v-model="checkedKeys"
              checkable
              :expanded-keys="expandedKeys"
              :auto-expand-parent="autoExpandParent"
              :selected-keys="selectedKeys"
              :tree-data="treeData"
              @expand="onExpand"
              @select="onSelect"
            />
          </b-card>
        </b-col>
        <b-col
          lg="6"
          md="6"
          sm="12"
          class="mx-auto mt-4"
        >
          <b-card class=" mx-auto">
            <h5 class="card-title text-center">
              POLICY DEFINATION
            </h5>
            <b-form @submit.prevent="save">
              <b-form-group
                id="input-group-2"
                label="Name"
              >
                <b-form-input
                  id="txtname"
                  v-model="setting.name"
                  placeholder="policy name"
                  required
                />
              </b-form-group>
              <b-form-group
                id="input-group-2"
                label="Cluster"
              >
                <v-select
                  v-model="setting.clusterValue"
                  :options="setting.clusterItem"
                  placeholder="Select Cluster"
                />
              </b-form-group>
              <b-form-group
                id="input-group-2"
                class
                label="Dim Level"
              >
                <vue-slider
                  v-model="setting.dimLevel"
                  :dot-size="18"
                  :tooltip="'focus'"
                  :tooltip-placement="'top'"
                  :min="0"
                />
              </b-form-group>
              <b-form-checkbox
                id="checkbox-1"
                v-model="setting.motionStatus"
                name="checkbox-1"
                :value="setting.motionStatus"
                unchecked-value="not_accepted"
                class="mb-3"
                @change="motionchange()"
              >
                {{ motion }}
              </b-form-checkbox>
              <b-form-group
                v-if="!setting.motionStatus"
                id="input-group-2"
                label="Duration"
              >
                <b-row>
                  <b-col md="6">
                    <b-form-input
                      id="hours"
                      v-model="setting.hours"
                      type="number"
                      placeholder="Hours"
                    />
                  </b-col>
                  <b-col md="6">
                    <b-form-input
                      id="minute"
                      v-model="setting.minute"
                      type="number"
                      placeholder="Minute"
                    />
                  </b-col>
                </b-row>
              </b-form-group>
              <b-row>
                <b-col md="6">
                  <b-form-group label="Start Time">
                    <b-form-input
                      id="startTime"
                      v-model="setting.startTime"
                      type="time"
                    />
                  </b-form-group>
                </b-col>
                <b-col md="6">
                  <b-form-group label="End Time">
                    <b-form-input
                      id="endTime"
                      v-model="setting.endTime"
                      type="time"
                    />
                  </b-form-group>
                </b-col>
              </b-row>
              <b-form-group
                id="input-group-2"
                class
                label="Light Defult"
              >
                <b-form-input
                  id="txtlightdefult"
                  v-model="setting.lightDefult"
                  class
                  placeholder="Light Defult"
                  required
                />
              </b-form-group>
              <b-form-checkbox
                id="checkbox-2"
                v-model="setting.colorStatus"
                name="checkbox-2"
                :value="setting.colorStatus"
                unchecked-value="not_accepted"
                class="mb-3"
                @change="colorTuneChange()"
              >
                {{ colorTune }}
              </b-form-checkbox>
              <b-form-group
                v-if="!setting.colorStatus"
                id="input-group-2"
                label="Select Color"
              >
                <vue-slider
                  v-model="setting.color"
                  :dot-size="18"
                  :tooltip="'focus'"
                  :tooltip-placement="'top'"
                  :min="0"
                />
              </b-form-group>
              <b-form-group label="Days Of Week">
                <b-form-checkbox-group
                  id="days-of-week"
                  v-model="setting.daysOfWeekValue"
                  :options="daysOfWeekItem"
                  name="flavour-1"
                />
              </b-form-group>
              <b-form-group class="text-center">
                <b-btn
                  variant="primary"
                  class="btn btn-cons text-uppercase mb-1"
                  type="submit"
                >
                  Save
                </b-btn>
                <b-btn
                  variant="defult"
                  class="btn btn-cons text-uppercase mb-1"
                  type="button"
                >
                  Remove
                </b-btn>
                <b-btn
                  variant="secondary"
                  class="btn btn-cons text-uppercase mb-1"
                  type="reset"
                >
                  Cancel
                </b-btn>
              </b-form-group>
            </b-form>
          </b-card>
        </b-col>
        <b-col
          lg="3"
          md="3"
          sm="12"
          class="mt-4"
        >
          <b-card class=" tree-view-panel">
            dummy text
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
 
 <script>
 import { treeData,cluster } from "./config.js";
export default {
  data: () => {
    return {
      expandedKeys: ["0-0-0", "0-0-1"],
      autoExpandParent: true,
      checkedKeys: ["0-0-1","0-0-0-0"],
      selectedKeys: [],
      treeData,
      colorTune:'No Color Tune',
      motion:'Motion Locked',
      daysOfWeekItem:[
        { text: "Mon", value: "Mon" },
        { text: "Tue", value: "Tue" },
        { text: "Wed", value: "Wed" },
        { text: "Thu", value: "Thu" },
        { text: "Fri", value: "Fri" },
        { text: "Sat", value: "Sat" },
        { text: "Sun", value: "Sun" }
      ],
      setting:{
        name:'',
        lightDefult:'',
        colorStatus:true,
        motionStatus:true,
        clusterItem:cluster,
        clusterValue:'',
        dimLevel:50,
        color:70,
        daysOfWeekValue:'',
        startTime:'',
        endTime:'',
        minute:'',
        hours:''
      }
    }
  },
   created() {
    const today = new Date();
    const min = today.getMinutes();
    const hour = today.getHours();

    if (hour < 10 && min < 10)
      this.setting.startTime = `0${today.getHours()}:0${today.getMinutes()}`;
    else if (hour < 10 && min > 10)
      this.setting.startTime = `0${today.getHours()}:${today.getMinutes()}`;
    else if (hour > 10 && min < 10)
      this.setting.startTime = `${today.getHours()}:0${today.getMinutes()}`;
    else this.setting.startTime = today.getHours() + today.getMinutes();

    this.setting.endTime = this.setting.startTime;
  },
  methods:{
    async save(){},
    colorTuneChange(){
      this.setting.colorStatus = !this.setting.colorStatus
      if(this.setting.colorStatus){
        this.colorTune='No Color Tune'
      }
      else{
        this.colorTune='Color Tune'
      }
      
    },
    motionchange(){
      this.setting.motionStatus = !this.setting.motionStatus
      if(this.setting.motionStatus){
        this.motion='Motion Locked'
      }
      else{
        this.motion='Motion Unlocked'
      }
      
    },
    onExpand(expandedKeys) {
      console.log("onExpand", expandedKeys);
      this.expandedKeys = expandedKeys;
      this.autoExpandParent = false;
    },
    onSelect(selectedKeys, info) {
      console.log("onSelect", info);
      this.selectedKeys = selectedKeys;
    }
  }
};
</script>
 
