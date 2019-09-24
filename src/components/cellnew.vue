<template>
  <div>
 <!--  {{n}}-->
    <div class="cell" @click="onClickMe"  :class="{ active: isActive }">
    <div v-if="isture"> {{chess}}</div>
    </div>
 
  </div>
</template>

<script>

export default {
  name: 'app',
  props:{
      n: Number
  },
  data(){
    return{isture:false , chess:"",isActive:false}
  },
 
  methods:{
    onClickMe(){
      if(this.chess!==""){
        return
      }//不能重复点击，如果不为空证明点过了
      this.isture = true;
      this.chess=this.n %2===0?'x':'O';//奇数为O，偶数为X；
      this.$emit('click',this.chess)
    }
  }

}
</script>

<style scoped>
.cell{
  border:1px solid #333;
  width:100px;
  height:100px;
  display: inline-block;
  text-align: center;
 line-height: 100px;
  justify-content: center;
  align-items: center;
  font-size: 30px;
    float:left;
  margin:-1px 0 0 -1px;
}
 .active .cell{background:#ccc }
</style>
