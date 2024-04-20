<template>
    <main>
        <h1>Categories</h1>
        <div class="categories">
          <CategoryDiv :src = "path[0]" alt = "test test" category="Test" description="This is a test"/>
          <CategoryDiv :src = "path[1]" alt = "test test" category="Test" description="This is a test"/> 
          <CategoryDiv :src = "path[2]" alt = "test test" category="Test" description="This is a test"/> 
          <CategoryDiv :src = "path[3]" alt = "test test" category="Test" description="This is a test"/> 
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
  .categories{
    padding: 25px 50px;
    display: grid;
    grid-template-columns: 20% 20% 20% 20%;
    gap: 10px 45px;
    justify-content: center;
  }
</style>
  