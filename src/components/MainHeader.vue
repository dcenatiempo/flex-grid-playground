<template>
  <header class="main-header">
    <expandable-logo :expanded="expanded" />
    <button class="menu-btn" @click="toggleMenu">
      <menu-icon class="icon"/>
    </button>
    <nav>
      <router-link class="nav-link" to="flex">flexbox</router-link>
      <router-link class="nav-link" to="grid">grid</router-link>
    </nav>
  </header>
</template>

<script>
import MenuIcon from "vue-material-design-icons/Menu.vue";
import ExpandableLogo from "@/components/ExpandableLogo.vue";

export default {
  name: 'MainHeader',
  components: {
    MenuIcon,
    ExpandableLogo
  },
  props: {
    expanded: {
      type: Boolean,
      default: false,
    },
    toggleMenu: {
      type: Function,
    }
  }
}
</script>

<style lang="scss">
  .main-header {
    display: flex;
    height: 64px;

    .logo-container {
      background: #03a9f4;
    }

    .menu-btn {
      height: 64px;
      width: 64px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: transparent;
      border: none;

      .icon {
        color: #757575;

        svg {
          height: 32px;
          width: 32px;
        }

        &:hover {
          color: black;
        }
      }
    }

    nav {
      flex-grow: 1;
      display: flex;
      align-items: center;

      .router-link-active {
        font-weight: bold;
      }
      
      a {
        font-size: 1.2rem;
        margin: 1rem;
        text-decoration: none;
        color: black;
      }
    }
  }
</style>
