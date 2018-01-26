<template>
<div>
    <img src="/static/welcome.jpg" width="100%" height="100%"/>
    <!-- <div>Welcome</div> -->
    <div class="foot-head">
        <el-button type="primary" class="foot-content-left" @click="go_login()">登录</el-button>
        <el-button  class="foot-content-right" @click="go_register()">注册</el-button>
    </div>
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
      go_login(){
          this.$router.push({
              path: '/login'
          })
      },
      go_register(){
          this.$router.push({
              path: '/register'
          })
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .foot-head{
      bottom: 0;
      display: flex;
      width: 100%;
      position: absolute;
      padding-bottom: 2rem;
    }
    .foot-content-left{
      flex: 1.0;
      margin-left: 1rem;
    }
    .foot-content-right{
        margin-right: 1rem;
        flex: 1.0;
    }
</style>
