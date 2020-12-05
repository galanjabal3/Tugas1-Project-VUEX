<template>
  <div id="app" class="container">
    <div class="row py-4">
      <tempat-pemesanan />
      <hasil-pemesanan/>
    </div>
  </div>
</template>

<script>
  import TempatPemesanan from './components/TempatPemesanan.vue'
  import HasilPemesanan from './components/HasilPemesanan.vue'

export default {
  name: 'app',
  components: {
    TempatPemesanan,
    HasilPemesanan
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
