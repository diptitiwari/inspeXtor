<template>
  <div class="floor-plan">
    <b-container fluid>
      <b-row>
        <b-col
          lg="12"
          md="12"
          sm="12"
          class="mx-auto mt-4"
        >
          <b-card
            header="FLOOR PLAN"
            class="mx-auto"
          >
            <template v-slot:header>
              <h4>
                <i class="fa fa-building" /> FLOOR PLAN
              </h4>
            </template>
            <b-form>
              <!-- <b-form-group class="text-center">
                <b-btn
                  variant="primary"
                  class="btn btn-cons text-uppercase mb-1"
                  type="submit"
                  @click.prevent
                >
                  Send Command To Node
                </b-btn>
              </b-form-group>-->
              <b-row>
                <b-col
                  md="4"
                  lg="4"
                >
                  <b-form-group id="input-group-2">
                    <v-select
                      v-model="floor.cluster"
                      @input="handleClusterChange"
                      label="Name"
                      :options="getCluster"
                      placeholder="Select Cluster"
                    />
                  </b-form-group>
                </b-col>
                <b-col
                  md="4"
                  lg="4"
                >
                  <b-form-group>
                    <v-select
                      v-model="floor.fixture"
                      label="Name"
                      :options="fixtureList"
                      placeholder="Select Fixture"
                      :multiple="true"
                      @input="handelFixture"
                    />
                  </b-form-group>
                </b-col>
                <b-col
                  md="4"
                  lg="4"
                  class="text-right"
                >
                  <span class="btn btn-primary">
                    <span>
                      Select map
                      <i class="fa fa-upload" />
                    </span>
                    <b-form-file
                      class="fileinput-button col-md-7"
                      accept="image/*"
                      @change="onChangeMap"
                    />
                  </span>
                </b-col>
              </b-row>
              <b-row class="mt-3" v-if="options.length">
                <b-col
                  lg="3"
                  md="3"
                  sm="12"
                >
                  <b-form-group id="input-group-2">
                    <b-form-input
                      placeholder="0-100%"
                      required
                    />
                  </b-form-group>
                </b-col>
                <b-col
                  lg="9"
                  md="9"
                  sm="12"
                >
                  <b-form-radio-group
                    id="btn-radios-2"
                    v-model="floor.sceneValue"
                    :options="options"
                    buttons
                    button-variant="primary"
                    class="btn-block mob-sm"
                    size="md"
                  />
                </b-col>
              </b-row>
              <b-row>
                <b-col
                  id="static"
                  lg="12"
                  md="12"
                  sm="12"
                  class="mt-4 parentElement"
                >
                  <img
                    :src="floor.url"
                    class="floor-img"
                  >
                  <drag-it-dude
                    v-for="(ping,idx) in domitem"
                    id="dompin"
                    :key="idx"
                    ref="pins"
                    @activated="handleActivated"
                    @dragging="handleDragging"
                    @dropped="handleDropped"
                  >
                    <div class="pin bounce">
                      <div class="handle task__content">
                        <i class="fa fa-lightbulb-o" />
                      </div>
                    </div>
                  </drag-it-dude>
                </b-col>
              </b-row>
              <b-row class="mt-3 text-right">
                <b-col
                  lg="12"
                  md="12"
                  sm="12"
                >
                  <b-form-group>
                    <b-btn
                      variant="secondary"
                      class="btn btn-cons text-uppercase mb-1"
                      type="reset"
                    >
                      Clear
                    </b-btn>
                    <b-btn
                      variant="primary"
                      class="btn btn-cons text-uppercase mb-1"
                      type="submit"
                      @click.prevent
                    >
                      Save
                    </b-btn>
                  </b-form-group>
                </b-col>
              </b-row>
            </b-form>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

 <script>
import _ from 'lodash';
import DragItDude from "vue-drag-it-dude";
import { treeData, clusterNodeDetails } from "./config.js";
export default {
  components: {
    DragItDude
  },
  data: () => {
    return {
      treeData,
      floor: {
        fixture: null,
        cluster: "",
        url: null,
        sceneValue: ""
      },
      options: [],
      fixtureList: [],
      dragpin: false,
      domitem: [],
      shiftsY: null,
      shiftsX: null,
      top:0,
      left:0
    };
  },
  computed: {
    getCluster() {
      return this.$store.getters["cluster/getClusterList"];
    }
  },
  methods: {
    onChangeMap(e) {
      const file = e.target.files[0];
      this.floor.url = URL.createObjectURL(file);
    },
    handleClusterChange(clusterObj) {
      //temporary check
      this.floor.cluster = clusterObj.Name;
      if(clusterObj.Name === 'UNASSIGNED') {
        this.fixtureList = [];
        this.floor.url = null;
        this.options = [];
      } else {
        this.fixtureList = _.map(clusterNodeDetails.device, 'PName');
        this.floor.url = 'img/RoomSketcher-Custom-2D-Floor-Plan-Branding.jpg';
        this.options = _.map(clusterNodeDetails.options, (option, key) => ({
          text: option,
          value: key
        }));
      }
    },
    handleActivated(e) {
      console.log(e);
    },
    handleDragging() {
      // const x = e.pageX || e.changedTouches[0].pageX;
      //   const y = e.pageY || e.changedTouches[0].pageY;
      //   let newLeft = x - this.shiftsX;
      //   let newTop = y - this.shiftsY;
      //   this.elem.style.left = `${newLeft}px`;
      //   this.left = newLeft;
      //   this.elem.style.top = `${newTop}px`;
      //   this.top = newTop;
      //   console.log(`${top}-${left}`);
    },
    handleDropped(e) {
      setTimeout(() => {
        console.log(e);
      }, 3000);
    },
    handelFixture(e) {
      this.domitem = e.length;
      if (e.length > 0) {
        this.dragpin = true;
      }
    }
  }
};
</script>
<style >
.floor-img {
  width: 100%;
  height: 500px;
}
.parentElement {
  position: relative;
}
.innerElement {
  background-color: red;
  z-index: 99999999;
}
</style>
