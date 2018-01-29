<template>
<div class="foot-head">
  <router-link to="/index" class="foot-content"><i class="el-icon-view"></i></router-link>
  <router-link to="/addnote"  class="foot-content"><i class="el-icon-circle-plus-outline"></i></router-link>
  <router-link to="/myself"  class="foot-content"><i class="el-icon-tickets"></i></router-link>
   
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
      padding: .5rem 0;
    }
    .foot-content{
      flex: 1.0;
    }
    .foot-content i {
      color: #333
    }
</style>
