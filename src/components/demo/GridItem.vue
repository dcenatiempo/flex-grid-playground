<template>
  <collapseable-card :title="index + ''" class="grid-item-container" :style="style">
    <div class="grid-item">
        <span class="grid-item-column">
          <span class="labeled-input">
            <label>color</label>
            <div><input v-model="color" type="color" /></div>
          </span>
          <span class="labeled-input">
            <label>z-index</label>
            <input v-model="zIndex" type="number" />
          </span>
          <span class="labeled-input">
            <label>grid-column</label>
            <span>
              <input v-model="columnStart" class="half" type="text" min="0" max="10" step="1"/>
              <input v-model="columnEnd" class="half" type="text" min="0" max="10" step="1"/>
            </span>
          </span>
          <span class="labeled-input">
            <label>grid-row</label>
            <span>
              <input v-model="rowStart" class="half" type="text" min="0" max="10" step="1"/>
              <input v-model="rowEnd" class="half" type="text" min="0" max="10" step="1"/>
            </span>
          </span>
        </span>
        <span class="grid-item-column">
          <span class="labeled-input">
            <label>grid-area</label>
            <input v-model="area" type="text"/>
          </span>
          <span class="labeled-input">
            <label>alignSelf</label>
            <select v-model="alignSelf">
              <option v-for="option in selfOptions" :value="option" :key="`grid-a-s-${option}`">{{option}}</option>
            </select>
          </span>
          <span class="labeled-input">
            <label>justify-self</label>
            <select v-model="justifySelf">
              <option v-for="option in selfOptions" :value="option" :key="`grid-j-s-${option}`">{{option}}</option>
            </select>
          </span>
        </span>
    </div>
  </collapseable-card>
</template>

<script>
import CollapseableCard from '@/components/CollapseableCard';

export default {
  name: 'GridItem',
  components: {
    CollapseableCard,
  },
  data() {
    return {
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
    style() {
      let style = `
        z-index: ${this.zIndex};
        background: ${this.color};
        grid-column-start: ${this.columnStart};
        grid-column-end: ${this.columnEnd};
        grid-row-start: ${this.rowStart};
        grid-row-end: ${this.rowEnd};
        justify-self: ${this.justifySelf};
        align-self: ${this.alignSelf};`;
      style += this.area ? `grid-area: ${this.area};` : '';
      style = style.replace(/\n/g, ' ');
      return style;
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
          flex-basis: 135px;
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
          width: 100%
        }

      }
    }

    span {
      display: flex;
      justify-content: space-between;
    }
  }
</style>
