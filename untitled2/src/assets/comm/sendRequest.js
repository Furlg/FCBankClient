import axios from "axios";
export default {

    //发送post请求
   async sendPost(serviceCode,scene,data){

        //BaseUrl,Axios内的url为BaseUrl+/+服务码+/场景码
        const  BaseUrl ='http://localhost:9090/';

        //渠道号
        const  ChannelCode ='TE';

        //返回体
         var Postresponse = new Object();
       await axios({
            method:'post',
            url:BaseUrl+serviceCode+'/'+scene,
            data:data,
            headers:{
                'ServiceCode':serviceCode,
                'SceneCode':scene,
                'ChannelCode':ChannelCode
            }})
            .then(function (response) {

                if(response.data.code == "000000" || response.data.code.equal("000000")){

                        Postresponse.success = true,
                        Postresponse.body = response.data.body

                }else {
                        Postresponse.success =false;
                        Postresponse.body =null;
                }

            })
            .catch(function (error) {
                console.log(error);
            });

            return Postresponse;
    }
}