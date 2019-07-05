<template>
  <div class="grid-page">
    <collapseable-card title="CSS Grid Resources">
      <ul style="padding: 5px 0px 20px 10px;">
        <li><a href="https://css-tricks.com/snippets/css/complete-guide-grid/">CSS Tricks - Grid Tutorial</a></li>
        <li><a href="https://gridbyexample.com/examples/">Grid By Example</a></li>
        <li><a href="https://mozilladevelopers.github.io/playground/css-grid">Mozilla - Grid Tutorial (with videos)</a></li>
        <li><a href="https://learn.freecodecamp.org/responsive-web-design/css-grid/">Free Code Camp - Grid Lessons</a></li>
      </ul>
    </collapseable-card>
    <grid-demo />
  </div>
</template>

<script>
import CollapseableCard from '@/components/CollapseableCard';
import GridDemo from '@/components/demo/GridDemo.vue';

export default {
  name: 'grid',
  components: {
    CollapseableCard,
    GridDemo,
  },
  props: {

  },
  data() {
    return {

    }
  },
  methods: {},
  computed: {},
}
</script>

<style lang="scss">
  .grid-page {

  }
</style>
