<template>
  <div class="register-container">
    <div class="container">
      <h1>Register</h1>
      <p>Please fill in this form to create an account.</p>
      <hr />
      <label for="name"><b>Name</b></label>
      <input
        v-model="name"
        type="text"
        placeholder="Your Name"
        name="name"
        id="name"
        required
      />
      <label for="email"><b>Email</b></label>
      <input
        v-model="email"
        type="text"
        placeholder="Enter Email"
        name="email"
        id="email"
        required
      />
      <label for="psw"><b>Password</b></label>
      <input
        v-model="password"
        type="password"
        placeholder="Enter Password"
        name="psw"
        id="psw"
        required
      />
      {{ error }}
      <hr />
      <p>
        By creating an account you agree to our <a href="#">Terms & Privacy</a>.
      </p>
      <button @click="signup" class="registerbtn">Register</button>
    </div>
    <div class="container signin">
      <p>
        Already have an account?
        <router-link to="/login">Sign in</router-link>.
      </p>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "signup",
  data() {
    return {
      name: "",
      email: "",
      password: "",

      error: "",
    };
  },
  methods: {
    signup() {
      let newUser = {
        name: this.name,
        email: this.email,
        password: this.password,
      };
      axios.post("http://localhost:5000/signup", newUser).then(
        (res) => {
          this.error = "";
          this.$router.push("/login");
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
.register-container {
  padding: 16px;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;

  &:focus {
    background-color: #ddd;
    outline: none;
  }
}

hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

.registerbtn {
  background-color: #04aa6d;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;

  &:hover {
    opacity: 1;
  }
}

a {
  color: dodgerblue;
}

.signin {
  background-color: #f1f1f1;
  text-align: center;
}
</style>
