<template>
  <div v-if="expanded" class="flex-options">
    <button class="reset-btn" @click="resetFlex">Reset Options</button>
    <collapseable-card title="Container Options">
      <div class="flex-options">
        
        <span class="labeled-input">
          <label>min-height</label>
          <input v-model="flexParent.height" type="number" min=300 max=2000 step="100"/>
        </span>

        <span class="labeled-input">
          <label>padding</label>
          <input class="input" v-model="flexParent.padding" type="number" min="0" max="50" step="1"/>
        </span>
        
        <span class="labeled-input">
          <label>direction</label>
          <select v-model="flexParent.direction">
            <option v-for="option in directionOptions" :value="option" :key="option">{{option}}</option>
          </select>
        </span>

        <span class="labeled-input">
          <label>wrap</label>
          <select v-model="flexParent.wrap">
            <option v-for="option in wrapOptions" :value="option" :key="option">{{option}}</option>
          </select>
        </span>
      
        <span class="labeled-input">
          <label>justify-contents</label>
          <select v-model="flexParent.justifyContent">
            <option v-for="option in justifyOptions" :value="option" :key="option">{{option}}</option>
          </select>
        </span>

        <span class="labeled-input">
          <label>align-items</label>
          <select v-model="flexParent.alignItems">
            <option v-for="option in alignOptions" :value="option" :key="option">{{option}}</option>
          </select>
        </span>

        <span class="labeled-input">
          <label>align-content</label>
          <select v-model="flexParent.alignContent">
            <option v-for="option in alignContentOptions" :value="option" :key="option">{{option}}</option>
          </select>
        </span>

      </div>
    </collapseable-card>

    <collapseable-card v-if="expanded" title="Flex Item Options">
      <div class="flex-options">

        <span class="labeled-input">
          <label>items</label>
          <input v-model.number="flexChild.items" type="number" min="1" max="50" step="1"/>
        </span>

        <span class="labeled-input">
          <label>margin</label>
          <input v-model="flexChild.margin" type="number" min="1" max="40" step="1"/>
        </span>

        <div class="labeled-input">
          <label>grow</label>
          <input v-model="flexChild.grow" type="number" min="0" max="10" step="1"/>
        </div>

        <div class="labeled-input">
          <label>shrink</label>
          <input v-model="flexChild.shrink" type="number" min="0" max="10" step=".5"/>
        </div>

        <div class="labeled-input">
          <label>basis</label>  
          <input v-model="flexChild.basis" type="number" min="100" max="500" step="10"/>
        </div>

      </div>
    </collapseable-card>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import CollapseableCard from '@/components/CollapseableCard';

export default {
  name: 'FlexOptions',
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
      alignOptions: ['stretch', 'flex-start', 'flex-end', 'center', 'baseline'],
      alignContentOptions: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch'],
      justifyOptions: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],
      wrapOptions: ['nowrap', 'wrap', 'wrap-reverse'],
      directionOptions: ['row', 'column', 'row-reverse', 'column-reverse'],
    }
  },
  computed: {
    ...mapState(['flexParent', 'flexChild']),
  },
  methods: {
    ...mapMutations(['resetFlex']),
  }

}
</script>

<style lang="scss">
.flex-options {
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
      // flex-basis:160px;
      color: white;
    }

    // input[type=text] {
    //   width: 50%;
    // }

    > :last-child {
      flex-basis: 150px;
      flex-grow: 1;
    }
  }
}
</style>
