<template>
  <button
    class="sidebar-minimizer"
    type="button"
    @click="onClick()"
  />
</template>
<script>
import { togglePs } from '../../mixins/togglePs';

export default {
  name: 'SidebarMinimizer',
  mixins: [togglePs],
  mounted() {
    const isMinimized = document.body.classList.contains('sidebar-minimized');
    this.togglePs(!isMinimized);
  },
  methods: {
    onClick() {
      this.sidebarMinimize();
      this.brandMinimize();
    },
    sidebarMinimize() {
      const isMinimized = document.body.classList.toggle('sidebar-minimized');
      this.$emit('cui-sidebar-minimize', isMinimized);
      this.togglePs(!isMinimized);
    },
    brandMinimize() {
      document.body.classList.toggle('brand-minimized');
    },
  },
};
</script>
<style scoped>
.fa-user {
  color: black !important;
}
</style>
<style>
@media (min-width: 992px) {
  .sidebar-minimized .sidebar .nav-item:hover > .nav-link {
    background: white !important;
    color: black !important;
  }
}
@media (min-width: 992px) {
  .sidebar-minimized .sidebar .nav-item:hover > .nav-link .nav-icon {
    color: #000 !important;
  }
  .sidebar-minimized .sidebar .sidebar-minimizer{
    background-color: #303859 !important;
  }
  .sidebar-minimized .sidebar .nav-link .nav-icon{
    background-color: transparent !important;
    line-height: 1;
  }
}
</style>
