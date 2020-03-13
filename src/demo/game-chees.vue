<template>
<div class="container">

    <div class="cont">
     <span class="time">第{{num}}次点击棋格</span>
        <div class="chess-box">
        <ul >
            <cells v-for="(item,index) in 9" :key="index"
                   :class="cellClasses(index)"
                   @click="onClickCell(index,$event)"
                   :n='num'
                   ref="index"></cells>

        </ul>
        </div>
        <button class="btn-again" @click="onClickClear()"></button>
        <transition name="fade" >
        <div class="win"  v-show="result"  >
            <div id="lottiewin"  class="lottie"></div>
        </div>
        </transition>
        <transition name="fade" >
        <div class="gameover" v-if="gameOver">
            <img src="../assets/gameover1.png">
        </div>
        </transition>

    </div>
    <div class="bottom">
        <img src="../assets/bottom.png">
    </div>
</div>
</template>
<script>
    import cells from '../components/cheesCell'
    import "../assets/chees.css"
    import jsonFile from "./../assets/lottie/lottie1.json"
    import lottie from "lottie-web"
    export default {
        name: 'gamechees',
        components: { cells },
        data(){
            return{
                num:0,
                result:false,
                gameOver:false,
                isactive:false,
                value: String,
                map:[
                    ["","",""],
                    ["","",""],
                    ["","",""]],
                winCells:[]
            }

        },
        mounted(){
            //导入Lottie动画
             lottie.loadAnimation({
                container: document.getElementById('lottiewin'),
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData: jsonFile
            });


        },
        methods:{
            onClickCell(index, chess){//i表示序号，被点击，但不知道是X还是O，子组件需Emit内容出来
                console.log(`${index}被点击,内容是${chess}`);
                this.map[Math.floor(index/3)][index%3]=chess;
                this.num=this.num+1;
                //判断胜利
                this.win();
                //判断GameOVER
                console.log("第"+this.num+"被点击");
                if(this.num===9 && this.result===false){
                    this.gameOver=true;
                    this.num=0;
                }
                // if(this.result) {
                //     console.log(this.$refs.index);
                //     var rcells = [];
                //     for(var i=0;i<this.map.length;i++){
                //         var children = this.map[i];
                //         for(var j=0;j<children.length;j++){
                //             console.log(this.value, children[i], i, j)
                //             if(children[j] === this.value){
                //                 console.log(children[j], this.getIndex(j,i))
                //                 rcells.push(this.getIndex(j,i));
                //             }
                //         }
                //     }
                //     this.winCells = rcells;
                // }
            },
            //当数字连线成功，将当前Dom格子加上样式
            cellClasses(index) {
                return {"active": this.winCells.indexOf(index) >= 0};
            },
            //将二维数组转换成一维标记
            getIndex(h, s) {
                return h+s*3;//转换公式
            },
            win(){
                let map=this.map;
                for(let i=0; i<=2;i++){
                    if( map[i][0]!==null && map[i][0]!=="" &&
                        map[i][0]===map[i][1] &&
                        map[i][1]===map[i][2]){
                        this.result=true;
                        /*this.value = map[i][0];*///获取到当前胜利方值
                        let rcells = [];
                        for(let j=0; j<=2;j++){//将获取赢方二维数对应格子序号
                            rcells.push(this.getIndex(j,i));
                        }
                        this.winCells = rcells;
                        console.log("-------------",  this.winCells, this.value)
                    }
                }
                for(let j=0; j<=2;j++){
                    if(
                        map[0][j]!==null&&map[0][j]!==""&&
                        map[0][j]===map[1][j]&&
                        map[1][j]===map[2][j]){
                        this.result=true;//显示成功提示
                      /*  this.value = map[0][j];*/
                        let rcells = [];
                        for(let i=0; i<=2;i++){//将获取赢方二维数对应格子序号
                            rcells.push(this.getIndex(j,i));
                        }
                        this.winCells = rcells;
                        console.log("-------------",  this.winCells, this.value)
                    }
                }
                for(let i=0; i<=2;i++){
                    if(
                        map[i][i]!==null&&map[i][i]!==""&&
                        map[0][0]===map[1][1]&&
                        map[1][1]===map[2][2]){
                        this.result=true;
                      /*  this.value = map[0][0];*/
                        let rcells = [0,4,8];
                        this.winCells = rcells;
                        console.log("-------------",  this.winCells, this.value)
                    }
                }
                for(let i=0; i<=2;i++){
                    if(
                        map[0][2]!==null&&map[0][2]!==""&&
                        map[0][2]===map[1][1]&&
                        map[1][1]===map[2][0]){
                        this.result=true;
                       /* this.value = map[0][2];*/
                        let rcells = [2,4,6];
                        this.winCells = rcells;
                        console.log("-------------",  this.winCells, this.value)

                    }
                }

            },
            onClickClear() {
                this.num=0;
                for(let i=0;i<=2;i++){
                    for(let j=0;j<=2;j++){
                        for(let i=0;i<this.$children.length;i++){
                            this.$children[i].$data.chess="";
                        }
                        this.result = false;
                        this.gameOver=false;
                        this.$set(this.map[i], j,this.$children[i].$data.chess);
                        this.winCells=[];
                    }
                }
            }
        }
    }
</script>


<style>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
    .chess-box li.active{
        background: rgba(255, 255, 255, 0.9);
    }
    .time{font-size: 18px;text-align: center; display: block;padding-top:20px;}
</style>
