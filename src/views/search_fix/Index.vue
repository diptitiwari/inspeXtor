<template>
  <div class="search-fix">
    <b-container fluid>
      <b-row>
        <b-col lg="12" md="12" sm="12" class="mx-auto mt-4">
          <b-form class="mt-2">
            <b-card class="mx-auto">
              <template v-slot:header>
                <h4>
                  <i class="fa fa-search" /> FIXTURE CLUSTER SEARCH
                </h4>
              </template>
              <b-row>
                <b-col lg="4" md="4">
                  <b-form-group >
                    <b-form-input v-model="fixtureCluster" placeholder="FIXTURE SERIAL NUM"></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col lg="8" md="8">
                  <b-form-group>
                    <b-btn variant="primary">LookUp</b-btn>
                  </b-form-group>
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
export default {
  data: () => {
    return {
        fixtureCluster:""
    };
  },
  methods: {}
};
</script>
 <style  scoped>
 </style>
