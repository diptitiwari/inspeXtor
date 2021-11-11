<template>
  <div class="mobile-control">
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
                <i class="fa fa-mobile" /> MOBILE CONTROL
              </h4>
            </template>
            <b-form
              class="mt-2"
              @submit.prevent
            >
              <b-row>
                <b-col
                  lg="4"
                  md="4"
                  sm="12"
                >
                  <b-form-group>
                    <b-form-select
                      v-model="selectAll"
                      :options="allItems"
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
                      v-if="clusterItems.length"
                      v-model="selectCluster"
                      :options="clusterItems"
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
                      v-model="selectedFixtures"
                      :options="fixturesItems"
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
              <hr>
              <b-row>
                <b-col
                  lg="3"
                  md="3"
                  sm="12"
                >
                  <b-form-group>
                    <toggle-button
                      v-model="light"
                      :value="true"
                      :color="{checked: '#ee6c4d', unchecked: '#98D1C8', disabled: '#CCCCCC'}"
                      :sync="true"
                      :width="130"
                      :height="40"
                      :font-size="15"
                      :labels="{checked: 'Light ON', unchecked: 'Light OFF'}"
                      @change="lightstatus"
                    />
                  </b-form-group>
                </b-col>
                <b-col
                  lg="5"
                  md="5"
                  sm="12"
                >
                  <b-form-group>
                    <b-form-radio-group
                      id="btn-radios-2"
                      v-model="sceneValue"
                      :options="options"
                      buttons
                      button-variant="primary"
                      class="btn-block mob-sm"
                      size="md"
                    />
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row class="mb-4">
                <b-col
                  lg="12"
                  md="12"
                  sm="12"
                >
                  <small>Select Dim Level</small>
                </b-col>
                <b-col
                  lg="12"
                  md="12"
                  sm="12"
                >
                  <vue-slider
                    v-model="dimlevel"
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
                  <small>Select Color Level</small>
                </b-col>
                <b-col
                  lg="12"
                  md="12"
                  sm="12"
                >
                  <vue-slider
                    v-model="colorlevel"
                    :dot-size="18"
                    :tooltip="'always'"
                    :tooltip-placement="'bottom'"
                  />
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
export default {
  data: () => {
    return {
      selectAll: "",
      selectCluster: "",
      selectedFixtures: "",
      dimlevel: 28,
      colorlevel: 10,
      allItems: ["All", "Cluster"],
      clusterItems: [
        "Un Assigned",
        "Ak Office(1)",
        "Bench 1",
        "Bench 2",
        "Bench 3"
      ],
      sceneValue:null,
      options: [
        { text: "SCENE 1", value: "scene1" },
        { text: "SCENE 2", value: "scene2" },
        { text: "SCENE 3", value: "scene3" }
      ],
      fixturesItems: [],
      disabled: true,
      disabledFix: true,
      light: true
    };
  },
  methods: {
    lightstatus() {},
    changedAllValue(value) {
      console.log(value);
      if (this.selectAll === "Cluster") {
        this.disabled = false;
      }
      if (this.selectAll === "All") {
        this.disabled = true;
        this.disabledFix = true;
      }
    },
    changedClusterValue(value) {
      console.log(value);
      this.disabledFix = false;
    }
  }
};
</script>
 
<style>
</style>