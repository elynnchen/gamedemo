<template>
    <div class="weui-demo">
                <div class="demo-p">
                    <h3>按钮基础样式</h3>
                    <we-button btn-style="primary" >主要按钮</we-button>
                    <we-button btn-style="primary" disabled >禁用主要按钮</we-button>
                    <we-button btn-style="default">默认按钮</we-button>
                    <we-button disabled="disabled" >禁用默认按钮</we-button>
                </div>
                <div class="demo-p">
                    <h3>按钮大小</h3>
                    <we-button btn-style="default" btn-size="s">小号按钮</we-button>
                    <we-button btn-style="default" btn-size="m">中号按钮</we-button>
                    <we-button btn-style="default" btn-size="l">大号按钮</we-button>

                </div>
                <div class="demo-p">
                    <h3>按钮加Icon</h3>
                    <we-button icon-name="icon-loding" >我有Icon</we-button>
                    <we-button icon-name="icon-loding" icon-position="left">icon在左边</we-button>
                    <we-button icon-name="icon-loding" icon-position="right">icon在右边</we-button>
                </div>
                <div class="demo-p">
                    <h3>按钮事件</h3>
                    <we-button btn-style="primary" btn-size="m" @click="handleclick">算数+1</we-button>
                    <p>{{message}}</p>
                </div>



        <div class="demo-p">
            <h3>PopOver-01</h3>
            <we-popover >
                <template v-slot:content >
                    我是TIPS内容
                </template>
                <button>向上弹出Tips</button>
            </we-popover>

        </div>




        <!-- <div class="demo-p">
             <h3>v-slot -&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;匿名</h3>
             <we-slot >
                 <template v-slot:default>
                     任意内容
                     <p>我是匿名插槽 </p>
                 </template>
             </we-slot>
             <h3>v-slot &#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;具名</h3>
             <we-slot >
                 <template v-slot:todo>
                     <p>我叫todo </p>
                 </template>
             </we-slot>

             <h3>v-slot &#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;做用域插槽</h3>
             <we-slot >
                 <template v-slot:todo1="slotProps">
                     <p>{{slotProps.user.firstName }}</p>
                 </template>
             </we-slot>
         </div>-->

    </div>

</template>

<script>
    import WeButton from '../components/button'
    import WePopover from '../components/popover-01'
    import WeSlot from '../components/slot'
    export default {
        name: '',
        components: {
            WeSlot,
            WePopover,
            WeButton
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
    .demo-p{ margin-bottom: 20px;}
    .demo-p h3{padding:10px 0;}
</style>
