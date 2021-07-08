<template>
  <div>
    <h1>select</h1>
    <el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <h1>777777</h1>
  </div>
</template>

<script>
  import { Select, Option } from 'element-ui';

  export default {
    name: 'dlSelect',
    components: {
      [Select.name]: Select,
      [Option.name]: Option,
    },
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    }
  }
</script>

<style>

</style>