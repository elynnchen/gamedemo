<template>
    <div class="user">
        <h2>个人中心</h2>
        <div class="ava" v-if="hasAva">
            <img src="../assets/Avatar.png">

        </div>
        <p >
            欢迎<span> {{userName}}</span>小伙伴！
        </p>

    </div>
</template>
<script>
    export default{
        name: 'user',
        data() {
          return {
              userName: "",
              hasAva:false,
          }
        },
        components: {  },
        mounted() {
            this.userName = this.$route.params.id || this.$route.query.id;
            if(this.$route.params.id || this.$route.query.id ){
                this.hasAva=true;
            }


        },
    }
</script>
<style >
    .user{
        width:100%;
        height: 100%;
        background: #81ddff;
        background-size: cover;
    }

    .user p{
        padding-top:30px;
        width: 100%;
        text-align: center;
        top:55%;
        font-size: 24px;
        color: #333333;
    }
    .user p span{
        color: #fff089;
    }
    .user .ava{width:200px; height:200px;display: block;margin:0 auto; margin-top:30px;}
    .user .ava img{width:100%;}
    .user h2{font-size: 26px;line-height: 48px; text-align: center;background: #fff;}
</style>