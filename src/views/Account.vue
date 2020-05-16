<template>
  <div>
    <Username />
    <Email />
    <Password />
  </div>
</template>

<script>
// @ is an alias to /src
import Username from "@/components/Username.vue";
import Email from "@/components/Email.vue";
import Password from "@/components/Password.vue";

export default {
  name: "Account",
  components: {
    Username,
    Email,
    Password
  }
};
</script>
