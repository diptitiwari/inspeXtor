<template>
  <div class="support">
    <b-container fluid>
      <b-row>
        <b-col
          lg="12"
          md="12"
          sm="12"
          class="mx-auto mt-4"
        >
          <b-card class=" mx-auto">
            <template v-slot:header>
              <h4>
                <i class="fa fa-wrench" /> MAINTENACE
              </h4>
            </template>
            <b-row>
              <b-col
                lg="3"
                md="3"
                sm="6"
              >
                <div
                  class="supportBox"
                  :class="{ active: isActive('Commissioning') }"
                  @click.prevent="setActive('Commissioning')"
                >
                  <div class="support-icon">
                    <span>
                      <i class="fa fa-wrench" />
                    </span>
                  </div>
                  <h3 class="title">
                    Commissioning
                  </h3>
                </div>
              </b-col>
              <b-col
                lg="3"
                md="3"
                sm="6"
              >
                <div
                  class="supportBox"
                  :class="{ active: isActive('Restore-to-default') }"
                  @click.prevent="restore()"
                >
                  <div class="support-icon">
                    <span>
                      <i class="fa fa-retweet" />
                    </span>
                  </div>
                  <h3 class="title">
                    Restore to default
                  </h3>
                </div>
              </b-col>
              <b-col
                lg="3"
                md="3"
                sm="6"
              >
                <div
                  class="supportBox"
                  :class="{ active: isActive('Help') }"
                  @click.prevent="setActive('Help')"
                >
                  <div class="support-icon">
                    <span>
                      <i class="fa fa-question-circle" />
                    </span>
                  </div>
                  <h3 class="title">
                    Help
                  </h3>
                </div>
              </b-col>
              <b-col
                lg="3"
                md="3"
                sm="6"
              >
                <div
                  class="supportBox"
                  :class="{ active: isActive('Q&A') }"
                  @click.prevent="setActive('Q&A')"
                >
                  <div class="support-icon">
                    <span>
                      <i class="fa fa-comments-o" />
                    </span>
                  </div>
                  <h3 class="title">
                    Q & A
                  </h3>
                </div>
              </b-col>
            </b-row>
            <hr>
            <b-row class="tab-block">
              <comission
                id="Commissioning"
                class="tab-containt"
                :class="{ 'active': isActive('Commissioning') }"
              />
              <!-- <p
                id="Restore-to-default"
                class="tab-containt"
                :class="{ 'active': isActive('Restore-to-default') }"
              ></p> -->
              <help
                id="Help"
                class="tab-containt"
                :class="{ 'active': isActive('Help') }"
              >
                contain3
              </help>
              <faq
                id="Q&A"
                class="tab-containt"
                :class="{ 'active': isActive('Q&A') }"
              >
                contain4
              </faq>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import help from "./Help";
import faq from "./Faq";
import comission from "./commissioning"
export default {
  components: {
    help,
    faq,
    comission
  },
  data: () => {
    return {
      activeItem: "Commissioning"
    };
  },
  methods: {
    isActive(menuItem) {
      return this.activeItem === menuItem;
    },
    setActive(menuItem) {
      this.activeItem = menuItem;
    },
    restore() {
      alert(confirm('are you sure want to restore..!'))
    }
  }
};
</script>
<style scoped>
.tab-block > .tab-containt {
  display: none;
}
.tab-block > .active {
  display: block;
}
</style>