<!--
 * @Descripttion: 
 * @version: 
 * @Author: QinJiaJun
 * @Date: 2020-11-20 23:59:16
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-11-21 22:48:46
-->
<template>
  <div class="index">
    <div class="btns">
      <el-button @click="btnClick('CarouselOne')">轮播组件</el-button>
      <el-button @click="btnClick('TreeOne')">树形组件One</el-button>
      <el-button @click="btnClick('TreeTwo')">树形组件Two</el-button>
    </div>
    <div class="slider"></div>
    <CarouselOne
      v-if="componentShow === 'CarouselOne'"
      :carouselOneItem="carouselOneItem"
    ></CarouselOne>
    <TreeOne
      v-if="componentShow === 'TreeOne'"
      :treeData="treeData"
      style="width: 400px; height: 250px"
    ></TreeOne>
    <TreeTwo
      v-if="componentShow === 'TreeTwo'"
      :nodes="treeData"
      style="width: 400px; height: 250px"
    ></TreeTwo>
  </div>
</template>

<script>
import CarouselOne from "../components/CarouselOne/CarouselOne";
import TreeOne from "../components/TreeOne/TreeOne";
import TreeTwo from "../components/TreeTwo/TreeTwo";
export default {
  data() {
    return {
      componentShow: "CarouselOne",
      carouselOneItem: [
        {
          src: require("./CarouselOne/images/LebornJames.jpeg"),
        },
        {
          src: require("./CarouselOne/images/LebornJames.jpeg"),
        },
        {
          src: require("./CarouselOne/images/LebornJames.jpeg"),
        },
      ],
      treeData: [
        {
          projectType: "基础设施建设",
          totalInvestment: "524",
          projectNum: "34",
          children: [
            {
              projectType: "子类型a333",
              totalInvestment: "524",
              projectNum: "34",
              children: [
                {
                  projectType: "aaa",
                  totalInvestment: "bbb",
                  projectNum: "56",
                  children: [
                    {
                      projectType: "635",
                      totalInvestment: "44",
                      projectNum: "56",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          projectType: "产业建设",
          totalInvestment: "134",
          projectNum: "14",
        },
        {
          projectType: "社会民生",
          totalInvestment: "524",
          projectNum: "34",
          children: [
            {
              projectType: "子类型1",
              totalInvestment: "524",
              projectNum: "34",
            },
            {
              projectType: "子类型2",
              totalInvestment: "524",
              projectNum: "34",
              children: [
                {
                  projectType: "子类型23",
                  totalInvestment: "524",
                  projectNum: "34",
                },
              ],
            },
          ],
        },
      ],
    };
  },
  components: {
    CarouselOne,
    TreeOne,
    TreeTwo,
  },
  methods: {
    btnClick(e) {
      this.componentShow = e;
    },
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
.index {
  .slider {
    width: 100%;
    background: black;
    height: 2px;
  }
}
</style>