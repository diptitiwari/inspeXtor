<template>
  <div class="policy">
    <b-container fluid>
      <b-row>
        <b-col
          lg="7"
          md="7"
          sm="12"
          class="mx-auto mt-4"
        >
          <b-card class=" mx-auto">
            <h5 class="card-title text-center">
              {{ titleText }}
            </h5>
            <b-form @submit.prevent="save">
              <b-form-group
                id="input-group-2"
                label="Name"
              >
                <b-form-input
                  id="txtname"
                  v-model="setting.Name"
                  placeholder="policy name"
                  required
                />
              </b-form-group>
              <b-form-group
                id="input-group-2"
                label="Policy Type"
              >
                <v-select
                  v-model="policyTypeValue"
                  :options="$store.state.policy.policyType"
                  placeholder="Select Policy Type"
                  @input="handlePolicyTypeChange"
                >
                  <template v-slot:option="option">
                    {{ option.name }}
                  </template>
                </v-select>
              </b-form-group>
              <b-form-group
                id="input-group-2"
                class
                label="Dim Level"
              >
                <vue-slider
                  v-model="setting.Dim"
                  :dot-size="18"
                  :tooltip="'focus'"
                  :tooltip-placement="'top'"
                  :min="0"
                />
              </b-form-group>
              <b-form-checkbox
                id="checkbox-1"
                v-model="setting.MotionStatus"
                name="checkbox-1"
                :value="setting.MotionStatus"
                unchecked-value="not_accepted"
                class="mb-3"
                @change="motionchange()"
              >
                {{ motion }}
              </b-form-checkbox>
              <b-form-group
                v-if="!setting.MotionStatus"
                id="input-group-2"
                label="Duration"
              >
                <b-row>
                  <b-col md="6">
                    <b-form-input
                      id="hours"
                      v-model="setting.DurationHour"
                      type="number"
                      placeholder="Hours"
                    />
                  </b-col>
                  <b-col md="6">
                    <b-form-input
                      id="minute"
                      v-model="setting.DurationMinute"
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
              <b-form-group
                id="input-group-2"
                class
                label="Light Defult"
              >
                <b-form-input
                  id="txtlightdefult"
                  v-model="setting.LightDefault"
                  class
                  placeholder="Light Defult"
                  required
                />
              </b-form-group>
              <b-form-checkbox
                id="checkbox-2"
                v-model="setting.ColorStatus"
                name="checkbox-2"
                :value="setting.ColorStatus"
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
                  v-model="setting.Color"
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
                  {{ saveBtnText }}
                </b-btn>
                <b-btn
                  v-if="isUpdate"
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
import _ from 'lodash';
const initialState = {
  "ID": '',
  "PolicyID": '0',
  "Name": '',
  "Formate": "1",
  "ColorStatus": "0",
  "Color": "0",
  "Dim": "0",
  "MotionStatus": "0",
  "DurationHour": "0",
  "DurationMinute": "0",
  "TimeFormate": "0",
  "StartDate": null,
  "StartTime": "",
  "EndTime": "",
  "Day1": "1",
  "Day2": "1",
  "Day3": "1",
  "Day4": "1",
  "Day5": "1",
  "Day6": "1",
  "Day7": "1",
  "LightDefault": "0",
  "Createdby": "1",
  "CreatedOn": "2019-10-23 10:23:12",
  "Deleted": "0",
  "DeletedBy": null,
  "DeletedOn": null,
  "ModifiedBy": "1",
  "ModiFiedOn": "2019-10-23 10:10:25",
  "Synchronize": "2019-10-23 10:23:25"
}

export default {
  name:'Policy',
  props:{
    isUpdate:{
      type: Boolean,
      required: false,
      default: false,
    }
  },
  data: () => {
    return {
      titleText: "NEW POLICY DEFINATION",
      saveBtnText: "Save",
      item:[],
      colorTune: "No Color Tune",
      motion: "Motion Locked",
      daysOfWeekItem: [
        { text: "Select All", value: "All" },
        { text: "Mon", value: "Mon" },
        { text: "Tue", value: "Tue" },
        { text: "Wed", value: "Wed" },
        { text: "Thu", value: "Thu" },
        { text: "Fri", value: "Fri" },
        { text: "Sat", value: "Sat" },
        { text: "Sun", value: "Sun" }
      ],
      policyTypeValue: '',
      setting: initialState,
    };
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
    this.item=this.$route.params.items;
    console.log('datA',this.item)
    this.$store.dispatch('policy/getAllPolicyType');
  },
  mounted(){
      if(this.isUpdate){
        this.titleText = "EDIT POLICY DEFINATION";
        this.saveBtnText = "Update";
        let policy = _.find(this.$store.state.policy.policies, {ID: this.$route.params.id});
        this.setting = policy
      }else{
        this.titleText = "NEW POLICY DEFINATION";
        this.saveBtnText = "Save";
      }
       
  },
  methods: {
    async save() {
      if(this.isUpdate){
        this.$store.dispatch('policy/updatePolicy', this.setting)
      } else {
        this.$store.dispatch('policy/createPolicy', this.setting)
      }
      this.$router.push('/policy');
    },
    colorTuneChange() {
      this.setting.colorStatus = !this.setting.colorStatus;
      if (this.setting.colorStatus) {
        this.colorTune = "No Color Tune";
      } else {
        this.colorTune = "Color Tune";
      }
    },
    motionchange() {
      this.setting.motionStatus = !this.setting.motionStatus;
      if (this.setting.motionStatus) {
        this.motion = "Motion Locked";
      } else {
        this.motion = "Motion Unlocked";
      }
    },
    handlePolicyTypeChange(value) {
      this.policyTypeValue = value.name;
      this.setting.PolicyID = value.id;
    },
    handleCancel() {
      this.resetForm();
      this.$router.push('/policy');
    },
    resetForm() {
      this.setting = initialState;
    }
  }
};
</script>
 
