<template>
  <div class="autotune-policy">
    <b-container fluid>
      <b-row>
        <b-col
          lg="7"
          md="7"
          sm="12"
          class="mx-auto mt-4"
        >
          <b-card class=" mx-auto">
            <h4 class="card-title text-center">
              AUTOTUNING POLICY SETTING
            </h4>
            <b-form @submit.prevent="save">
              <b-form-group
                id="input-group-2"
                class=""
                label="Name"
              >
                <b-form-input
                  id="txtname"
                  v-model="setting.PName"
                  placeholder="Enter Autotuning Policy Name"
                  required
                />
              </b-form-group>
              <b-form-group
                id="input-group-2"
                label="Cluster"
              >
                <v-select
                  v-model="setting.ClusterName"
                  placeholder="Select Cluster"
                  :options="clusters"
                  @input="handleClusterChange"
                >
                  <template v-slot:option="option">
                    {{ option.Name }}
                  </template>
                </v-select>
              </b-form-group>
              <b-form-group
                id="input-group-2"
                class=""
                label="Select Color"
              >
                <vue-slider
                  v-model="setting.Color"
                  :dot-size="18"
                  :tooltip="'focus'"
                />
              </b-form-group>
              <b-form-group
                id="input-group-2"
                label="Select Dim Level"
              >
                <vue-slider
                  v-model="setting.Level"
                  :dot-size="18"
                  :tooltip="'focus'"
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
              <b-row>
                <b-col md="6">
                  <b-form-group label="Start Time">
                    <b-form-input
                      id="startTime"
                      v-model="setting.StartTime"
                      type="time"
                    />
                  </b-form-group>
                </b-col>
                <b-col md="6">
                  <b-form-group label="End Time">
                    <b-form-input
                      id="endTime"
                      v-model="setting.EndTime"
                      type="time"
                    />
                  </b-form-group>
                </b-col>
              </b-row>
              <b-form-group class="text-center">
                <b-btn
                  variant="primary"
                  class="btn btn-cons text-uppercase mb-1"
                  type="submit"
                >
                  Save-Merge
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
                  @click="handleCancel"
                >
                  Cancel
                </b-btn>
              </b-form-group>
            </b-form>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  const initialSettings = {
    "PName": "",
    "ClusterID": "",
    "Color": "",
    "Level": "",
    "StartTime": "",
    "EndTime": "",
    "Day1": "",
    "Day2": "",
    "Day3": "",
    "Day4": "",
    "Day5": "",
    "Day6": "",
    "Day7": "",
    "Createdby": "",
    "CreatedOn": "",
    "Deleted": "0",
    "DeletedBy": null,
    "DeletedOn": null,
    "ModifiedBy": "",
    "ModiFiedOn": "",
    "Synchronize": ""
  };

  export default {
    name: "AutotunePolicy",
    components: {},
    props:{
      isUpdate:{
        type: Boolean,
        required: false,
        default: false,
      }
    },
    data: () => {
      return {
        daysOfWeekItem: [
          {text: "Mon", value: "Mon"},
          {text: "Tue", value: "Tue"},
          {text: "Wed", value: "Wed"},
          {text: "Thu", value: "Thu"},
          {text: "Fri", value: "Fri"},
          {text: "Sat", value: "Sat"},
          {text: "Sun", value: "Sun"}
        ],
        setting: initialSettings,
      };
    },
    watch: {
      checkedKeys(val) {
        /* eslint-disable */
        console.log("onCheck", val);
      }
    },
    computed: {
      clusters() {
        return this.$store.state.cluster.clusters;
      }
    },
    created() {
      this.$store.dispatch('cluster/getAllClusters');
      this.$store.dispatch('autoTunePolicy/getAllAutoTunePolicy');

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
    mounted(){
      if(this.isUpdate){
        let atPolicy = _.find(this.$store.state.autoTunePolicy.autoTunePolicies, {ID: this.$route.params.id});
        this.setting = atPolicy;
        let cluster = _.find(this.$store.state.cluster.clusters, {ID: atPolicy.ClusterID});
        this.setting.ClusterName = cluster.Name;
      }
    },
    methods: {
      async save() {
        if(this.isUpdate) {
          this.$store.dispatch('autoTunePolicy/updateAutoTunePolicy', this.setting);
        } else {
          this.$store.dispatch('autoTunePolicy/createAutoTunePolicy', this.setting);
        }
        this.handleCancel();
      },
      handleClusterChange(value) {
        this.setting.ClusterName = value.Name;
        this.setting.ClusterID = value.ID;
      },
      handleCancel() {
        this.resetForm();
        this.$router.push('/at-policy');
      },
      resetForm() {
        this.setting = initialSettings;
      }
    }
  };
</script>
