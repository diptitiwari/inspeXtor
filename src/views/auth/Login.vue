<template>
  <div class="login d-flex hvh-100">
    <b-container class="justify-content-center align-self-center">
      <b-row class>
        <b-col
          lg="5"
          md="7"
          sm="9"
          class="mx-auto"
        >
          <b-card class="card-signin shadow mx-auto">
            <h5 class="card-title text-center">
              Signin
            </h5>
            <b-form
              class="form-signin"
              @submit.prevent="login"
            >
              <b-form-group
                id="input-group-2"
                class="form-label-group"
                label="Email address"
                label-for="inputemail"
              >
                <b-form-input
                  id="inputemail"
                  v-model="username"
                  class="input-form"
                  placeholder="info@gmail.com"
                  required
                />
              </b-form-group>
              <b-form-group
                id="input-group-2"
                class="form-label-group"
                label="Password"
                label-for="inputpassword"
              >
                <b-form-input
                  id="inputpassword"
                  v-model="password"
                  class="input-form"
                  type="password"
                  placeholder="*********"
                  required
                />
              </b-form-group>
              <b-form-checkbox
                id="checkbox-1"
                name="checkbox-1"
                value="accepted"
                unchecked-value="not_accepted"
                class="mb-3"
              >
                Forget Password
              </b-form-checkbox>
              <b-btn
                variant="primary"
                class="btn btn-block text-uppercase"
                type="submit"
                @click="login"
              >
                Sign in
              </b-btn>
            </b-form>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "Login",
  
  data() {
    return {
      username: '',
      password: ''
    }
  },

  methods: {
    async login(){
      if(this.username === 'admin' && this.password === 'admin'){
        const user = {
          id: '1',
          userName: 'Raju Khunt',
          isLogin: true
        }

        this.setUser(user);
        
        localStorage.setItem('in:user', JSON.stringify(user));
          this.$router.push({
            name: 'Dashboard'
        });
        
      }else{
        this.$notify({
          group: 'alert',
          type: "error",
          text: 'Something went to wrong!'
        });
      }
    },
    ...mapActions('auth', ['setUser'])
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login{
    background: #3D5A80 !important;
    background: linear-gradient(to right, #3D5A80, #7175A5) !important;
    color:#2A3241 !important;
    font-family: 'Nunito' !important;
}
</style>
