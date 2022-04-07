<template>
  <div id="app">
    <form-list />
  </div>
</template>

<script>
import FormList from "./components/FormList.vue";

export default {
  name: "App",
  components: {
    FormList,
  },
};
</script >

<style lang='scss'>
$fontfamily: "Lato";
$minwidth: 320px;
@import "./sass/nullstyle";

#app {
  max-width: 800px;
  padding: 100px 50px;
  margin: 0 auto;
}
</style>
