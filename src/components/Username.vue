<template>
  <div class="container-fluid">
    <h5>Your username</h5>
    <label for="username">Change your username</label>
    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="success" class="success">{{ success }}</div>
    <input v-model="user_name" type="text" />
    <i @click="validate" class="fas fa-thumbs-up icon"></i>
  </div>
</template>

<script>
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
      if (this.user_name.length < 4) {
        this.error = "The username " + this.user_name + " was not available !";
      } else {
        this.success = "The username was updated !";
      }
      setTimeout(() => {
        this.user_name = "";
        this.success = "";
      }, 1000);
    }
  }
};
</script>

<style scoped>
.container-fluid {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 50px;
  border-radius: 5px;
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
  width: 94%;
  padding: 8px;
  border-radius: 5px;
  border: none;
  border: lightgray 1px solid;
  outline: none;
}
.icon {
  margin-left: 10px;
  font-size: 15px;
  height: 30px;
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
