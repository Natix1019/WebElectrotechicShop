<template>
  <div id="app">
    <div id="nav">
      <Header/>
      <Home/>
    </div>
  </div>
</template>
<script>
    import Home from "./views/Home";
    import Header from "./components/core/block/Home/Header";
    export default {
        name: 'App',
      components: {
            Home,
            Header
        }
    }
</script>
<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
</style>
