<template>
  <div class="home">
    <el-row :gutter="16">
      <el-col :span="12" :xs="24" class="vit-col">
        <el-card class="vit-card">
          <div slot="header" class="clearfix vit-card-header">
            <span>访问量</span>
          </div>
          <div id="chartsVisited" class="vit-card-body"></div>
        </el-card>
      </el-col>
      <el-col :span="12" :xs="24" class="vit-col">
        <el-card class="vit-card">
          <div slot="header" class="clearfix vit-card-header">
            <span>浏览偏好</span>
          </div>
          <div id="chartsFavorite" class="vit-card-body"></div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
import echarts from 'echarts'
export default {
  name: 'Home',
  data() {
    return {
      chartsVisited: null,
      chartsFavorite: null,
      chartData: [
        ['2000-06-05', 116],
        ['2000-06-06', 129],
        ['2000-06-07', 135],
        ['2000-06-08', 86],
        ['2000-06-09', 73],
        ['2000-06-10', 85],
        ['2000-06-11', 73],
        ['2000-06-12', 68],
        ['2000-06-13', 92],
        ['2000-06-14', 130],
        ['2000-06-15', 245],
        ['2000-06-16', 139],
        ['2000-06-17', 115],
        ['2000-06-18', 111],
        ['2000-06-19', 309],
        ['2000-06-20', 206],
        ['2000-06-21', 137],
        ['2000-06-22', 128],
        ['2000-06-23', 85],
        ['2000-06-24', 94],
        ['2000-06-25', 71],
        ['2000-06-26', 106],
        ['2000-06-27', 84],
        ['2000-06-28', 93]
      ]
    }
  },
  mounted() {
    this.drawChartsVisited()
    this.drawChartsFavorite()
    window.onresize = () => {
      this.myCharts.resize()
      this.myCharts.resize()
    }
  },
  methods: {
    drawChartsVisited() {
      this.chartsVisited = echarts.init(document.getElementById('chartsVisited'))
      const dateList = this.chartData.map(function(item) {
        return item[0]
      })
      const valueList = this.chartData.map(function(item) {
        return item[1]
      })
      const option = {
        // Make gradient line here
        visualMap: {
          show: false,
          type: 'continuous',
          seriesIndex: 0,
          min: 0,
          max: 400
        },
        title: {
          left: 'center',
          text: '',
          color: '#fff'
        },
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          data: dateList,
          axisLine: {
            lineStyle: {
              color: 'rgb(116, 124, 154)'
            }
          }
        },
        yAxis: {
          splitLine: { show: false },
          nameTextStyle: {
            color: '#fffff'
          },
          axisLine: {
            lineStyle: {
              color: 'rgb(116, 124, 154)'
            }
          }
        },
        grid: {
          bottom: '10%',
          top: '10%',
          left: '15%',
          right: '5%'
        },
        series: {
          type: 'line',
          showSymbol: false,
          data: valueList
        }
      }
      this.chartsVisited.setOption(option)
    },
    drawChartsFavorite() {
      this.chartsFavorite = echarts.init(document.getElementById('chartsFavorite'))
      const option = {
        tooltip: {},
        grid: {
          bottom: '10%',
          top: '10%',
          left: '15%',
          right: '5%'
        },
        radar: {
          // shape: 'circle',
          name: {
            textStyle: {
              color: '#fff',
              backgroundColor: '#999',
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          indicator: [
            { name: '前端', max: 6500 },
            { name: '后端', max: 16000 },
            { name: '运维', max: 30000 },
            { name: '数据库', max: 38000 },
            { name: '大数据', max: 52000 }
          ]
        },
        series: [{
          name: '预算 vs 开销（Budget vs spending）',
          type: 'radar',
          // areaStyle: {normal: {}},
          data: [
            {
              value: [4300, 10000, 28000, 35000, 50000, 19000],
              name: '预算分配（Allocated Budget）'
            },
            {
              value: [5000, 14000, 28000, 31000, 42000, 21000],
              name: '实际开销（Actual Spending）'
            }
          ]
        }]
      }
      this.chartsFavorite.setOption(option)
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/common.scss';
.vit-col {
  margin-top: 16px;
  .vit-card {
    background-color: $base-bgcolor;
    border: none;
    color: $light-font-color;
    .el-card__header {
      border-color: $base-font-color;
    }
    .el-card__body{
      padding: 0;
    }
    .vit-card-body{
      height: 300px;
    }
  }
}
</style>
