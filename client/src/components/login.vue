<template>
  <div id="bg">
    <div id="form">
      <h1 class="fourText" style="margin-left: 0px; font-size: xx-large">
        Login
      </h1>
      <form action="" method="post">
        <div style="text-align: left">
          <label for="userName" class="fourText">Username</label><br />
          <input
            class="input"
            type="text"
            name="username"
            id="userName"
            placeholder="Please enter your Username.."
          />
        </div>
        <div style="text-align: left">
          <label for="passwordId1" class="fourText">Password</label><br />
          <input
            class="input"
            type="password"
            name="password"
            id="passwordId1"
            placeholder="Please enter your Password.."
          />
        </div>
        <div style="text-align: left;" id="roles">
          <label for="roles" class="fourText">Log in as</label>
          <br>
          <input type="radio" id="user" name="role" value="user">
          <label for="user">User</label><br>
          <input type="radio" id="freelancer" name="role" value="freelancer">
          <label for="freelancer">Freelancer</label><br>
        </div>
        <button class="button1">LOGIN</button>
        <router-link
          to="/register"
          class="button2"
          style="text-decoration: none"
          >REGISTER</router-link
        >
      </form>
    </div>
  </div>
</template>
<script>
import axios  from 'axios';
export default { name: 'loginPage',methods:{
  async login() {
      try {
        const response = await axios.post('http://localhost:3000/login', {
          username: this.username,
          password: this.password
        });
        const token = response.data.token;
        localStorage.setItem('token', token);
        // Redirect to another route after successful login
        this.$router.push('/MainPage');
      } catch (error) {
        console.error('Login failed:', error);
      }
    }
  }
};
</script>
<style>
.button1 {
  font-family: arial;
  color: white;
  font-size: 14px;
  padding: 10px 25px;
  border-radius: 10px;
  border: 2px solid #1a3556;
  background: #1a3556;
  width: 300px;
  transition: all 0.4s;
}
.button1:hover {
  color: #1a3556;
  background: white;
  transform: scale(1.1);
}
.button2 {
  font-family: arial;
  color: black;
  font-size: 14px;
  padding: 10px 25px;
  border-radius: 10px;
  border: 2px solid #1a3556;
  background: rgb(240, 240, 240);
}
.button2:hover {
  color: #1a3556;
  background: white;
}
.fourText {
  font-size: large;
  color: #1a3556;
  font-family: Arial, Helvetica, sans-serif;
}
#bg {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1000px;
}
#form {
  padding: 30px;
  background-color: rgb(190, 190, 190);
  border-radius: 10px;
  border: 5px solid rgb(144, 144, 144);
}
.input {
  font-size: 18px;
  width: 90%;
  padding: 10px;
  border-radius: 5px;
  outline: none;
  background: #ffffff;
  color: #000000;
  border: 1px solid #c4d1eb;
  transition: 0.3s ease;
}
.input::placeholder {
  padding: 10px;
  color: #dddddd;
}
select {
  border-radius: 5px;
  border: 1px solid #c4d1eb;
}
</style>
