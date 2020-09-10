# jspang

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
## 项目制作（移动商城）

### 一、项目搭建

 - Npm
 - Node
 - npm install vue-cli -g
 - vue init webpack
 - npm run dev

### 二、引入Vant样式组件库（全局）

 - ①npm i vant -S
 - ②src/main.js:

```javascript
import Vant from 'vant'//引入vant组件
import 'vant/lib/vant-css/index.css'//引入组件样式
Vue.use(Vant)//使用组件
```

 - ③在vue组件中使用

```javascript
<van-button type="primary">主要按钮</van-button>  
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200910091145135.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1Njc4NjA3,size_16,color_FFFFFF,t_70#pic_center)

2、引入Vant样式组件库（不是全局引用，而是按需引用）
①npm i babel-plugin-import -D
②设置.babelrc

```javascript
 "plugins": [
    、、、其他代码
     ["import",{"libraryName":"vant","style":true}]

    ]
```

③src/main.js: 

```javascript
import {Button} from 'vant'
Vue.use(Button)
```

打包减少很多，速度会加快一些

### 三、移动端适配方法
（1）固定宽度，宽度百分比 ×
（2）Media Query (媒体查询)
（3）flex布局 √
了解Rem ：相对长度单位，相对于根元素（html元素）font-size计算属性的倍数
Index.html:

```javascript
 <style>
      .test{
        width: 320px;
        height: 160px;
        background-color: aquamarine;
        text-align: center;
      }
      .hello{
        color: red;
      }
    </style>
  </head>
  <body>
    <div id="app"></div>
    <!-- built files will be auto injected -->
    <div class="test">
      <p class="hello"> hello jing</p>
    </div>  
  </body>
  
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200910091301280.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1Njc4NjA3,size_16,color_FFFFFF,t_70#pic_center)

没有适配，如何适配？？
 
 <!-- iphone5 1rem = 16px html font-size = 16px-->

```javascript
<style>
      .test{
        width: 20rem;
        height: 10rem;
        background-color: aquamarine;
        text-align: center;
      }
      .hello{
        color: red;
        font-size: 1rem;
      }
    </style>
  </head>
  <body>
    <div id="app"></div>
    <!-- built files will be auto injected -->
    <div class="test">
      <p class="hello"> hello jing</p>
    </div>  
  </body>
<script>
      let htmlwidth = document.documentElement.clientWidth || document.body.clientWidth;
//获取设备宽度
      let htmlDom = document.getElementsByTagName('html')[0];
//取到html元素
      htmlDom.style.fontSize = htmlwidth/20 + 'px';
//把最外层html元素font-size设置
</script>
```

  ![在这里插入图片描述](https://img-blog.csdnimg.cn/20200910091322486.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1Njc4NjA3,size_16,color_FFFFFF,t_70#pic_center)


### 四、首页布局
	首页路由的设置
	快速建立首页（vue Vscode snippets）
	Vant布局的方法介绍
Main.js：

```javascript
import {Button,Row,Col} from 'vant'
Vue.use(Button).use(Row).use(Col)
ShoppingMall.vue:
 <div>
    <van-row class="test-row">
      <van-col span="4">span:4</van-col>
      <van-col span="16">span:16</van-col>
      <van-col span="4">span:4</van-col>
    </van-row>
  </div>
```

### 五、顶部
 ![在这里插入图片描述](https://img-blog.csdnimg.cn/20200910091337137.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1Njc4NjA3,size_16,color_FFFFFF,t_70#pic_center)


```javascript
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
  </div>
</template>
<script>
  export default {
    data() {
      return {
        msg: 'shopping mall',
        locationIcon:require('../../assets/images/location.png'),
        searchIcon:require('../../assets/images/search.png')
      }
    },
  }
</script>
<style  scoped>
  .search-bar{
    height: 2.2rem;
    background-color: #FFD700;
    line-height: 2.2rem;
  }
  .search-input{
    width: 100%;
    height: 1.3rem;
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
</style>
```

### 六、首页轮播图

	Vant轮播图组件的引入

```javascript
import {Button,Row,Col,Swipe,SwipeItem} from 'vant'
Vue.use(Button).use(Row).use(Col).use(Swipe).use(SwipeItem)
```

	编写轮播组件

```javascript
<!-- swiper -->
    <div class="swier-area">
      <van-swipe :autoplay="1000">
        <van-swipe-item v-for="(banner, index) in bannerPicArray" :key="index">
          <img :src="banner.imageUrl" width="100%" height="100%"/>
        </van-swipe-item>
      </van-swipe>
    </div>
 bannerPicArray:[
              {imageUrl:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3605435051,4282311128&fm=26&gp=0.jpg'},
              {imageUrl:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3647426405,3317636312&fm=26&gp=0.jpg'},
              {imageUrl:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3061278420,1580159419&fm=26&gp=0.jpg'},
        ]
<style  scoped>
  .search-bar{
    height: 2.2rem;
    background-color: #FFD700;
    line-height: 2.2rem;
    overflow: hidden;
  }
  //其他不变
  .swier-area{
    clear: both;
  }
</style>
```

	实现图片懒加载

```javascript
import {Button,Row,Col,Swipe,SwipeItem,Lazyload} from 'vant'
Vue.use(Button).use(Row).use(Col).use(Swipe)
.use(SwipeItem).use(Lazyload)

 <img v-lazy="banner.imageUrl" width="100%" height="100%"/>

 .swier-area{
    clear: both;
    max-height: 12rem;
    overflow: hidden;
  }
```

	Chrome调试技巧
六、easyMock和axios的使用

	安装axios

```javascript
npm install axios –save

```

```javascript
 import axios from 'axios'
```

```javascript
  created(){
      axios({
        url:'https://www.easy-mock.com/mock/5f2e0849f8b3981de71e1188/vue-koa--webapp/index',
        method:'get',
      })
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
    }
```

### 七、mock数据使用和flex布局
 

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200910091410769.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1Njc4NjA3,size_16,color_FFFFFF,t_70#pic_center)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200910091418471.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1Njc4NjA3,size_16,color_FFFFFF,t_70#pic_center)

 
 	Html布局

```javascript
 <!-- swiper -->
    <div class="swier-area">
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
 	Data声明
 bannerPicArray:[],
        category: [],
        adBanner:''
 	axios获取数据
if(response.status == 200){
          this.category = response.data.data.category;
          this.adBanner = response.data.data.advertesPicture.PICTURE_ADDRESS;
          this.bannerPicArray = response.data.data.slides;
        }
 	样式
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
```

八、商品推荐

```javascript
npm install vue-awesome-swiper –save
```

```javascript
全局引用
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'


.use(VueAwesomeSwiper)
```

```javascript
局部组件引用
import 'swiper/dist/css/swiper.css'
  import {Swiper , SwiperSlide} from 'vue-awesome-swiper'

 components:{
      Swiper , SwiperSlide
    },
```

关于这个组件的引用，最好还是参考github文档

```javascript
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


 swiperOption:{
          slidesPerView:3,
        }


 .recommend-body{
    border-bottom: 1px solid #eee;

  }
  .recommend-item{
    width: 99%;
    border-right: 1px solid #eee;
    font-size: 12px;
    text-align: center;

  }
```

### 九、vue-awesome-swiper组件详细
	Swiper的基础用法
	如何加分页器
	竖屏切换效果


	Swiper的区域滚动效果
	Swiper的分页器可以自由选择
	无限循环滚动
### 十、首页楼层



### 十一、楼层组件的封装和watch的使用
父组件：
//页面 

```javascript
<floor-component :floorData="floor1"></floor-component>
```

//引入

```javascript
 import floorComponent from '../component/floorComponent'
```

//注册

```javascript
 floorComponent
```

子组件
<script>
  export default {
    props:['floorData'],
    data(){
      return{
        floorData0:{},
        floorData1:{},
        floorData2:{},
      }
    },
    
    watch:{
      floorData:function(val){
        console.log(this.floorData)
        this.floorData0 = this.floorData[0];
        this.floorData1 = this.floorData[1];
        this.floorData2 = this.floorData[2];
      }
    }
  }
</script>
### 十二、完善楼层组件（组件复用）

```javascript
 <floor-component :floorData="floor1" :floorTitle="floorName.floor1"></floor-component>
    <floor-component :floorData="floor2" :floorTitle="floorName.floor2"></floor-component>
     <floor-component :floorData="floor3" :floorTitle="floorName.floor3"></floor-component>
 floor1:[],
        floor2:[],
        floor3:[],
        floorName:{},

this.floor1 = response.data.data.floor1;
          this.floor2 = response.data.data.floor2;
          this.floor3 = response.data.data.floor3;
          this.floorName = response.data.data.floorName;
```

### 十三、项目中Filter的使用
方法1×

```javascript
export function toMoney(money){
  let newMoney = money
  if(newMoney){
    newMoney = newMoney.toFixed(2)
  }else{
    newMoney = 0
    newMoney = newMoney.toFixed(2)
  }

  return newMoney;
}
```

方法2√

```javascript
export function toMoney(money = 0){
  return money.toFixed(2);
}


import {toMoney} from '@/filter/moneyFilter.js'

filters:{
      moneyFilter(money){
        return toMoney(money)
      }
    },

 <div>￥{{item.price | moneyFilter}}(￥{{item.mallPrice | moneyFilter}})</div>
```

### 十四、首页热卖组件和van-list使用

```javascript
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

 import goodsInfo from '../component/goodsInfoComponent' 
 hotGoods:[],
.hot-area{
      text-align: center;
      font-size:14px;
      height: 1.8rem;
      line-height:1.8rem;
  }
```

### 十五、服务接口API配置文件制作
在开发中我们现在直接把数据接口文件写到了axios中，这样写如果地址改变或者接口改变，我们需要进入业务逻辑代码进行修改，维护起来会非常的麻烦。那这节课我们就把项目中用到的接口都单独拿出来，作一个接口配置文件serviceAPI.config.js。

编写接口配置文件

项目src目录下建立serviceAPI.config.js,然后打开编写如下代码。

```javascript
const BASEURL = "https://www.easy-mock.com/mock/5ae2eeb23fbbf24d8cd7f0b6/SmileVue/"
const URL = {
    getShoppingMallInfo:BASEURL+'index',
    getGoodsInfo:BASEURL+'getGoodsInfo'
}

module.exports = URL
}
```

URL
编写好后，我们可以直接在要使用的文件中用import的形式引入。
import url from '@/serviceAPI.config.js'

引入后就可以直接使用了。

```javascript
axios({
    url: url.getShoppingMallInfo,
    method: 'get',
    })
})
```

**总结**：这节课的内容虽然很短，但是这是作配置文件的一种方法，在项目中你想作任何配置文件完全可以使用这节所学的内容。希望小伙伴们可以把这种最基本的方法学会，并应用在工作中。
十六、安装koa2到项目中来

```javascript
npm init -y
npm install koa –save
```

```javascript
const Koa = require('koa')
const app =new Koa()

app.use(async(ctx)=>{
  ctx.body='<h1>hello</h1>'
})

app.listen(3000,()=>{
  console.log('[server] star')
})
```

### 十七、安装MongoDB数据库
1.安装MongoDB
2.安装robmongo
### 十八、用mongoose连接数据库
Mongoose是一个开源的封装好的实现Node和mongoDB数据通讯的数据建模库

```javascript
const mongoose = require('mongoose')
const db = "mongodb://localhost/smile-db"

exports.connect = ()=>{
  //连接数据库
  mongoose.connect(db)
  let maxConnectTimes = 0

  return new Promise((resolve,reject)=>{
    //增加数据库监听事件
  mongoose.connection.on('disconnected',()=>{
    console.log('*******数据库断开*****')
    if(maxConnectTimes<=3){
      maxConnectTimes++
      mongoose.connect(db)
    }else{
      reject()
      throw new Error('数据库出现问题，程序无法搞定')
    }
   
  })
  mongoose.connection.on('error',(err)=>{
    console.log('*******数据库错误')
    if(maxConnectTimes<=3){
      maxConnectTimes++
      mongoose.connect(db)
    }else{
      reject(err)
      throw new Error('数据库出现问题，程序无法搞定')
    }
   
   
  })
  //连接打开时
  mongoose.connection.once('open',()=>{
    console.log('*******数据库连接成功')
    resolve()
  })
  })
  
  
}


const { connect } = require('./database/init.js')

;(async ()=>{
  await connect()
})()
```

### 十九、mongoose的schema
Schema:用来定义表的模板，实现和MongoDB数据库的映射
Model：具备表操作能力的一个集合，是mongoose的核心能力
Entity：类似记录，有model创建的实体

```javascript
const mongoose = require('mongoose')    //引入Mongoose
const Schema = mongoose.Schema          //声明Schema
let ObjectId = Schema.Types.ObjectId    //声明Object类型
```

```javascript
//创建我们的用户Schema
const userSchema = new Schema({
    UserId:ObjectId,
    userName:{unique:true,type:String},
    password:String,
    createAt:{type:Date,default:Date.now()},
    lastLoginAt:{type:Date,default:Date.now()}

})

//发布模型
mongoose.model('User',userSchema)
```

二十、载入schema和数据的插入和查询
Glob:node的glob模块允许你使用*等符号，来写一个glob规则，像在shell里一样，获取匹配对应规则文件
Resolve：将一系列或路劲段解析为绝对路径
二十一、打造安全的用户密码加密机制
加密处理
加盐处理
Bcrypt跨平台的文件加密工具
npm install --save bcrypt
二十二、编写组册页面前端视图
二十三、koa2用户操作路由模块化
npm install --save koa-router
二十四、打通前后端通讯
npm install --save koa-bodyparser

npm install --save koa2-cors（跨域）
二十五、用户注册的数据库操作
二十六、注册的防止重复提交操作
二十七、注册的前端验证
二十八、用户登录页面和路由的制作
二十九、登录服务端逻辑编写
三十、登录的前端交互效果制作，登录状态存储
三十一、商品详细数据的提纯操作












