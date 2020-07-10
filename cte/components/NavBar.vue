<template lang="pug">
header
  nav.main(role="navigation", aria-label="main navigation")
    .container
      .navbar-brand
        a(href='/').navbar-item
          img(src='/logo.png', width='108', height='48.6')
        a.navbar-burger(role='button', href='#', data-target='navmain')
          span(aria-hidden="true")
          span(aria-hidden="true")
          span(aria-hidden="true")

      .navbar-menu#navmain
        router-link.navbar-item(v-if='user', to='/dashboard') My Courses
        a.navbar-item(href='/catalog') Catalog
        router-link.navbar-item(to='/admin', v-if='user && user.role == "admin"') Admin
        a.navbar-item(v-if="user", href='/auth/logout') Sign Out
        a.navbar-item(v-else, href='/auth') Sign In
</template>

<script>

export default {
  props: [ "user" ],
  data() {
    return {
      burgerNavActive: false,
    };
  },
  methods: {
    toggleMobileNav() {
      this.burgerNavActive = !this.burgerNavActive;
    },
  },
};

</script>

<style lang="scss" scoped>
header {
  background-color: $white;
}

nav.main {
  box-shadow: 0 0 4px $gray;

  .container {
    @media screen and (max-width: $burgerToggleWidth){
      display: block;  
    }

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em 0;
  }

  .navbar-brand {
    @media screen and (max-width: $burgerToggleWidth){
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;  
      justify-content: space-between;
    }
  }

  .navbar-menu {
    
    background-color: #fff;
    
    &.is-active {
      display: block;
    }

    @media screen and (max-width: $burgerToggleWidth) {
      display: none;  
      padding: .75em 0;
    }

    a.navbar-item {

      @media screen and (max-width: $burgerToggleWidth){
        display: block;  
      }

      padding: 15px;
      transition: color $animTime;
      &:hover {
        color: $green;
      }
    }  
  }

  .navbar-item {
    color: inherit;
    &:hover {
      color: $black;
      text-decoration: inherit;
    }
  }

  .navbar-burger {
    // spacing b/w bars
    $spacing: 7px;

    @media screen and (min-width: $burgerToggleWidth){  
      display: none;
    }
    cursor: pointer;
    display: block;
    border: 1px solid #ddd;
    border-radius: 4px;
    width: 3.25rem;
    height: 3.25rem; 
    margin-left: auto;
    position: relative;

    span {
      background-color: #333;
      display: block;
      height: 2px;
      left: calc(50% - 8px);
      position: absolute;
      -webkit-transform-origin: center;
      transform-origin: center;
      transition-duration: 86ms;
      transition-property: background-color, opacity, transform, -webkit-transform;
      transition-timing-function: ease-out;
      width: 20px;

      &:nth-child(1) {
        top: calc(50% - 1px - #{$spacing});
      }

      &:nth-child(2) {
        top: calc(50% - 1px);
      }

      &:nth-child(3) {
        top: calc(50% - 1px + #{$spacing});
      }

    }

    &.is-active {
      span {
        &:nth-child(1) {
          transform: translateY($spacing) rotate(45deg);
        }

        &:nth-child(2) {
          opacity: 0;
        }

        &:nth-child(3) {
          transform: translateY(-$spacing) rotate(-45deg);
        }
      }
    }
  }
}

</style>
