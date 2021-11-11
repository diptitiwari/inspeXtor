<template>
  <div class="mobile-control">
    <b-container fluid>
      <b-row>
        <b-col
          lg="12"
          md="12"
          sm="12"
          class="mx-auto mt-4"
        >
          <b-card class="mx-auto">
            <template v-slot:header>
              <h4>
                <i class="fa fa-plug" /> POWER SETTING
              </h4>
            </template>
            <b-form
              class="mt-2"
              @submit.prevent="savePower"
            >
              <b-row class="mt-2">
                <b-col md="3">
                  <b-form-group
                    id="input-group-2"
                    label="Condition"
                  >
                    <v-select
                      v-model="setting.condition"
                      placeholder="Select Condition"
                      :options="conditionItem"
                    />
                  </b-form-group>
                </b-col>
                <b-col md="3">
                  <b-form-group label="Start Time">
                    <b-form-input
                      id="startTime"
                      v-model="setting.startTime"
                      type="time"
                    />
                  </b-form-group>
                </b-col>
                <b-col md="3">
                  <b-form-group label="End Time">
                    <b-form-input
                      id="endTime"
                      v-model="setting.endTime"
                      type="time"
                    />
                  </b-form-group>
                </b-col>
                <b-col md="3">
                  <b-form-group
                    id="input-group-2"
                    label="Send Email Notification"
                  >
                    <v-select
                      v-model="setting.emailNotification"
                      placeholder="Select user"
                      :options="userList"
                      :multiple="true"
                    />
                  </b-form-group>
                </b-col>
                <b-col
                  lg="12"
                  md="12"
                >
                  <b-form-checkbox
                    id="checkbox-1"
                    v-model="setting.portStateChange"
                    name="checkbox-1-notification"
                    checked-value="accepted"
                  >
                    Alert when current port state changes
                  </b-form-checkbox>
                </b-col>
              </b-row>
              <b-row>
                <b-col
                  md="12"
                  lg="12"
                  class="text-right"
                >
                  <b-form-group>
                    <b-btn
                      variant="primary"
                      type="submit"
                    >
                      SAVE
                    </b-btn>
                  </b-form-group>
                </b-col>
              </b-row>
              <hr>

              <b-row class="my-2">
                <b-col
                  lg="12"
                  md="12"
                >
                  <div class="switch-wrapper p-2">
                    <h5 class="m-b-0 m-t-0 bold fs-16">
                      <span class="text-white">ENG-01-RMU-01</span>
                      <span class="cisco_status text-white fs-12">
                        <span class="notify-bubble bg-green bg-green-ball" /> Active
                      </span>
                    </h5>
                    <b-row class="my-3">
                      <b-col
                        lg="6"
                        md="6"
                      >
                        <table class="m-r-10 table-responsive">
                          <tbody>
                            <tr>
                              <td>
                                <div
                                  class="port port-row-0 port_tooltip"
                                >
                                  <div class="port-number port-number-error>">
                                    1
                                  </div>
                                  <img
                                    class="even-port-num port-n-1 port-st-error"
                                    src="img/port-error.gif"
                                  >
                                </div>
                              </td>

                              <td>
                                <div
                                  class="port port-row-0 port_tooltip"
                                >
                                  <div class="port-number port-number-error>">
                                    3
                                  </div>
                                  <img
                                    class="odd-port-num port-n-3 port-st-error"
                                    src="img/port-error.gif"
                                  >
                                </div>
                              </td>

                              <td>
                                <div
                                  class="port port-row-0 port_tooltip"
                                >
                                  <div class="port-number port-number-error>">
                                    5
                                  </div>
                                  <img
                                    class="odd-port-num port-n-5 port-st-error"
                                    src="img/port-error.gif"
                                  >
                                </div>
                              </td>

                              <td>
                                <div
                                  class="port port-row-0 port_tooltip"
                                >
                                  <div class="port-number port-number-error>">
                                    7
                                  </div>
                                  <img
                                    class="odd-port-num port-n-7 port-st-error"
                                    src="img/port-error.gif"
                                  >
                                </div>
                              </td>

                              <td>
                                <div
                                  class="port port-row-0 port_tooltip"
                                >
                                  <div class="port-number port-number-error>">
                                    9
                                  </div>
                                  <img
                                    class="odd-port-num port-n-9 port-st-error"
                                    src="img/port-error.gif"
                                  >
                                </div>
                              </td>

                              <td>
                                <div
                                  class="port port-row-0 port_tooltip"
                                >
                                  <div class="port-number port-number-error>">
                                    11
                                  </div>
                                  <img
                                    class="odd-port-num port-n-11 port-st-error"
                                    src="img/port-error.gif"
                                  >
                                </div>
                              </td>
                            </tr>

                            <tr>
                              <td>
                                <div
                                  class="port port-row-1 port_tooltip"
                                >
                                  <img
                                    class="even-port-num port-n-2 port-st-error"
                                    src="img/port-error.gif"
                                  >
                                  <div class="yellow-time-line" />
                                  <div class="port-number port-number-error>">
                                    2
                                  </div>
                                </div>
                              </td>

                              <td>
                                <div
                                  class="port port-row-1 port_tooltip"
                                >
                                  <img
                                    class="even-port-num port-n-4 port-st-error"
                                    src="img/port-error.gif"
                                  >
                                  <div class="yellow-time-line" />
                                  <div class="port-number port-number-error>">
                                    4
                                  </div>
                                </div>
                              </td>

                              <td>
                                <div
                                  class="port port-row-1 port_tooltip"
                                >
                                  <img
                                    class="even-port-num port-n-6 port-st-error"
                                    src="img/port-error.gif"
                                  >
                                  <div class="yellow-time-line" />
                                  <div class="port-number port-number-error>">
                                    6
                                  </div>
                                </div>
                              </td>

                              <td>
                                <div
                                  class="port port-row-1 port_tooltip"
                                >
                                  <img
                                    class="even-port-num port-n-8 port-st-error"
                                    src="img/port-error.gif"
                                  >
                                  <div class="yellow-time-line" />
                                  <div class="port-number port-number-error>">
                                    8
                                  </div>
                                </div>
                              </td>

                              <td>
                                <div
                                  class="port port-row-1 port_tooltip"
                                >
                                  <img
                                    class="even-port-num port-n-10 port-st-ok"
                                    src="img/port-ok.gif"
                                  >
                                  <div class="yellow-time-line" />
                                  <div class="port-number port-number-ok>">
                                    10
                                  </div>
                                </div>
                              </td>

                              <td>
                                <div
                                  class="port port-row-1 port_tooltip"
                                >
                                  <img
                                    class="even-port-num port-n-12 port-st-error"
                                    src="img/port-error.gif"
                                  >
                                  <div class="yellow-time-line" />
                                  <div class="port-number port-number-error>">
                                    12
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </b-col>
                      <b-col
                        lg="6"
                        md="6"
                      >
                        <table class="m-r-10 table-responsive">
                          <tbody>
                            <tr>
                              <td>
                                <div
                                  class="port port-row-0 port_tooltip"
                                >
                                  <div class="port-number port-number-error>">
                                    13
                                  </div>
                                  <img
                                    class="even-port-num port-n-13 port-st-error"
                                    src="img/port-error.gif"
                                  >
                                </div>
                              </td>

                              <td>
                                <div
                                  class="port port-row-0 port_tooltip"
                                >
                                  <div class="port-number port-number-error>">
                                    15
                                  </div>
                                  <img
                                    class="odd-port-num port-n-15 port-st-error"
                                    src="img/port-error.gif"
                                  >
                                </div>
                              </td>

                              <td>
                                <div
                                  class="port port-row-0 port_tooltip"
                                >
                                  <div class="port-number port-number-error>">
                                    17
                                  </div>
                                  <img
                                    class="odd-port-num port-n-17 port-st-error"
                                    src="img/port-error.gif"
                                  >
                                </div>
                              </td>

                              <td>
                                <div
                                  class="port port-row-0 port_tooltip"
                                >
                                  <div class="port-number port-number-error>">
                                    19
                                  </div>
                                  <img
                                    class="odd-port-num port-n-19 port-st-error"
                                    src="img/port-error.gif"
                                  >
                                </div>
                              </td>

                              <td>
                                <div
                                  class="port port-row-0 port_tooltip"
                                >
                                  <div class="port-number port-number-error>">
                                    21
                                  </div>
                                  <img
                                    class="odd-port-num port-n-21 port-st-error"
                                    src="img/port-error.gif"
                                  >
                                </div>
                              </td>

                              <td>
                                <div
                                  class="port port-row-0 port_tooltip"
                                >
                                  <div class="port-number port-number-error>">
                                    23
                                  </div>
                                  <img
                                    class="odd-port-num port-n-23 port-st-error"
                                    src="img/port-error.gif"
                                  >
                                </div>
                              </td>
                            </tr>

                            <tr>
                              <td>
                                <div
                                  class="port port-row-1 port_tooltip"
                                >
                                  <img
                                    class="even-port-num port-n-14 port-st-error"
                                    src="img/port-error.gif"
                                  >
                                  <div class="yellow-time-line" />
                                  <div class="port-number port-number-error>">
                                    14
                                  </div>
                                </div>
                              </td>

                              <td>
                                <div
                                  class="port port-row-1 port_tooltip"
                                >
                                  <img
                                    class="even-port-num port-n-16 port-st-ok"
                                    src="img/port-ok.gif"
                                  >
                                  <div class="yellow-time-line" />
                                  <div class="port-number port-number-ok>">
                                    16
                                  </div>
                                </div>
                              </td>

                              <td>
                                <div
                                  class="port port-row-1 port_tooltip"
                                >
                                  <img
                                    class="even-port-num port-n-18 port-st-error"
                                    src="img/port-error.gif"
                                  >
                                  <div class="yellow-time-line" />
                                  <div class="port-number port-number-error>">
                                    18
                                  </div>
                                </div>
                              </td>

                              <td>
                                <div
                                  class="port port-row-1 port_tooltip"
                                >
                                  <img
                                    class="even-port-num port-n-20 port-st-error"
                                    src="img/port-ok.gif"
                                  >
                                  <div class="yellow-time-line" />
                                  <div class="port-number port-number-error>">
                                    20
                                  </div>
                                </div>
                              </td>

                              <td>
                                <div
                                  class="port port-row-1"
                                >
                                  <img
                                    class="even-port-num port-n-22 port-st-error"
                                    src="img/port-error.gif"
                                  >
                                  <div class="yellow-time-line" />
                                  <div class="port-number port-number-error>">
                                    22
                                  </div>
                                </div>
                              </td>

                              <td>
                                <div
                                  class="port port-row-1"
                                >
                                  <img
                                    class="even-port-num port-n-24 port-st-error"
                                    src="img/port-error.gif"
                                  >
                                  <div class="yellow-time-line" />
                                  <div class="port-number port-number-error>">
                                    24
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </b-col>
                    </b-row>
                  </div>
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
export default {
  data: () => {
    return {
      userList: ["demo", "vishnu"],
      conditionItem: [
        "Port ⇧ OR ⇩",
        "Port Goes from ⇧ to ⇩",
        "Port Goes from ⇩ to ⇧"
      ],
      setting: {
        startTime: "",
        endTime: "",
        emailNotification: [],
        condition: "",
        portStateChange: false
      }
    };
  },
  created() {
    const today = new Date();
    const min = today.getMinutes();
    const hour = today.getHours();

    if (hour < 10 && min < 10)
      this.setting.startTime = `0${today.getHours()}:0${today.getMinutes()}`;
    else if (hour < 10 && min > 10)
      this.setting.startTime = `0${today.getHours()}:${today.getMinutes()}`;
    else if (hour > 10 && min < 10)
      this.setting.startTime = `${today.getHours()}:0${today.getMinutes()}`;
    else this.setting.startTime = today.getHours() + today.getMinutes();

    this.setting.endTime = this.setting.startTime;
  },
  methods: {
    savePower() {
      console.log("save Alert", this.setting);
    }
  }
};
</script>
 
