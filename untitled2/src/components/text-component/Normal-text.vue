<!--
    @auth 沙建斌 A-8626
    @date 2021-11-21
    @version 1.0
    @description 普通的Input组件
-->
<template>
    <div></div>
</template>

<script>
    export default {
        name: "Normal-text",
        
        //父组件传递过来的参数
        props:{
            
            //input框名称
            name:{
                type:String,
                default:''
            },
            
            //input框长度
            length:{
                type: Number,
                default: 8
            },
            
            
        },
        
        data() {

            //return定义的是vue组件内的变量名称
            return {};
        },

        mounted() {
            alert("这里是子组件进行的弹框展示")
        }

    }
</script>

<style scoped>

</style>