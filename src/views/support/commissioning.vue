<template>
  <b-row class="mx-auto text-center">
    <h4>Current Local inspeXtor Time : {{ CurrentDate }}</h4>
    <br />
    <h4>Local IPs : {{ localIP }}</h4>
    <!-- <VueFaqAccordion :items="faqItem" /> -->
    <b-col lg="12" md="12" sm="12" class="mt-5">
      <span class="btn btn-primary mr-1 mb-1">
        <span>Import pull schedule</span>
        <b-form-file class="fileinput-buttons w-file bg-dark" accept="image/*" />
      </span>
      <b-button
        variant="primary"
        class="mr-1 mb-1"
        @click.prevent="$router.push('/manageCiscoSwitches')">
        Manage Cisco Switch IP
      </b-button>
      <b-button variant="primary" class="mr-1 mb-1" v-b-modal.modal-datetime>Set Time Date</b-button>
      <b-button variant="primary" class="mr-1 mb-1" @click="grubpatch">Apply grub patch</b-button>
      <b-button variant="primary" class="mr-1 mb-1" @click="autodiscovery">Auto Discovery</b-button>
    </b-col>
    <b-col lg="12" md="12" class="mt-2">
      <b-button class="mr-1 mb-1" size="sm" @click="nodeSetting">Node Setting</b-button>
      <b-button class="mr-1 mb-1" size="sm">Node Reboot</b-button>
      <b-button class="mr-1 mb-1" size="sm" @click="networkSetting">inspeXtor Settings</b-button>
      <b-button class="mr-1 mb-1" size="sm" @click="searchFix">Search Fixture in Cluster</b-button>
    </b-col>
    <b-modal id="modal-datetime" class="" ref="modal" title="Do you want to Set Date Time and Date?" >
      <form>
        <datetime v-model="date" type="datetime" input-class="form-control"></datetime>
      </form>
    </b-modal>
  </b-row>
</template>
<script>
// import VueFaqAccordion from "vue-faq-accordion";
import { Datetime } from "vue-datetime";
export default {
  components: {
    // VueFaqAccordion
    datetime: Datetime
  },
  data: () => {
    return {
      CurrentDate: Date(),
      localIP: "10.10.0.50 192.168.1.40",
      date: ""
    };
  },
  methods: {
    nodeSetting() {
      this.$router.push("/node-setting");
    },
    networkSetting() {
      this.$router.push("/network-setting");
    },
    searchFix() {
      this.$router.push("/search-fix");
    },
    grubpatch() {
      //        Swal.fire({
      //   title: '<strong>HTML <u>example</u></strong>',
      //   icon: 'info',
      //   html:
      //     'You can use <b>bold text</b>, ' +
      //     '<a href="//sweetalert2.github.io">links</a> ' +
      //     'and other HTML tags',
      //   showCloseButton: true,
      //   showCancelButton: true,
      //   focusConfirm: false,
      //   confirmButtonText:
      //     '<i class="fa fa-thumbs-up"></i> Great!',
      //   confirmButtonAriaLabel: 'Thumbs up, great!',
      //   cancelButtonText:
      //     '<i class="fa fa-thumbs-down"></i>',
      //   cancelButtonAriaLabel: 'Thumbs down'
      // })
      // Use sweetalert2

      this.$swal({
        title: 'Are you sure?',
        text: "Do you want to apply the grub patch?",
        icon: 'warning',
        showCloseButton: true,
        showCancelButton: true
      }).then((result) => {
  if (result.value) {
    this.$swal(
      'Apply!',
      'apply the grub patch',
      'success'
    )
  }
});
    },
    autodiscovery(){
            this.$swal({
        text: "Do you wish to Start Autodiscovery ? This might take up To 30 minutes to discover all connected devices.",
        icon: 'warning',
        showCloseButton: true,
        showCancelButton: true
      }).then((result) => {
});
    }
  }
};
</script>
<style scoped>
.fileinput-buttons {
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  opacity: 0;
  filter: alpha(opacity=0);
  font-size: 23px;
  cursor: pointer;
}
.w-file {
  width: 23%;
}
.swal2-styled.swal2-confirm {
  background-color: #ee6c4d !important;
  border-color: #ee6c4d !important;
}
.swal2-styled.swal2-cancel {
  background-color: #98d1c8 !important;
  border-color: #98d1c8 !important;
}
@media (max-width: 768px) {
  .w-file {
    width: 100%;
  }
}
</style>
