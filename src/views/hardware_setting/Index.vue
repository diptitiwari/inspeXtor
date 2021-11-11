<template>
  <div class="hardware_setting">
    <b-container fluid>
      <b-row>
        <b-col
          lg="12"
          md="12"
          sm="12"
          class="mx-auto mt-4"
        >
          <b-card class="mx-auto">
            <template v-slot:header>
              <h4>
                <i class="fa fa-cog" /> HARDWARE POLICY SETTING
              </h4>
            </template>
            <small>Which Cluster or Fixture you want to apply this policy to?</small>
            <b-form
              class="mt-2" 
              @submit.prevent="lockSetting"
            >
              <b-row>
                <b-col
                  lg="4"
                  md="4"
                  sm="12"
                >
                  <b-form-group>
                    <b-form-select
                      v-model="typeValue"
                      :options="typeItem"
                      size="md"
                      placeholder="Select"
                      @change="changedAllValue"
                    >
                      <template v-slot:first>
                        <option
                          value
                          disabled
                        >
                          -- Please select an option --
                        </option>
                      </template>
                    </b-form-select>
                    <!-- <v-select v-model="selectAll" :options="allItems" placeholder="Select" @change="changedValue"/> -->
                  </b-form-group>
                </b-col>
                <b-col
                  lg="4"
                  md="4"
                  sm="12"
                >
                  <b-form-group>
                    <b-form-select
                      v-if="clusterItem.length"
                      v-model="clusterValue"
                      :options="clusterItem"
                      size="md"
                      placeholder="SelectCluster"
                      :disabled="disabled"
                      @change="changedClusterValue"
                    >
                      <template v-slot:first>
                        <option
                          value
                          disabled
                        >
                          -- Please select an option --
                        </option>
                      </template>
                    </b-form-select>
                    <!-- <v-select v-model="selectCluster"  :options="clusterItems" :disabled="disabled"/> -->
                  </b-form-group>
                </b-col>
                <b-col
                  lg="4"
                  md="4"
                  sm="12"
                >
                  <b-form-group>
                    <b-form-select
                      v-model="fixtureValue"
                      :options="fixtureItem"
                      size="md"
                      placeholder="SelectFixtures"
                      :disabled="disabledFix"
                    >
                      <template v-slot:first>
                        <option
                          value
                          disabled
                        >
                          -- Please select an option --
                        </option>
                      </template>
                    </b-form-select>
                    <!-- <v-select v-model="selectedFixtures" :options="fixturesItems" :disabled="disabledFix"/> -->
                  </b-form-group>
                </b-col>
              </b-row>
              <!-- <b-row>
                <b-col
                  lg="4"
                  md="4"
                  sm="12"
                >
                  <b-form-group>
                    <v-select
                      v-model="typeValue"
                      :options="typeItem"
                    />
                  </b-form-group>
                </b-col>
                <b-col
                  lg="4"
                  md="4"
                  sm="12"
                >
                  <b-form-group>
                    <v-select
                      v-model="clusterValue"
                      :options="clusterItem"
                    />
                  </b-form-group>
                </b-col>
                <b-col
                  lg="4"
                  md="4"
                  sm="12"
                >
                  <b-form-group>
                    <v-select
                      v-model="fixtureValue"
                      :options="fixtureItem"
                    />
                  </b-form-group>
                </b-col>
              </b-row> -->
              <hr>
              <b-row>
                <b-col
                  lg="4"
                  md="4"
                  sm="12"
                >
                  <b-form-group>
                    <h5>Which hardware you want to configure ?</h5>
                  </b-form-group>
                </b-col>

                <b-col
                  lg="4"
                  md="4"
                  sm="12"
                >
                  <!-- <b-form-group>
                    <v-select
                      v-model="hcValue"
                      :options="hcItem"
                    />
                  </b-form-group> -->
                  <b-form-group>
                    <b-form-select
                      v-model="hcValue"
                      :options="hcItem"
                      size="md"
                    >
                      <template v-slot:first>
                        <option
                          value
                          disabled
                        >
                          -- Please select an option --
                        </option>
                      </template>
                    </b-form-select>
                    <!-- <v-select v-model="selectedFixtures" :options="fixturesItems" :disabled="disabledFix"/> -->
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row class="mb-4">
                <b-col
                  lg="12"
                  md="12"
                  sm="12"
                >
                  <small>what dim level would you like when hardware is triggered ?</small>
                </b-col>
                <b-col
                  lg="12"
                  md="12"
                  sm="12"
                >
                  <vue-slider
                    v-model="rang.hardwareTriggered"
                    :dot-size="18"
                    :tooltip="'always'"
                    :tooltip-placement="'bottom'"
                  />
                </b-col>
              </b-row>
              <b-row class="mb-4">
                <b-col
                  lg="12"
                  md="12"
                  sm="12"
                >
                  <small>How long should this event last (in mnt) ?</small>
                </b-col>
                <b-col
                  lg="12"
                  md="12"
                  sm="12"
                >
                  <vue-slider
                    v-model="rang.eventLast"
                    :dot-size="18"
                    :tooltip="'always'"
                    :tooltip-placement="'bottom'"
                  />
                </b-col>
              </b-row>
              <b-row class="mb-4">
                <b-col
                  lg="12"
                  md="12"
                  sm="12"
                >
                  <small>what dim level should the Fixture go to after the duration is finished ?</small>
                </b-col>
                <b-col
                  lg="12"
                  md="12"
                  sm="12"
                >
                  <vue-slider
                    v-model="rang.fixture"
                    :dot-size="18"
                    :tooltip="'always'"
                    :tooltip-placement="'bottom'"
                  />
                </b-col>
              </b-row>
              <b-row>
                <b-col class="text-right">
                  <b-form-group>
                    <b-btn
                      variant="primary"
                      class="btn btn-cons text-uppercase"
                      type="submit"
                    >
                      Lock Setting
                    </b-btn>
                  </b-form-group>
                </b-col>
              </b-row>
            </b-form>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
 
 <script>
 import { hardware_configure, type, cluster, fixture } from './config.js'
 export default {
  name: 'HardwareSetting',  
  data() {
    return {
      hcItem: hardware_configure,
      hcValue: 'OC Sensor',
      typeItem: type,
      typeValue: 'All',
      clusterItem: cluster,
      clusterValue: '',
      fixtureItem: fixture,
      fixtureValue: '',
      disabled:true,
      disabledFix:true,
      rang: {
        hardwareTriggered: 10,
        eventLast: 50,
        fixture: 15
      }
    }
  },
  methods: {
    changedAllValue(value) {
      console.log(value);
      if (this.typeValue === "Cluster") {
        this.disabled = false;
      }
      if(this.typeValue === "All"){
        this.disabled =true;
        this.disabledFix =true;
      }
    },
    changedClusterValue(value) {
      console.log(value);
      this.disabledFix = false;
    },
    async lockSetting(){

    }
  },
};
</script>
 
