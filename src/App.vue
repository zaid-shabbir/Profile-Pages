<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-lg-3">
          <h2 class="profile">Profile</h2>
          <Userinfo />
        </div>
        <div class="col-12 col-lg-9">
          <div id="nav">
            <router-link to="/">Account</router-link>
            <router-link to="/personalize">Personalize</router-link>
            <router-link to="/external-application"
              >External Application</router-link
            >
          </div>
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Userinfo from "@/components/Userinfo.vue";

export default {
  name: "Account",
  components: {
    Userinfo
  }
};
</script>

<style src="@fortawesome/fontawesome-free/css/all.css"></style>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #fbfbfb;
}
.profile {
  color: rgb(61, 66, 78);
  padding: 15px;
  font-size: 30px;
  font-weight: 700;
  height: 80px;
}
#nav {
  text-align: left;
  padding: 15px;
  padding-top: 25px;
  height: 80px;
}

#nav a {
  margin-left: 20px;
  font-size: 18px;
  color: rgb(61, 66, 78);
  text-decoration: none;
}

#nav a.router-link-exact-active {
  font-weight: bold;
  border-bottom: 3px solid rgb(61, 66, 78);
  padding: 8px 15px;
}
</style>
