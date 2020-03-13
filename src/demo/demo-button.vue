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


    </div>

</template>

<script>
    import WeButton from '../components/button'
    export default {
        name: '',
        components: {
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
    .weui-demo{padding:20px;}
    .demo-p{ margin-bottom: 20px;}
    .demo-p h3{padding:10px 0;}
    .box{min-height: 100px;}
    button{background: #f1f1f1;padding:3px;border:1px solid #ccc;}
    .we-popover-group{display: inline-block;}
    h1{margin-top:30px;font-size: 18px; display: inline-block}
</style>
