import Vue from 'vue'
import Vuex from 'vuex'
import authModule from './modules/auth'
import clusterModule from './modules/cluster'
import policyModule from './modules/policy'
import autoTunePolicyModule from './modules/autoTunePolicy'
import supportModule from './modules/support'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    auth: authModule,
    policy: policyModule,
    cluster: clusterModule,
    autoTunePolicy: autoTunePolicyModule,
    support: supportModule
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [] // set logger only for development
})
