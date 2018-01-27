<template>
<div >
    <div class="flex">
        <div class="back-icon"><router-link to="/"><i class="el-icon-back"></i></router-link></div>
        <div class="header-head">登录</div>
    </div>

        <div class="reg-username">邮箱</div>
    <div class="reg-in-username"><el-input v-model="user.useremail" placeholder="请输入内容"></el-input></div>

    <div class="reg-username">密码</div>
    <div class="reg-in-username"><el-input v-model="user.password" placeholder="请输入内容"></el-input></div>

    <div class="reg-username"> <el-button type="primary" class="register-ico" @click="login()">登录</el-button></div>
</div>
</template>

<script>
export default {
  name: 'palfooter',
  data () {
    return {
        user:{
            username: '',
            useremail:'',
        }
    }
  },
  methods: {
      login() {
        this.$http.post('/api/login/getAccount', user).then((response) => {
            if(response.data){
                this.$router.push('/index')
            }
        })          
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flex{
    display: flex;
    align-items:center;
    height: 4rem;
    border-bottom: .001rem solid #F2F6FC;
}
    .header-head{
        background-color: #fff;
        width: 100%;

        font-size: 1.5rem;
    }
    .back-icon{
        float: left;
        padding:0 1rem;
    }
    .reg-username{
        padding: 2rem 1rem 1rem 1rem;
    }
    .reg-in-username{
        margin:1rem;
    }
    .register-ico{
        width: 100%;
    }
</style>
