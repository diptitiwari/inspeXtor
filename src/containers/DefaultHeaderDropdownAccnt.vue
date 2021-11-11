<template>
  <AppHeaderDropdown
    right
    no-caret
  >
    <template slot="header">
      <img
        src="img/avatars/boy.svg"
        class="img-avatar"
        alt="info@emperorbrains.com"
      > Raju Khunt
    </template>
    <template slot="dropdown">
      <b-dropdown-item><i class="fa fa-bell-o" /> Home </b-dropdown-item>
      <b-dropdown-item><i class="fa fa-envelope-o" /> User </b-dropdown-item>
      <b-dropdown-item><i class="fa fa-user" /> Site</b-dropdown-item>
      <b-dropdown-item><i class="fa fa-wrench" /> Settings </b-dropdown-item>
      <b-dropdown-divider />
      <b-dropdown-item><i class="fa fa-shield" /> Lock Account</b-dropdown-item>
      <b-dropdown-item>
        <i class="fa fa-lock" /> Logout
      </b-dropdown-item>
    </template>
  </AppHeaderDropdown>
</template>

<script>
import { HeaderDropdown as AppHeaderDropdown } from '@/components';

export default {
  name: 'DefaultHeaderDropdownAccnt',
  components: {
    AppHeaderDropdown,
  },
  data: () => ({
    user: null,
  }),
  mounted() {
    
  },
  methods: {
  
  },
};
</script>
