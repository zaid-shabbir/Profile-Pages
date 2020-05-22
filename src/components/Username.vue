<template>
  <div class="container">
    <h2>Your username</h2>
    <label for="username">Change your username</label>
    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="success" class="success">{{ success }}</div>
    <input
      @keyup.enter="validate"
      id="username"
      v-model="user_name"
      type="text"
    />
    <button @click="validate" class="submit-btn">
      <i v-if="submitted" class="fas fa-spinner fa-spin"></i>
      Submit
      <i class="fas fa-thumbs-up icon"></i>
    </button>
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
      error: "",
      submitted: false
    };
  },
  methods: {
    validate() {
      this.success = "";
      this.error = "";
      this.submitted = true;
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
      setTimeout(() => {
        if (this.user_name.length < 4) {
          this.error =
            "The username ' " + this.user_name + " ' was not available !";
        } else {
          this.success = "The username was updated !";
        }
        this.user_name = "";
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
  display: block;
}
input[type="text"] {
  width: 85%;
  padding: 8px;
  border-radius: 5px;
  border: none;
  border: lightgray 1px solid;
  outline: none;
  margin-bottom: 10px;
}
.icon {
  font-size: 15px;
  height: 28px;
  width: 25px;
  padding-top: 6px;
  padding-left: 4px;
  border-radius: 20px;
  cursor: pointer;
  color: rgb(79, 155, 86);
}
/* .icon:hover {
  color: lightblue;
  background-color: lightgray;
  color: darkblue;
} */
.error {
  font-size: 14px;
  color: red;
}
.success {
  font-size: 14px;
  color: green;
}
.submit-btn {
  width: 120px;
  margin-left: 10px;
  padding: 1px 8px;
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
.submit-btn:hover {
  color: #fff;
  background-color: #23272b;
  border-color: #1d2124;
}
</style>
