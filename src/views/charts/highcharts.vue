<template>
  <div class="chart">
    <el-row>
      <el-col :span="12">
        <chart-line :data="mockData.pie.count_tendency" title="响应时间分布(simple)" type="spline" />
      </el-col>
      <el-col :span="12">
        <chart-pie :data="mockData.pie.count" title="响应时间分布" type="spline" />
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <chart-line :data="mockData.pie.count_tendency" title="响应时间分布(simple)" type="areaspline" simple />
      </el-col>
      <el-col :span="12">
        <chart-line
          type="spline"
          :data="mockData.pie.count_tendency"
          title="响应时间分布"
          :plot-line="{text: '5000', value: 5000, align: 'right'}"
        >
          <span slot="operation">
            <el-button>详情</el-button>
            <el-button>编辑</el-button>
            <el-button>其他</el-button>
          </span>
        </chart-line>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import mockData from '@/components/Highcharts/mock.js'
import ChartLine from '@/components/Highcharts/ChartLine'
import ChartPie from '@/components/Highcharts/ChartPie'

export default {
  name: 'Chart',
  components: {
    ChartLine,
    ChartPie
  },
  data() {
    return {
      mockData: mockData
    }
  }
}
</script>

<style lang="scss" scoped>
.chart{
  padding: 20px;
}
</style>
