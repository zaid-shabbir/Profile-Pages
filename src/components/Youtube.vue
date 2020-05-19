<template>
  <div class="container">
    <h2>External Application</h2>
    <hr />
    <div class="youtube-container">
      <i class="fab fa-youtube youtube-icon"></i>
      <span>Youtube</span>
    </div>

    <div class="text">
      <span>Synchronize your Youtube Account</span>
      <i @click="thumb" class="fas fa-thumbs-up thumb-icon"></i>
    </div>
    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="success" class="success">{{ success }}</div>
    <button @click="start" class="btn btn-success btn-block start-btn">
      START
    </button>
    <hr />
  </div>
</template>

<script>
// import axios from "axios";

export default {
  name: "Youtube",
  data() {
    return {
      user_id: "",
      success: "",
      error: ""
    };
  },
  methods: {
    thumb() {
      alert("You pressed me");
    },
    start() {
      this.error = "";
      // axios({
      //   method: "put",
      //   url: "/url",
      //   data: this.user_id
      // })
      //   .then(() => {
      //     this.success = "Youtube account synced successfully !";
      //   })
      //   .catch((this.error = "Youtube account was not synced !"));

      // mocked function starts
      alert("You started it!");
      this.success = "Youtube account synced successfully !";
      setTimeout(() => {
        this.success = "";
      }, 1000);
      // mocked function ends
    }
  }
};
</script>

<style scoped>
.container {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 50px;
  border-radius: 5px;
  padding-bottom: 20px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 3rem !important;
}
h2 {
  font-weight: bold;
  margin-bottom: 30px;
  position: relative;
}
h2:after {
  content: "";
  width: 40px;
  border-bottom: 2px solid rgb(61, 66, 78);
  position: absolute;
  bottom: -10px;
  left: 0;
}
.text {
  display: flex;
  justify-content: space-between;
}
.youtube-icon {
  color: gray;
  margin-right: 2px;
}
.youtube-container {
  margin-top: 10px;
  margin-bottom: 10px;
}
.thumb-icon {
  margin-left: 10px;
  font-size: 15px;
  height: 28px;
  width: 25px;
  padding-top: 6px;
  padding-left: 4px;
  border-radius: 20px;
  cursor: pointer;
  color: rgb(79, 155, 86);
}
.thumb-icon:hover {
  color: lightblue;
  background-color: lightgray;
  color: darkblue;
}
.error {
  font-size: 14px;
  color: red;
}
.success {
  font-size: 14px;
  color: green;
}
.start-btn {
  display: block;
  width: 100%;
  margin-top: 30px;
  padding: 0px 0px;
  border-radius: 25px;
  cursor: pointer;
  outline: none;
  color: #fff;
  background-color: #28a745;
  border-color: #28a745;
  font-weight: 400;
  text-align: center;
  user-select: none;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid transparent;
  margin-bottom: 15px;
}
.start-btn:hover {
  background-color: #249c14;
  border-color: #6adb5b;
}
</style>
