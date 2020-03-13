<template>
<button :class="classes" class="we-button" @click="$emit(`click`)">
    <we-icon v-if="iconName" :name="iconName"></we-icon>
    <span class="we-button-cont"><slot></slot></span>
</button>
</template>

<script>
    import WeIcon from '../components/icon'
    export default {
        name:'WeButton',
        components:{ WeIcon },
        props:{
            iconName:{},
            btnStyle:{
                type: String,
                default: ''
            },
            disabled:{
                type:String,
                default:''
            },
            btnSize:{
                type: String,
                default: ''
            },
            iconPosition:{
                type: String,
                default:''
            }
            },
        computed:{
            classes(){
                return[
                    this.btnStyle===''?'':`we-button--${(this.btnStyle)}`,
                    this.iconPosition ==='' ? '':`icon-${this.iconPosition}`,
                    this.btnSize ==='' ? '':`we-button--size-${this.btnSize}`,
                    this.disabled ==='' ? '':`${this.disabled}`,
                ]
            }
        }
    }

</script>

<style scoped>
    /* 按钮-基础 */
    .we-button{line-height:24px;padding:0 20px;font-size:12px;color:#333;border-style:solid;border-width:1px;border-radius:26px;text-align:center;cursor:pointer;}
    .we-button:hover{color:#333;}

    /* 按钮默认样式 */
    .we-button--default{border-color:rgba(164,164,164,1)}
    .we-button--default:hover{background-color:rgba(164,164,164,0.12);}
    /* 按钮默认样式 */
    .we-button--primary{border-color:#faab00;background:rgba(255,200,0,0.5);}
    .we-button--primary:hover{background:#ffc800;}


    /*禁用*/
    .we-button.disabled{color:#adadad;border-color:#eee;background-color: #eee;cursor:default;}
    .we-button--default.disabled{border-color:rgba(164,164,164,0.3);background-color: rgba(0,0,0,0);}
    .we-button--primary.disabled{border-color:#f2e2c0;background:#f2ecd8;}

    /*尺寸*/
    .we-button--size-m{line-height: 30px;}
    .we-button--size-l{line-height: 34px;}
    .we-button--size-full{line-height:34px;width: 100%}

    .svg-icon{ width:16px;height:16px; vertical-align: middle;}
    .we-button{
        display: inline-flex; justify-content: center; align-items: center;}
    .we-button.icon-left .we-button-cont{order: 2;}
    .we-button.icon-left .svg-icon{order: 1; margin-right:5px;}
    .we-button.icon-right .we-button-cont {order: 1;}
    .we-button.icon-right .svg-icon {order: 2; margin-left:5px;}
</style>
