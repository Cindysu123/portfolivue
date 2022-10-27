<template>
  <figure class="uiFigure">
        <div class="top">
            <transition name="left" appear>
                <div class="left">
                    <p>This might take a fiew seconds to load</p>
                    <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" :width="prototype.width" :height="prototype.height" allowfullscreen :src="prototype.src" align="top"></iframe>
                </div>
            </transition>
            <transition name="right" appear>
                <div class="right">
                    <img :src="img_url" alt="image" class="uiImage">
                    <div class="description">{{ description }}</div>
                    <div v-if="prototype.btnDisplay" class="visit">
                        <a class="visit_test" :href="prototype.link" target="blank">Visit the website here！</a>
                    </div>
                </div>
            </transition>
        </div>
        <div class="swiper">
            <swiper
                :slides-per-view="3"
                :space-between="50"
                navigation
                :pagination="{ clickable: true }"
                :scrollbar="{ draggable: true }"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
                observer= true
                observeParents= true
            >
                <swiper-slide v-for="(image_url,index) in image_urls" :key="index">
                    <img :src="image_url" alt="image" >
                </swiper-slide>
            </swiper>
        </div>
    </figure>
</template>

<script>
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default {
    props:{
        project:String
    },
    components: {
      Swiper,
      SwiperSlide,
    },
    methods: {
      onSwiper(swiper) {
        console.log(swiper);
      },
      onSlideChange() {
        console.log('slide change');
      },
    },
    data() {
      return {
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          },
          // Some Swiper option/callback...
        }
      }
    },
    computed:{
        img_url: function(){
            return require("../assets/img/figma/"+ this.project + ".png")
        },
        prototype: function(){
            if(this.project === "sky"){
                return {
                    width: "600px",
                    height: "450px",
                    src:"https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FVEPwqDegALoyrdzsHAX145%2FUntitled%3Fnode-id%3D5%253A84%26scaling%3Dcontain%26page-id%3D0%253A1%26starting-point-node-id%3D1%253A4",
                    btnDisplay: true,
                    link: "https://cindy-mp-2020.github.io/Hackathon-Jan23/" 
                }
            } else if (this.project === "volunteer"){
                return {
                    width: "300px",
                    height: "500px",
                    src:"https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FxHaHPIhQn1uoU2QnCyua2K%2FUntitled%3Fnode-id%3D1%253A2%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D1%253A2",
                    btnDisplay: false
                }
            } else if (this.project === "CESA"){
                return {
                    width: "600px",
                    height: "450px",
                    src: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FLgH429KNQ3EJvFR1gvyfV7%2FCESA-web%3Fnode-id%3D3%253A2%26scaling%3Dcontain%26page-id%3D0%253A1%26starting-point-node-id%3D3%253A2",
                    btnDisplay: true,
                    link: "https://cesaatuiuc.web.engr.illinois.edu/"
                }
            }
        },
        description: function(){
            if(this.project === "sky"){
                return "Sky's The Limit tackles the pervasiveness of climate change by offering users the ability to buy plant based produce, while engaging in eco-friendly activities like social distancing cleanups. Additionally, our unique star points system grants discounts in our marketplace where companies can advertise services, products and discounts, acting as an incentive for users to be environmentally aware about their daily choices."
            } else if (this.project === "volunteer"){
                return "Volunteer Navigator is a mobile platform that allows members of the community to find local nonprofit volunteering opportunities that cater toward their interests and the needs of the nonprofits."
            } else if (this.project === "CESA"){
                return "CSEA(Chinese Engineering Student Association) is an association that organizes diverse activities to enrich student's campus life and share high quality academic and career resources to help students achieve their goals."
            }
        },
        image_urls: function(){
            if(this.project === "sky"){
                return [
                    require('../assets/img/figma/project1/1.jpg'),
                    require('../assets/img/figma/project1/2.jpg'),
                    require('../assets/img/figma/project1/3.jpg'),
                    require('../assets/img/figma/project1/4.jpg'),
                    require('../assets/img/figma/project1/5.jpg'),
                    require('../assets/img/figma/project1/6.jpg'),
                    require('../assets/img/figma/project1/7.jpg'),
                    ]
            } else if (this.project === "volunteer"){
                return [
                    require('../assets/img/figma/project2/1.jpg'),
                    require('../assets/img/figma/project2/2.jpg'),
                    require('../assets/img/figma/project2/3.jpg'),
                    require('../assets/img/figma/project2/4.jpg'),
                    require('../assets/img/figma/project2/5.jpg'),
                    require('../assets/img/figma/project2/6.jpg'),
                    require('../assets/img/figma/project2/7.jpg'),
                    ]
            } else if (this.project === "CESA"){
                return [
                    require('../assets/img/figma/project3/1.jpg'),
                    require('../assets/img/figma/project3/2.jpg'),
                    require('../assets/img/figma/project3/3.jpg'),
                    require('../assets/img/figma/project3/4.jpg'),
                    require('../assets/img/figma/project3/5.jpg'),
                    require('../assets/img/figma/project3/6.jpg')
                    ]
            }
        }
    }
}
</script>

<style>
.top{
    display: inline-flex;
}
.uiImage{
    width: 200px;
    margin-left: 100px;
}
.description{
    height: 200px;
    width: 500px;
    font-size: 20px;
    text-align: left;
    padding: 0 30px;
}
.right{
    display: inline-block;
    width: 400px;
}
.left{
    display: inline-block;
}
.visit{
    margin: 0 auto;
    width: 320px;
    height: 60px;
    background-color: rgb(42, 146, 194);
    color: white;
    text-align: center;
    line-height: 60px;
    font-weight: 800;
    margin-left: 100px;
    font-size: 20px;
    border-radius: 10px;
}
.visit_test{
    color: white;
}
a{
    text-decoration: none;
}
.swiper{
    margin-top: 40px; 
}
</style>