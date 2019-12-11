<template>
    <div class="we-popover-group"  ref="popover">
    <!--@click="onclick"-->
    <div ref="popcontwarp"
         class="we-popover"
         :class="{[`we-popover--${position}`]:true}"
         v-if="visible">
        <div class="we-popover-cont">
            <slot name="content" ></slot></div>
    </div>
    <div ref="anthor">
        <slot></slot></div>
</div>
</template>

<script>
export default {
    name: 'WePopover',
    data(){
        return{
            visible:true,
        }
    },
    props:{

    }

}
</script>
<style>
    .we-popover-group{position:relative;margin-top:100px;}
    .we-popover {
        position: absolute;
        padding: 10px 15px 10px 15px;
        border: 1px solid #b2b2b2;
        background: #fff;
        box-shadow: 0 3px 7px -3px rgba(0, 0, 0, 0.2), 0 4px 8px -4px rgba(0, 0, 0, 0.2);
        border-radius: 4px;


    }
    .we-popover-cont {
        color: #333;
        font-size: 12px;
        text-align: left;
    }
    /*默认向下显示箭头*/
    .we-popover:after{content:"";position:absolute;/*top:-12px;left:9px;*/width:30px;height:12px;background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAMCAYAAAB1Lg0yAAABzklEQVQ4T62TMWjCUBCGL5pChQoqAeMm6NAuDi6SwaFb966WCEKtU+kiLXRwKC24lC5SC4K2rt27dXCQTIJLOyi4GSGoYCFDY1Iu5MkzjSaFPjheQt677+7/LwwAMADgAwA/RrVaPUgkEhWWZQ8ZhtmLx+OQTCYhEAiA16WqKgwGAxiNRmAYxpemae/D4bBSLpc/AGCJgVA6EE6KYLGQdrt9kUqlrrGAYDDoyl4sFiaw3+/f5HK5ewukWbsOAGYgFBcNRzAJU4VWq3UWDofvstksEwqFNsLn8zl0Oh1jNptdiaL4SLojMGs3AMAgYAKni6DhbLPZPIlEIg+CIPg5jvsFVxQFut3ucjqdnufz+RcAsHdpAq2La2CSjFZhDd5oNI45jnvKZDI70Wh0BZ9MJiBJ0reiKKeFQuF1AxTPE7Ap8aZFvhE4es7W6/Ujnuef0+n0Ls/zMB6PodfrqbIsi8Vi8c2CYrfEzzWgvTuvcNPzWq0mxGKxW5/Pt6/r+qcsy5elUkly8NQRSvvqNq3kl8OdTD4ZSOIddoi/Cr7j80pWp+TbpLaft08+fZeG0UPk6qNbx06DZwevJtZLsr90TOdzurdVWif5vBT472d+ACCipRMCyz2NAAAAAElFTkSuQmCC');/*-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);-moz-transform:rotate(180deg);transform:rotate(180deg);*/}



    /*无箭头*/
    .we-popover--noarrow:after{display: none;}


    .we-popover--top-left{left: 0;transform:translateY(-100%) ; margin-top:-10px; }
    .we-popover--top-left:after{left:0;}
    .we-popover--top-right{right: 0;bottom: 100%;margin-bottom: 12px;}
    .we-popover--top-center{left: 50%;bottom: 100%;margin-bottom:12px;transform:translate3d(-50%,0,0);}
    .we-popover--top-left:after,
    .we-popover--top-center:after,
    .we-popover--top-right:after{bottom: -12px; }
    .we-popover--top-center:after{left: 50%;margin-left: -15px;}
    .we-popover--top-right:after{right: 10px;}

    .we-popover--bottom-left{margin-top: 12px;}
    .we-popover--bottom-left:after{left:0;}
    .we-popover--bottom-center{left:50%;top:100%;margin-top: 12px;transform:translate3d(-50%,0,0);}
    .we-popover--bottom-right{right:0;top:100%;margin-top: 12px;}
    .we-popover--bottom-left:after,
    .we-popover--bottom-center:after,
    .we-popover--bottom-right:after{top: -12px;transform:rotate(180deg);}
    .we-popover--bottom-center:after{left: 50%;margin-left: -15px;}
    .we-popover--bottom-right:after{right: 10px;}


    .we-popover--left-top{margin-left: -8px; transform:translateX(-100%) ;}
    .we-popover--left-center{right: 100%;top:50%;margin-right: 12px;transform:translate3d(0,-50%,0);}
    .we-popover--left-bottom{right: 100%;bottom: 0;margin-right: 12px;}
    .we-popover--left-top:after,
    .we-popover--left-center:after,
    .we-popover--left-bottom:after{transform:rotate(-90deg);right:-21px;}
    .we-popover--left-top:after{top:12px;}
    .we-popover--left-center:after{top: 50%;margin-top: -7px;}
    .we-popover--left-bottom:after{bottom: 12px;}

    .we-popover--right-top{margin-left:8px;}
    .we-popover--right-center{left: 100%;top:50%;margin-left:12px;transform:translate3d(0,-50%,0);}
    .we-popover--right-bottom{left: 100%;bottom: 0;margin-left:12px;}
    .we-popover--right-top:after,
    .we-popover--right-center:after,
    .we-popover--right-bottom:after{transform:rotate(90deg);left:-21px;}
    .we-popover--right-top:after{top:12px;}
    .we-popover--right-center:after{top: 50%;margin-top: -7px;}
    .we-popover--right-bottom:after{bottom: 12px;}

</style>
