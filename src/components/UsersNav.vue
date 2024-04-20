<template>
    <div class="navigator">
        <div class="logo-container"><img class="logo" src="../assets/logo.png" alt="logo"></div>
        <div class="nav-container">
            <nav>
                <router-link to="/MainPage">Home</router-link>
                <router-link to="/MyFreelancers">My freelancers</router-link>
                <router-link to="../363 p/Profile.HTML">Profile</router-link>
                <router-link to="../four/login.html">Log out</router-link>
            </nav>
        </div>
        <div class="search-container">
            <input type="text" class="search-bar" id="searchInput" placeholder="Search...">
            <select id="searchOptions" style="display: none;">
                <option value="option">Possible results will be added later</option>
            </select>
            <button onclick="search()">&#x1F50D;</button>
        </div>
    </div>
</template>

<script>
export default{
    name: "UsersNav"
}
</script>

<style scoped>
nav a{
    margin-right: 10px;
    color: white;
    text-decoration: none;
}
.navigator{
    display: grid;
    grid-template-columns: auto auto;
    gap: 50px 0px;
    background-image: url("../assets/header-background.jpeg");
}
.logo-container{
    margin-left: 20px; 
    display: flex;
    justify-content: left;
}
.nav-container{
    margin-right: 10px;
    display: flex;
    justify-content: right;
}
.logo{
    width: 50px;
}
.search-container{
    margin-bottom: 80px;
}
#searchInput{
    width: 60%;
}
</style>