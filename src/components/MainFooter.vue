<template>
  <footer>
    <div>
      &copy; 2019 dcenatiempo.com
    </div>
    <div>
      <a target="_blank" href="https://github.com/dcenatiempo/flex-grid-playground">github repo</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'MainFooter',
}
</script>

<style lang="scss">
  footer {
    padding: 16px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    div {
      padding: 0 10px;
    }
  }
</style>
