<!--管理员主页-->
<template>
    <div class="manager-main">
            <!--容器-->
        <el-container class="el-container">

            <el-aside >

                <el-menu
                        class="el-menu"
                        text-color="#fff"
                        active-text-color="#ffd04b"
                        background-color="#145c64"
                        default-active="1-1"
                        :unique-opened='true'
                        @select="menuOpenPath"
                >

                    <el-submenu index="1">
                        <template slot="title" >用户中心</template>
                        <el-menu-item index="1-1">
                            <i class="el-icon-user-solid">{{managerInfo.managerName}}</i>
                        </el-menu-item>

                        <el-menu-item index="1-2">
                            <i class="el-icon-phone-outline">{{managerInfo.phoneNumber}}</i>
                        </el-menu-item>

                        <el-menu-item index="1-3">
                            <i class="el-icon-message">{{managerInfo.email}}</i>
                        </el-menu-item>
                    </el-submenu>

                    <!--会员管理-->
                    <el-submenu index="2">
                        <template slot="title">会员管理</template>
                        <el-menu-item index="2-1">会员查询</el-menu-item>
                        <el-menu-item index="2-2">会员新增</el-menu-item>
                        <el-menu-item index="2-3">会员修改</el-menu-item>
                        <el-menu-item index="2-4">会员删除</el-menu-item>
                    </el-submenu>

                </el-menu>

            </el-aside>

            <el-main>
                <div class="Customer_query" v-if = "main_Hidden.key_path === '2,2-1'">
                    <el-input prefix-icon="el-icon-search" placeholder="请输入用户名称" v-model="Customer.SearchContent" @blur="selectCustomerByName()"/>
                    <el-divider></el-divider>
                    <el-table :data="Customer.tableData" height="300px" border>
                        <el-table-column prop="customerId" label="客户编号"  width="100px"/>
                        <el-table-column prop="customerName" label="客户名称"  width="100px"/>
                        <el-table-column prop="customerPhone" label="手机号"  width="100px"/>
                        <el-table-column prop="customerEmail" label="邮箱"  width="150px"/>

                    </el-table>
                </div>

                <div class="Customer_Insert" v-if = "main_Hidden.key_path === '2,2-2'">
                    新增时
                </div>

                <div class="Customer_Delete" v-if = "main_Hidden.key_path === '2,2-3'">
                    删除时
                </div>

                <div class="Customer_Update" v-if = "main_Hidden.key_path === '2,2-4'">
                    更新时
                </div>

            </el-main>

        </el-container>
    </div>
</template>

<script>
    export default {
        name: "ManagerHome",
        data(){
            return{
                managerInfo:{

                    //管理员编号
                    managerId:'',

                    //管理员姓名
                    managerName:'',

                    //手机号
                    phoneNumber:'',

                    //邮箱
                    email:'',

                    //管理员角色
                    managerRole:'',

                    //是否有效
                    active:''
                },

                Customer:{
                    SearchContent:'',
                    tableData:[
                        {customerId:14001214,customerName:'啥安保',customerPhone:'13639572915',customerEmail:'14525@163.com'},
                        {customerId:14001214,customerName:'啥安保',customerPhone:'13639572915',customerEmail:'14525@163.com'},
                        {customerId:14001214,customerName:'啥安保',customerPhone:'13639572915',customerEmail:'14525@163.com'},
                        {customerId:14001214,customerName:'啥安保',customerPhone:'13639572915',customerEmail:'14525@163.com'},
                        {customerId:14001214,customerName:'啥安保',customerPhone:'13639572915',customerEmail:'14525@163.com'},
                        {customerId:14001214,customerName:'啥安保',customerPhone:'13639572915',customerEmail:'14525@163.com'},
                        {customerId:14001214,customerName:'啥安保',customerPhone:'13639572915',customerEmail:'14525@163.com'},
                        {customerId:14001214,customerName:'啥安保',customerPhone:'13639572915',customerEmail:'14525@163.com'},
                        {customerId:14001214,customerName:'啥安保',customerPhone:'13639572915',customerEmail:'14525@163.com'},
                        {customerId:14001214,customerName:'啥安保',customerPhone:'13639572915',customerEmail:'14525@163.com'}
                    ],
                },
                //控制select,insert,update,delete时是否可以
                main_Hidden:{
                    key_path:''
                },
            }
        },



        async mounted(){
            //获取管理员信息
            let queryData = new Object();
            queryData.managerId = this.$route.query.managerId;

            let result = await this.ServiceName.sendPost("T001","Q02",queryData);
            if (result.success){
                this.managerInfo.managerId   = result.body.managerId;
                this.managerInfo.managerName = result.body.managerName;
                this.managerInfo.email       = result.body.email;
                this.managerInfo.phoneNumber = result.body.phoneNumber;
                this.managerInfo.active      = result.body.active;
            }
        },

        methods:{
            //打开指定的菜单
            menuOpenPath(key,keyPath){

                let subMenu_Item    = ['2,2-1','2,2-2','2,2-3','2,2-4'];
                let i =0;
                for (i;i<subMenu_Item.length;i++){
                    if (subMenu_Item[i] == keyPath){
                            this.main_Hidden.key_path = subMenu_Item[i]
                    }
                }


            },

            async selectCustomerByName(){


            }
        }
    }
</script>

<style lang="less" scoped>
.manager-main{
    height: 100%;
    .el-container{
        height: 100%;
        .el-aside{
            width: 112px;
            height: 100%;
            .el-menu{
                height: 100%;
            }
        }
    }
}
</style>