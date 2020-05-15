<template>
  <div class="container-fluid">
    <h5>Edit Email</h5>
    <label for="email">Edit Your Email</label>
    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="success" class="success">{{ success }}</div>
    <input v-model="email" type="text" />
    <i @click="validate" class="fas fa-thumbs-up icon"></i>
  </div>
</template>

<script>
export default {
  name: "Email",
  data() {
    return {
      email: "",
      success: "",
      error: ""
    };
  },
  methods: {
    validate() {
      this.error = "";
      if (this.email.length < 5) {
        this.error = "The Email was not valid !";
      } else {
        this.success = "The Email was updated !";
      }
      setTimeout(() => {
        this.email = "";
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
  width: 95%;
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
