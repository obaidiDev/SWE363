<template>
    <div class="outer-div">
        <div class="inner-div"><img :src="src" :alt="alt"></div>
        <article>
            <h2>{{ category }}</h2>
            <p>{{ description }}</p>
            <button>Explore</button>
        </article>
    </div>
</template>
<script>
export default{
    name: "CategoryDiv",
    props: {
        src: String,
        alt: String,
        category: String,
        description: String
    }
}
</script>
<style scoped>
.outer-div{
    border: 2px solid #ccc;
    border-radius: 7px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
}
img{
    width: 100%;
    height: 100%;
}
.inner-div{
    padding: 0px;
    margin: 0px;
    border-bottom: 2px solid #ccc;
}
article{
    text-align: center;
}
h2{
    color: rgb(82, 81, 81);
}
p{
    color: rgb(86, 83, 83);
}
button{
    background-color: black;
    color: white;
    margin-bottom: 10px;
    border-radius: 5px;
    padding: 5px;
    border-color: black;
    border-style: solid;
    cursor: pointer;
    transition: background-color border-color 0.1s ease;
}
button:hover {
  background-color: darkgrey;
  border-color: darkgray
}
</style>