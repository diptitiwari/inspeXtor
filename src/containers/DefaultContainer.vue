<template>
  <div class="app">
    <AppHeader fixed>
      <SidebarToggler
        class="d-lg-none"
        display="md"
        mobile
      />
      <div
        class="navbar-brand eb-navbar-brand"
        to="#"
      >
        <span class="navbar-brand-full">InspeXtor</span>
        <span class="navbar-brand-minimized ml-3">MHT</span>
      </div>
      <SidebarToggler
        class="d-md-down-none"
        display="lg"
      />
      <!-- -->
      <b-navbar-nav class="d-md-down-none" />
      <b-navbar-nav class="ml-auto mt-1">
        <DefaultHeaderDropdownAccnt />
      </b-navbar-nav>
    </AppHeader>
    <div class="app-body">
      <AppSidebar fixed>
        <SidebarHeader />
        <SidebarForm />
        <SidebarNav :nav-items="nav" />
        <SidebarFooter />
        <SidebarMinimizer />
      </AppSidebar>
      <main class="main">
        <!-- <Breadcrumb :list="list"/> -->
        <div>
          <router-view />
        </div>
      </main>
      <AppAside fixed>
        <!--aside-->
        <DefaultAside />
      </AppAside>
    </div>
    <TheFooter>
      <div class="container-fluid">
        <div class="row">
          <div
            class="col-md-6"
            align="left"
          >
            2018 - 2019 ©
            <a href="">InspeXtor</a>- All Rights Reserved
          </div>
          <div class="col-md-6">
            <div class="text-md-right footer-links d-none d-md-block">
              <a
                href="#"
                class="mr-2"
              >About</a>
              <a
                href="#"
                class="mr-2"
              >Support</a>
              <a
                href="#"
                class="mr-2"
              >Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </TheFooter>
  </div>
</template>

<script>
import nav from "@/_nav";
import {
  Header as AppHeader,
  SidebarToggler,
  Sidebar as AppSidebar,
  SidebarFooter,
  SidebarForm,
  SidebarHeader,
  SidebarMinimizer,
  SidebarNav,
  Aside as AppAside,
  Footer as TheFooter
  // AsideToggler,
  // Breadcrumb
} from "@/components";
import DefaultAside from "./DefaultAside";
import DefaultHeaderDropdownAccnt from "./DefaultHeaderDropdownAccnt";

export default {
  name: "DefaultContainer",
  components: {
    AppHeader,
    AppSidebar,
    AppAside,
    TheFooter,
    DefaultAside,
    DefaultHeaderDropdownAccnt,
    SidebarForm,
    SidebarFooter,
    SidebarToggler,
    SidebarHeader,
    SidebarNav,
    SidebarMinimizer
    // AsideToggler,
    // Breadcrumb,
  },
  data() {
    return {
      nav: nav.items
    };
  }
};
</script>

<style>
.circle {
  border-radius: 50%;
  float: left;
  width: 17px;
  height: 17px;
  background: #5ad038 0% 0% no-repeat padding-box;
  opacity: 1;
  margin-right: 5px;
  animation: blinker 1s linear infinite;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}

.status {
  width: auto;
  float: left;
  display: flex;
  flex-direction: row;
  align-items: baseline;
}
.status label {
  width: auto;
  float: left;
}

.offile {
  width: 12px;
  height: 12px;
  background: #5ad038 0% 0% no-repeat padding-box;
  opacity: 1;
}
.text-black {
  color: black;
}

.eb-width {
  width: 80% !important;
}

.eb-navbar {
  background: linear-gradient(135deg, #8b76de 0, #8178e7 60%);
  width: 200px;
  margin-left: -17px;
  height: 71px;
  margin-top: -15px;
}
.eb-navbar-brand {
  margin-left: -14px !important;
  margin-top: -7px !important;
}
@media (min-width: 992px) {
  .brand-minimized .app-header .navbar-brand {
    width: 50px !important;
    transition: 0.2s;
    transition-timing-function: linear;
  }
  .sidebar-fixed .container-fluid {
    padding: 0 30px 0 50px;
  }
  .brand-minimized .container-fluid {
    padding: 0 30px 0 30px !important;
  }
  .sidebar-lg-show .container-fluid {
    padding: 0 30px 0 50px;
  }
}
@media screen and (max-width: 992px) {
  .eb-navbar-brand {
    display: none !important;
  }
}
@media only screen and (max-width: 992px) {
  .app-search {
    display: block !important;
  }
}

@media (max-width: 575.98px) {
  .sidebar-show .main::before,
  .aside-menu-show .main::before {
    background: none !important;
  }
}
@media (min-width: 575.98px) {
  .header-fixed .app-header {
    position: fixed;
  }
}
@media (min-width: 200.98px) {
  .header-fixed .app-header {
    position: fixed;
  }
}
</style>
