<template>
        <li @click="onClickMe"  >
            <transition>
                 <div :class="chess" v-if="isture"></div>
            </transition>
        </li>
</template>

<script>
export default {
  name: 'cells',
  props:{
      n: Number
  },
  data(){
    return{isture:false , chess:""}
  },
 
  methods:{
    onClickMe(){
      if(this.chess!==""){
        return
      }//不能重复点击，如果不为空证明点过了
      this.isture = true;
      this.chess=this.n %2===0?'chess-A':'chess-B';//奇数为O，偶数为X；
      this.$emit('click',this.chess)
    }
  }

}
</script>

<style scoped>
    .v-enter, .v-leave-to {
        opacity: 0;
        transform: scale(0);
    }
    .v-enter-to, .v-leave{ opacity: 1; transform: scale(1);}
    .v-enter-active, .v-leave-active {
        transition: all .2s;
    }
</style>
