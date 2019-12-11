<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "app",
  components: {
    Navbar
  }
};
</script>

<style lang="scss">
// 1. Your custom variables and variable overwrites.
// $global-link-color: #da7d02;

// 2. Import default variables and available mixins.
@import "uikit/src/scss/variables-theme.scss";
@import "uikit/src/scss/mixins-theme.scss";

// 3. Your custom mixin overwrites.
// @mixin hook-card() {
//   color: #000;
// }

// 4. Import UIkit.
@import "uikit/src/scss/uikit-theme.scss";

html {
  background-color: #f1f2f6;
}

#container {
  background: #fff;
  border-radius: 5px;
  margin: 1em 1em 1em 1em;
  padding: 1em 1em 1em 1em;
}
</style>
