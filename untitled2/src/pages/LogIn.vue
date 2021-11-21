<template>
    <div>
        {{msg}}
        <NormalText name="这里是name">
        </NormalText>
        <el-button round>
            圆角按钮
        </el-button>

        <el-input placeholder ="请输入内容">
            <template slot="prepend">Http://</template>
        </el-input>

        <el-checkbox>
            备选框1
        </el-checkbox>

        <el-checkbox>
            备选框2
        </el-checkbox>
    </div>
</template>

<script>
    import  NormalText from '@/components/text-component/Normal-text'
    export default {
        components: {NormalText},

        name: "LogIn",
        props:{
            msg:{
                type:String,
                default:''
            }
        }
    }
</script>

<style scoped>

</style>