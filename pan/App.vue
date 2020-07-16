<template>
  <div id="app">
    <NavBar :user="user" />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import UserData from './data/user'
import { NavBar, Footer } from 'noodle-flavour';

export default {
  data() {
    return {
      user: UserData
    }
  },
  components: {
    NavBar,
    Footer
  }
}
</script>>
<style lang="scss">
// Basic Styles
@import '~noodle-flavour/styles/base'
</style>
