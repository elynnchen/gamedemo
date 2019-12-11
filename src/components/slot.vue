<template>
    <div>
        <slot>我是默认值</slot>
        <slot name="todo">我是有名字的</slot>
        <slot name="todo1" :user="user" :test="test">
            {{ user.lastName }}
        </slot>
    </div>

</template>

<script>

    export default {
        name: 'slot',
        props:{

        },
        data() {
            return {
                user:{
                    lastName:"Zhang",
                    firstName:"yue"
                },
                test:[1,2,3,4]
            }
        },
    }
</script>
<style>

</style>
