<template>
  <div id="admin-login" class="hold-transition login-page">
    <div class="login-box">
      <!-- /.login-logo -->
      <div class="card card-outline card-primary">
        <div class="card-header text-center">
          <a href="#" class="h1"><b>Admin</b>LTE</a>
        </div>
        <div class="card-body">
          <p class="login-box-msg">Sign in to start your session</p>

          <form
            action="../../index3.html"
            method="post"
            @submit.prevent="AdminLogin"
          >
            <!-- {{errors}} -->
            <span class="text-danger" v-if="errors['email']">{{
              errors["email"][0]
            }}</span>
            <div class="input-group mb-3">
              <input
                type="email"
                class="form-control"
                v-model="form.email"
                placeholder="Email"
              />
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-envelope"></span>
                </div>
              </div>
            </div>
            <span class="text-danger" v-if="errors['password']">{{
              errors["password"][0]
            }}</span>
            <div class="input-group mb-3">
              <input
                type="password"
                class="form-control"
                v-model="form.password"
                placeholder="Password"
              />
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-lock"></span>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-8">
                <div class="icheck-primary">
                  <input type="checkbox" id="remember" />
                  <label for="remember"> Remember Me </label>
                </div>
              </div>
              <!-- /.col -->
              <div class="col-4">
                <button type="submit" class="btn btn-primary btn-block">
                  Sign In
                </button>
              </div>
              <!-- /.col -->
            </div>
          </form>

          <!-- <p class="mb-1">
        <a href="forgot-password.html">I forgot my password</a>
      </p>
      <p class="mb-0">
        <a href="register.html" class="text-center">Register a new membership</a>
      </p> -->
        </div>
        <!-- /.card-body -->
      </div>
      <!-- /.card -->
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminLogin",
  data() {
    return {
      errors: {},
      form: {},
    };
  },
  methods: {
    AdminLogin() {
      console.log(this.form);
      axios
        .post("/admin/login", this.form)
        .then((res) => {
          localStorage.setItem("AdminLogidIn", JSON.stringify(res.data));
          this.$router.push({ name: "AdminDeshboard" });
          this.$message({
            showClose: true,
            message: "Admin Login Successfully...",
            type: "success",
          });
          // console.log(res.data);
          // console.log(res.config['data']);
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