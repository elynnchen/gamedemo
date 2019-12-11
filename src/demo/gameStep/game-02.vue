<template>
<div class="container">
    <p>第{{num}}次点击棋格</p>
    <div class="cont">
        <div class="chess-box">
        <ul >
            <cell v-for="(item,index) in 9"
                  :key="index"
                  @click="onClickCell()"
                  :n='num'></cell>
        </ul>
        </div>
    </div>
</div>
</template>
<script>
    import "../../assets/chees.css"
    import cell from '../../components/cellStep/cell-02'
    export default {
        name: 'app',
        components:{cell},
        data(){
            return{
                num:0,
            }
        },
        methods:{
            onClickCell(){
                this.num=this.num+1;
                console.log("第"+this.num+"被点击");
            },
        }
    }
</script>
<style >

</style>
