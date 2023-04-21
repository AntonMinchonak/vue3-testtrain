<template>
  <div class="app">
    <div class="links">
      <router-link class="links__item" to="/">Main </router-link>
      <router-link class="links__item" to="/posts"> Posts</router-link>
      <router-link class="links__item" to="/store">Stored Posts</router-link>
      <router-link class="links__item" to="/composition">Composition Posts</router-link>

    </div>
    <router-view></router-view>
  </div>
</template>

<script>


</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Arial';
}

body {
  margin: 0 auto;
  max-width: 1100px;
  width: 100%;
}

h1 {
  font-size: 20px;
}

.links {
  display: flex;
  gap: 20px;
  margin: 20px 0 40px;
}

.links__item {
  color: black;
  text-decoration: none;
  font-weight: 600;
}

</style>