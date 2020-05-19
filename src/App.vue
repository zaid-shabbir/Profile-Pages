<template>
  <div id="app">
    <div class="containerr">
      <div class="roww">
        <div class="coll b">
          <div class="profile">Profile</div>
          <UserInfo />
        </div>
        <div class="coll c">
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
import UserInfo from "@/components/UserInfo.vue";

export default {
  name: "Account",
  components: {
    UserInfo
  }
};
</script>

<style src="@fortawesome/fontawesome-free/css/all.css"></style>
<style>
.containerr {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.roww {
  display: flex;
  /* flex-wrap: wrap; */
  margin-right: -15px;
  margin-left: -15px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #fbfbfb;
}
.profile {
  color: rgb(61, 66, 78);
  padding: 25px 0px 25px 0px;
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
.coll {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}
@media (min-width: 900px) {
  .colla {
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%;
  }
  .c {
    -ms-flex: 0 0 75%;
    flex: 0 0 75%;
    max-width: 75%;
  }
}
</style>
