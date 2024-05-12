<template>
<div id="bg">
  <div id="form">
    <h1 class="fourText" style="font-size: xx-large; margin-left: 0px">
      Report
    </h1>
    <form>
      <label for="reportId" class="fourText">Report Reason</label> <br />
      <select v-model="reportId" class="select" style="width: 190px">
        <option value="1">Inappropriate Content</option>
        <option value="2">Fake Profile</option>
        <option value="3">Suspicious Activity</option>
      </select>
      <p>
        <label for="detailsId" class="fourText">More Details</label> <br />
        <textarea
          v-model="detailsId"
          class="input"
          name="detailsId"
          cols="25"
          rows="3"
        ></textarea>
      </p>
      <button @click="submitForm" class="button1">Submit</button>
    </form>
  </div>
</div>
</template>
<script>
export default {name: 'reportPage'};
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
