<template>
  <collapseable-card :title="index + ''" class="grid-item-container" :style="style">
    <div class="grid-item">
        <span class="grid-item-column">
          <span class="labeled-input">
            <label>color</label>
            <div><input v-model="child.color" type="color" /></div>
          </span>
          <!-- <span class="labeled-input">
            <label>z-index</label>
            <input v-model="child.zIndex" type="number" />
          </span> -->
          <span class="labeled-input">
            <label>grid-column</label>
            <span>
              <input v-model="child.columnStart" class="half" type="text" min="0" max="10" step="1"/>
              <input v-model="child.columnEnd" class="half" type="text" min="0" max="10" step="1"/>
            </span>
          </span>
          <span class="labeled-input">
            <label>grid-row</label>
            <span>
              <input v-model="child.rowStart" class="half" type="text" min="0" max="10" step="1"/>
              <input v-model="child.rowEnd" class="half" type="text" min="0" max="10" step="1"/>
            </span>
          </span>
        </span>
        <span class="grid-item-column">
          <span class="labeled-input">
            <label>grid-area</label>
            <input v-model="child.area" type="text"/>
          </span>
          <span class="labeled-input">
            <label>alignSelf</label>
            <select v-model="child.alignSelf">
              <option v-for="option in selfOptions" :value="option" :key="`grid-a-s-${option}`">{{option}}</option>
            </select>
          </span>
          <span class="labeled-input">
            <label>justify-self</label>
            <select v-model="child.justifySelf">
              <option v-for="option in selfOptions" :value="option" :key="`grid-j-s-${option}`">{{option}}</option>
            </select>
          </span>
        </span>
    </div>
  </collapseable-card>
</template>

<script>
import CollapseableCard from '@/components/CollapseableCard';
import { mapMutations, mapGetters } from 'vuex';

export default {
  name: 'GridItem',
  components: {
    CollapseableCard,
  },
  data() {
    return {
      child: {
        columnStart: 'auto',
        columnEnd: 'auto',
        rowStart: 'auto',
        rowEnd: 'auto',
        area: '',
        justifySelf: 'unset',
        alignSelf: 'unset',
        selfOptions: [ 'unset', 'start', 'end', 'center', 'stretch' ],
        color: 'white',
        zIndex: 0,
      },
    }
  },
  props: {
    index: {
      type: Number,
      default: 0,
    },
    totalItems: {
      type: Number,
      default: 2,
    },

  },
  computed: {
    ...mapGetters(['getChild', 'gridChildren']),
    style() {
      let child = this.child('grid', this.index);
      debugger
      let style = `
        z-index: ${child.zIndex};
        background: ${child.color};
        grid-column-start: ${child.columnStart};
        grid-column-end: ${child.columnEnd};
        grid-row-start: ${child.rowStart};
        grid-row-end: ${child.rowEnd};
        justify-self: ${child.justifySelf};
        align-self: ${child.alignSelf};`;
      style += child.area ? `grid-area: ${child.area};` : '';
      style = style.replace(/\n/g, ' ');
      return style;
    }
  },
  methods: {
    ...mapMutations(['setChild']),
  },
  mounted() {
    this.setChild({
      type: 'grid',
      index: this.index,
      item: this.child,
    });
  },
  unMounted() {
    this.removeChild({
      type: 'grid',
    })
  },
  watch: {
    gridChildren() {
      debugger
      this.child = getChild('grid', this.index);
    }
  }
}
</script>

<style lang="scss">
  .grid-item-container {
    // border: 1px solid transparent;
    border-radius: 5px;
    opacity: .8;
    min-width: 100px;
  }

  .grid-item {
    padding: .5rem;
    display: flex;
    flex-flow: row wrap;
    align-content: start;
    position: relative;

    .grid-item-column {
      display: flex;
      flex-flow: column nowrap;
      flex-grow: 1;
      flex-basis: 208px;
      overflow: hidden;

      .labeled-input {

        label {
          flex-basis: 82;
        }

        input[type=color] {
          padding: 0 3px
        }
        input[type=text] {
          width: 100%;

          &.half {
            width: 48%;
          }
        }

        > :last-child {
          flex-basis: 82px;
          flex-grow: 1;
        }

      }
    }

    span {
      display: flex;
      justify-content: space-between;
    }
  }
</style>
