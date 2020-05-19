<template>
  <div class="container">
    <div class="user-info-container">
      <div class="row margin">
        <div class="col center">
          <div
            @click="show_modal"
            @mouseenter="hovered"
            @mouseleave="exitHovered"
          >
            <img
              v-if="!image[0]"
              src="../assets/img.png"
              alt="avatar"
              class="avatar"
            />
            <img v-else :src="image[0]" alt="avatar" class="avatar" />
            <i v-if="hover" class="fas fa-file-upload upload"></i>
          </div>
          <div v-show="image_modal">
            <div class="imodal">
              <VueDropify
                class="img-modal"
                :key="refresh_image_modal"
                width="200"
                height="200"
                @upload="upload"
                multiple="null"
                removeIcon="null"
                accept="image/jpg,image/jpeg,image/png"
              />
            </div>
            <div v-if="error" class="error">{{ error }}</div>
            <button @click="uploadImage" class="upload-btn">
              <i v-if="uploading" class="fas fa-spinner fa-spin"></i>
              Upload
            </button>
          </div>
        </div>
        <div class="col user-name-container">
          <p class="user">
            User:
          </p>
          <p class="name">
            {{ username }}
          </p>
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="col user-info-footer">
          <p class="margin">
            <i class="fas fa-user info-icon"></i>
          </p>
          <p class="info">
            Member Since
            <span class="info-detail">{{ user_date_member }}</span>
          </p>
        </div>
        <div class="col user-info-footer">
          <p class="margin">
            <i class="fas fa-globe info-icon"></i>
          </p>
          <p class="info">
            Language
            <span class="info-detail">{{ user_lang }}</span>
          </p>
        </div>
        <div class="col user-info-footer">
          <p class="margin">
            <i class="fas fa-hand-holding-heart info-icon"></i>
          </p>
          <p class="info">
            Helper
            <span v-if="user_helper" class="info-detail">Yes</span>
            <span v-if="!user_helper" class="info-detail">No</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import VueDropify from "vue-dropify";
// import axios from "axios";

export default {
  name: "UserInfo",
  data() {
    return {
      username: "User Name",
      avatar: "",
      user_date_member: moment("2004-02-12T15:19:21+00:00").format("DD/MM/YY"),
      user_lang: "English",
      user_helper: false,
      hover: false,
      image: [],
      image_modal: false,
      refresh_image_modal: 1,
      error: "",
      uploading: false
    };
  },
  components: {
    VueDropify
  },
  methods: {
    hovered() {
      this.hover = true;
    },
    exitHovered() {
      this.hover = false;
    },
    show_modal() {
      this.image_modal = true;
    },
    upload(e) {
      if (e == "") {
        this.image = [];
        this.error = "";
      } else {
        if (this.image.length == 0) {
          const reader = new FileReader();
          reader.onload = () => {
            this.image.push(reader.result);
          };
          reader.readAsDataURL(e[0]);
        } else {
          this.error = "You cannot upload multiple images!!";
        }
      }
    },
    uploadImage() {
      this.uploading = true;
      setTimeout(() => {
        alert("Uploaded");
        this.refresh_image_modal++;
        this.image = [];
        this.uploading = false;
        this.image_modal = false;
      }, 2000);

      // axios({
      //   method: "put",
      //   url: "/url",
      //   data: this.image
      // })
      //   .then(res => {
      //     this.avatar = res.data;
      //     this.refresh_image_modal++;
      //     this.image= []
      //     this.image_modal = false
      //   })
      //   .catch((this.error = "Error uploading picture!"));
    }
  }
};
</script>

<style scoped>
.container {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding-bottom: 20px;
  border-radius: 5px;
  margin-bottom: 0.5rem !important;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.user-info-container {
  padding: 10px;
}
.row {
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
.col {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}
.center {
  text-align: center !important;
}
.user-name-container {
  display: flex !important;
  justify-content: center !important;
}
.margin {
  margin-top: 0.8rem !important;
}
.avatar {
  height: 150px;
  width: 150px;
  border: green 2px solid;
  border-radius: 100px;
}
.user {
  font-size: 20px;
  font-weight: bolder;
  margin-top: 24px;
  color: rgb(61, 66, 78);
}
.name {
  font-size: 18px;
  margin-top: 26px;
  margin-left: 5px;
  color: rgb(61, 66, 78);
}
.user-info-footer {
  display: flex;
  justify-content: space-between;
}
.info-icon {
  color: gray;
}
.info {
  color: rgb(61, 66, 78);
  font-size: 15px;
  font-weight: lighter;
  margin-top: 0.5rem !important;
}
.info-detail {
  display: block;
  text-align: right;
}
.upload {
  margin-left: -90px;
  margin-top: 60px;
  position: absolute;
  font-size: 40px;
  cursor: pointer;
  color: gray;
}
.imodal {
  position: relative;
  text-align: center;
  left: 50%;
  margin-left: -100px;
  margin-top: 10px;
}
.img-modal {
  text-align: center;
  width: 200px;
  height: 120px;
}
.error {
  /* margin-left: -30px; */
  font-size: 14px;
  color: red;
}
.upload-btn {
  margin-top: 5px;
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;

  color: #fff;
  background-color: #343a40;
  border-color: #343a40;
}
.upload-btn:hover {
  color: #fff;
  background-color: #23272b;
  border-color: #1d2124;
}
</style>
