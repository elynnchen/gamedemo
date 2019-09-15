<template>
  <div id="app" > 
   {{n}}
    <div class="cell" @click="onClickMe">
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
    return{a:false , b:""}
  },
 
  methods:{
    onClickMe(){
      if(this.b!==""){
        return
      }//不能重复点击，如果不为空证明点过了
      this.a = true;
      this.b=this.n %2==0?'x':'O';//奇数为O，偶数为X；
      this.$emit('click')
    }
  }

}
</script>

<style>
.cell{
  border:1px solid #333;
  width:100px;
  height:100px;
  display:flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
}
</style>
