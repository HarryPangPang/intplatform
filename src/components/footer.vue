<template>
<div class="foot-head">
    <div class="foot-content"><i class="el-icon-view"></i></div>
    <div class="foot-content"><i class="el-icon-circle-plus-outline"></i></div>
    <div class="foot-content"><i class="el-icon-tickets"></i></div>
</div>
</template>

<script>
export default {
  name: 'palfooter',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .foot-head{
      text-align: center;
      font-size: 1.5rem;
      bottom: 0;
      display: flex;
      position: fixed;
      width: 100%;
      margin: .5rem 0;
    }
    .foot-content{
      flex: 1.0;
    }
</style>
