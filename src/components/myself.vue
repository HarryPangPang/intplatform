<template>
<div class="int_myself">
    
</div>
</template>

<script>
export default {

  data () {
    return{
      userInfo:''
    }
  },
  mounted(){
    this.getUserLoaclStorage();
  },

  methods: {
    getUserLoaclStorage(){
      this.userInfo  = localStorage.getItem('userInfo');
      console.log(this.userInfo);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
