<template>
    <div class="main">
        <!--form提交表单-->
        <el-form ref="form" :model="form" label-width="70px">

            <el-form-item label="用户名">
                <el-input v-model="form.userName"  size="=large" placeholder="用户名/邮箱/手机号"></el-input>
            </el-form-item>

            <el-form-item label="密码">
                <el-input v-model="form.userPassword"  size="=large" placeholder="请输入密码" show-password></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" round size="medium"  @click="FormSubmit">提交</el-button>
                <el-link type="primary">立即注册</el-link>
            </el-form-item>

        </el-form>
    </div>
</template>

<script>
    export default {

        data(){
            return{
                form:{
                    userName:'',
                    userPassword:'',
                }
            }
        },

        mounted(){},
        methods:{
          async FormSubmit() {

              let submitData = new Object();
                  submitData.managerId = this.form.userName;
                  submitData.password  = this.form.userPassword;

               let result = await this.ServiceName.sendPost('T001','Q01',submitData);
                if (result.success){
                            alert(result.body[0])
                }else {
                    this.$message.error("通讯返回失败,具体错误码等需要自己处理")
                }
            }
        }

    }
</script>

<style scoped>
.main{
    width: 30%;
    margin-left: 30%;
}
</style>