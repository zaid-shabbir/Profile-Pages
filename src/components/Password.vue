<template>
  <div class="containerr">
    <h5>Modification password</h5>
    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="success" class="success">{{ success }}</div>
    <label for="current_password">Current password</label>
    <input id="current_password" v-model="current_password" type="text" />
    <label for="new_password">New password</label>
    <input id="new_password" v-model="new_password" type="text" />
    <label for="repeat_new_password">Repeat new password</label>
    <input id="repeat_new_password" v-model="repeat_new_password" type="text" />
    <button @click="validate" class="btn btn-dark btn-block change-btn">
      Change the password
    </button>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  name: "Password",
  data() {
    return {
      current_password: "",
      new_password: "",
      repeat_new_password: "",
      success: "",
      error: ""
    };
  },
  methods: {
    validate() {
      this.error = "";
      // var password = {};
      // password.current_password = this.current_password;
      // password.new_password = this.new_password;
      // password.repeat_new_password = this.repeat_new_password;
      // axios({
      //   method: "put",
      //   url: "/url",
      //   data: password
      // })
      //   .then(() => {
      //     this.success = "The password was updated !";
      //   })
      //   .catch((this.error = "The password was not updated !"));

      // mocked function starts
      if (
        this.current_password.length < 5 ||
        this.new_password !== this.repeat_new_password
      ) {
        this.error = "The Password was not valid !";
      } else {
        this.success = "The Password was updated !";
      }
      setTimeout(() => {
        this.current_password = "";
        this.new_password = "";
        this.repeat_new_password = "";
        this.success = "";
      }, 1000);
      // mocked function ends
    }
  }
};
</script>

<style scoped>
.containerr {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 50px;
  border-radius: 5px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 3rem !important;
}
h5 {
  font-weight: bold;
  margin-bottom: 30px;
  position: relative;
}
h5:after {
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
}
.change-btn {
  width: 95%;
  margin-top: 20px;
  padding: 10px 0px;
  font-size: 15px;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
}
.change-btn:hover {
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
