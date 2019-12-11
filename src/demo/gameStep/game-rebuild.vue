<template>
<div class="container">
    <div class="cont">
        <div class="chess-box">
        <ul >
            <li><div class=""></div></li>
            <li><div class="chess-B"></div></li>
            <li><div class="chess-A"></div></li>
            <li><div class="chess-B"></div></li>
            <li><div class="chess-A"></div></li>
            <li><div class="chess-B"></div></li>
            <li><div class="chess-A"></div></li>
            <li><div class="chess-B"></div></li>
            <li><div class="chess-A"></div></li>
        </ul>
            <div class="win"  v-show="result"  >
                <img src="../../assets/win.png">
            </div>
            <div class="gameover" v-if="gameOver">
                <img src="../../assets/gameover1.png">
            </div>
        </div>
        <button class="btn-again"></button>
    </div>
    <div class="bottom">
        <img src="../../assets/bottom.png">
    </div>
</div>
</template>
<script>
    import "../../assets/chees.css"
    export default {
        name: 'app',

    }
</script>
<style >

</style>
