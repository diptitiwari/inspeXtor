<template>
  <div class="container-fluid">
    <!-- start page title -->
    <div class="row">
      <div class="col-12">
        <div class="page-title-box">
          <div class="page-title-right">
            <ol class="breadcrumb m-0">
              <li
                v-for="(routeObject, index) in routeRecords"
                :key="index"
                class="breadcrumb-item"
              >
                <span
                  v-if="isLast(index)"
                  class="active"
                >{{ getName(routeObject) }}</span>
                <router-link
                  v-else
                  :to="routeObject"
                >
                  {{ getName(routeObject) }}
                </router-link>
              </li>
            </ol>
          </div>
          <h4 class="page-title">
            Starter
          </h4>
        </div>
      </div>
    </div>
    <!-- end page title -->
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  computed: {
    routeRecords() {
      return this.list.filter((route) => route.name || route.meta.label);
    },
  },
  methods: {
    getName(item) {
      return item.meta && item.meta.label ? item.meta.label : item.name || null;
    },
    isLast(index) {
      return index === this.list.length - 1;
    },
  },
};
</script>
