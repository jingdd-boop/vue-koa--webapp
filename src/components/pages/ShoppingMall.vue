<template>
  <div>
    <div class="search-bar">
      <van-row>
      <van-col span="3">
        <img :src="locationIcon" width="80%" class="loaction-icon">
      </van-col>
      <van-col span="16">
        <input type="text" class="search-input">
      </van-col>
      <van-col span="5">
        <img :src="searchIcon" width="40%" class="search-icon">
      </van-col>
    </van-row>
    </div>
    <!-- swiper -->
    <div class="swier-area">
      <van-swipe :autoplay="1000">
        <van-swipe-item v-for="(banner, index) in bannerPicArray" :key="index">
          <img v-lazy="banner.imageUrl" width="100%" height="100%"/>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'shopping mall',
        locationIcon:require('../../assets/images/location.png'),
        searchIcon:require('../../assets/images/search.png'),
        bannerPicArray:[
              {imageUrl:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3605435051,4282311128&fm=26&gp=0.jpg'},
              {imageUrl:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3647426405,3317636312&fm=26&gp=0.jpg'},
              {imageUrl:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3061278420,1580159419&fm=26&gp=0.jpg'},
        ]
      }
    },
  }
</script>

<style  scoped>
  .search-bar{
    height: 2.2rem;
    background-color: #FFD700;
    line-height: 2.2rem;
    overflow: hidden;
  }
  .search-input{
    width: 100%;
    height: 1.3rem;
    /* border-top: 0px;
    border-left: 0px;
    border-right: 0px; */
    border: 1px solid #fff !important;
    border-radius: 8px;
    color: #fff;
  }
  .loaction-icon{
    padding-top: .2rem;
    padding-left: .3rem;
  }
  .search-icon{
    padding-top: .2rem;
    padding-left: 1.3rem;
  }
  .swier-area{
    clear: both;
    max-height: 12rem;
    overflow: hidden;
  }
 
  

</style>