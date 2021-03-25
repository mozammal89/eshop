<template>
  <section class="pages login-page section-padding">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="main-input padding60">
            <div class="log-title">
              <h3><strong>registered customers</strong></h3>
            </div>
            <div class="login-text">
              <div class="custom-input">
                <p>If you have an account with us, Please log in!</p>
                
                <form
                  action="mail.php"
                  method="post"
                  @submit.prevent="UserLogin()"
                >
                  <input
                    type="email"
                    v-model="form.email"
                    placeholder="Email"
                  />

                  <input
                    type="password"
                    v-model="form.password"
                    placeholder="Password"
                  />
                  <a class="forget" href="#">Forget your password?</a>
                  <div class="submit-text">
                    <button type="submit">Login</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "UserLogin",
  data() {
    return {
      form: {},
    };
  },
  methods: {
    UserLogin() {
      console.log(this.form);
      axios
        .post("/login", this.form)
        .then((result) => {
          // console.log(result);
          this.$router.push({ name: "UserDeshboard" });
        })
        .catch((err) => {
          console.log(err);
          this.errors = err.response.data.errors;
        });
    },
  },
};
</script>

<style>
</style>