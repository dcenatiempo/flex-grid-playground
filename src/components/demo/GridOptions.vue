<template>
  <div v-if="expanded" class="grid-options">
    <button class="reset-btn" @click="resetGrid">Reset Options</button>
    <collapseable-card title="Container Options">
      <div class="grid-options">

        <span class="labeled-input">
          <label>min-height</label>
          <input class="input" v-model="gridParent.height" type="number" min=300 max=2000 step="100"/>
        </span>

        <span class="labeled-input">
          <label>padding</label>
          <input class="input" v-model="gridParent.padding" type="number" min="0" max="50" step="1"/>
        </span>

        <span class="labeled-input">
          <label>grid-column-gap</label>
          <input class="input" v-model="gridParent.gridColumnGap" type="number" min="0" max="50" step="1"/>
        </span>

        <span class="labeled-input">
          <label>grid-row-gap</label>
          <input class="input" v-model="gridParent.gridRowGap" type="number" min="0" max="50" step="1"/>
        </span>

        <span class="labeled-input">
          <label>grid-template-rows</label>
          <input class="input" type="text" v-model="gridParent.gridTemplateRows" />
        </span>

        <span class="labeled-input">
          <label>grid-template-columns</label>
          <input class="input" type="text" v-model="gridParent.gridTemplateColumns" />
        </span>

        <span class="labeled-input">
          <label>grid-template-areas</label>
          <textarea class="input" v-model="gridParent.gridTemplateAreas" />
        </span>

        <span class="labeled-input">
          <label>justify-content</label>
          <select class="input" v-model="gridParent.justifyContent">
            <option v-for="option in contentOptions" :value="option" :key="`grid-j-c-${option}`">{{option}}</option>
          </select>
        </span>

        <span class="labeled-input">
          <label>align-content</label>
          <select class="input" v-model="gridParent.alignContent">
            <option v-for="option in contentOptions" :value="option" :key="`grid-a-c-${option}`">{{option}}</option>
          </select>
        </span>

        <span class="labeled-input">
          <label>justify-items</label>
          <select class="input" v-model="gridParent.justifyItems">
            <option v-for="option in itemOptions" :value="option" :key="`grid-j-i-${option}`">{{option}}</option>
          </select>
        </span>

        <span class="labeled-input">
          <label>align-items</label>
          <select class="input" v-model="gridParent.alignItems">
            <option v-for="option in itemOptions" :value="option" :key="`grid-a-i-${option}`">{{option}}</option>
          </select>
        </span>

      </div>
    </collapseable-card>

    <collapseable-card v-if="expanded" title="Grid Item Options">
      <div class="grid-options">
        <span class="labeled-input">
          <label>items</label>
          <input class="input" v-model.number="gridChild.items" type="number" min="1" max="50" step="1"/>
        </span>
      </div>
    </collapseable-card>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import CollapseableCard from '@/components/CollapseableCard';

export default {
  name: 'GridOptions',
  components: {
    CollapseableCard,
  },
  props: {
    expanded: {
      type: Boolean,
    }
  },
  data() {
    return {
      contentOptions: ['start', 'end', 'center', 'stretch', 'space-between', 'space-around', 'space-evenly'],
      itemOptions: ['start', 'end', 'center', 'stretch'],
    }
  },
  computed: {
    ...mapState(['gridParent', 'gridChild']),
  },
  methods: {
    ...mapMutations(['resetGrid']),
  }

}
</script>

<style lang="scss">
  .grid-options {
    margin: 0 .5rem;
    display: grid;
    grid-gap: 1rem;

    input, textarea, select {
      border: none;
      border-radius: 3px;
      font-size: 1rem;
      line-height: 1rem;
      padding: .5rem;
      background: rgba(0, 0, 0, 0.5);
      color: white;
    }
  
    .labeled-input {

      label {
        // flex-basis:205px;
        color: white;
      }

      input[type=text] {
        width: 100%;
      }

      > :last-child {
        flex-basis: 150px;
        flex-grow: 1;
      }
    }

  }
</style>
