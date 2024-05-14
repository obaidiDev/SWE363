<template>
  <div>
    <link href="style.css" rel="stylesheet" />

    <div id="bg">
      <div id="form">
        <h1 class="fourText" style="margin-left: 0px; font-size: xx-large">
          Registration
        </h1>
        <br />
        <form action="" method="post">
          <div id="name">
            <div class="label-left">
              <label for="firstName" class="fourText">First Name</label> <br />
              <input
                style="margin-right: 20px"
                class="input"
                type="text"
                v-model="firstName"
                placeholder="your first name.."
              />
            </div>
            <div class="label-left" style="margin-left: 50px">
              <label for="lastName" class="fourText">Last Name</label><br />
              <input
                class="input"
                type="text"
                v-model="lastName"
                placeholder="last name.."
              />
            </div>
          </div>
          <br />
          <div class="label-left">
            <label for="email" class="fourText">Email</label><br />
            <input
              class="input"
              type="text"
              v-model="email"
              placeholder="Please enter your Email.."
            />
          </div>
          <br />
          <div class="label-left">
            <label for="userName" class="fourText">Username</label><br />
            <input
              class="input"
              type="text"
              v-model="userName"
              placeholder="Please enter a Username.."
            />
          </div>
          <br />
          <div class="label-left">
            <label for="passwordId1" class="fourText">Password</label><br />
            <input
              class="input"
              type="password"
              v-model="password"
              placeholder="Please enter your Password.."
            />
          </div>
          <div style="text-align: left;" id="roles">
          <label for="roles" class="fourText">Register as</label>
          <br>
          <input type="radio" id="user" name="role" value="user">
          <label for="user">User</label><br>
          <input type="radio" id="freelancer" name="role" value="freelancer">
          <label for="freelancer">Freelancer</label><br>
        </div>
          <br />
          <button class="button1" style="width: 450px" @click="submitForm">
            SUBMIT
          </button>
          <button
            to="/login"
            class="button2"
            style="margin-left: 20px; width: 130px; text-decoration: none"
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default { name: 'registerPage' };
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

#button {
  font-family: arial;
  color: black;
  font-size: 14px;
  padding: 10px 25px;
  border-radius: 10px;
  border: 2px solid #1a3556;
  background: rgb(240, 240, 240);
}

#name {
  display: flex;
  flex-direction: row;
}

#first {
  margin-right: 20px;
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

.label-left {
  text-align: left;
}
</style>
