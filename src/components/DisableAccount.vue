<template>
  <div class="container">
    <h2>Disable Account</h2>
    <div class="title">What is Lorem ipsum?</div>
    <ul class="list">
      <li>Lorem ipsum is simply dummy text of the printing and</li>
      <li>Lorem ipsum is simply dummy text of the printing and</li>
      <li>Lorem ipsum is simply dummy text of the printing and</li>
    </ul>
    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="success" class="success">{{ success }}</div>
    <label for="current_password">Current password</label>
    <input v-model="current_password" id="current_password" type="password" />
    <label for="reason">Give a reason</label>
    <input v-model="reason" id="reason" type="text" />
    <label for="more">More explain</label>
    <textarea
      v-model="more"
      name="more"
      id="more"
      cols="30"
      rows="2"
    ></textarea>
    <button @click="validate" class="disable-btn">
      Disable Account
    </button>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  name: "DisableAccount",
  data() {
    return {
      current_password: "",
      reason: "",
      more: "",
      success: "",
      error: ""
    };
  },
  methods: {
    validate() {
      this.error = "";
      // var details = {};
      // details.current_password = this.current_password;
      // details.reason = this.reason;
      // details.more = this.more;
      // axios({
      //   method: "put",
      //   url: "/url",
      //   data: details
      // })
      //   .then(() => {
      //     this.success = "The password was updated !";
      //   })
      //   .catch((this.error = "The password was not updated !"));

      // mocked function starts
      if (this.current_password.length < 5) {
        this.error = "Account was not disabled !";
      } else {
        this.success = "Account was disabled successfully !";
      }
      setTimeout(() => {
        this.current_password = "";
        this.reason = "";
        this.more = "";
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
.title {
  font-size: 18px;
}
.list {
  margin-top: 10px;
}
input[type="text"],
input[type="password"],
#more {
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  border: none;
  border: lightgray 1px solid;
  outline: none;
  margin-bottom: 10px;
}
.disable-btn {
  margin-top: 20px;
  padding: 8px 14px;
  border-radius: 5px;
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
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  color: #fff;
  background-color: #343a40;
  border-color: #343a40;
}
.disable-btn:hover {
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
