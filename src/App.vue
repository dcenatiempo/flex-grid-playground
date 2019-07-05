<template>
  <div id="app">
    <main-header class="sticky-header" :toggleMenu="toggleMenu" :expanded="expanded"/>
    <side-menu class="side-menu" :expanded="expanded"/>
    <div class="content">
      <router-view class="content-wrapper"/>
      <main-footer class="sticky-footer"/>
    </div>
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader';
import SideMenu from '@/components/SideMenu';
import MainFooter from '@/components/MainFooter';

export default {
  components: {
    MainHeader,
    SideMenu,
    MainFooter,
  },
  data() {
    return {
      expanded: false,
      viewPort: this.getWindowSize()
    }
  },
  methods: {
    toggleMenu() {
      this.expanded = !this.expanded;
    },
    getWindowSize() {
      let vpWidth = window.innerWidth;
      let vpHeight = window.innerHeight;
      let h = Math.round(vpHeight);
      let w = Math.round(vpWidth);

      return { h: h, w: w}
    },
    resizeFinished() {
      this.viewPort = this.getWindowSize();
    }
  },
  mounted() {
    var timer;

    window.onresize = () => {
      clearTimeout(timer);
      timer = window.setTimeout(this.resizeFinished, 20);
    };
  },
  watch: {
    viewPort(val) {
      if (val.w <= 550 && this.expanded) {
        this.expanded = false;
      }
    }
  }
}
</script>

<style lang="scss">
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.my-container {
  padding: 1rem 2rem;
}

input, textarea, select {
  border: 1px solid rgb(170, 170, 170);
  border-radius: 5px;
  font-size: 1rem;
  line-height: 1rem;
  padding: .5rem;
  background: rgb(247, 247, 247);
}

select {
  -moz-appearance: none;
	-webkit-appearance: none;
	appearance: none;
}

.subtitle {
  color: rgb(75, 75, 75);
  font-weight: 300;
  font-style: italic;
}

#app {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-template-rows: max-content calc(100vh - 64px);
  grid-template-areas:
    "header header"
    "side content";

  .side-menu {
    grid-area: side;
  }
  .sticky-header {
    grid-area: header;
  }
  .content {
    grid-area: content;
    display: flex;
    flex-flow: column nowrap;
    overflow-x: scroll;

    .content-wrapper {
      flex-grow: 1;
      padding: 1rem;
    }
    .sticky-footer {
    
    }
  }

  .labeled-input {
    display: flex;
    flex-flow: row wrap;
    margin: 5px 0;
    padding-left: 5px;

    label {
      font-family: 'Courier New', Courier, monospace;
      flex-basis: 220px;
    }

    label::after {
      content: ":";
    }

    .input {
      flex-basis: 220px;
    }

    input[type=color] {
      max-width: 82px;
      width: 100%;
    }
    input[type=text] {
      width: 50%;
    }

    > :last-child {
      // width: 100%;
    }
  }

  @media only screen and (max-width: 550px) {
    grid-template-areas:
      ". header header"
      "side content content";

    .my-container {
      padding: 1rem 1rem;
    }
  }
}


</style>

