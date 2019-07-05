<template>
    <router-link tag="div" to="/"
      class="logo-container"
      :class="{ expanded: expanded }">
      <img
        v-if="expanded"
        alt="Paper"
        src="https://crm-dcenatiempo.kvcore.io/paper/img/logo_white_trans.png"
        class="expanded">
      <img
        v-else
        alt="Paper"
        src="https://crm-dcenatiempo.kvcore.io/paper/img/icon_white_trans.png">
    </router-link>
</template>

<script>
export default {
  name: 'ExpandableLogo',
  props: {
    expanded: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 64px;
    width: 64px;
    transition: all ease .2s;

    &.expanded {
      width: 240px;
    }

      img {
        height: 44px;
      }
  }
</style>
