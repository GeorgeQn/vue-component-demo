<!--
 * @Descripttion: 
 * @version: 
 * @Author: QinJiaJun
 * @Date: 2020-11-21 17:33:18
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-11-21 19:39:16
-->
<template>
  <div id="TreeMenu">
    <div
      v-for="(node, index) in nodes"
      :key="index"
    >
      <div class="TreeMenu-row">
        <!-- <img
          class="TreeMenu-row-selectimg"
          src="../assets/img/MembersPriceActivity/selected.png"
          @click="selectNode(0, node)"
          v-show="node.IsSelected"
        /> -->
        <!-- <img
          class="TreeMenu-row-selectimg"
          src="../assets/img/MembersPriceActivity/select.png"
          @click="selectNode(1, node)"
          v-show="!node.IsSelected"
        /> -->
        <div
          class="TreeMenu-row-firstdiv"
          :class="{
            'TreeMenu-row-border-bottom': node.ChildTypeList && node.IsExpanded,
          }"
          @click="expandNode(!node.IsExpanded, node)"
        >
          <label v-text="node.label"></label>
          <!-- <img
            class="TreeMenu-row-arrowimg"
            src="../assets/img/MembersPriceActivity/top.png"
            v-if="node.ChildTypeList"
            v-show="!node.IsExpanded"
          /> -->
          <!-- <img
            class="TreeMenu-row-arrowimg"
            src="../assets/img/MembersPriceActivity/down.png"
            v-if="node.ChildTypeList"
            v-show="node.IsExpanded"
          /> -->
        </div>
        <TreeMenu
          :nodes="node.ChildTypeList"
          :fatherIndex="index"
          :depth="depth + 1"
          v-on:selectFatherNode="selectFatherNode"
          v-if="node.ChildTypeList"
          v-show="!node.IsExpanded"
        ></TreeMenu>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TreeMenu",
  data() {
    return {
      goodstype: {
        ID: "",
        ParentID: "",
        Name: "",
        Code: "",
        Level: 0,
        ImgUrl: null,
        ChildTypeList: [],
      },
    };
  },
  props: {
    nodes: {
      type: Array,
      default: () => {
        return [];
      },
    },
    fatherIndex: {
      type: Number,
      default: 0,
    },
    depth: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    // 选中/取消 当前节点
    selectNode(choice, node) {
      node.IsSelected = choice;
      this.selectChildrenNode(choice, node.ChildTypeList || []);
      this.$emit(
        "selectFatherNode",
        choice,
        this.fatherIndex,
        this.nodes.every((node) => {
          return node.IsSelected === choice;
        })
      );
    },
    // 子节点修改选中状态
    selectChildrenNode(choice, nodes, self) {
      let _self = self || this;
      nodes.forEach((node) => {
        node.IsSelected = choice;
        _self.selectChildrenNode(choice, node.ChildTypeList || [], _self);
      });
    },
    // 作为父级节点检查是否需要修改选中状态(仅用于子节点调用)
    selectFatherNode(choice, index, childrenState) {
      if (choice) {
        // 若其[Index]节点下子节点均为被选中状态，该[Index]节点就应该被选中
        if (childrenState) {
          this.nodes[index].IsSelected = choice;
          this.$emit(
            "selectFatherNode",
            choice,
            this.fatherIndex,
            this.nodes.every((node) => {
              return node.IsSelected === choice;
            })
          );
        }
      } else {
        // 若其[Index]节点下子节点有未被选中状态的，该[Index]节点就应该未选中
        this.nodes[index].IsSelected = choice;
        this.$emit("selectFatherNode", choice, this.fatherIndex, false);
      }
    },
    // 展开/收起 当前节点
    expandNode(choice, node) {
      node.IsExpanded = choice;
      if (!choice) {
        this.expandChildrenNode(choice, node.ChildTypeList);
      }
    },
    // 子节点收起
    expandChildrenNode(choice, nodes, self) {
      let _self = self || this;
      nodes.forEach((node) => {
        node.IsExpanded = choice;
        _self.expandChildrenNode(choice, node.ChildTypeList || [], _self);
      });
    },
  },
};
</script>

<style lang='less' scoped>
#TreeMenu {
  .TreeMenu-row {
    margin-left: 30px;
    font-size: 15px;
    padding: 12px 0 0 0;
  }
  .TreeMenu-row-firstdiv {
    height: 32px;
    margin-left: 30px;
  }
  .TreeMenu-row-arrowimg {
    float: right;
    margin-right: 15px;
    width: 13px;
  }
  .TreeMenu-row-selectimg {
    float: left;
    width: 18px;
    vertical-align: text-bottom;
  }
  .TreeMenu-row-border-bottom {
    border-bottom: solid 1px black;
  }
  .TreeMenu-row-border-top {
    border-top: solid 1px black;
  }
}
</style>