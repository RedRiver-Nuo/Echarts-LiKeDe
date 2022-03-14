// 入口函数
$(function () {
  //功能1：1.2故障监控动页签切换
  // 手动
  $('.monitor .tabs a').on('click', function () {
    // 添加active类动态设置样式
    $(this).addClass('active').siblings('a').removeClass('active');
    // 切换对应页面
    $('.monitor .conten').eq($(this).index()).show().siblings('.conten').hide();
  });
  // 自动版
  let monitorInde = 0;
  setInterval(() => {
    monitorInde = monitorInde == 2 ? 0 : ++monitorInde;
    $('.monitor .tabs a').eq(monitorInde).addClass('active').siblings('a').removeClass('active');
    $('.monitor .conten').eq(monitorInde).show().siblings('.conten').hide();
  }, 10000);

  // 功能2：1.2故障监控轮播图
  function lunbo() {
    $('.monitor .conten .data ul').animate(
      {
        top: -525
      },
      10000,
      'linear',
      function () {
        $('.monitor .conten .data ul').css('top', 0);
      }
    );
  }
  lunbo();
  setInterval(lunbo, 10000);

  // 功能3 3.1订单总量tab栏效果
  //数据数组
  let orderData = [
    { orders: '301,987', amount: '99834' },
    { orders: '20,301', amount: '9834' },
    { orders: '1,987', amount: '3834' },
    { orders: '987', amount: '834' }
  ];
  // 手动功能
  $('.order .head a').on('click', function () {
    // 切换样式
    $(this).addClass('active').siblings('a').removeClass('active');
    // 修改数据
    let ind = $('.order .head a').index(this);
    $('.order .data p').eq(0).text(orderData[ind].orders);
    $('.order .data p').eq(1).text(orderData[ind].amount);
  });
  // 自动功能
  let orderInde = 0;
  setInterval(() => {
    orderInde = orderInde == 4 ? 0 : ++orderInde;
    $('.order .head a').eq(orderInde).addClass('active').siblings('a').removeClass('active');
    $('.order .data p').eq(0).text(orderData[orderInde].orders);
    $('.order .data p').eq(1).text(orderData[orderInde].amount);
  }, 5000);

  // 功能4：全国热榜
  let hotData = [
    [
      //北京 0
      { name: '可爱多', num: '9,086' },
      { name: '娃哈哈', num: '8,341' },
      { name: '喜之郎', num: '7,407' },
      { name: '八喜', num: '6,080' },
      { name: '小洋人', num: '6,724' },
      { name: '好多鱼', num: '2,170' }
    ],
    [
      //河北 1
      { name: '可爱多1', num: '7,407' },
      { name: '娃哈哈1', num: '6,080' },
      { name: '喜之郎1', num: '8,341' },
      { name: '八喜1', num: '4,080' },
      { name: '小洋人1', num: '6,734' },
      { name: '好多鱼1', num: '2,270' }
    ],
    [
      //上海 2
      { name: '可爱多2', num: '1,086' },
      { name: '娃哈哈2', num: '9,341' },
      { name: '喜之郎2', num: '7,207' },
      { name: '八喜2', num: '6,180' },
      { name: '小洋人2', num: '6,724' },
      { name: '好多鱼2', num: '2,270' }
    ],
    [
      //江苏 3
      { name: '可爱多3', num: '9,186' },
      { name: '娃哈哈3', num: '8,541' },
      { name: '喜之郎3', num: '7,707' },
      { name: '八喜3', num: '6,089' },
      { name: '小洋人3', num: '6,724' },
      { name: '好多鱼3', num: '2,171' }
    ],
    [
      //山东 4
      { name: '可爱多4', num: '9,286' },
      { name: '娃哈哈4', num: '8,441' },
      { name: '喜之郎4', num: '1,407' },
      { name: '八喜4', num: '6,180' },
      { name: '小洋人4', num: '4,724' },
      { name: '好多鱼4', num: '6,170' }
    ]
  ];
  // 手动功能
  $('.province .data ul:eq(0) li').on('click', function () {
    $(this).addClass('active').siblings('li').removeClass('active');
    // 修改数据
    let ind = $(this).index();
    let arr = hotData[ind];
    $('.province .data ul:eq(1) li').each(function (i, d) {
      $(d).children('span').text(arr[i].name);
      $(d).children('b').text(arr[i].num);
    });
  });
  // 自动
  let hodInde = 0;
  setInterval(() => {
    hodInde = hodInde == 5 ? 0 : ++hodInde;
    $('.province .data ul:eq(0) li').eq(hodInde).addClass('active').siblings('li').removeClass('active');
    $('.province .data ul:eq(1) li').each(function (i, d) {
      $(d).children('span').text(hotData[hodInde][i].name);
      $(d).children('b').text(hotData[hodInde][i].num);
    });
  }, 5000);
});

// 饼图
$(function () {
  // 2. 初始化echarts
  let myChart = echarts.init(document.querySelector('.point .echarts .pie'));

  // 3.绘制图标（在echarts中画好 复制过来）
  let option = {
    // 调色盘
    color: ['#1d9dff', '#32c5e9', '#9fe6b8', '#0096ff', '#ff9f7f', '#ed8884', '#60cda0', '#006cff'],
    backgroundColor: '#2c343c',
    // 饼图标题
    // title: {
    //   text: 'Customized Pie',
    //   left: 'center',
    //   top: 20,
    //   textStyle: {
    //     color: '#ccc'
    //   }
    // },
    // 鼠标移入提示框
    tooltip: {
      trigger: 'item'
    },
    // visualMap: {
    //   show: false,
    //   min: 80,
    //   max: 600,
    //   inRange: {
    //     colorLightness: [0, 1]
    //   }
    // },
    // 图形主配置
    series: [
      {
        name: '点位发布统计',
        type: 'pie',
        // 园半径【内半径，外半径】
        radius: [8, 60],
        center: ['50%', '50%'],
        data: [
          { value: 110, name: '云南' },
          { value: 160, name: '北京' },
          { value: 180, name: '山东' },
          { value: 180, name: '河北' },
          { value: 160, name: '江苏' },
          { value: 200, name: '浙江' },
          { value: 280, name: '四川' },
          { value: 335, name: '湖北' }
        ],
        roseType: 'radius',
        // label: {
        //   color: 'rgba(255, 255, 255, 0.3)'
        // },
        tooltip: {
          trigger: 'item',
          position: function (point) {
            return [point[0] + 10, point[1] + 10];
          }
        },
        labelLine: {
          // lineStyle: {
          //   color: 'rgba(255, 255, 255, 0.3)'
          // },
          smooth: false,
          length: 3,
          length2: 6
        },
        itemStyle: {
          // color: '#c23531',
          // shadowBlur: 200,
          // shadowColor: 'rgba(0, 0, 0, 0.5)'
        },
        animationType: 'scale',
        animationEasing: 'elasticOut',
        animationDelay: function (idx) {
          return Math.random() * 200;
        }
      }
    ]
  };
  // 4.显示图表
  myChart.setOption(option);
});

// 柱状图
$(function () {
  // 2. 初始化echarts
  let myChart = echarts.init(document.querySelector('.user .echarts .pie'));

  // 3.绘制图标（在echarts中画好 复制过来）
  let item = {
    value: 1000,
    itemStyle: {
      color: '#254065',
      opacity: 0.6
    }
  };

  let option = {
    // 图表颜色
    color: ['#3398DB'],
    // 提示框
    tooltip: {},
    // 坐标系
    grid: {
      containLabel: true,
      left: '3%',
      right: '4%',
      bottom: '13%',
      height: 170
    },
    tooltip: {
      show: true, //显示如否
      trigger: 'axis',
      axisPointer: {
        type: 'none'
      }
    },
    // X轴
    xAxis: {
      type: 'category',
      data: ['上海', '广州', '北京', '深圳', '合肥', '', '......', '', '杭州', '厦门', '济南', '成都', '重庆'],
      // 刻度线
      axisTick: {
        show: false,
        alignWithLabel: true
      },
      // 轴文本
      axisLabel: {
        show: true, //显示如否
        color: '#4c9bfd'
      },
      // 轴线
      axisLine: {
        show: true, //显示如否
        lineStyle: {
          color: '#01586b'
        }
      }
    },
    // y轴
    yAxis: [
      {
        type: 'value',
        // 轴线
        axisLine: {
          show: true,
          lineStyle: {
            color: '#01586b'
          }
        },
        // 刻度线
        axisTick: {
          show: false,
          alignWithLabel: true
        },
        // 轴文本
        axisLabel: {
          show: true, //显示如否
          color: '#4c9bfd'
        },
        //分割线
        splitLine: {
          show: true, //显示如否
          // 分割线样式
          lineStyle: {
            color: '#01586b' //颜色
          }
        }
      },
      {
        axisLine: {
          show: true,
          lineStyle: {
            color: '#01586b'
          }
        }
      }
    ],

    series: [
      {
        name: '用户总量统计',
        data: [2100, 1900, 1700, 1560, 1400, item, item, item, 900, 750, 600, 480, 240],
        type: 'bar',
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#00faf9' },
            { offset: 1, color: '#0064cf' }
          ])
        }
      }
    ]
  };
  // 4.显示图表
  myChart.setOption(option);
});

// 折线图
$(function () {
  // 2. 初始化echarts
  let myChart = echarts.init(document.querySelector('.sales .echarts'));

  // 3.绘制图标（在echarts中画好 复制过来）
  let option = {
    grid: {
      containLabel: true,
      left: '3%',
      right: '4%',
      bottom: '6%',
      height: 120
    },
    title: {
      text: '单位 万',
      textStyle: {
        color: '#4996f5', //颜色
        fontSize: 14
      },
      // left: 30
      top: 5
    },
    tooltip: {
      // trigger: 'axis'
    },
    legend: {
      top: 5,
      right: 10,
      textStyle: {
        color: '#4996f5', //颜色
        fontSize: 14
      }
    },

    xAxis: {
      type: 'category',
      // 留白
      boundaryGap: false,
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      axisTick: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: '#012b48'
        }
      },
      // 标签
      axisLabel: {
        color: '#438be5', //颜色
        align: 'left' //文本对齐方式
      }
    },

    yAxis: {
      type: 'value',
      // 最大坐标
      //自动计算的坐标轴最小间隔大小
      minInterval: 100,
      max: 500,
      // 隐藏刻度线
      axisTick: {
        show: false
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#012b48'
        }
      },
      // 标签文本
      axisLabel: {
        color: '#438be5' //颜色
      },
      // 分割线
      splitLine: {
        show: true,
        lineStyle: {
          color: '#012b48'
        }
      }
    },
    series: [
      {
        name: '最高额度',
        type: 'line',
        smooth: true,
        symbolSize: 8,
        data: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
        itemStyle: {
          color: '#00f2f1'
        }
      },
      {
        name: '最低额度',
        type: 'line',
        smooth: true,
        symbolSize: 8,
        data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
        itemStyle: {
          color: '#dd3c36'
        }
      }
    ]
  };
  // 4.显示图表
  myChart.setOption(option);

  // 自动切换
  let data = [
    [
      [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
      [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
    ],
    [
      [23, 275, 12, 397, 21, 67, 498, 421, 43, 464, 176, 38],
      [43, 31, 465, 23, 278, 21, 382, 64, 43, 260, 19, 34]
    ],
    [
      [34, 87, 32, 76, 198, 12, 32, 87, 239, 36, 329, 36],
      [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
    ],
    [
      [43, 73, 162, 454, 91, 254, 84, 43, 86, 43, 54, 53],
      [32, 54, 34, 187, 32, 45, 462, 68, 193, 254, 54, 24]
    ]
  ];
  let salesInde = 0;
  setInterval(() => {
    salesInde = salesInde == 3 ? 0 : ++salesInde;
    $('.sales .head a').eq(salesInde).addClass('active').siblings('a').removeClass('active');
    let arr = data[salesInde];
    option.series[0].data = arr[0];
    option.series[1].data = arr[1];
    myChart.setOption(option);
  }, 5000);
});

// 环形图
$(function () {
  // 2. 初始化echarts
  let myChart = echarts.init(document.querySelector('.quarter .echarts'));

  // 3.绘制图标（在echarts中画好 复制过来）
  let option = {
    // tooltip: {
    //   trigger: 'item'
    // },
    // legend: {
    //   top: '5%',
    //   left: 'center'
    // },
    series: [
      {
        name: '一季度销售进度',
        type: 'pie',
        center:['50%','60%'],
        radius: ['70%', '90%'],
        // 起始角度
        startAngle: 180,
        // 是否启用防止标签重叠策略
        avoidLabelOverlap: false,
        // 文本标签
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: false,
            fontSize: '40',
            fontWeight: 'bold'
          }
        },
        //引导线
        labelLine: {
          show: false
        },
        data: [
          {
            value: 300,
            itemStyle: {
              //0, 0, 0, 1, // 4个参数用于配置渐变色的起止位置, 这4个参数依次对应右/下/左/上四个方位
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#0063c2'
                },
                {
                  offset: 1,
                  color: '#00c3de'
                }
              ])
            }
          },
          {
            value: 100,
            itemStyle: {
              color: '#d0274d'
            }
          },
          {
            value: 400,
            itemStyle: {
              color: 'transparent'
            }
          }
        ]
      }
    ]
  };
  // 4.显示图表
  myChart.setOption(option);
});

// 迁徙图
$(function () {
  // 2. 初始化echarts
  let myChart = echarts.init(document.querySelector('.map .echarts'));

  // 3.绘制图标（在echarts中画好 复制过来）
  // 指定图表的配置项和数据
  //地图地点经纬度
  let geoCoordMap = {
    新疆玛纳斯基地: [86.22, 44.3],
    九江: [116.0, 29.7],
    新乡: [116.402217, 35.311657],
    ' ': [79.92, 37.12],
    '  ': [86.85, 47.7],
    若羌县: [88.17, 39.02],
    上海: [121.4648, 31.2891],
    东莞: [113.8953, 22.901],
    东营: [118.7073, 37.5513],
    中山: [113.4229, 22.478],
    临汾: [111.4783, 36.1615],
    临沂: [118.3118, 35.2936],
    丹东: [124.541, 40.4242],
    丽水: [119.5642, 28.1854],
    乌鲁木齐: [87.9236, 43.5883],
    佛山: [112.8955, 23.1097],
    保定: [115.0488, 39.0948],
    兰州: [103.5901, 36.3043],
    包头: [110.3467, 41.4899],
    北京: [116.4551, 40.2539],
    北海: [109.314, 21.6211],
    南京: [118.8062, 31.9208],
    南宁: [108.479, 23.1152],
    南昌: [116.0046, 28.6633],
    南通: [121.1023, 32.1625],
    厦门: [118.1689, 24.6478],
    台州: [121.1353, 28.6688],
    合肥: [117.29, 32.0581],
    呼和浩特: [111.4124, 40.4901],
    咸阳: [108.4131, 34.8706],
    哈尔滨: [127.9688, 45.368],
    唐山: [118.4766, 39.6826],
    嘉兴: [120.9155, 30.6354],
    大同: [113.7854, 39.8035],
    大连: [122.2229, 39.4409],
    天津: [117.4219, 39.4189],
    太原: [112.3352, 37.9413],
    威海: [121.9482, 37.1393],
    宁波: [121.5967, 29.6466],
    宝鸡: [107.1826, 34.3433],
    宿迁: [118.5535, 33.7775],
    常州: [119.4543, 31.5582],
    广州: [113.5107, 23.2196],
    廊坊: [116.521, 39.0509],
    延安: [109.1052, 36.4252],
    张家口: [115.1477, 40.8527],
    徐州: [117.5208, 34.3268],
    德州: [116.6858, 37.2107],
    惠州: [114.6204, 23.1647],
    成都: [103.9526, 30.7617],
    扬州: [119.4653, 32.8162],
    承德: [117.5757, 41.4075],
    拉萨: [91.1865, 30.1465],
    无锡: [120.3442, 31.5527],
    日照: [119.2786, 35.5023],
    昆明: [102.9199, 25.4663],
    杭州: [119.5313, 29.8773],
    枣庄: [117.323, 34.8926],
    柳州: [109.3799, 24.9774],
    株洲: [113.5327, 27.0319],
    武汉: [114.3896, 30.6628],
    汕头: [117.1692, 23.3405],
    江门: [112.6318, 22.1484],
    沈阳: [123.1238, 42.1216],
    沧州: [116.8286, 38.2104],
    河源: [114.917, 23.9722],
    泉州: [118.3228, 25.1147],
    泰安: [117.0264, 36.0516],
    泰州: [120.0586, 32.5525],
    济南: [117.1582, 36.8701],
    济宁: [116.8286, 35.3375],
    海口: [110.3893, 19.8516],
    淄博: [118.0371, 36.6064],
    淮安: [118.927, 33.4039],
    深圳: [114.5435, 22.5439],
    清远: [112.9175, 24.3292],
    温州: [120.498, 27.8119],
    渭南: [109.7864, 35.0299],
    湖州: [119.8608, 30.7782],
    湘潭: [112.5439, 27.7075],
    滨州: [117.8174, 37.4963],
    潍坊: [119.0918, 36.524],
    烟台: [120.7397, 37.5128],
    玉溪: [101.9312, 23.8898],
    珠海: [113.7305, 22.1155],
    盐城: [120.2234, 33.5577],
    盘锦: [121.9482, 41.0449],
    石家庄: [114.4995, 38.1006],
    福州: [119.4543, 25.9222],
    秦皇岛: [119.2126, 40.0232],
    绍兴: [120.564, 29.7565],
    聊城: [115.9167, 36.4032],
    肇庆: [112.1265, 23.5822],
    舟山: [122.2559, 30.2234],
    苏州: [120.6519, 31.3989],
    莱芜: [117.6526, 36.2714],
    菏泽: [115.6201, 35.2057],
    营口: [122.4316, 40.4297],
    葫芦岛: [120.1575, 40.578],
    衡水: [115.8838, 37.7161],
    衢州: [118.6853, 28.8666],
    西宁: [101.4038, 36.8207],
    西安: [109.1162, 34.2004],
    贵阳: [106.6992, 26.7682],
    连云港: [119.1248, 34.552],
    邢台: [114.8071, 37.2821],
    邯郸: [114.4775, 36.535],
    郑州: [113.4668, 34.6234],
    鄂尔多斯: [108.9734, 39.2487],
    重庆: [107.7539, 30.1904],
    金华: [120.0037, 29.1028],
    铜川: [109.0393, 35.1947],
    银川: [106.3586, 38.1775],
    镇江: [119.4763, 31.9702],
    长春: [125.8154, 44.2584],
    长沙: [113.0823, 28.2568],
    长治: [112.8625, 36.4746],
    阳泉: [113.4778, 38.0951],
    青岛: [120.4651, 36.3373],
    韶关: [113.7964, 24.7028],
    彭林: [90, 30.4663]
  };

  let BJData = [
    [
      {
        name: '新乡'
      },
      {
        name: '新乡',
        value: 200
      }
    ],
    [
      {
        name: '新乡'
      },
      {
        name: '呼和浩特',
        value: 90
      }
    ],
    [
      {
        name: '新乡'
      },
      {
        name: '哈尔滨',
        value: 90
      }
    ],
    [
      {
        name: '新乡'
      },
      {
        name: '石家庄',
        value: 90
      }
    ],
    [
      {
        name: '新乡'
      },
      {
        name: '昆明',
        value: 30
      }
    ],
    [
      {
        name: '新乡'
      },
      {
        name: '北京',
        value: 100
      }
    ],
    [
      {
        name: '新乡'
      },
      {
        name: '长春',
        value: 40
      }
    ],
    [
      {
        name: '新乡'
      },
      {
        name: '重庆',
        value: 40
      }
    ],
    [
      {
        name: '新乡'
      },
      {
        name: '贵阳',
        value: 50
      }
    ],
    [
      {
        name: '新乡'
      },
      {
        name: '南宁',
        value: 30
      }
    ],
    [
      {
        name: '新乡'
      },
      {
        name: '济南',
        value: 10
      }
    ],
    [
      {
        name: '新乡'
      },
      {
        name: '太原',
        value: 40
      }
    ],
    [
      {
        name: '新乡'
      },
      {
        name: '西安',
        value: 60
      }
    ],
    [
      {
        name: '新乡'
      },
      {
        name: '武汉',
        value: 50
      }
    ],
    [
      {
        name: '新乡'
      },
      {
        name: '合肥',
        value: 40
      }
    ],
    [
      {
        name: '新乡'
      },
      {
        name: '南京',
        value: 30
      }
    ],
    [
      {
        name: '新乡'
      },
      {
        name: '沈阳',
        value: 20
      }
    ],
    [
      {
        name: '新乡'
      },
      {
        name: '成都',
        value: 10
      }
    ],
    [
      {
        name: '新乡'
      },
      {
        name: '彭林',
        value: 80
      }
    ]
  ];

  let SHData = [
    [
      {
        name: '九江'
      },
      {
        name: '九江',
        value: 200
      }
    ],

    [
      {
        name: '九江'
      },
      {
        name: '长沙',
        value: 95
      }
    ],
    [
      {
        name: '九江'
      },
      {
        name: '武汉',
        value: 30
      }
    ],
    [
      {
        name: '九江'
      },
      {
        name: '南昌',
        value: 20
      }
    ],
    [
      {
        name: '九江'
      },
      {
        name: '合肥',
        value: 70
      }
    ],
    [
      {
        name: '九江'
      },
      {
        name: '南京',
        value: 60
      }
    ],
    [
      {
        name: '九江'
      },
      {
        name: '福州',
        value: 50
      }
    ],
    [
      {
        name: '九江'
      },
      {
        name: '上海',
        value: 100
      }
    ],
    [
      {
        name: '九江'
      },
      {
        name: '深圳',
        value: 100
      }
    ],
    [
      {
        name: '九江'
      },
      {
        name: '彭林',
        value: 80
      }
    ]
  ];

  let GZData = [
    [
      {
        name: '新疆玛纳斯基地'
      },
      {
        name: '新疆玛纳斯基地',
        value: 200
      }
    ],
    [
      {
        name: '新疆玛纳斯基地'
      },
      {
        name: '  ',
        value: 90
      }
    ],
    [
      {
        name: '新疆玛纳斯基地'
      },
      {
        name: ' ',
        value: 40
      }
    ],
    [
      {
        name: '新疆玛纳斯基地'
      },
      {
        name: '呼和浩特',
        value: 90
      }
    ],
    [
      {
        name: '新疆玛纳斯基地'
      },
      {
        name: '昆明',
        value: 40
      }
    ],
    [
      {
        name: '新疆玛纳斯基地'
      },
      {
        name: '成都',
        value: 10
      }
    ],
    [
      {
        name: '新疆玛纳斯基地'
      },
      {
        name: '兰州',
        value: 95
      }
    ],
    [
      {
        name: '新疆玛纳斯基地'
      },
      {
        name: '银川',
        value: 90
      }
    ],
    [
      {
        name: '新疆玛纳斯基地'
      },
      {
        name: '西宁',
        value: 80
      }
    ],
    [
      {
        name: '新疆玛纳斯基地'
      },
      {
        name: '1111',
        value: 80
      }
    ]
  ];

  let planePath =
    'path://M.6,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705';

  let convertData = function (data) {
    let res = [];
    for (let i = 0; i < data.length; i++) {
      let dataItem = data[i];
      let fromCoord = geoCoordMap[dataItem[0].name];
      let toCoord = geoCoordMap[dataItem[1].name];
      if (fromCoord && toCoord) {
        res.push([
          {
            coord: fromCoord
          },
          {
            coord: toCoord
          }
        ]);
      }
    }
    return res;
  };

  let color = ['#3ed4ff', '#ffa022', '#a6c84c'];
  let series = [];
  [
    ['新乡', BJData],
    ['九江', SHData],
    ['新疆', GZData]
  ].forEach(function (item, i) {
    series.push(
      {
        name: item[0] + ' Top10',
        type: 'lines',
        zlevel: 1,
        effect: {
          show: true,
          period: 6,
          trailLength: 0.7,
          color: '#fff',
          symbolSize: 3
        },
        lineStyle: {
          normal: {
            color: color[i],
            width: 0,
            curveness: 0.2
          }
        },
        data: convertData(item[1])
      },
      {
        name: item[0] + ' Top10',
        type: 'lines',
        zlevel: 2,
        effect: {
          show: true,
          period: 6,
          trailLength: 0,
          symbol: planePath,
          symbolSize: 15
        },
        lineStyle: {
          normal: {
            color: color[i],
            width: 1,
            opacity: 0.4,
            curveness: 0.2
          }
        },
        data: convertData(item[1])
      },
      {
        name: item[0] + ' Top10',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: {
          brushType: 'stroke'
        },
        label: {
          normal: {
            show: true,
            position: 'right',
            formatter: '{b}'
          }
        },
        symbolSize: function (val) {
          return val[2] / 8;
        },
        itemStyle: {
          normal: {
            color: color[i]
          }
        },
        data: item[1].map(function (dataItem) {
          return {
            name: dataItem[1].name,
            value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
          };
        })
      }
    );
  });

  let option = {
    backgroundColor: '#080a20',
    // title: {
    //     text: '模拟数据',
    //     subtext: '数据纯属虚构',
    //     left: 'left',
    //     textStyle: {
    //         color: '#fff'
    //     }
    // },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      top: 'bottom',
      left: 'right',
      data: ['北京 Top10', '上海 Top10', '广州 Top10'],
      textStyle: {
        color: '#fff'
      },
      selectedMode: 'single'
    },
    geo: {
      map: 'china',
      label: {
        emphasis: {
          show: false
        }
      },
      //是否开启鼠标缩放和平移漫游
      roam: false,
      //当前视角的缩放比例
      zoom: 1.2,
      itemStyle: {
        normal: {
          areaColor: '#132937',
          borderColor: '#0692a4'
        },
        emphasis: {
          areaColor: '#0b1c2d'
        }
      }
    },
    series: series
  };

  // 4.显示图表
  myChart.setOption(option);
});
