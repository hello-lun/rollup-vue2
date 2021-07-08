<template>
  <div class="wrap">
    <h1>button</h1>
    <el-button>点击</el-button>
    <h1>666666</h1>
  </div>
</template>

<script>
import { Button } from 'element-ui';

export default {
  name: 'dlButton',
  components: {
    [Button.name]: Button
  },
}
</script>

<style lang="less" scoped>
  .wrap {
    width: 200px;
    background-color: pink;
  }
</style>