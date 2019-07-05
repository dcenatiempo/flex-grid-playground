<template>
  <div class="flex-demo">
    <div class="flex-parent" :style="flexStyle">
      <flex-item
        v-for="n in parseInt(flexChild.items)"
        :key="`flex-item-${n}`"
        :index="n"
        :total-items="flexChild.items"
        :margin="flexChild.margin+''"
        :growProp="flexChild.grow+''"
        :shrinkProp="flexChild.shrink+''"
        :basisProp="flexChild.basis"/>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import FlexItem from './FlexItem';
import CollapseableCard from '@/components/CollapseableCard';

export default {
  name: 'FlexDemo',
  components: {
    FlexItem,
    CollapseableCard,
  },
  data() {
    return {
      
    }
  },
  computed: {
    ...mapState(['flexChild']),
    ...mapGetters(['flexStyle']),
  }

}
</script>

<style lang="scss">
.flex-demo {
  display: flex;
  flex-flow: column nowrap;
  
  a {
    align-self: start;
  }

  .flex-parent {
    display: flex;
    // border: 1px solid black;
    background: rgb(223, 223, 223);
    overflow: scroll;
  }
}
</style>
