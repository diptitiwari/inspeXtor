<template>
  <div class="cloud_manager">
    <b-container fluid>
      <b-row>
        <b-col
          lg="5"
          md="7"
          sm="9"
          class="mx-auto mt-4"
        >
          <b-card class="card-signin  mx-auto">
            <h4 class="card-title text-center">
              CLOUD MANAGER
            </h4>
            <b-form @submit.prevent="save">
              <b-form-group
                id="input-group-2"
                class=""
                label="Instance Id"
              >
                <b-form-input
                  id="txtname"
                  v-model="cloud.id"
                  placeholder="Instance name"
                  required
                />
              </b-form-group>
              <b-form-group
                id="input-group-2"
                label="Instance Password"
              >
                <b-form-input
                  id="password"
                  v-model="cloud.password"
                  placeholder="*********"
                  required
                  type="password"
                />
              </b-form-group>
              <b-form-group
                id="input-group-2"
                class=""
                label="Instance Url"
              >
                <b-form-input
                  id="url"
                  v-model="cloud.url"
                  class=""
                  placeholder="https://info.com"
                  required
                  type="url"
                />
              </b-form-group>
              <b-form-group class="text-center">
                <b-btn
                  variant="primary"
                  class="btn btn-cons text-uppercase "
                  type="submit"
                >
                  Save
                </b-btn>
                <b-btn
                  variant="secondary"
                  class="btn btn-cons btn- text-uppercase"
                  type="reset"
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

 export default {
    name: 'CloudManager',
    data() {
      return {
        cloud: {
          id: '',
          password: '',
          url: ''
        }
      }
    },
    methods: {
      async save(){
        
      }
    },
 }
 </script>
 
