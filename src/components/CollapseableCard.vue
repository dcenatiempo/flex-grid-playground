<template>
  <div class="collapseable-card" v-responsive="{ narrow: el => el.width <= 400 }">
    <h3 @click="toggle" class="collapseable-title">
      <minus-icon v-if="!collapsed"/>
      <plus-icon v-else/>
      <span>{{title}}</span>
    </h3>
    <div
      v-show="!collapsed"
      class="collapseable-body">
      <slot />
    </div>
  </div>
</template>

<script>
import MinusIcon from 'vue-material-design-icons/Minus.vue';
import PlusIcon from 'vue-material-design-icons/Plus.vue';
import { ResponsiveDirective } from "vue-responsive-components"

export default {
  name: "CollapsableCard",
  components: {
    MinusIcon,
    PlusIcon,
  },
  directives: {
    responsive: ResponsiveDirective
  },
  data() {
    return {
      collapsed: true,
    }
  },
  props: {
    title: {
      type: String,
      default: 'Click to expand'
    }
  },
  methods: {
    toggle() {
      this.collapsed = !this.collapsed;
    }
  },
  computed: {
    formattedTitle() {
      return `${this.collapsed ? '+' : '-'} ${this.title}`;
    }
  }
}
</script>

<style lang="scss">
  .collapseable-card {
    &.narrow {
      // background: red;

      .collapseable-body {
        margin-left: .5rem;
      }
    }

    .collapseable-title {
      display: flex;
      
    }
    .collapseable-body {
      margin-left: 2rem;
    }
  }
</style>
