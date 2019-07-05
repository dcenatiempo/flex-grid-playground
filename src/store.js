import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gridParent: {
      height: 500,
      padding: 8,
      gridTemplateRows: '',
      gridTemplateColumns: 'repeat( auto-fit, minmax(132px, 1fr) )',
      gridTemplateAreas: '',
      gridColumnGap: 8,
      gridRowGap: 8,
      justifyContent: 'stretch',
      alignContent: 'stretch',
      justifyItems:'stretch',
      alignItems: 'stretch',
    },
    gridChild: {
      items: 2,
    },
    gridChildren: [],
    flexParent: {
      height: 500,
      padding: 8,
      direction: 'row',
      wrap: 'nowrap',
      justifyContent: 'flex-start',
      alignContent: 'stretch',
      alignItems: 'stretch',
    },
    flexChild: {
      items: 2,
      margin: 8,
      grow: 0,
      shrink: 1,
      basis: '100'
    },
    flexChildren: [],
  },
  mutations: {
    setChild(state, {type, index, item}) {
      debugger
      const children = state[`${type}Children`];
      let newChildren;
      if (index >= children.length - 1) {
        newChildren = children.concat(item);
      } else {
        newChildren = children.map(child => {
          if (child.index === index)
            return item;
          else return child;
        });
      }
      state[`${type}Children`] = newChildren;
    },
    removeChild(state, {type}) {
      state[`${type}Children`] = state[`${type}Children`].slice(0, -1); 
    }
  },
  getters: {
    child: state => (type, index) => {
      debugger
      const children = state[`${type}Children`];
      const child = children[index - 1];
      return child;
    },
    gridStyle: state => {
      let style = `
        min-height: ${state.gridParent.height}px;
        padding: ${state.gridParent.padding}px;
        grid-column-gap: ${state.gridParent.gridColumnGap}px;
        grid-row-gap: ${state.gridParent.gridRowGap}px;
        justify-content: ${state.gridParent.justifyContent};
        align-content: ${state.gridParent.alignContent};
        justify-items: ${state.gridParent.justifyItems};
        align-items: ${state.gridParent.alignItems};`;
      style += state.gridParent.gridTemplateRows.length > 0 ? `grid-template-rows: ${state.gridParent.gridTemplateRows};` : '';
      style += state.gridParent.gridTemplateColumns.length > 0 ? `grid-template-columns: ${state.gridParent.gridTemplateColumns};` : ''; 
      style += state.gridParent.gridTemplateAreas.length > 0 ? `grid-template-areas: ${state.gridParent.gridTemplateAreas};` : '';
      style = style.replace(/\n/g, ' ');
      return style;
    },
    flexStyle: state => {
      return `
        min-height: ${state.flexParent.height}px;
        padding: ${state.gridParent.padding}px;
        flex-direction: ${state.flexParent.direction};
        flex-wrap: ${state.flexParent.wrap};
        justify-content: ${state.flexParent.justifyContent};
        align-items: ${state.flexParent.alignItems};
        align-content: ${state.flexParent.alignContent};
        padding: ${state.flexParent.padding}px;`;
    }
  }
})
