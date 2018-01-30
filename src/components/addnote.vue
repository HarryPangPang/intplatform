<template>
<div class="int_myself">
    <inthead inttitle = '分享时刻'></inthead>

    <!-- <el-input type="textarea" :rows="6" placeholder="请输入内容" v-model="textcommet" style="resize:none；"></el-input>
     -->
     <textarea class="texinput" rows="6"></textarea>
    <div class="upload">
      <div class="upload_warp">
        <div class="upload_warp_left" >
          <i class="el-icon-picture addimge_icon" @click="fileClick"></i>
        </div>
      </div>
      
      <input @change="fileChange($event)" type="file" id="upload_file" multiple style="display: none"/>
    
    <div v-for="(item,index) of imgList">

        <div :style="{backgroundImage:`url(${item.file.src})`}" class="addimg">
            <i class="el-icon-delete" style="position:absolute; color:red; right:0;right: 1rem;" @click="fileDel(index)"></i>
        </div>
    
    </div>
    </div>
    <!-- <div>
        <i class="el-icon-picture"></i>
    </div> -->
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
        imgList: [],
        size: 0,
        textcommet:'',
    }
  },

  methods: {
          fileClick() {
              document.getElementById('upload_file').click()
          },
          fileChange(el) {
              if (!el.target.files[0].size) return;
              this.fileList(el.target);
              el.target.value = ''
          },
          fileList(fileList) {
              let files = fileList.files;
              for (let i = 0; i < files.length; i++) {
                  //判断是否为文件夹
                  if (files[i].type != '') {
                      this.fileAdd(files[i]);
                  } else {
                      //文件夹处理
                      this.folders(fileList.items[i]);
                  }
              }
          },
          //文件夹处理
          folders(files) {
              let _this = this;
              //判断是否为原生file
              if (files.kind) {
                  files = files.webkitGetAsEntry();
              }
              files.createReader().readEntries(function (file) {
                  for (let i = 0; i < file.length; i++) {
                      if (file[i].isFile) {
                          _this.foldersAdd(file[i]);
                      } else {
                          _this.folders(file[i]);
                      }
                  }
              })
          },
          foldersAdd(entry) {
              let _this = this;
              entry.file(function (file) {
                  _this.fileAdd(file)
              })
          },
          fileAdd(file) {
              console.log(file);
              //总大小
              this.size = this.size + file.size;
              //判断是否为图片文件
              if (file.type.indexOf('image') == -1) {
                  file.src = 'wenjian.png';
                  this.imgList.push({
                      file
                  });
              } else {
                  let reader = new FileReader();
                  reader.vue = this;
                  reader.readAsDataURL(file);
                  reader.onload = function () {
                      file.src = this.result;
                      this.vue.imgList.push({
                          file
                      });
                  }
              }
          },
          fileDel(index) {
              this.size = this.size - this.imgList[index].file.size;//总大小
              this.imgList.splice(index, 1);
              console.log(this.imgList);//上传的图片资源都在这里
          },
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.addimg{
    background-size: 9rem ;
    width: 32%;
    height: 7rem;
    background-repeat: no-repeat;
    float: left;
    position: relative;
    margin: 0 0 0 .2rem;
}
.addimge_icon{
  color: #909399;
  font-size: 1.5rem !important;
  margin: .2rem;
}
.texinput{
  resize:none;
  width: 100%;
  border-left: none;
  border-right: none;
  border-top: none;
  border-bottom: 1px solid #E4E7ED;
}
</style>
