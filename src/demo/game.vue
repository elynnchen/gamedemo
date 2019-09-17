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
        <div>{{map}}</div>
        <div>{{result}}</div>
    </div>
</template>

<script>
    import Cell from '../components/cell'

    export default {
        name: 'app',
        components: { Cell},
        data(){
            return{
                n:0,
                result:false,
                map:[
                    [null,null,null],
                    [null,null,null],
                    [null,null,null]]
            }
        },
        methods:{
            onClickCell(i, b){//i表示序号，被点击，但不知道是X还是O，子组件需Emit内容出来
                console.log(`${i}被点击,内容是${b}`);
                this.map[Math.floor(i/3)][i%3]=b;
                this.n=this.n+1;
                this.tell()
            },
            tell(){
                let map=this.map;
                for(let i=0; i<2;i++){
                    if( map[i][0]!==null &&
                        map[i][0]===map[i][1] &&
                        map[i][1]===map[i][2]){
                        this.result=true;
                    }
                }
                for(let j=0; j<2;j++){
                    if(
                        map[0][j]!==null&&
                        map[0][j]===map[1][j]&&
                        map[1][j]===map[2][j]){
                        this.result=true;
                    }
                }
                for(let i=0; i<2;i++){
                    if(
                        map[i][i]!==null&&
                        map[0][0]===map[1][1]&&
                        map[1][1]===map[2][2]){
                        this.result=true;

                    }
                }
                for(let i=0; i<2;i++){
                    if(
                        map[0][2]!==null&&
                        map[0][2]===map[1][1]&&
                        map[1][1]===map[2][0]){
                        this.result=true;
                    }
                }
            },
        }
    }
</script>

<style>
    .row{
        display:flex;

    }
</style>
