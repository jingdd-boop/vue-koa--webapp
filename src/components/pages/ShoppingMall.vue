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
          <img v-lazy="banner.image" width="96%" height="100%" class="img"/>
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
            <div>￥{{item.price | moneyFilter}}(￥{{item.mallPrice | moneyFilter}})</div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
   <floor-component :floorData="floor1" :floorTitle="floorName.floor1"></floor-component>
    <floor-component :floorData="floor2" :floorTitle="floorName.floor2"></floor-component>
     <floor-component :floorData="floor3" :floorTitle="floorName.floor3"></floor-component>
  <!--Hot Area-->
<div class="hot-area">
    <div class="hot-title">热卖商品</div>
    <div class="hot-goods">
      <!--这里需要一个list组件-->
      <van-list>
        <van-row gutter="20">
          <van-col span="12" v-for="(item,index) in hotGoods" :key="index">
              <goods-info :goodsImage="item.image" :goodsName="item.name" :goodsPrice="item.price"></goods-info>
          </van-col>
        </van-row>
      </van-list>
    </div>
</div>
  </div>
</template>

<script>
  import axios from 'axios'
  import 'swiper/swiper-bundle.css'
  import {Swiper,SwiperSlide} from 'vue-awesome-swiper'
  import floorComponent from '../component/floorComponent'
  import {toMoney} from '@/filter/moneyFilter.js'
  import goodsInfo from '../component/goodsInfoComponent' 
  import url from '@/serviceAPI.config.js'
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
        floor2:[],
        floor3:[],
        floorName:{},
        hotGoods:[],
       
      }
    },
    filters:{
      moneyFilter(money){
        return toMoney(money)
      }
    },
    components:{
      Swiper,
      SwiperSlide,
      floorComponent,
      goodsInfo,
     

    },
    created(){
      axios({
    url: url.getShoppingMallInfo,
    method: 'get',
    })
      .then(response => {
        console.log(response)
        if(response.status == 200){
          this.category = response.data.data.category;
          this.adBanner = response.data.data.advertesPicture.PICTURE_ADDRESS;
          this.bannerPicArray = response.data.data.slides;
          this.recommendGoods = response.data.data.recommend;
          this.floor1 = response.data.data.floor1;
          this.floor2 = response.data.data.floor2;
          this.floor3 = response.data.data.floor3;
          this.floorName = response.data.data.floorName;
          this.hotGoods = response.data.data.hotGoods;
          
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
    background-color: #46da9c;
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
     box-shadow: 5px 5px 10px #dfdfdc, 
             -5px -5px 10px #fffffe;
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
  .swiper-area .img{
  
   border-radius: 1.2rem;
   box-shadow: 5px 5px 10px #d3d3d1, 
             -5px -5px 10px #fafaf9;
   padding-left: .4rem;
  }
 .type-bar{
  
   margin: .3rem .3rem .3rem .3rem;
   border-radius: .3rem;
   font-size:14px;
   display:flex;
   flex-direction: row;
   flex-wrap: nowrap;
  box-shadow: 5px 5px 10px #dfdfdc, 
             -5px -5px 10px #fffffe;
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
   background-color: #46da9c;
   box-shadow: 5px 5px 10px #d3d3d1, 
             -5px -5px 10px #fafaf9;
 }
  .recommend-body{
    border-bottom: 1px solid rgb(233, 231, 229);
  }
  .recommend-item{
    width: 88%;
    border: 1px solid rgb(252, 252, 250);
    font-size: 12px;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    padding:.1rem .3rem;
    margin-top: .7rem;
    text-align: center;
    border-radius: 1.2rem;
    box-shadow: 5px 5px 10px #dfdfdc, 
             -5px -5px 10px #fffffe;
  }
  .hot-area{
      text-align: center;
      font-size:14px;
      height: 1.8rem;
      line-height:1.8rem;
  }
</style>