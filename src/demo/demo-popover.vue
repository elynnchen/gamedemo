<template>
    <div class="weui-demo">
        <div class="box">
            <h1>Click出TIPS</h1>

            <!--父组件-->
            <we-popover position="top-left"  trigger="click">
                <template v-slot:content >
                    我是TIPS内容
                </template>
                <button>向上弹出Tips</button>
            </we-popover>


            <we-popover position="bottom-left" trigger="click" >
                <template v-slot:content>
                    我是TIPS内容
                </template>
                <button>向下弹出Tips</button>
            </we-popover>
            <we-popover position="left-top" trigger="click" >
                <template v-slot:content >
                    我是TIPS内容
                </template>
                <button>向左弹出Tips</button>
            </we-popover>
            <we-popover position="right-top" trigger="click" >
                <template v-slot:content >
                    我是TIPS内容
                </template>
                <button>向右弹出Tips</button>
            </we-popover>
        </div>



        <div class="box">
            <h1>Hover出TIPS</h1>
            <we-popover position="top-left" trigger="hover" >
                <template v-slot:content >
                    我是TIPS内容
                </template>
                <button>向上弹出Tips</button>
            </we-popover>
            <we-popover position="bottom-left" trigger="hover" >
                <template v-slot:content >
                    我是TIPS内容
                </template>
                <button>向下弹出Tips</button>
            </we-popover>
            <we-popover position="left-top" trigger="hover" >
                <template v-slot:content >
                    我是TIPS内容
                </template>
                <button>向左弹出Tips</button>
            </we-popover>
            <we-popover position="right-top" trigger="hover" >
                <template v-slot:content >
                    我是TIPS内容
                </template>
                <button>向右弹出Tips</button>
            </we-popover>
        </div>


    </div>

</template>

<script>

    import WePopover from '../components/popover'

    export default {
        name: '',
        components: {
            WePopover,

        },
        data() {
            return {
                message: 0,
            }
        },
        methods: {
            handleclick() {
                this.message++

            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .weui-demo{padding:20px;}
    .demo-p{ margin-bottom: 20px;}
    .demo-p h3{padding:10px 0;}
    .box{min-height: 100px;}
    button{background: #f1f1f1;padding:3px;border:1px solid #ccc; margin-right: 10px;}
    .we-popover-group{display: inline-block;}
    h1{margin-top:30px;font-size: 18px; display: block}
</style>
