<template>
  <div id="app">
  <!--头部样式--> 
    <header class="head">
      <div class="drawer">
        <a class="bg mui-icon mui-action-menu mui-icon-bars" href="#"></a>
      </div>
      <div class="filter">
        <a class="bg shop-cart" href="#"></a>
        <a class="bg login" href="#"></a>
        <a>
          <i class="bg"></i>
        </a>
      </div>
    </header>
    <!--侧滑显示-->
    

  <!--路由显示其他模块-->
    <router-view></router-view>
  </div>
</template>
<script src="../js/mui.min.js"></script>
<script>
import {Toast} from 'mint-ui'

export default {
  name: 'App',
  data(){
    return {
      top:0
    }
  },
  methods:{
    scrollTop(){
      this.top = document.body.scrollTop;
    },
    gotop(){
      document.body.scrollTop = 0
    }
  }

}

</script>

<style>
*{
  margin:0;
  padding:0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
*{
  box-sizing:border-box;
}

div{
  display:block;
}

body {
    background: #fff;
    font-size: 1.4rem;
    font-family: Helvetica,sans-serif;
    color: #999;
}
a{
  color:inherit;
  text-decoration:none;
}
input{
  outline:none;
}
/*头部*/
#app{
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
}
.head{
  height:60px;
  position:relative;
  overflow:hidden;
  box-sizing:border-box;
  font-size:0;
  border-bottom:1px solid #f0f0f0;
  display:-webkit-box;
}
.drawer, .filter {
  display:block;
  width:50%;
  padding:0 4%;
  box-sizing:border-box;
}
.bg{
  background:url("./assets/images/wtj/bg.png");
  background-size: 118px 533px;
}
.drawer>a{
  background-position:0 -70px;
  display:inline-block;
  width:25px;
  height:25px;
  margin:20px 0 0 0;
}
.filter{
  text-align: right;
  display:block;
  width:50%;
  padding:0 4%;
  box-sizing:border-box;
}
.filter .shop-cart {
  background-position: -68px -307px;
  position: relative;
}
.filter > a {
  float:right;
  display:inline-block;
  width:25px;
  height:25px;
  margin:20px 0 0 0;
}
.filter .login {
    background-position: 0 -307px;
    margin-right: 25px;
}
.head i {
    display: inline-block;
    width: 70px;
    height: 25px;
    background-position: 0 0;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
}
/*侧滑样式*/
.menus {
    position: fixed;
    top: 15px;
    left: 4%;
    background: #000;
    color: #fff;
    z-index: 100;
    overflow: hidden;
    padding: 0 0 30px 0;
    border-radius: 3px;
}
.w92{
  width:92%;
  margin:0 auto;
}
.textC{
  text-align:center;
}
.closed {
    height: 30px;
    position: relative;
}
.closed-btn {
    display: inline-block;
    position: absolute;
    right: 5px;
    width: 28px;
    height: 28px;
    background-position: 10px -185px;
}
.wtj{
  padding:20px 0;
}
.wtj a{
  display:block;
}
.wtj i {
    width: 100px;
    height: 30px;
    display: inline-block;
    background-position: 0 -30px;
}
</style>
