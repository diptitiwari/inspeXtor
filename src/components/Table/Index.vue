<template>
  <b-col>
    <b-row class="table-standard">
      <b-table
        ref="dataTable"
        :head-variant="headVariant"
        :table-class="tableClass"
        :responsive="true"
        :items="itemList"
        :fields="tblFields"
        :filter="search"
        :per-page="showPerPage"
        :current-page="currentPage"
        :selectable="selectable"
        @row-selected="onRowSelected"
      >
        <template v-slot:cell(role_names)="data">
          <b-badge
            v-for="(roleName, id) in data.item.role_names"
            :key="id"
            class="m-1 font-15"
            variant="primary"
          >
            {{ roleName }}
          </b-badge>
        </template>
        <template v-slot:cell(action)="data">
          <slot :item="data.item" />
        </template>
      </b-table>
    </b-row>

    <b-row class="d-flex mt-2">
      <div class="col-md-3 mb-2">
        <span class="mr-2">Show</span>
        <b-form-select
          v-model="showPerPage"
          class="w-50"
          :options="pagesList"
        />
        <span class="ml-2">per page</span>
      </div>

      <div class="col-md-6 mb-2">
        <b-pagination
          v-model="currentPage"
          class="paginate-events"
          :total-rows="itemList.length"
          :per-page="showPerPage"
          prev-text="<"
          next-text=">"
          align="center"
          hide-goto-end-buttons
        />
      </div>
    </b-row>
  </b-col>
</template>

<script>
export default {
  name: "Table",
  props: {
    tblFields: {
      type: Array,
      default: () => [],
      required: false
    },
    search: {
      type: String,
      required: false,
      default: ""
    },
    headVariant: {
      type: String,
      required: false,
      default: "light"
    },
    tableClass: {
      type: String,
      required: false,
      default: "eb-table"
    },
    itemList: {
      type: Array,
      required: false,
      default: () => []
    },
    perPage: {
      type: Number,
      required: false,
      default: 10
    },
    pages: {
      type: Array,
      required: false,
      default: () => []
    },
    isPagination: {
      type: Boolean,
      default: true,
      required: false
    },
    selectable: {
      type: Boolean,
      default: false,
      required: false
    },
    onRowSelected: {
      type: Function,
      default: () => {},
      required: false
    }
  },
  data() {
    return {
      currentPage: 1,
      showPerPage: 10,
      pagesList: [],
    }
  },
  mounted() {
      this.showPerPage = this.perPage;
      this.pagesList = this.pages;
  },
};
</script>

<style>
.pagination .page-item.active .page-link {
    background-color: #44B0F2;
  }

.pagination .page-link {
    border: 0;
    border-radius: 50px;
    margin: 0 5px;
    padding: .5rem .85rem;
  }

td.table-light {
  background-color: #e9ecef;
}

.eb-table {
  margin-bottom: 0;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 40px;
  overflow: hidden;
}
.font-15{
  font-size: 15px;
}
</style>
