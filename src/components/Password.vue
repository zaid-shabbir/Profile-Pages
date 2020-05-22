<template>
  <div class="container">
    <h2>Modification password</h2>
    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="success" class="success">{{ success }}</div>
    <label for="current_password">Current password</label>
    <input
      @keyup.enter="validate"
      id="current_password"
      v-model="current_password"
      type="password"
    />
    <label for="new_password">New password</label>
    <input
      @keyup.enter="validate"
      id="new_password"
      v-model="new_password"
      type="password"
    />
    <label for="repeat_new_password">Repeat new password</label>
    <input
      @keyup.enter="validate"
      id="repeat_new_password"
      v-model="repeat_new_password"
      type="password"
    />
    <button @click="validate" type="submit" class="change-btn">
      <i v-if="submitted" class="fas fa-spinner fa-spin"></i>
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
      error: "",
      submitted: false
    };
  },
  methods: {
    validate() {
      this.error = "";
      this.submitted = true;
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
      setTimeout(() => {
        if (
          this.current_password.length < 5 ||
          this.new_password !== this.repeat_new_password
        ) {
          this.error = "The Password was not valid !";
        } else {
          this.success = "The Password was updated !";
        }
        this.current_password = "";
        this.new_password = "";
        this.repeat_new_password = "";
        this.success = "";
        this.submitted = false;
      }, 2000);
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
input[type="password"] {
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  border: none;
  border: lightgray 1px solid;
  outline: none;
  margin-bottom: 10px;
}
.change-btn {
  width: 100%;
  margin-top: 20px;
  outline: none;
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
  padding: 0.475rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  color: #fff;
  background-color: #343a40;
  border-color: #343a40;
}
.change-btn:hover {
  color: #fff;
  background-color: #23272b;
  border-color: #1d2124;
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
