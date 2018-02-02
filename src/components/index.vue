<template>
<div >
    <inthead inttitle = '动态广场'></inthead>

    <div v-for="item in allcommets">
        <div>{{item.content}}</div>
        <div>{{item.editdate}}</div>
        <div>{{item.username}}</div>
        <div><img :src="'../../server/imgdb/'+item.userimglist"></div>
    </div>
    <intfoot></intfoot>
</div>
</template>

<script>
import inthead from './header.vue'
import intfoot from './footer.vue'
export default {
components :{
    inthead,
    intfoot
},

  created() {
    this.getcommet();
  },
  data () {
    return {
        allcommets:''
    }
  },
  methods: {
    getcommet() {
        this.$http.post('/api/commet/getcommet').then((response) => {
            if(response.data){
                this.allcommets = response.data;
                console.log(response.data);
            }else{
                this.prompt = '加载失败'
                this.dialogVisible = true;
            }
        }) 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
