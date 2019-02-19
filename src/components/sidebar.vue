<template>
<div class="sid">
  <div class="close_but">
            <span>
              <img src="/src/assets/x.png" alt="">
            </span>
    <span></span>
    <span></span>
  </div>
  <img src="../assets/dog.png" alt="">
  <!--<div>-->
    <!--<img src="/src/assets/xx.png" alt="">-->
  <!--</div>-->
  <!--<div>-->
    <!--<img src="/src/assets/lxr.png" alt="">-->
  <!--</div>-->
</div>
</template>

<script>
    export default {
        name: "sid"
    }
</script>

<style scoped lang="less">
  .sid{
  .close_but{
    display: block !important;
    height: 50px;
  /*background: red;*/
  &>span:nth-of-type(1){
     width: 13px;
     height: 13px;
     background: #f56467;
     border-radius: 50%;
     display: inline-block;
     position: relative;
     cursor: pointer;
  &:hover >img{
     opacity: 1;
   }
  &>img{
     position: absolute;
     top: 55%;
     left: 50%;
     transform: translate(-50%,-50%);
     width: 10px;
     opacity: 0;
     /*transition: ease-in-out opacity 0.2s;*/
   }
  }
  &>span:nth-of-type(2){
     width: 13px;
     height: 13px;
     background: #f3c04b;
     border-radius: 50%;
     display: inline-block;
     position: relative;
     cursor: pointer;
     margin-left: 2px;
   }
  &>span:nth-of-type(3){
     width: 13px;
     height: 13px;
     background: #62c35a;
     border-radius: 50%;
     display: inline-block;
     position: relative;
     cursor: pointer;
     margin-left: 2px;
   }
  }
    &>img{
      width: 43px;
      height: 43px;
      border-radius: 3px;
      display: block;
      margin: 7px auto;
      cursor: pointer;
    }
  &>div{
     height: 60px;
     display: flex;
     justify-content: center;
     align-items: center;
  &>img{
     width: 30px;
     cursor: pointer;
   }
  }
  }
</style>
