
<template>
<div>
  {{n}}
<div class="content clearfix">
     <cell v-for="(item,index) in 9"
           :key="index"
           :class="cellClasses(index)"
           @click="onClickCell(index,$event)"
           :n='n'
           ref="index"
     ></cell>
  </div>
    <div class="option">
        <button @click="onClickClear()">再来一次</button>
        <div>{{map}}</div>
        <div>{{result}}</div>
    </div>
    <div class="popox" v-if="result">
        <div>win</div>
        <p>恭喜{{value}}胜利</p>
    </div>
    <div v-if="gameOver">
        <p>gameover</p>
    </div>

</div>
</template>


<script>
import cell from '../../components/cellStep/cellnew'
export default {
  name: 'app',
  components: { cell },
  data(){
    return{
      n:0,
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

    },
  methods:{
    onClickCell(index, chess){//i表示序号，被点击，但不知道是X还是O，子组件需Emit内容出来
        console.log(`${index}被点击,内容是${chess}`);
        this.map[Math.floor(index/3)][index%3]=chess;
        this.n=this.n+1;
        //判断胜利
        this.win();
        //判断GameOVER
        console.log("第"+this.n+"被点击");
        if(this.n===9 && this.result===false){
            this.gameOver=true;
            this.n=0;

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
      getIndex(i, j) {
        return i+j*3;//转换公式
      },
      win(){
          let map=this.map;
          for(let i=0; i<=2;i++){
              if( map[i][0]!==null && map[i][0]!=="" &&
                  map[i][0]===map[i][1] &&
                  map[i][1]===map[i][2]){
                  this.result=true;
                  this.value = map[i][0];//获取到当前胜利方值
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
                  this.result=true;
                  this.value = map[0][j];
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
                  this.value = map[0][0];
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
                  this.value = map[0][2];
                  let rcells = [2,4,6];
                  this.winCells = rcells;
                  console.log("-------------",  this.winCells, this.value)

              }
          }

          //判断GameOver
 /*         for(let i=0; i<=2;i++){//将获取赢方二维数对应格子序号
              for(let j=0; j<=2;j++){

              this.getIndex(j,i);
                  console.log("cellsNum长度", this.getIndex(j,i));
              }
              this.cellsNum.push();
              console.log("cellsNum长度",this.cellsNum.length);
          }*/



      },
      onClickClear() {
          this.n=0;
          for(let i=0;i<=2;i++){
              for(let j=0;j<=2;j++){
                  for(let i=0;i<this.$children.length;i++){
                      this.$children[i].$data.chess="";
                  }
                  this.result = false;
                  this.$set(this.map[i], j,this.$children[i].$data.chess);
                  this.winCells=[];
              }
          }
      }
  }
}
</script>


<style>
.content{
    width:305px;
    display: block;
    margin:0 auto;
}
.option{
    text-align: center;
}
.clearfix:after{/*伪元素是行内元素 正常浏览器清除浮动方法*/
    content: "";
    display: block;
    height: 0;
    clear:both;
    visibility: hidden;
}
.clearfix{
    *zoom: 1;/*ie6清除浮动的方式 *号只有IE6-IE7执行，其他浏览器不执行*/
}

 .active{
      background: #ccc;
    }
</style>
