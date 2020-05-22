<template>
  <div class="container">
    <h2>Your username</h2>
    <label for="username">Change your username</label>
    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="success" class="success">{{ success }}</div>
    <input id="username" v-model="user_name" type="text" />
    <i @click="validate" class="fas fa-thumbs-up icon"></i>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  name: "Username",
  data() {
    return {
      user_name: "",
      success: "",
      error: ""
    };
  },
  methods: {
    validate() {
      this.error = "";
      // axios({
      //   method: "put",
      //   url: "/url",
      //   data: this.username
      // })
      //   .then(() => {
      //     this.success = "The username was updated !";
      //   })
      //   .catch((this.error = "The username was not updated !"));

      // mocked function starts
      if (this.user_name.length < 4) {
        this.error = "The username " + this.user_name + " was not available !";
      } else {
        this.success = "The username was updated !";
      }
      setTimeout(() => {
        this.user_name = "";
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
label {
  color: rgb(61, 66, 78);
  font-weight: 500;
  font-size: 13px;
}
input[type="text"] {
  width: 95%;
  padding: 8px;
  border-radius: 5px;
  border: none;
  border: lightgray 1px solid;
  outline: none;
  margin-bottom: 10px;
}
.icon {
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
.icon:hover {
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
</style>
