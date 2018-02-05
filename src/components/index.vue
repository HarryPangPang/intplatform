<template>
<div >
    <inthead inttitle = '动态广场'></inthead>
    <div style="     margin-top: 2.5rem;margin-bottom: 3rem;overflow: auto;">
    <div v-for="item in consoleallcommets" class="infocontent">
          <div class="upname">{{item.username}}</div>
        <div class="update">{{item.editdate | formatDate}}</div>

        <div class="upcontent">{{item.content}}</div>
        <div >
        <div v-for="i in item.userimglist" class="upimgcon">
            <img :src="'/static/imgdb/'+i"  class="upimg">
        </div>
        </div>
    </div>
    </div>
    <intfoot></intfoot>
</div>
</template>

<script>
import inthead from './header.vue'
import intfoot from './footer.vue'
import {formatDate} from '../common/js/date'
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
        allcommets:'',
        consoleallcommets:[]
    }
  },
  methods: {
    getcommet() {
        
        this.$http.post('/api/commet/getcommet').then((response) => {
            if(response.data){
                // this.allcommets = response.data;
                console.log(response.data.length)
                for(let i=0; i< response.data.length;i++){
                    this.allcommets = {
                        content: response.data[i].content,
                        editdate:    response.data[i].editdate,
                        useremail:   response.data[i].useremail,
                        userimglist: JSON.parse(response.data[i].userimglist),
                        username:     response.data[i].username
                    },
                    this.consoleallcommets.push(this.allcommets)           
                } 
                console.log(this.consoleallcommets);
            }else{
                this.prompt = '加载失败'
                this.dialogVisible = true;
            }
        }) 
    }
  },
  filters:{
      formatDate (time) {
  let date = new Date(time)
  return formatDate(date, 'yyyy-MM-dd hh:mm')
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .infocontent{
        padding: .9rem .9rem 0 .9rem;
        display: inline-block;
        width: 100%;
    }
    .upname{
        font-size: .5rem;
        float: left;
        padding-right: .5rem;
    }
    .update{
        font-size: .4rem;
    }
    .upcontent{
        font-size: .9rem;
    }
    .upimg{
        width:5.45rem;
    }
    .upimgcon{
        float: left;
        padding: .3rem .3rem 0 0
    }
</style>
