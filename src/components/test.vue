<template>
<div>
  <div>
    <select v-model="select_item" >
      <option v-for="option in options" :value="option.value">{{option.text}}</option>
    </select>
    <input v-model="videoSrc"/>
    <button @click="search">search</button>
  </div>
<iframe id="videos" src="" frameborder="0" :width="width" :height="height"></iframe>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      options: [
        {text:'线路1不可放大', value: '0'},
        {text:'线路2不可放大', value: '1'},
        {text:'线路3可放大', value: '2'},
        {text:'线路4可放大', value: '3'},
        {text:'线路5可放大', value: '4'},
        {text:'线路6可放大', value: '5'},
        {text:'线路7不可放大', value: '6'},
        {text:'线路8不可放大', value: '7'},
        {text:'线路9不可放大', value: '8'},
      ],
      api:[
        "http://mlxztz.com/player.php?url=",//不可放大
        "http://api.baiyug.cn/vip/index.php?url=",//不可放大
        "http://000o.cc/jx/ty.php?url=",//可放大
        "http://vip.jlsprh.com/index.php?url=",//可放大
        "http://2gty.com/apiurl/yun.php?url=",//可放大
        "http://j.zz22x.com/jx/?url=",//不可放大
        "http://api.iy11.cn/apiget.php?url=",//可放大
        "http://api.mp4la.net/?url=",
      ],
      htmll:'',
      videoSrc:'',
      nowIndex:0,
      width: '',
      height: '',
      select_item:'3',
    }
  },
  mounted() {
    this.width = document.body.clientWidth+ "px";
    this.height = `${document.documentElement.clientHeight}px`;
  },
  computed: {

  },
  watch: {
    // videoSrc () {
    //   document.getElementById('videos').src = this.api[1]
    // },
  },
  methods: {
    search() {
       document.getElementById('videos').src = this.api[this.select_item] + this.videoSrc
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
