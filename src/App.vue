<template>
<div>
  {{n}}
  <div class="row">
     <Cell v-on:click="onClickCell(0,$event)" v-bind:n='n'></Cell>
     <Cell v-on:click="onClickCell(1,$event)" v-bind:n='n'></Cell>
     <Cell v-on:click="onClickCell(2,$event)" v-bind:n='n'></Cell>
  </div>
  <div class="row">
      <Cell @click="onClickCell(3,$event)" :n='n'></Cell>
     <Cell @click="onClickCell(4,$event)" :n='n'></Cell>
     <Cell @click="onClickCell(5,$event)" :n='n'></Cell>
  </div>
  <div class="row">
     <Cell @click="onClickCell(6,$event)" :n='n'></Cell> 
     <Cell @click="onClickCell(7,$event)" :n='n'></Cell>
     <Cell @click="onClickCell(8,$event)" :n='n'></Cell>
  </div>


</div>
 
</template>

<script>
import Cell from './components/cell'

export default {
  name: 'app',
  components: { Cell},
  data(){
    return{n:0}
  },
  methods:{
    onClickCell(i,b){
      this.n=this.n+1;
     console.log(this.n)
  }
  }

}

</script>

<style>

.row{
  display:flex;

}
</style>
