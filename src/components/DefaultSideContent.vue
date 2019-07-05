<template>
  <ul>
    <li>
      <div class="icon-wrapper"><dashboard-icon /></div>
      <span class="label" :class="{ expanded }">Dashboard</span>
    </li>
    <li>
      <div class="icon-wrapper"><img src="https://crm-dcenatiempo.kvcore.io/images/nav_icons/smart_crm.png"></div>
      <span class="label" :class="{ expanded }">Smart CRM</span>
    </li>
    <li>
      <div class="icon-wrapper"><img src="https://crm-dcenatiempo.kvcore.io/images/nav_icons/listings.png"></div>
      <span class="label" :class="{ expanded }">Listings</span>
    </li>
    <li>
      <div class="icon-wrapper"><img src="https://crm-dcenatiempo.kvcore.io/images/nav_icons/marketing_autopilot.png"></div>
      <span class="label" :class="{ expanded }">Marketing Autopilot</span>
    </li>
    <li>
      <div class="icon-wrapper"><img src="https://crm-dcenatiempo.kvcore.io/images/nav_icons/lead_engine.png"></div>
      <span class="label" :class="{ expanded }">Lead Engine</span>
    </li>
    <li>
      <div class="icon-wrapper"><img src="https://crm-dcenatiempo.kvcore.io/images/nav_icons/transactions.png"></div>
      <span class="label" :class="{ expanded }">Transactions</span>
    </li>
    <li>
      <div class="icon-wrapper"><img src="https://crm-dcenatiempo.kvcore.io/images/nav_icons/web_idx.png"></div>
      <span class="label" :class="{ expanded }">Web & IDX</span>
    </li>
    <li>
      <div class="icon-wrapper"><img src="https://crm-dcenatiempo.kvcore.io/images/nav_icons/marketplace.png"></div>
      <span class="label" :class="{ expanded }">Marketplace</span>
    </li>
    <li>
      <div class="icon-wrapper"><img src="https://crm-dcenatiempo.kvcore.io/images/nav_icons/business_analytics.png"></div>
      <span class="label" :class="{ expanded }">Business Analytics</span>
    </li>
  </ul>
</template>

<script>
import DashboardIcon from 'vue-material-design-icons/ViewDashboard.vue';
export default {
  name: 'DefaultSideContent',
  components: {
    DashboardIcon
  },
    props: {
    expanded: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style lang="scss">

</style>