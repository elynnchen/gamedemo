<template>
    <div class="weui-demo">
        <div class="box">
            <h1>Popover</h1>
            <we-popover >
                <template v-slot:content >
                    我是TIPS内容
                </template>
                <button>点我弹出提示</button>
            </we-popover>

        </div>
    </div>
</template>

<script>
    import WePopover from '../components/popover-01'
    export default {
        name: '',
        components: {
            WePopover,
        },
        data() {
            return {

            }
        },
        methods: {

        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .weui-demo{padding:20px;}
    .demo-p{ margin-bottom: 20px;}
    .demo-p h3{padding:10px 0;}
    .box{min-height: 100px;}
    button{background: #f1f1f1;padding:3px;border:1px solid #ccc;}
  /*  .we-popover-group{overflow: hidden}*/
    .box h1{margin-top:30px;font-size: 18px; display: block;}

</style>
