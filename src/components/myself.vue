<template>
<div class="int_myself">
    <inthead inttitle = '我的信息'></inthead>


    <intfoot></intfoot>
</div>
</template>

<script>
import inthead from './header.vue'
import intfoot from './footer.vue'

export default {
  components :{
      inthead,
      intfoot,
  },
  data () {
    return{
      getUserInfo:'',
    }
  },
  mounted(){
    this.getUserLoaclStorage();
  },

  methods: {
    getUserLoaclStorage(){
      this.getUserInfo = JSON.parse(localStorage.getItem('userInfo'))
      console.log(this.getUserInfo);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
