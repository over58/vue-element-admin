<template>
  <div class="container">
    <div id="a" />
  </div>
</template>

<script>
import echarts from 'echarts'
import data from './echarts-data'

export default {
  data() {
    return {
      myChart: null
    }
  },
  mounted() {
    this.myChart = echarts.init(document.getElementById('a'))
    this.draw()
  },
  methods: {
    draw() {
      this.myChart.setOption({
        tooltip: {
          trigger: 'item',
          triggerOn: 'mousemove'
        },
        series: [
          {
            type: 'tree',

            data: [data],

            left: '2%',
            right: '2%',
            top: '8%',
            bottom: '20%',
            lineStyle: {
              curveness: 0
            },
            symbol: 'emptyCircle',

            orient: 'vertical',

            expandAndCollapse: true,

            label: {
              normal: {
                position: 'top',
                // rotate: -90,
                verticalAlign: 'middle',
                align: 'center',
                fontSize: 20
              }
            },

            leaves: {
              label: {
                normal: {
                  position: 'bottom',
                  rotate: -90,
                  verticalAlign: 'middle',
                  align: 'left',
                  fontSize: 20
                }
              }
            },

            animationDurationUpdate: 750
          }
        ]
      })
    }
  }
}
</script>

<style>
.container{
  height: 500px;
  border: wavy 1px #aaa;
}
#a{
  height: 100%;
}
</style>
