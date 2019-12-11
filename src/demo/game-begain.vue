<template>
    <div class="begain">
        <div class="option">
        <we-button btn-style="primary" btn-size="l" @click="handleClick">开始</we-button>
        </div>
    </div>
</template>
<script>
    import WeButton from '../components/button'
    export default{
        name: 'begain',
        components: { WeButton },
    methods:{
        handleClick(){
            this.$router.push('/game/gameChees');

        }
    }
    }
</script>
<style>
    .begain{
        width:100%;
        height: 100%;
        background:url("../assets/index.jpg");
        background-size: cover;
        position: relative;

    }
    .option{ width:100%;text-align: center; position: absolute;top:70%;}
    .begain button{font-size: 16px;width:80%;  margin:0 auto; text-align: center;}

</style>