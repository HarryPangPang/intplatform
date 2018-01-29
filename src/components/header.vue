<template>
<div class="header-head">
    <div class="header_txt">{{inttitle}}</div>
    
</div>
</template>

<script>
export default {
  props:['inttitle'],
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .header-head{
        background-color: #409EFF;
        width: 100%;
        height: 2.5rem;
        color: #fff;
        display: flex;
          align-items:center;
    }
    .header_txt{
        padding-left: .5rem;
    }
</style>
