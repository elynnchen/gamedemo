<template>
  <div id="app" >
 <!--  {{n}}-->
    <div class="cell" @click="onClickMe"  :class="{ active: isActive }">
    <div v-if="a"> {{b}}</div>
    <div v-else></div>
    </div>
 
  </div>
</template>

<script>

export default {
  name: 'app',
  props:["n"],
  data(){
    return{a:false , b:"",isActive:false}
  },
 
  methods:{
    onClickMe(){
      if(this.b!==""){
        return
      }//不能重复点击，如果不为空证明点过了
      this.a = true;
      this.b=this.n %2==0?'x':'O';//奇数为O，偶数为X；
      this.$emit('click',this.b)
    }
  }

}
</script>

<style scoped>
.cell{
  border:1px solid #333;
  width:100px;
  height:100px;
  text-align: center;
 line-height: 100px;
  justify-content: center;
  align-items: center;
  font-size: 30px;
    float:left;
  margin:-1px 0 0 -1px;
}
 .active{background:#ccc }
</style>
