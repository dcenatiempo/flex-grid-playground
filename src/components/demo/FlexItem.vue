<template>
  <collapseable-card :title="index + ''" class="flex-item-container" :style="style">
    <div class="flex-item">
      <div class="flex-item-column">
        <div class="labeled-input">
          <label>order</label>
          <input v-model="order" type="number" min="0" :max="totalItems" step="1"/>
        </div>
        <div class="labeled-input">
          <label>grow</label>
          <input v-model="grow" type="number" min="0" max="10" step="1"/>
        </div>
        <div class="labeled-input">
          <label>shrink</label>
          <input v-model="shrink" type="number" min="0" max="10" step=".5"/>
        </div>
      </div>
      <div class="flex-item-column">
        <div class="labeled-input">
          <label>basis</label>  
          <input v-model="basis" type="number" min="0" max="500" step="10"/>
        </div>
        <div class="labeled-input">
          <label>alignSelf</label>
          <select v-model="alignSelf">
            <option v-for="option in alignOptions" :value="option" :key="option">{{option}}</option>
          </select>
        </div>
      </div>
    </div>
  </collapseable-card>
</template>

<script>
import CollapseableCard from '@/components/CollapseableCard';

export default {
  name: 'FlexItem',
  components: {
    CollapseableCard,
  },
  data() {
    return {
      order: 0,
      grow: 0,
      shrink: 1,
      basis: '100',
      alignSelf: 'unset',
      alignOptions: [ 'auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch' ],
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
    margin: {
      type: String,
      default: '16',
    },
    growProp: {
      type: String,
      default: '0',
    },
    shrinkProp: {
      type: String,
      default: '1',
    },
    basisProp: {
      type: String,
      default: '150',
    }
  },
  computed: {
    style() {
      return `
        margin: ${this.margin/2}px;
        order: ${this.order};
        flex-grow: ${this.grow};
        flex-shrink: ${this.shrink};
        flex-basis: ${this.basis}px;
        align-self: ${this.alignSelf};`;
    },
  },
  watch: {
    growProp(val) {
      this.grow = val;
    },
    shrinkProp(val) {
      this.shrink = val;
    },
    basisProp(val) {
      this.basis = val;
    }
  }
}
</script>

<style lang="scss">
  .flex-item-container {
    // border: 1px solid black;
    background: white;
    border-radius: 5px;
    min-width: 100px;
    opacity: .8;
  }
  .flex-item {
    padding: 0.5rem;
    display: flex;
    flex-flow: row wrap;
    align-content: start;
    position: relative;

    .flex-item-column {
      display: flex;
      flex-flow: column nowrap;
      flex-grow: 1;
      flex-basis: 200px;
      overflow: hidden;
    }

    .labeled-input {

        label {
          flex-basis: 100px;
        }

        input[type=color] {
        }
        input[type=text] {
          width: 100%;
        }

        > :last-child {
          flex-basis: 82px;
          flex-grow: 1;
        }

      }
  }
</style>
