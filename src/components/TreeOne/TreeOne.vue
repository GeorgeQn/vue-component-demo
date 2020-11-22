<!--
 * @Descripttion: 
 * @version: 
 * @Author: QinJiaJun
 * @Date: 2020-11-21 00:24:46
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-11-22 10:18:01
-->
<template>
  <div id="TreeOne">
    <div
      v-for="(item, index) in treeData"
      :key="index"
      :class="{
        oddBackGroundColor: index % 2 === 0,
        evenBackGroundColor: index % 2 !== 0,
      }"
    >
      <div class="Tree-row">
        <div class="Tree-row-firstDiv" @click="select($event, item, index)">
          <span :class="circleShow === false ? 'squareOutSide' : ''"
            ><div
              :style="{ background: circleShow ? '' : colorArr[index] }"
              :class="{ squareInSide: !circleShow, circle: circleShow }"
            ></div
          ></span>
          <span>{{ item.projectType }}</span>
          <span>{{ item.totalInvestment }}</span>
          <span>{{ item.children ? item.children.length : 0 }}</span>
          <span
            v-if="item.children && item.children.length != 0"
            class="el-icon-caret-bottom"
            :class="{
              selectNull: !indexArr[index],
              selectActive: indexArr[index] && item.children,
            }"
          ></span>
        </div>
        <TreeOne
          :treeData="item.children"
          v-if="item.children && indexArr[index]"
          :circleShow="true"
          :class="{ selectDown: indexArr[index]}"
        ></TreeOne>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TreeOne",
  data() {
    return {
      curIndex: null,
      indexArr: [],
      colorArr: ["#4F9EFD", "#FF913F", "#00EA9C"], //这里设置一级的方块颜色
    };
  },
  props: {
    treeData: {
      type: Array,
      default: () => {
        return [];
      },
    },
    circleShow: {
      type: Boolean,
      default: false,
    },
    curColor: {
      type: String,
      default: "",
    },
  },
  methods: {
    //v-if对数组的直接布尔值不生效，需要加个属性 试试用v-else
    select(e, item, index) {
      if (!item.children) return;
      if(this.indexArr[index] == false){
        this.$set(this.indexArr,index,true)
      }else{
        this.$set(this.indexArr,index,false)
      }
      console.log(this.indexArr[index])
    },
  },
  created() {
    this.indexArr = new Array(3);
    for (let i = 0; i < this.indexArr.length; i++) {
      this.indexArr[i] = false
    }
  },
};
</script>

<style lang="less" scoped>
#TreeOne {
  width: 100%;
  height: 100%;
  .Tree-row {
    .Tree-row-firstDiv {
      height: 40px;
      margin-bottom: 5px;
      display: flex;
      align-items: center;
      cursor: pointer;
      span {
        display: inline-block;
        &:nth-child(1) {
          display: inline-flex;
          margin: 0 21px;
        }
        &:nth-child(2) {
          width: 128px;
        }
        &:nth-child(3) {
          width: 122px;
          margin-right: 26px;
        }
        //  &:nth-child(4){
        //   width:104px;
        // }
      }
      .squareOutSide {
        width: 16px;
        height: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(255, 255, 255, 0.2);
        .squareInSide {
          width: 12px;
          height: 12px;
          background: red;
        }
      }
      .circle {
        width: 8px;
        height: 8px;
        margin-left: 12px;
        border-radius: 50%;
      }
    }
  }
  .oddBackGroundColor {
    background: rgba(21, 31, 50);
  }
  .evenBackGroundColor {
    background: rgba(11, 21, 41);
  }
  .selectNull {
    transition: all 0.7s;
  }
  .selectActive {
    transform: rotate(180deg);
    transition: all 0.7s;
  }
  .selectDown {
    max-height: 200px;
    transition: all 1.7s;
  }
  .test {
    color: red;
  }
}
</style>