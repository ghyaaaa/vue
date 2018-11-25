<template>
    <div class="container">
    <!----> 
    <section class="content ">
        <ul class="list textC">
            <li v-for="goods in goodlist" :key="goods.id">
                <div class="wtj-pic">
                    <a href="#">
                        <div class="picWrop">
                            <img src="../../assets/images/wtj/094217_684050.jpg"  alt="#">
                        </div>
                    </a>
                    <a href="#">
                        <i class="bg photo">
                            <img src="../../assets/images/wtj/155643_197803.png" alt="#">
                        </i>
                    </a>
                </div>
            <!--文字-->
                <div class="w92">
                    <h2 class="wtj-name">
                        <span>{{goods.goodname}}</span>
                    </h2>
                    <a href="#">
                        <p class="wtj-title">{{goods.goodtitle}}</p>
                        <p class="description h50">{{goodp}}</p>
                    </a>
                </div>
            </li>
        </ul>

    </section>
     </div>
</template>
<script>
    import {Toast} from "mint-ui"

    export default{
        data(){
            return {
                goodlist:[
                    {   
                        id:1,
                      
                        goodname:'圆圆',
                        goodtitle:'上洗手间记得带手机，自拍high不停！',
                        goodp:'超吸粉的设计，一心想打掉自家洗手间重新装修'
                    },
                    {
                        id:2,
        
                        goodname:'圆圆',
                        goodtitle:'上洗手间记得带手机，自拍high不停！',
                        goodp:'超吸粉的设计，一心想打掉自家洗手间重新装修'
                    },

                ]
            }
        },
        methods:{}
    }
</script>   
<style scoped>
.container{
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0px;
    width: 100%;
    height: auto;
    z-index: 2;
    overflow: auto;
    background: #fff;
    transform: translate3d(0, 0, 0);
}
.content{
    position: absolute;
    left: 0;
    top: 60px;
    width: 100%;
    bottom: 0;
    z-index: 1;
    overflow: auto;
}
.textC {
    text-align: center;
}
.wtj-pic {
    position: relative;
    padding: 0 0 30px 0;
    overflow: hidden;
}
.picWrop {
    position: relative;
    padding-bottom: 100%;
    border: 1px solid #f0f0f0;
    font-size: 0;
}
.picWrop > img {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
}
img {
    border: 0;
    width: 100%;
}
photo {
    border: 1px solid #f0f0f0;
    border-radius: 999px;
    background: #fff;
    background-clip: padding-box;
    display: inline-block;
    overflow: hidden;
}
.wtj-pic .photo {
    width: 60px;
    height: 60px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -30px;
    z-index: 2;
}
.photo img {
    border-radius: 999px;
}
.wtj-name {
    padding: 20px 0 25px 0;
    font-size: 1.1rem;
}
.wtj-title {
    padding: 0 15% 15px 15%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #333;
    font-size:1.1rem;
}
.description {
    line-height: 25px;
    text-align: justify;
    margin-bottom: 1rem;
}
/**/
</style>