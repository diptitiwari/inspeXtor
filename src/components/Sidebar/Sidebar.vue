<template>
  <div
    v-on-clickaway="hideMobile"
    class="sidebar eb-sidebar"
  >
    <slot>Sidebar</slot>
  </div>
</template>
<script>
import { mixin as clickaway } from 'vue-clickaway';
import { hideMobile } from '../../mixins/hideMobile';

export default {
  name: 'Sidebar',
  mixins: [clickaway, hideMobile],
  props: {
    fixed: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    this.isFixed();
  },
  methods: {
    isFixed() {
      this.fixed ? document.body.classList.add('sidebar-fixed') : document.body.classList.remove('sidebar-fixed');
      return this.fixed;
    },
  },
};
</script>
<style scoped>

.eb-sidebar{
  z-index: 9999 !important;
  /* background: #344349; */
  background: #3D4A80;
  bottom: 0;
  -webkit-transition: all .2s ease-out;
  transition: all .2s ease-out;
  -webkit-box-shadow: 0 0 35px 0 rgba(154,161,171,.15);
  box-shadow: 0 0 35px 0 rgba(154,161,171,.15);
}
</style>
<style>

.sidebar .nav-link .nav-icon{
  color:white !important;
    background:#5175A5 !important;
    width: 30px;
    height: 30px;
    line-height: 2;
    border-radius: 5px;
}
.sidebar .nav{
  width: 250px;
}
.sidebar .sidebar-nav{
  width: 220px;
}
@media (min-width: 992px)
{
.sidebar-fixed .sidebar {
  width: 220px;
}
}
html:not([dir="rtl"]) .sidebar{
  margin-left: -220px;
}
</style>

