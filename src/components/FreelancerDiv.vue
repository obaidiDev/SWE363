<template>
    <div class="freelancer-card">
        <div class="photo-container">
            <img :src="src" :alt="alt">
        </div>
        <article>
            <p>{{ name }}</p>
            <p>{{ project }}</p>
        </article>
    </div>
</template>
<script>
export default {
    name: 'FreelancerDiv',
    props: {
        src: String,
        alt: String,
        name: String,
        project: String
    }
}
</script>
<style scoped>
img{
    width: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}
.freelancer-card{
    border: 2px solid #ccc;
    border-radius: 5px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    width: 200px;
    background-color: white;
}
.photo-container{
    margin: 5px 20px;
    background-color: lightgrey;
    border: 1px solid #ccc;
    border-radius: 50%;
    overflow: hidden;
}
article{
    border-top: 2px solid #ccc;;
    padding: 15px;
}
</style>