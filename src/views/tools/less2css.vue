<template>
  <div id="app">
    <el-card :body-style="{ padding: '0px' }">
      <div slot="header">
        <span>less2css</span>
      </div>
      <el-row>
        <el-col :span="12">
          <el-input
            v-model="lessCode"
            type="textarea"
            :rows="20"
            placeholder=""
            @blur="compileLess"
          />
        </el-col>
        <el-col :span="12">
          <pre style="height: 420px;overflow:auto">{{ cssCode }}</pre>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      cssCode: "",
      lessCode: ""
    };
  },
  created() {},
  methods: {
    compileLess() {
      axios
        .post("http://yongchao.online:9988/less2css", {
          code: this.lessCode
        })
        .then(result => {
          this.cssCode = result.data;
        });
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  .css-item {
    height: 300px;
  }
  .less-item {
    height: 300px;

    white-space: pre-line;
  }
}
</style>
