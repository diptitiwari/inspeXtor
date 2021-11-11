<template>
  <div class="policy">
    <b-container fluid>
      <b-row>
        <!-- <b-col
          lg="3"
          md="3"
          sm="12"
          class="mt-4"
        >
          <div class=" tree-view-panel">
            <b-form-input
              id="txtsearch-node"
              placeholder="Type Cluster Name"
              required
            />
            <a-tree
              v-model="checkedKeys"
              checkable
              :expanded-keys="expandedKeys"
              :auto-expand-parent="autoExpandParent"
              :selected-keys="selectedKeys"
              :tree-data="treeData"
              @expand="onExpand"
              @select="onSelect"
            /> 
          </div>
        </b-col>-->
        <b-col
          lg="12"
          md="12"
          sm="12"
          class="mt-4"
        >
          <b-card class="mx-auto">
            <h4 class="card-title">
              CLUSTER
            </h4>
            <b-row>
              <b-col
                md="6"
                lg="6"
              >
                <a-tree-select 
                  v-model="treeValue"
                  show-search
                  style="width: 100%"
                  :dropdown-style="{ maxHeight: '600px', overflow: 'auto' }"
                  :tree-data="treeData"
                  placeholder="Please select Cluster"
                  tree-default-expand-all
                  @change="onChange"
                >
                  <span
                    v-if="key='0-0-1'"
                    slot="title"
                    slot-scope="{key, value}"
                    style="color: #08c"
                  >{{ value }}</span>
                </a-tree-select> 
              </b-col>
              <b-col
                md="6"
                lg="6"
              >
                <b-form-group>
                  <v-select
                    v-model="clusterSetting.clusterValue"
                    :options="clusterSetting.clusterItem"
                    placeholder="Select Cluster"
                  />
                </b-form-group>
              </b-col>
            </b-row>
            <b-form class="mt-3">
              <!-- <p>
                <strong>Cluster :</strong> {{clusterSetting.clusterValue}}
              </p>-->
            </b-form>
            <b-row>
              <div
                v-for="(treebox,inx) in treeBoxs"
                :key="inx"
                class="nodeWidget"
              >
                <div class="nodeWidget-container">
                  <div class="nodeWidget-body">
                    <a @click="deletebox(inx)">
                      <i class="fa fa-times" />
                    </a>{{ treebox }}
                  </div>
                  <div class="nodeWidget-footer">
                    Tag (0)
                  </div>
                </div>
              </div>
            </b-row>
            <b-form-group class="text-right">
              <b-btn
                variant="primary"
                class="btn btn-cons text-uppercase mb-1"
                type="submit"
                @click.prevent
              >
                Add To Cluster List
              </b-btn>
            </b-form-group>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
 
 <script>
import { treeData, cluster } from "./config.js";
export default {
  data: () => {
    return {
      //  expandedKeys: ['0-0-0', '0-0-1'],
      //     autoExpandParent: true,
      //     checkedKeys: ['0-0-0'],
      //     selectedKeys: [],
      treeValue:undefined,
      treeBoxs:[],
      treeData,
      clusterSetting: {
        clusterValue: "",
        clusterItem: cluster
      }
    };
  },
  watch: {
    checkedKeys(val) {
      console.log("onCheck", val);
    }
  },
  methods: {
    // onExpand(expandedKeys) {
    //   console.log('onExpand', expandedKeys);
    //   // if not set autoExpandParent to false, if children expanded, parent can not collapse.
    //   // or, you can remove all expanded children keys.
    //   this.expandedKeys = expandedKeys;
    //   this.autoExpandParent = false;
    // },
    onChange(value){
      console.log(value);
      this.treeBoxs.push(value);
    },
    async deletebox(index){
      this.treeBoxs.splice(index, 1);
    }
  }
};
</script>
<style>
.ant-select-selection--single {
  height: 37px !important;
}
</style> 
