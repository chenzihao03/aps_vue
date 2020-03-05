<template>
  <div class="navbar">
    <page-header
      :isCollapse="NavbarCollapse"
      @setCollapse="setCollapse"/>
  </div>
</template>
<script>
  import PageHeader from '../../components/PageHeader'

  export default {
    props: {
      isCollapse: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        NavbarCollapse: this.isCollapse
      }
    },
    components: {
      PageHeader
    },
    methods: {
      setCollapse(event) {
        this.NavbarCollapse = event;
        this.$emit('setCollapse', this.NavbarCollapse)
      }
    }
  }
</script>
<style scoped>
  .navbar {
    height: 50px;
    overflow: hidden;
    position: relative;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0, 21, 41, .08);
  }
</style>
