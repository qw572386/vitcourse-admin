<template>
  <el-container class="vit-layout">
    <el-header class="vit-layout-header">
      <vit-header />
    </el-header>
    <el-container>
      <el-aside width="200px" class="vit-layout-aside">
        <el-menu
          :default-active="defaultActive"
          class="vit-course-side-menu"
          background-color="#262D47"
          text-color="#747C9A"
          active-text-color="#F3F7FA"
          router
          >
          <el-menu-item index="home">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index="lessons">
            <i class="el-icon-edit-outline"></i>
            <span slot="title">课程管理</span>
          </el-menu-item>
          <el-menu-item index="tags">
            <i class="el-icon-price-tag"></i>
            <span slot="title">标签管理</span>
          </el-menu-item>
          <el-menu-item index="type">
            <i class="el-icon-notebook-1"></i>
            <span slot="title">分类管理</span>
          </el-menu-item>
          <el-menu-item index="carousel">
            <i class="el-icon-s-platform"></i>
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
  computed: {
    defaultActive() {
      return this.$route.path.replace('/', '')
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
