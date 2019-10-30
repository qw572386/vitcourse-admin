<template>
  <el-container class="vit-layout">
    <el-header class="vit-layout-header">
      <vit-header />
    </el-header>
    <el-container>
      <el-aside width="200px" class="vit-layout-aside">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#262D47"
          text-color="#747C9A"
          active-text-color="#F3F7FA">
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-document"></i>
            <span slot="title">课程管理</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-setting"></i>
            <span slot="title">标签管理</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">分类管理</span>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="el-icon-setting"></i>
            <span slot="title">轮播管理</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main class="vit-layout-main">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import VitHeader from '@/components/header/index.vue'
export default {
  name: 'Layout',
  components: {
    VitHeader
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/common.scss';
.vit-layout{
  height: 100%;
  background: $bgcolor;
  &-header{
    padding: 0;
    background: $base-bgcolor;
  }
  &-aside, &-main{
    height: 100%;
    overflow: auto;
  }
  &-aside{
    background: $base-bgcolor;
  }
  &-main{
    padding: 0 $base-width;
    box-sizing: border-box;
  }
}
</style>
