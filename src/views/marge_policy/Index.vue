<template>
  <div class="policy">
    <b-container fluid>
      <b-row>
        <b-col
          lg="9"
          md="9"
          sm="12"
          class="mx-auto mt-4"
        >
          <b-card class=" mx-auto">
            <h5 class="card-title text-center">
              LINK POLICY TO CLUSTER
            </h5>
            <b-form>
              <b-row>
                <b-col
                  lg="6"
                  md="6"
                  sm="12"
                >
                  <b-form-group
                    id="input-group-2"
                    label="Cluster(S)"
                  >
                    <v-select
                      v-model="setting.clusterValue"
                      :options="setting.clusterItem"
                      placeholder="Select Cluster"
                      :multiple="true"
                    />
                  </b-form-group>
                </b-col>
                <b-col
                  lg="6"
                  md="6"
                  sm="12"
                >
                  <b-form-group
                    id="input-group-2"
                    label="Policy"
                  >
                    <v-select
                      v-model="setting.policy"
                      :options="setting.policyItem"
                      placeholder="Select Policy"
                    />
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <div class="nodeWidget">
                  <div class="nodeWidget-container">
                    <div class="nodeWidget-body">
                      <a>
                        <i class="fa fa-times" />
                      </a>After hours
                    </div>
                    <div class="nodeWidget-footer">
                      Timed Policy
                    </div>
                  </div>
                </div>
                <div class="nodeWidget">
                  <div class="nodeWidget-container">
                    <div class="nodeWidget-body">
                      <a>
                        <i class="fa fa-times" />
                      </a>afterhours
                    </div>
                    <div class="nodeWidget-footer">
                      Timed Policy
                    </div>
                  </div>
                </div>
                <div class="nodeWidget">
                  <div class="nodeWidget-container">
                    <div class="nodeWidget-body">
                      <a>
                        <i class="fa fa-times" />
                      </a>Weekendpolicy
                    </div>
                    <div class="nodeWidget-footer">
                      Timed Policy
                    </div>
                  </div>
                </div>
              </b-row>
              <b-form-group class="text-right">
                <b-btn
                  variant="primary"
                  class="btn btn-cons text-uppercase mb-1"
                  type="submit"
                  @click.prevent="mergepolicy"
                >
                  Link
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
import {  cluster, policy } from "./config.js";
export default {
  data: () => {
    return {
      setting: {
        clusterItem: cluster,
        clusterValue: "",
        policyValue: "",
        policyItem: policy
      }
    };
  },
  methods: {

    mergepolicy(){
      if(this.setting.clusterValue == 'Bench 1(3)'){
        if(this.setting.policyValue == 'afterhours'){
        console.log(this.setting.clusterValue+''+this.setting.policyValue);
        }
      }
      else{
        console.log('error')
      }
    }
  }
};
</script>
 
