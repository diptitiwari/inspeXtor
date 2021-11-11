import Vue from 'vue'
import Router from 'vue-router'
import store from '../store';

import CreateUpdate from '@/views/policy/CreateUpdate.vue'
import MergePolicy from '@/views/policy/MergePolicy.vue'
import AutoTuneCreateUpdate from '../views/autotune_policy/CreateUpdate'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'root',
      component: () => import('@/containers/DefaultContainer.vue'),
      meta: {
        auth: true,
        label: 'Dashboard'
      },
      beforeEnter: (to, from, next) => {
        const {
          path
        } = to;
        if (path === '/login') {
          next({
            name: 'Login'
          });
        }
        const cachedUser = localStorage.getItem('in:user');
        const {
          id,
          isLogin,
          userName
        } = store.state.auth;
        const isLoggedIn = id && isLogin && userName;
        if (isLoggedIn)
          next();
        else {
          if (cachedUser) {
            const user = JSON.parse(cachedUser);
            const cachedLogin = user.id && user.isLogin && user.userName;
            if (cachedLogin) {
              store.dispatch('auth/setUser', user);
              next()
            }
          } else {
            next({
              name: 'Login'
            })
          }
        }
      },
      children: [{
          path: '',
          name: 'Dashboard',
          component: () => import('@/views/dashboard/Index.vue'),
          meta: {
            auth: true,
            label: 'Dashboard',
          },
        },
        {
          path: '/mobile-control',
          name: 'MobileControl',
          component: () => import('@/views/mobile_control/Index.vue'),
          meta: {
            auth: true,
            label: 'Mobile Control',
          },
        },
        {
          path: '/floor-plan',
          name: 'FloorPlan',
          component: () => import('@/views/floor_plan/Index.vue'),
          meta: {
            auth: true,
            label: 'Floor Plan',
          },
        },
        {
          path: '/cluster',
          name: 'Cluster',
          component: () => import('@/views/cluster/Index.vue'),
          meta: {
            auth: true,
            label: 'Cluster',
          },
        },
        {
          path: '/policy',
          name: 'Policy',
          component: () => import('@/views/policy/Index.vue'),
          meta: {
            auth: true,
            label: 'Policy',
          },
        },
        {
          path: '/policy/create',
          name: 'createpolicy',
          component: CreateUpdate,
          props: {
            isUpdate: false,
          },
          meta: {
            auth: true,
            label: 'New Policy',
          },
        },
        {
          path: '/policy/edit/:id',
          name: 'editpolicy',
          component: CreateUpdate,
          props: {
            isUpdate: true,
          },
          meta: {
            auth: true,
            label: 'New Policy',
          },
        },
        {
          path: '/merge-policy',
          name: 'MergePolicy',
          component: MergePolicy,
          meta: {
            auth: true,
            label: 'Merge Policy',
          },
        },
        {
          path: '/at-policy',
          name: 'AutotunePolicy',
          component: () => import('@/views/autotune_policy/Index.vue'),
          meta: {
            auth: true,
            label: 'Autotune Policy',
          },
        },
        {
          path: '/at-policy/create',
          name: 'createautotunepolicy',
          component: AutoTuneCreateUpdate,
          props: {
            isUpdate: false,
          },
          meta: {
            auth: true,
            label: 'New Auto Tune Policy',
          },
        },
        {
          path: '/at-policy/edit/:id',
          name: 'editautotunepolicy',
          component: AutoTuneCreateUpdate,
          props: {
            isUpdate: true,
          },
          meta: {
            auth: true,
            label: 'Update Auto Tune Policy',
          },
        },
        {
          path: '/alerts',
          name: 'Alerts',
          component: () => import('@/views/alerts/Index.vue'),
          meta: {
            auth: true,
            label: 'Alerts',
          },
        },
        {
          path: '/user',
          name: 'User',
          component: () => import('@/views/user/Index.vue'),
          meta: {
            auth: true,
            label: 'User',
          },
        },
        {
          path: '/power-display',
          name: 'PowerDisplay',
          component: () => import('@/views/power_display/Index.vue'),
          meta: {
            auth: true,
            label: 'Power Display',
          },
        },
        {
          path: '/support',
          name: 'Support',
          component: () => import('@/views/support/Index.vue'),
          meta: {
            auth: true,
            label: 'Support',
          },
        },
        {
          path: '/manageCiscoSwitches',
          name: "ManageCiscoSwitches",
          component: () => import('@/views/support/ManageCiscoSwitches.vue'),
          meta: {
            auth: true,
            label: 'ManageCiscoSwitches',
          },
        },
        {
          path: '/terminal',
          name: 'Terminal',
          component: () => import('@/views/terminal/Index.vue'),
          meta: {
            auth: true,
            label: 'Terminal',
          },
        },
        {
          path: '/hardware-setting',
          name: 'HardwareSetting',
          component: () => import('@/views/hardware_setting/Index.vue'),
          meta: {
            auth: true,
            label: 'Hardware Setting',
          },
        },
        {
          path: '/cloud-manager',
          name: 'CloudManager',
          component: () => import('@/views/cloud_manager/Index.vue'),
          meta: {
            auth: true,
            label: 'Cloud Manager',
          },
        },
        {
          path: '/remote-programming',
          name: 'RemotProgramming',
          component: () => import('@/views/remote_programming/Index.vue'),
          meta: {
            auth: true,
            label: 'Remote Programming',
          },
        },
        {
          path: '/node-setting',
          name: 'NodeSetting',
          component: () => import('@/views/node_setting/Index.vue'),
          meta: {
            auth: true,
            label: 'Node Setting',
          },
        },
        {
          path: '/network-setting',
          name: 'NetworkSetting',
          component: () => import('@/views/network_setting/Index.vue'),
          meta: {
            auth: true,
            label: 'Network Setting',
          },
        },
        {
          path: '/search-fix',
          name: 'SearchFix',
          component: () => import('@/views/search_fix/Index.vue'),
          meta: {
            auth: true,
            label: 'Search Fix',
          },
        },
        {
          path: '/api-user',
          name: 'ApiUser',
          component: () => import('@/views/api_user/Index.vue'),
          meta: {
            auth: true,
            label: 'Api User',
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/auth/Login.vue'),
      meta: {
        guest: true,
      },
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('@/views/testing/test.vue'),
      meta: {
        guest: true,
      },
    },
  ]
})
