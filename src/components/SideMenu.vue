<template>
  <aside class="side-menu" :class="{ expanded }">
    <nav>
      <default-side-content
        v-if="'home' === $route.name"
        :expanded="expanded"/>
      <flex-options
        v-if="'flex' === $route.name"
        :expanded="expanded"/>
      <grid-options
        v-if="'grid' === $route.name"
        :expanded="expanded"/>
    </nav>
  </aside>
</template>

<script>
import FlexOptions from '@/components/demo/FlexOptions';
import GridOptions from '@/components/demo/GridOptions';
import DefaultSideContent from '@/components/DefaultSideContent';

export default {
  name: 'SideMenu',
  components: {
    DefaultSideContent,
    GridOptions,
    FlexOptions,
  },
  props: {
    expanded: {
      type: Boolean,
      default: false,
    }
  },
}
</script>

<style lang="scss">
aside.side-menu {
  background: #424242;
  width: 64px;
  transition: width ease .2s;
  z-index: 1;
  overflow-y: scroll;

  &.expanded {
    width: 240px;

    li {
      span.label {
        opacity: 1;
      }
      .icon-wrapper {
        margin: 0 16px 0 0;
      }
    }
  }

  nav {
    padding: 16px 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    display: flex;
    align-items: center;
    color: #fafafa;
    padding: 8px 16px;
    font-family: 'Roboto', 'Segoe UI', 'Droid Sans', Tahoma, Arial, sans-serif;
    font-weight: 500;
    font-size: 13px;
    background: transparent;
    transition: background ease .2s;

    &:hover {
      background: #666666;
    }

    span.label {
      opacity: 0;
      transition: opacity ease .2s;
      white-space: nowrap;
    }

    .view-dashboard-icon {
      margin: 0 0 0 5px;
    }
    .icon-wrapper {
      margin: 0;
      width: 32px;
        img {
          height: 32px;
          width: 32px;
          max-width: unset;
        }
    }
  }
}

@media only screen and (max-width: 550px) {
    aside.side-menu {
      left: -64px;
      position: absolute;
      bottom: 0;
      top: 0;

      &.expanded {
        left: 0;
      }
    }
  }
</style>