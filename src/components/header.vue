<template>
<div class="header-head">
    {{int_title}}
</div>
</template>

<script>
export default {
  name: 'palheader',
  data () {
    return {
        int_title:'我的缘'
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .header-head{
        background-color: #409EFF;
        width: 100%;
        height: 2rem;
    }
</style>
