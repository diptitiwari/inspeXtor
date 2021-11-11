<template>
  <div id="app">
    <router-view />
    <notifications
      group="alert"
      classes="vue-notification"
      position="bottom right"
    />
  </div>
</template>

<style>

  @import '../src/assets/css/app.main.css';
  @import '../src/assets/css/custome.css';
  @import '../src/assets/css/responsive.css';
</style>
