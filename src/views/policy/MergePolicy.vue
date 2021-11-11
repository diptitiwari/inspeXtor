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
                    label="Cluster"
                  >
                    <v-select
                      v-model="setting.clusterValue"
                      :options="setting.clusterItem"
                      placeholder="Select Cluster"
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
                      v-model="setting.policyValue"
                      :options="setting.policyItem"
                      placeholder="Select Policy"
                      @input="addPolicyCard"
                    >
                      <template v-slot:option="option">
                        {{ option.Name }}
                      </template>
                    </v-select>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row v-if="setting.policyCards.length > 0">
                <div
                  v-for="policyCard in setting.policyCards"
                  :key="policyCard.ID"
                  class="nodeWidget"
                >
                  <div class="nodeWidget-container">
                    <div class="nodeWidget-body">
                      <a @click="removePolicyCard(policyCard)">
                        <i class="fa fa-times" />
                      </a>{{ policyCard.Name }}
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
import _ from 'lodash';
import {  cluster, clusterWisePolicy, tItems } from "./config.js";
export default {
  data: () => {
    return {
      setting: {
        clusterItem: cluster,
        clusterValue: "",
        policyValue: "",
        policyItem: [],
        policyCards: []
      }
    };
  },
  watch: {
    'setting.clusterValue': function (value, oldVal) {
      if(value !== oldVal) {
        const policyCard = [] , policyItems = [];
        let policies = tItems;
        let clusterPolicies = clusterWisePolicy[value]
        _.forEach(policies, (policy) => {
          if(_.isEmpty(_.find(clusterPolicies, {ID: policy.ID}))) {
            policyItems.push(policy);
          } else {
            policyCard.push(policy)
          }
        });
        this.setting.policyItem = policyItems;
        this.setting.policyCards = policyCard;
      }

    }
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
    },
    removePolicyCard(policy) {
      let policyCards = this.setting.policyCards;
      _.remove(policyCards, (policyCard) => {
        return policyCard.ID === policy.ID;
      });
      this.setting.policyCards = policyCards;
      this.setting.policyItem.push(policy)
    },
    addPolicyCard(policy) {
      if(this.setting.clusterValue) {
        let policyItem = this.setting.policyItem;
        _.remove(policyItem, (policyItem) => {
          return policyItem.ID === policy.ID;
        });
        this.setting.policyItem = policyItem;
        this.setting.policyCards.push(policy);
        this.setting.policyValue = policy.Name;
      }
    }
  }
};
</script>
 
