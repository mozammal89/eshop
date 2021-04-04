<template>
<div id="deshboard">
  <h2>Hello test</h2>
  {{user}}
</div>
</template>
<script>
export default {
  name: "UserDeshboard",
  computed: {
    user() {
      return this.$store.getters["user/getAuthUser"];
    },
  },
  methods: {
    getUser() {
      this.$store.dispatch("user/getUser");
    },
    // axios.get()
  },
  created() {
    this.getUser();
  },
};
</script>

<style scoped>
</style>