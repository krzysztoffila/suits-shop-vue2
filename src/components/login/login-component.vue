<template>
  <div class="login">
    <div class="imgcontainer">
      <img
        src="https://www.w3schools.com/howto/img_avatar2.png"
        alt="Avatar"
        class="avatar"
      />
    </div>
    <div class="login__container">
      <label for="email"><b>Email</b></label>
      <input
        v-model="email"
        type="text"
        placeholder="Enter Email"
        name="email"
        required
      />
      <label for="password"><b>Password</b></label>
      <input
        v-model="password"
        type="password"
        placeholder="Enter Password"
        name="password"
        required
      />
      <button @click="login" class="login__button">Login</button>
      <label>
        <input type="checkbox" checked="checked" name="remember" /> Remember me
      </label>
      <br />
      {{ error }}
    </div>
    <div class="container" style="background-color: #f1f1f1">
      <router-link to="/signup">
        <b-button variant="primary" class="login__button cancelbtn">
          Register
        </b-button>
      </router-link>
      <span class="psw">Forgot <a href="#">password?</a></span>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",

      error: "",
    };
  },
  methods: {
    login() {
      let user = {
        email: this.email,
        password: this.password,
      };
      axios.post("http://localhost:5000/login", user).then(
        (res) => {
          //if successfull
          if (res.status === 200) {
            this.$store.commit("auth/login");
            localStorage.setItem("token", res.data.token);
            alert("Witaj " + this.email);
            this.$router.push("/home");
          }
        },
        (err) => {
          console.log(err.response);
          this.error = err.response.data.error;
        }
      );
    },
  },
};
</script>

<style lang="scss">
input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

.login__button {
  background-color: #04aa6d;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  &:hover {
    opacity: 0.8;
  }
}

.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
}

img.avatar {
  width: 40%;
  border-radius: 50%;
}

.login__container {
  padding: 16px;
}

span.psw {
  float: right;
  padding-top: 16px;
}

@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
  .cancelbtn {
    width: 100%;
  }
}
</style>
