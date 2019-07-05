<template>
  <div class="grid-page">
    <grid-demo />
    <collapseable-card class="resources" title="CSS Grid Resources">
      <ul style="padding: 5px 0px 20px 10px;">
        <li><a target="_blank" href="https://css-tricks.com/snippets/css/complete-guide-grid/">CSS Tricks - Grid Tutorial</a></li>
        <li><a target="_blank" href="https://gridbyexample.com/examples/">Grid By Example</a></li>
        <li><a target="_blank" href="https://mozilladevelopers.github.io/playground/css-grid">Mozilla - Grid Tutorial (with videos)</a></li>
        <li><a target="_blank" href="https://learn.freecodecamp.org/responsive-web-design/css-grid/">Free Code Camp - Grid Lessons</a></li>
      </ul>
    </collapseable-card>
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
    .resources {
      margin-top: 1rem;
    }
  }
</style>
