<template>
  <div class="flex-page">
    <flex-demo />
    <collapseable-card class="resources" title="CSS Flexbox Resources">
      <ul style="padding: 5px 0px 20px 10px;">
        <li><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">CSS Tricks - Flexbox tutorial</a></li>
        <li><a href="https://cssreference.io/flexbox/">cssreference - Flexbox tutorial</a></li>
        <li><a href="https://internetingishard.com/html-and-css/flexbox/">Internetting Is Hard - Flexbox tutorial</a></li>
        <li><a href="https://flexboxfroggy.com/">Flexbox Froggy</a></li>
        <li><a href="https://learn.freecodecamp.org/responsive-web-design/css-flexbox/">Free Code Camp - Flexbox Lessons</a></li>
      </ul>
    </collapseable-card>
  </div>
</template>

<script>
import CollapseableCard from '@/components/CollapseableCard';
import FlexDemo from '@/components/demo/FlexDemo.vue';
// import GridDemo from '@/components/demo/GridDemo.vue';

export default {
  name: 'flex',
  components: {
    CollapseableCard,
    FlexDemo,
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
  .flex-page {
    .resources {
      margin-top: 1rem;
    }
  }
</style>
