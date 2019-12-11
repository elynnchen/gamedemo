<template>
    <li @click="onClickMe"  >
        <div :class="chess" v-if="isture"></div>
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


</style>
