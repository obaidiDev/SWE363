<template>
    <main>
        <h1>My Freelanceres</h1>
        <div class="freelancers">
            <FreelancerDiv :src="path" alt="user" name="User" project="User"/>
            <FreelancerDiv :src="path" alt="user" name="User" project="User"/>
            <FreelancerDiv :src="path" alt="user" name="User" project="User"/>
            <FreelancerDiv :src="path" alt="user" name="User" project="User"/>
            <FreelancerDiv :src="path" alt="user" name="User" project="User"/>
            <FreelancerDiv :src="path" alt="user" name="User" project="User"/>
            <FreelancerDiv :src="path" alt="user" name="User" project="User"/>
            <FreelancerDiv :src="path" alt="user" name="User" project="User"/>
        </div>
    </main>
</template>
  
<script>
  import FreelancerDiv from './FreelancerDiv.vue'

  export default {
    name: 'MyFreelancers',
    components: {
      FreelancerDiv
    },
    data() {
    return {
      path: [
        require('../assets/user-icon.png')
    ]
    }
    }
  }
</script>
  
<style>
  header{
    padding: 0;
    margin: 0;
  }
  body{
    padding: 0;
    margin: 0;
  }
  .freelancers{
    padding: 25px 50px;
    display: grid;
    grid-template-columns: 20% 20% 20% 20%;
    gap: 10px 45px;
    justify-content: center;
  }
</style>
  