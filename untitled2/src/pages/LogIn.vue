<!--登录页-->
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
                <el-button type="primary" round size="medium"  @click="FormSubmit">登录</el-button>
                <el-link type="primary" @click="ManagerRegister">立即注册</el-link>
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
                            //跳转到ManageHome主页
                        this.$router.push({
                            path:'/ManagerHome',
                            query:{
                                managerId:this.form.userName
                            }
                        })
                }else {
                    this.$message.error("通讯返回失败,具体错误码等需要自己处理")
                }
            },

            //跳转到管理员注册
            ManagerRegister(){
                this.$router.push({
                    path:'/ManagerRegister'
                })
            },
        }
    }
</script>

<style lang="less" scoped>
.main{
    margin-top: 10%;
    width: 30%;
    margin-left: 30%;

    .el-button{
        margin-left: 20%;
    }
    .el-link{
        margin-left: 30px;
    }
}

</style>