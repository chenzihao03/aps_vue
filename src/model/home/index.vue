<template>
  <div id="myChart" :style="{width: '100%', height: '100%'}"></div>
</template>

<script>
  export default {
    mounted() {
      this.drawLine();
    },
    methods: {
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'));
        // 数据
        var dateBase = new Date();
        var year = dateBase.getFullYear();
        var dottedBase = +dateBase + 1000 * 3600 * 24;
        var weekCategory = [];

        var radarData = [];
        var radarDataAvg = [];
        var maxData = 12000;
        var weekMaxData = [];
        var weekLineData = [];


        // 周数据
        for (var i = 0; i < 7; i++) {
          // 日期
          var date = new Date(dottedBase -= 1000 * 3600 * 24);
          weekCategory.unshift([
            date.getMonth() + 1,
            date.getDate()
          ].join('/'));

          // 折线图数据
          weekMaxData.push(maxData);
          var distance = Math.round(Math.random() * 11000 + 500);
          weekLineData.push(distance);

          // 雷达图数据
          // 我的指标
          var averageSpeed = +(Math.random() * 5 + 3).toFixed(3);
          var maxSpeed = averageSpeed + (+(Math.random() * 3).toFixed(2));
          var hour = +(distance / 1000 / averageSpeed).toFixed(1);
          var radarDayData = [distance, averageSpeed, maxSpeed, hour];
          radarData.unshift(radarDayData);

          // 平均指标
          var distanceAvg = Math.round(Math.random() * 8000 + 4000);
          var averageSpeedAvg = +(Math.random() * 4 + 4).toFixed(3);
          var maxSpeedAvg = averageSpeedAvg + (+(Math.random() * 2).toFixed(2));
          var hourAvg = +(distance / 1000 / averageSpeed).toFixed(1);
          var radarDayDataAvg = [distanceAvg, averageSpeedAvg, maxSpeedAvg, hourAvg];
          radarDataAvg.unshift(radarDayDataAvg);
        }

        // 颜色设置
        var color = {
          linearYtoG: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 1,
            colorStops: [{
              offset: 0,
              color: '#f5b44d'
            }, {
              offset: 1,
              color: '#28f8de'
            }]
          },
          linearGtoB: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [{
              offset: 0,
              color: '#43dfa2'
            }, {
              offset: 1,
              color: '#28f8de'
            }]
          },
          linearBtoG: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [{
              offset: 0,
              color: '#1c98e8'
            }, {
              offset: 1,
              color: '#28f8de'
            }]
          },
          areaBtoG: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0,
              color: 'rgba(35,184,210,.2)'
            }, {
              offset: 1,
              color: 'rgba(35,184,210,0)'
            }]
          }
        };
        // 绘制图表
        myChart.setOption({
          title: {
            text: '一周跑步数据',
            textStyle: {
              color: '#fff',
              fontSize: 32,
              fontWeight: 'normal'
            },
            subtext: year + '/' + weekCategory[6],
            subtextStyle: {
              color: '#fff',
              fontSize: 16,
            },
            top: 50,
            left: 80
          },
          legend: {
            top: 220,
            left: 80,
            orient: 'vertical',
            itemGap: 15,
            itemWidth: 12,
            itemHeight: 12,
            data: ['平均指标', '我的指标'],
            textStyle: {
              color: '#fff',
              fontSize: 14,
            },
          },
          tooltip: {
            trigger: 'item'
          },
          radar: {
            center: ['68%', '27%'],
            radius: '40%',
            name: {
              color: '#fff'
            },
            splitNumber: 8,
            axisLine: {
              lineStyle: {
                color: color.linearYtoG,
                opacity: .6
              }
            },
            splitLine: {
              lineStyle: {
                color: color.linearYtoG,
                opacity: .6
              }
            },
            splitArea: {
              areaStyle: {
                color: '#fff',
                opacity: .1,
                shadowBlur: 25,
                shadowColor: '#000',
                shadowOffsetX: 0,
                shadowOffsetY: 5,
              }
            },
            indicator: [{
              name: '全程距离(m)',
              max: maxData
            }, {
              name: '平均速度(km/h)',
              max: 10
            }, {
              name: '最快速度(km/h)',
              max: 12
            }, {
              name: '总计时间(h)',
              max: 3.5
            }]
          },
          grid: {
            left: 90,
            right: 80,
            bottom: 40,
            top: '60%',
          },
          xAxis: {
            type: 'category',
            position: 'bottom',
            axisLine: true,
            axisLabel: {
              color: 'rgba(255,255,255,.8)',
              fontSize: 12
            },
            data: weekCategory,
          },
          yAxis: {
            name: 'km/h',
            nameLocation: 'end',
            nameGap: 24,
            nameTextStyle: {
              color: 'rgba(255,255,255,.5)',
              fontSize: 14
            },
            max: maxData,
            splitNumber: 4,

            axisLine: {
              lineStyle: {
                opacity: 0
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#fff',
                opacity: .1
              }
            },
            axisLabel: {
              color: 'rgba(255,255,255,.8)',
              fontSize: 12

            }
          },
          series: [{
            name: '每日跑步指标分布与比较',
            type: 'radar',
            symbolSize: 0,
            data: [{
              value: radarDataAvg[6],
              name: '平均指标',
              itemStyle: {
                normal: {
                  color: '#f8d351',
                }
              },
              lineStyle: {
                normal: {
                  opacity: 0,
                }
              },
              areaStyle: {
                normal: {
                  color: '#f8d351',
                  shadowBlur: 25,
                  shadowColor: 'rgba(248,211,81,.3)',
                  shadowOffsetX: 0,
                  shadowOffsetY: -10,
                  opacity: 1
                }
              },
            }, {
              value: radarData[6],
              name: '我的指标',
              itemStyle: {
                normal: {
                  color: '#43dfa2',
                }
              },
              lineStyle: {
                normal: {
                  opacity: 0,
                }
              },
              areaStyle: {
                normal: {
                  color: color.linearGtoB,
                  shadowBlur: 15,
                  shadowColor: 'rgba(0,0,0,.2)',
                  shadowOffsetX: 0,
                  shadowOffsetY: 5,
                  opacity: .8
                }
              },
            }]
          }, {
            name: '每日跑步里程',
            type: 'line',
            smooth: true,
            symbol: 'emptyCircle',
            symbolSize: 8,
            itemStyle: {
              normal: {
                color: '#fff'
              }
            },
            lineStyle: {
              normal: {
                color: color.linearBtoG,
                width: 3
              }
            },
            areaStyle: {
              normal: {
                color: color.areaBtoG,
              }
            },
            data: weekLineData,
            lineSmooth: true,
            markLine: {
              silent: true,
              data: [{
                type: 'average',
                name: '平均值'
              }],
              precision: 0,
              label: {
                normal: {
                  formatter: '平均值: \n {c}'
                }
              },
              lineStyle: {
                normal: {
                  color: 'rgba(248,211,81,.7)'
                }
              }
            },
            tooltip: {
              position: 'top',
              formatter: '{c} m',
              backgroundColor: 'rgba(28,152,232,.2)',
              padding: 6
            }
          }, {
            name: '占位背景',
            type: 'bar',
            itemStyle: {
              normal: {
                show: true,
                color: '#000',
                opacity: 0
              }
            },
            silent: true,
            barWidth: '50%',
            data: weekMaxData,
            animation: false
          }, {
            name: '占位背景',
            type: 'bar',
            itemStyle: {
              normal: {
                show: true,
                color: '#000',
                opacity: .1
              }
            },
            silent: true,
            barWidth: '50%',
            barGap: 0,
            data: weekMaxData,
            animation: false
          }],
          backgroundColor: '#304156',
        });
        // 点击事件
        myChart.on('click', function (params) {
          if (params.componentType === 'series' && params.seriesType === 'line') {

            var dataIndex = params.dataIndex;
            myChart.setOption({
              series: [
                {
                  name: '每日跑步指标分布与比较',
                  type: 'radar',
                  symbolSize: 0,
                  data: [{
                    name: '平均指标',
                    value: radarDataAvg[dataIndex],
                    itemStyle: {
                      normal: {
                        color: '#f8d351',
                      }
                    },
                    lineStyle: {
                      normal: {
                        opacity: 0,
                      }
                    },
                    areaStyle: {
                      normal: {
                        color: '#f8d351',
                        shadowBlur: 25,
                        shadowColor: 'rgba(248,211,81,.3)',
                        shadowOffsetX: 0,
                        shadowOffsetY: -10,
                        opacity: 1
                      }
                    },
                  }, {
                    name: '我的指标',
                    value: radarData[dataIndex],
                    itemStyle: {
                      normal: {
                        color: '#43dfa2',
                      }
                    },
                    lineStyle: {
                      normal: {
                        opacity: 0,
                      }
                    },
                    areaStyle: {
                      normal: {
                        color: color.linearGtoB,
                        shadowBlur: 15,
                        shadowColor: 'rgba(0,0,0,.2)',
                        shadowOffsetX: 0,
                        shadowOffsetY: 5,
                        opacity: .8
                      }
                    },
                  }]
                }]
            })
          }
        });
      }
    }
  }
</script>
