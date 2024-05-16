<template>
    <main>
        <h1>Categories</h1>
        <div class="categories">
          <CategoryDiv :src = "path[0]" alt = "test test" category="AI" description="Find AI freelancers"/>
          <CategoryDiv :src = "path[1]" alt = "test test" category="Software Engineering" description="Find software engineers"/> 
          <CategoryDiv :src = "path[2]" alt = "test test" category="Cloud Computing" description="Find cloud  freelancers"/> 
          <CategoryDiv :src = "path[3]" alt = "test test" category="Data Science" description="Find data scientists"/> 
          <CategoryDiv :src = "path[4]" alt = "test test" category="Test" description="This is a test"/>
          <CategoryDiv :src = "path[5]" alt = "test test" category="Test" description="This is a test"/> 
          <CategoryDiv :src = "path[6]" alt = "test test" category="Test" description="This is a test"/> 
          <CategoryDiv :src = "path[7]" alt = "test test" category="Test" description="This is a test"/> 
        </div>
    </main>
</template>
  
<script>
  import CategoryDiv from './CategoryDiv.vue'
  
  export default {
    name: 'MainPage',
    components: {
      CategoryDiv
    },
    data() {
    return {
      path: [
        require('../assets/AI-icon.jpeg'),
        require('../assets/AppDev-icon.jpeg'),
        require('../assets/Cloud-icon.jpeg'),
        require('../assets/DataAnalytics-icon.jpeg'),
        require('../assets/Infographic-icon.jpeg'),
        require('../assets/MotionGraphics-icon.jpeg'),
        require('../assets/UIDesigner-icon.jpeg'),
        require('../assets/Web-icon.jpeg'),
    ]
    }
    },  created() {
    const loggerString = this.$route.params.logger;
    if (loggerString) {
        localStorage.setItem('logger', loggerString);
    }

    // Use the username and role as needed
  }
  }
</script>
  
<style scoped>
  header{
    padding: 0;
    margin: 0;
  }
  body{
    padding: 0;
    margin: 0;
  }
  .categories{
    padding: 25px 50px;
    display: grid;
    grid-template-columns: 20% 20% 20% 20%;
    gap: 10px 45px;
    justify-content: center;
  }
</style>
  