<template>
  <div class="node-setting">
    <b-container fluid>
      <b-row>
        <b-col lg="6" md="6" sm="12" class="mx-auto mt-4">
          <b-form class="mt-2">
            <b-card class="mx-auto">
              <template v-slot:header>
                <h4>
                  <i class="fa fa-cogs" /> NETWORK SETTING
                </h4>
              </template>
              <b-row>
                <b-col lg="7" md="7">
                  <b-form-group label="Broadcast IP Address">
                    <b-form-input v-model="bordcastIp"></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col lg="7" md="7">
                  <b-form-group label="TFTP Server (IP Address)">
                    <b-form-input v-model="TFTPServer"></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col lg="5" md="5" class="text-left mt1-3">
                  <b-btn variant="primary">Apply</b-btn>
                </b-col>
              </b-row>
              <b-row>
                <b-col lg="7" md="7">
                  <b-form-group label="NTP Server (IP Address)">
                    <b-form-input v-model="NTPServer"></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col lg="5" md="5" class="text-left mt1-3">
                  <b-btn variant="primary">Apply</b-btn>
                </b-col>
              </b-row>
              <b-row>
                <b-col lg="7" md="7">
                  <b-form-group label="Local inspeXtor (IP Address)">
                    <b-form-input v-model="localIp"></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col lg="5" md="5" class="text-left mt1-3">
                  <b-btn variant="primary">Apply</b-btn>
                </b-col>
              </b-row>
              <b-row>
                <b-col lg="12" md="12">
                <b-btn class="mr-1 mb-1" variant="primary">Save All</b-btn>
                <b-btn class="mr-1 mb-1">Apply All</b-btn>
                </b-col>
              </b-row>
            </b-card>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
 
 <script>
import { treeData } from "./config.js";
export default {
  data: () => {
    return {
      bordcastIp:'10.10.7.255',
      TFTPServer:'10.10.0.50',
      NTPServer:'10.10.0.50',
      localIp:'10.10.0.50'
    };
  },
  methods: {}
};
</script>
 <style  scoped>
  .mt1-3{
    margin-top: 1.8rem!important;
  }
 </style>
