<template>
  <div class="container-fluid">
    <div class="user-info-container">
      <div class="row mt-3">
        <div class="col-6 col-lg-12 text-center">
          <div
            @click="show_modal"
            @mouseenter="hovered"
            @mouseleave="exitHovered"
          >
            <img src="../assets/img.png" alt="avatar" class="avatar" />
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
            <div v-if="error" class="error">{error}</div>
            <button @click="uploadImage" class="btn btn-dark upload-btn">
              <i v-if="uploading" class="fas fa-spinner fa-spin"></i>
              Upload
            </button>
          </div>
        </div>
        <div class="col-6 col-lg-12 d-flex justify-content-center">
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
        <div class="col-4 col-lg-12 user-info-footer">
          <p class="mt-2">
            <i class="fas fa-user info-icon"></i>
          </p>
          <p class="info mt-2">
            Member Since
            <span class="d-block text-right">{{ user_date_member }}</span>
          </p>
        </div>
        <div class="col-4 col-lg-12 user-info-footer">
          <p class="mt-2">
            <i class="fas fa-globe info-icon"></i>
          </p>
          <p class="info mt-2">
            Language
            <span class="d-block text-right">{{ user_lang }}</span>
          </p>
        </div>
        <div class="col-4 col-lg-12 user-info-footer">
          <p class="mt-2">
            <i class="fas fa-hand-holding-heart info-icon"></i>
          </p>
          <p class="info mt-2">
            Helper
            <span v-if="user_helper" class="d-block text-right">Yes</span>
            <span v-if="!user_helper" class="d-block text-right">No</span>
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
          this.image = e[0];
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
.container-fluid {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding-bottom: 20px;
  border-radius: 5px;
}
.user-info-container {
  padding: 10px;
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
  margin-left: -180px;
  font-size: 14px;
  color: red;
}
.upload-btn {
  margin-top: 5px;
}
</style>
