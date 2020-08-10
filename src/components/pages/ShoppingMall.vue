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
    <div class="swiper-area">
      <van-swipe :autoplay="1000">
        <van-swipe-item v-for="(banner, index) in bannerPicArray" :key="index">
          <img v-lazy="banner.image" width="100%" height="100%"/>
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- type bar -->
    <div class="type-bar">
      <div v-for="(cate,index) in category" :key="index">
        <img v-lazy="cate.image" width="90%">
        <span>{{cate.mallCategoryName}}</span>
      </div>
    </div>
  <!-- adbanner -->
  <div>
    <img v-lazy="adBanner" width="100%">
  </div>
  <!-- recommend goods -->
  <div class="recommend-area">
    <div class="recommend-title">
      商品推荐
    </div>
    <div class="recommend-body">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) in recommendGoods" :key="index">
          <div class="recommend-item">
            <img :src="item.image" width="80%">
            <div>{{item.goodsName}}</div>
            <div>￥{{item.price}}(￥{{item.mallPrice}})</div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
   <floor-component :floorData="floor1"></floor-component>
  </div>
</template>

<script>
  import axios from 'axios'
  import 'swiper/swiper-bundle.css'
  import {Swiper,SwiperSlide} from 'vue-awesome-swiper'
  import floorComponent from '../component/floorComponent'
  
  export default {
    data() {
      return {
        msg: 'shopping mall',
        locationIcon:require('../../assets/images/location.png'),
        searchIcon:require('../../assets/images/search.png'),
        bannerPicArray:[],
        category: [],
        adBanner:'',
        recommendGoods:[],
        swiperOption:{
          slidesPerView:3,
        },
        floor1:[],
       
      }
    },
    components:{
      Swiper,
      SwiperSlide,
      floorComponent
     

    },
    created(){
      axios({
        url:'https://easy-mock.sucaidaohang.com/mock/5f30a1e2eeda710d1440d546/vue-koa--webapp/index',
        method:'get',
      })
      .then(response => {
        console.log(response)
        if(response.status == 200){
          this.category = response.data.data.category;
          this.adBanner = response.data.data.advertesPicture.PICTURE_ADDRESS;
          this.bannerPicArray = response.data.data.slides;
          this.recommendGoods = response.data.data.recommend;
          this.floor1 = response.data.data.floor1;
          
        }
      })
      .catch(error => {
        console.log(error) 
      })
    }
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
  .swiper-area{
    clear: both;
    max-height: 12rem;
    overflow: hidden;
  }
 .type-bar{
   background-color: #fff;
   margin: .3rem .3rem .3rem .3rem;
   border-radius: .3rem;
   font-size:14px;
   display:flex;
   flex-direction: row;
   flex-wrap: nowrap;
 }
 .type-bar div{
   padding: .3rem;
   font-size: 12px;
   text-align: center;
 }
 .recommend-area{
   background-color: #fff;
   margin-top: .3rem;

 }
 .recommend-title{
   border: 1px solid #ddd;
   padding: .2rem;
   font-size: 14px;
   color: #33322c;
   border-radius: 1.2rem;
   background-color: #FFD700;
 }
  .recommend-body{
    border-bottom: 1px solid rgb(233, 231, 229);
  }
  .recommend-item{
    width: 88%;
    border: 1px solid rgb(238, 229, 153);
    font-size: 12px;
    padding:.1rem .3rem;
    margin-top: .7rem;
    text-align: center;
    border-radius: 1.2rem;

  }
  
</style>