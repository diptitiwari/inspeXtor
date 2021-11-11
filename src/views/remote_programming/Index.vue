<template>
  <div class="remote-program">
    <b-container fluid>
      <b-row>
        <b-col
          md="12"
          class="mt-4"
        >
          <h4 class="card-title">
            REMOTE PROGRAMMING
          </h4>
        </b-col>
      </b-row>

      <b-row class="my-2">
        <b-col
          lg="4"
          md="4"
          class="mt-2"
        >
          <b-form-input
            v-model="search"
            class
            placeholder="search keyword"
          />
        </b-col>
        <b-col
          lg="8"
          md="8"
          class="text-right"
        >
          <b-btn
            v-b-modal.modal-prevent-firmware
            class="mr-2 mt-2"
            variant="primary"
          >
            Firmware Update
          </b-btn>
          <b-btn
            v-b-modal.modal-prevent-manageFiles
            class="mr-2 mt-2"
            variant="secondary"
          >
            Manage Files
          </b-btn>
        </b-col>
      </b-row>

      <b-row>
        <b-col md="12">
          <remote-programmming-data-table
            :tbl-fields="fields"
            :search="search"
            :item-list="items"
            :pages="pages"
          >
            <template slot-scope="data">
              <!-- <button class="btn-icon">
                <img src="icon/eye.svg" class="tbl-icon" title="view" />
              </button>-->
              <button class="mr-2 btn-icon">
                <img
                  v-b-modal.modal-prevent-firmware
                  src="icon/edit.svg"
                  class="tbl-icon"
                  title="edit"
                  @click="editRow(data.item.ID)"
                >
              </button>
              <button class="btn-icon">
                <img
                  src="icon/trash-2.svg"
                  class="tbl-icon"
                  title="delete"
                  @click="deleteRow(data.item._id)"
                >
              </button>
            </template>
          </remote-programmming-data-table>
        </b-col>
      </b-row>
    </b-container>
    <b-modal
      id="modal-prevent-firmware"
      ref="modalCreateFirmware"
      hide-footer
      title="Define firmware update"
      @hidden="resetModal"
    >
      <form ref="form">
        <b-row>
          <b-col
            md="12"
            lg="12"
            sm="12"
          >
            <b-form-group
              id="input-group-selectfile"
              label="File"
            >
              <v-select
                v-model="RemoteProgrammming.FirmwareFilename"
                placeholder="Select File"
                :options="fileItem"
              />
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col
            md="12"
            lg="12"
            sm="12"
          >
            <b-form-group
              id="input-group-selectfile"
              label="Select Target"
            >
              <v-select
                v-model="RemoteProgrammming.TargetType"
                placeholder="Select"
                :options="selectItem"
              />
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col
            md="12"
            lg="12"
            sm="12"
          >
            <b-form-group
              id="input-group-selectfile"
              label="Cluster"
            >
              <v-select
                v-model="RemoteProgrammming.ClusterName"
                placeholder="Select Cluster"
                :options="clusterItem"
              />
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col
            md="12"
            lg="12"
            sm="12"
          >
            <b-form-group
              id="input-group-selectfile"
              label="Node"
            >
              <v-select
                v-model="RemoteProgrammming.NodeName"
                placeholder="Select Node"
                :options="nodeItem"
              />
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col
            md="12"
            align="right"
          >
            <b-button
              variant="primary"
              @click="addRemotePro"
            >
              {{ isUpdate? 'Update!' : 'Save!' }}
            </b-button>
          </b-col>
        </b-row>
      </form>
    </b-modal>
    <b-modal
      id="modal-prevent-manageFiles"
      ref="modal"
      title="Manage Firmware Files"
    >
      <form ref="form">
        <b-row>
          <b-col
            md="12"
            lg="12"
            sm="12"
          >
            <b-form-group
              id="input-group-file"
              label="Select File"
            >
              <b-form-file
                ref="file"
                v-model="RemoteProgrammming.filesValue"
                :state="Boolean(file)"
                placeholder="Choose a file or drop it here..."
                drop-placeholder="Drop file here..."
                @change="upldFile($event)"
              />
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col
            md="12"
            lg="12"
          >
            <b-table
              striped
              hover
              :items="fileitems"
              :fields="fileFields"
            >
              <template v-slot:cell(action)="data">
                <button class="btn-icon">
                  <img
                    src="icon/trash-2.svg"
                    class="tbl-icon"
                    title="delete"
                    @click="deleteRowFile(data.item._id)"
                  >
                </button>
              </template>
            </b-table>
          </b-col>
        </b-row>
      </form>
    </b-modal>
  </div>
</template>

<script>
import RemoteProgrammmingDataTable from "@/components/Table/Index.vue";
import { tFields, tItems, tPages, tFileFields, tFileItem, cluster } from "./config.js";
import moment from 'moment';
import _ from 'lodash';

const initialRemoteState = {
  "ID": "",
  "FirmwareVersion": "",
  "FirmwareFilename": "",
  "TargetType": "All",
  "ClusterName": "",
  "NodeName": "",
  "DownloadSent": "1",
  "DownloadSentOn": moment().format('YYYY-MM-DD hh:mm:ss'),
  "ApplySent": "1",
  "ApplySentOn": moment().format('YYYY-MM-DD hh:mm:ss'),
  "VerifySent": null,
  "VerifySentOn": null,
  "DownloadSentCount": "0",
  "DownloadDoneCount": "0",
  "ApplySentCount": "1",
  "ApplyDoneCount": "0",
  "VerifySentCount": "0",
  "VerifyDoneCount": "0"
};

export default {
  name: "RemoteProgrammming",
  components: {
    RemoteProgrammmingDataTable
  },
  data() {
    return {
      isUpdate: false,
      fields: tFields,
      search: "",
      items: tItems,
      fileFields: tFileFields,
      btnText: "Save !",
      fileitems: tFileItem,
      pages: tPages,
      file: "",
      selectItem: ["All", "cluster"],
      nodeItem: ["ND-10201"],
      fileItem: ["poe-441.bin", "poe-41.bin", "poe-341.bin"],
      clusterItem: cluster,
      fileValue: "",
      currentDateTime: null,
      RemoteProgrammming: initialRemoteState
    };
  },
  methods: {
    addRemotePro() {
      if(this.isUpdate) {
        let index = _.findIndex(this.items, {ID: this.RemoteProgrammming.ID});
        this.items.splice(index, 1, this.RemoteProgrammming);
      } else {
        let newId = parseInt(_.last(this.items).id);
        newId++;
        this.RemoteProgrammming.ID = newId.toString();
        this.items.push(this.RemoteProgrammming);
      }
      this.$refs.modalCreateFirmware.hide();
    },
    // handleSubmitFile() {
    //   this.$nextTick(() => {
    //     this.$refs.modal.hide();
    //   });
    // },
    upldFile($event) {
      const files = $event.target.files || $event.dataTransfer.files;
      // const form = this.getFormData(files);
      if (files) {
        if (files.length > 0) {
          this.filename = [...files].map(file => file.name).join(", ");
          this.filesize = [...files].map(file => file.size).join(", ");
        } else {
          this.filename = null;
        }
      }
      // if (this.filesize < 1024) {
      //   return this.filesize + "bytes";
      // } else if (this.filesize >= 1024 && this.filesize < 1048576) {
      //   return (this.filesize / 1024).toFixed(1) + "KB";
      // } else if (this.filesize >= 1048576) {
      //   return (this.filesize / 1048576).toFixed(1) + "MB";
      // }
      var id = id++;
      this.currentDateTime = new Date().toLocaleString();
      const fileData = {
        _id: this.RemoteProgrammming.fileId++,
        file_name: this.filename,
        date: this.currentDateTime,
        size: this.filesize
      };
      this.fileitems.push(fileData);
      console.log("id", this.RemoteProgrammming.fileId);
    },
    async deleteRow(id) {
      this.items.splice(await this.items.findIndex(e => e.id === id), 1);
    },
    async deleteRowFile(id) {
      console.log(id);
      this.fileitems.splice(
        await this.fileitems.findIndex(e => e.id === id),
        1
      );
    },
    editRow(id) {
      this.isUpdate = true;
      this.RemoteProgrammming = _.cloneDeep(_.find(this.items, {ID: id}));
    },
    resetModal() {
      this.isUpdate = false;
      this.RemoteProgrammming = initialRemoteState;
    }
  }
};
</script>

<style >
</style>
