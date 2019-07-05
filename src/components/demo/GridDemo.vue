<template>
  <div class="grid-demo">
    <div class="grid-parent" :style="gridStyle">
      <grid-item v-for="n in parseInt(gridChild.items)" :key="`grid-item-${n}`" :index="n" :total-items="gridChild.items"/>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import GridItem from './GridItem';
import CollapseableCard from '@/components/CollapseableCard';

export default {
  name: 'GridDemo',
  components: {
    GridItem,
    CollapseableCard,
  },
  data() {
    return {
      contentOptions: ['start', 'end', 'center', 'stretch', 'space-between', 'space-around', 'space-evenly'],
      itemOptions: ['start', 'end', 'center', 'stretch'],
    }
  },
  computed: {
    ...mapState(['gridChild']),
    ...mapGetters(['gridStyle']),
  }

}
</script>

<style lang="scss">
.grid-demo {
  display: flex;
  flex-flow: column nowrap;

  .grid-parent {
    display: grid;
    // border: 1px solid black;
    background: rgb(223, 223, 223);
    // overflow: scroll;
  }
}
</style>
