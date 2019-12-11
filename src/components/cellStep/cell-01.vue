<template>
    <li @click="onClickMe" >
         <div v-if="isture" class="chess-A"></div>
         <div v-else class="chess-B"> </div>
    </li>
</template>
<script>
export default {
  name: 'cell01',
  data(){
    return{isture:false ,}
  },
 
  methods:{
    onClickMe(){
      this.isture = !this.isture;
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
  font-size: 80px;
    float:left;
  margin:-1px 0 0 -1px;
}
 .active{background:#ccc }
</style>
