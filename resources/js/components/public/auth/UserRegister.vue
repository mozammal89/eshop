<template>
  <section class="pages login-page section-padding">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="main-input padding60 new-customer">
            <div class="log-title">
              <h3>
                <strong>{{ $route.name }}</strong>
              </h3>
            </div>
            <div class="custom-input">
              <form
                action="mail.php"
                method="post"
                @submit.prevent="UserRegister()"
              >
              <span style="color:red" v-if="errors['name']">{{errors['name'][0]}}</span>
                <input
                  type="text"
                  v-model="form.name"
                  placeholder="Name here.."
                />
                <span style="color:red" v-if="errors['email']">{{errors['email'][0]}}</span>
                <input
                  type="mail"
                  v-model="form.email"
                  placeholder="Email Address.."
                />
                <input
                  type="text"
                  v-model="form.phone"
                  placeholder="Phone Number.."
                />
                <input
                  type="text"
                  v-model="form.address"
                  placeholder="Address.."
                />
                <span style="color:red" v-if="errors['password']">{{errors['password'][0]}}</span>
                <input
                  type="password"
                  v-model="form.password"
                  placeholder="Password"
                />
                <input
                  type="password"
                  v-model="form.password_confirmation"
                  placeholder="Confirm Password"
                />
                <label class="first-child">
                  <input type="radio" name="rememberme" value="forever" />
                  Sign up for our newsletter!
                </label>
                <div class="submit-text coupon">
                  <button type="submit">Register</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "UserRegister",
  data() {
    return {
		errors: {},
      form: {},
    };
  },
  methods: {
    UserRegister(){
		console.log(this.form);
		axios.post('/register',this.form)
		.then((result) => {
			console.log(result);
		}).catch((err) => {
			console.log(err);
			this.errors = err.response.data.errors;
		})
	}
  },
};
</script>

<style>
</style>