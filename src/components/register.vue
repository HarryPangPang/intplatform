<template>
<div >
    <div class="flex">
        <div class="back-icon"><router-link to="/"><i class="el-icon-back"></i></router-link></div>
        <div class="header-head">注册</div>
    </div>

    <div class="reg-username">姓名</div>
    <div class="reg-in-username"><el-input v-model="user.username" placeholder="请输入内容"></el-input></div>

        <div class="reg-username">邮箱</div>
    <div class="reg-in-username"><el-input v-model="user.useremail" placeholder="请输入内容"></el-input></div>

    <div class="reg-username">密码</div>
    <div class="reg-in-username"><el-input v-model="user.password" placeholder="请输入内容"></el-input></div>

    <div class="reg-username"> <el-button type="primary" class="register-ico" @click="registernew()">注册</el-button></div>
    <el-dialog
    title="提示"
    :visible.sync="dialogVisible"
    width="88%">
    <span>{{prompt}}</span>
    <span slot="footer" class="dialog-footer">
        <!-- <el-button @click="dialogVisible = false">取 消</el-button> -->
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
    </span>
    </el-dialog>

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
            password:'',
        },
        dialogVisible: false,
        prompt:'账户已注册'
    }
  },
  methods: {

      registernew(){
        let re1='.*?';	// Non-greedy match on filler
        let re2='(@)';	// Any Single Character 1
        let re3='(Edrington\\.com)';	// Fully Qualified Domain Name 1
        let p = new RegExp(re1+re2+re3,["i"]);
        let m = p.exec(this.user.useremail);

        if(m == null ){
            this.prompt = '您不是本公司员工';
            this.dialogVisible = true;
            return;
        }
        if(this.user.username == ''){
            this.prompt = '用户名不能为空';
            this.dialogVisible = true;
            return
        }
        if(this.user.useremail == ''){
            this.prompt = '邮箱不能为空';
            this.dialogVisible = true;
            return
        }
        if(this.user.password == ''){
            this.prompt = '密码不能为空';
            this.dialogVisible = true;
            return
        }
        this.$http.post('/api/login/createAccount',this.user).then((response) => {
            if(response.data == 0 ){
                this.$router.push('/login')
            }else{
                this.prompt = '账户已注册'
                this.dialogVisible = true;
            }
        })        

      },
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
