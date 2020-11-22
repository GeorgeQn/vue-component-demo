<!--
 * @Descripttion: 
 * @version: 
 * @Author: QinJiaJun
 * @Date: 2020-11-20 23:59:49
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-11-21 01:14:59
-->
<template>
  <div class="CarouselOne">
    <div class="content">
      <div class="arrowTop"></div>
      <div class="item" v-for="(item, index) in carouselOneItem" :key="index">
        <div :class="{'carousel-mask' : curIndex === index}" ></div>
        <img :src="item.src"  @mouseenter="hoverToCurrentItem(index)"  />
      </div>
      <div class="arrowDown"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      maskShow:false,
      curIndex:1
    };
  },
  props: ["carouselOneItem"],
  mounted() {},
  methods: {
    hoverToCurrentItem(index) {
      this.curIndex = index
    },
  },
};
</script>

<style lang="less" scoped>
.CarouselOne {
  .content {
    .item {
      width: 100%;
      height: 100%;
      position: relative;
      img {
        cursor: pointer;
      }
    }
  }
  .carousel-mask {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #fff;
    opacity: 0.24;
    transition: 0.2s;
  }
}
</style>