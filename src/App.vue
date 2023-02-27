<template>
  <transition name="fade" appear>
    <div id="nav">
      <router-link to="/">Home</router-link>
      <!-- <router-link to="/id">Industrial Design</router-link> -->
      <router-link to="/ui">UI Design</router-link>
      <router-link to="/photoshop">Painting</router-link>
      <!-- <router-link to="/model">Other work</router-link> -->
    </div>
  </transition>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #46a2ff;
}

#nav {
  margin: 20px auto;
  padding: 10px 15px;
  width: 750px;
  border-radius: 10px;
  box-shadow: 0 0 6px 1px rgb(206, 206, 206);
  display: inline-flex;
  justify-content: center;
  background-color: #fff;
}

#nav a {
  display: inline-block;
  padding: 8px;
  font-weight: bold;
  color: #2c3e50;
  font-size: 20px;
  text-decoration: none;
  transition: .3s;
}
#nav a:hover{
  color: #5842b9;
}

#nav a.router-link-exact-active {
  color: #5842b9;
}
.text {
  width: 1200px;
  position: absolute;
  color: #fff;
  font-size: 20px;
}
</style>
