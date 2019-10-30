<template>
  <div class="vit-header">
    <div class="vit-header-left">
      <img class="vit-header-logo" src="../../assets/logo.png" alt="logo">
      <h3 class="vit-header-title">有课后台管理系统</h3>
    </div>
    <div class="vit-header-right">
      <el-avatar :src="circleUrl" class="user-avatar"></el-avatar>
      <el-dropdown class="user-info">
        <span class="el-dropdown-link">
          admin<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>设置</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
