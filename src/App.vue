<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>
<style lang="scss">
@import '@/assets/common.scss';
html, body, #app{
  height: 100%;
  color: $light-font-color
}
</style>
