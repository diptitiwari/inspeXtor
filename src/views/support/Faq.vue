<template>
  <b-col
    lg="12"
    md="12"
    sm="12"
    class="mx-auto"
  >
    <b-card
      v-for="(faqItem,index) in faqItems"
      :key="index"
      no-body
      class="mb-1"
    >
      <b-card-header
        header-tag="header"
        class="p-1"
        role="tab"
      >
        <b-button
          v-b-toggle="'collapse-' + index"
          block
          href="#"
          variant="primary"
        >
          {{ faqItem.title }}
        </b-button>
      </b-card-header>
      <b-collapse
        :id="'collapse-'+index"
        accordion="my-accordion"
        role="tabpanel"
      >
        <b-card-body>
          <b-card-text>{{ faqItem.value }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    <!-- <VueFaqAccordion :items="faqItem" /> -->
  </b-col>
</template>
<script>
// import VueFaqAccordion from "vue-faq-accordion";
import { faq } from "./config";
export default {
  components: {
    // VueFaqAccordion
  },
  data: () => {
    return {
      faqItems: faq
    };
  }
};
</script>
<style scoped>
</style>