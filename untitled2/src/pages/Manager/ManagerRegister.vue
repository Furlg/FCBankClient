<!--管理员主页-->
<template>
    <div class="manager-main">

        <el-container>
            <el-header>Header</el-header>
            <el-main>
                <el-form label-position="right" ref="form" :model="form" label-width="160px" size="small" >

                    <el-form-item label="用户名">
                        <el-input v-model="form.userName"></el-input>
                    </el-form-item>

                    <el-form-item label="手机号">
                        <el-input v-model="form.phoneNumber"></el-input>
                    </el-form-item>

                    <el-form-item label="邮箱">
                        <el-input v-model="form.email"></el-input>
                    </el-form-item>

                    <el-form-item label="管理员角色">
                        <el-radio v-model="form.managerRole" label="0">超级管理员</el-radio>
                        <el-radio v-model="form.managerRole" label="1">区域管理员</el-radio>
                        <el-radio v-model="form.managerRole" label="3">普通管理员</el-radio>
                    </el-form-item>

                    <el-form-item label="是否立即启用">
                        <el-radio v-model="form.active" label="0">是</el-radio>
                        <el-radio v-model="form.active" label="1">否</el-radio>
                    </el-form-item>

                    <el-form-item label="密码">
                        <el-input v-model="form.managerPassword" show-password></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="onSubmit()">注册</el-button>
                        <el-button  @click="onCancel()">取消</el-button>
                    </el-form-item>
                </el-form>
            </el-main>
        </el-container>

    </div>
</template>

<script>
    export default {
        name: "ManagerRegister",
        data(){
            return{

                //form表单字典
                form:{

                    /**用户名**/
                    name:'',

                    /**手机号**/
                    phoneNumber:'',

                    /**邮箱**/
                    email:'',

                    /**管理员角色**/
                    managerRole:'',

                    /**是否立即生效**/
                    active:'',

                    /**密码**/
                    managerPassword:'',

                }


            }
        },

        methods:{

            //返回登录界面
            onCancel(){
                this.$router.push({
                    path:'/'
                })
            },

            //注册
            async  onSubmit(){
                let submitData = new Object();
                submitData.managerName     = this.form.userName;
                submitData.phoneNumber     = this.form.phoneNumber;
                submitData.email           = this.form.email;
                submitData.managerRole     = this.form.managerRole;
                submitData.active          = this.form.active;
                submitData.managerPassword = this.form.managerPassword;

                let result = await this.ServiceName.sendPost("T001","I01",submitData);
                if (result.success){
                    this.$router.push({
                        path:'/LogIn'
                    })
                }else {
                    console.error("交易失败")
                }

            }
        }
    }
</script>

<style lang="less" scoped>
    .manager-main{
        background-color: honeydew;

        .el-main{
            width: 51%;
            margin-left: 20%;
        }
    }
</style>