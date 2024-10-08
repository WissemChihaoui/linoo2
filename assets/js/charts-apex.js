!(function () {
  let e, o, r, t, s;
  t = (
    isDarkStyle
      ? ((e = config.colors_dark.cardColor),
        (o = config.colors_dark.headingColor),
        (r = config.colors_dark.textMuted),
        (s = config.colors_dark.bodyColor),
        config.colors_dark)
      : ((e = config.colors.cardColor),
        (o = config.colors.headingColor),
        (r = config.colors.textMuted),
        (s = config.colors.bodyColor),
        config.colors)
  ).borderColor;
  const a = { series1: "#826af9", series2: "#d2b0ff", bg: "#f8d3ff" },
    i = {
      series1: "#fdd835",
      series2: "#32baff",
      series3: "#ffa1a1",
      series4: "#7367f0",
      series5: "#29dac7",
    },
    n = { series1: "#ab7efd", series2: "#b992fe", series3: "#e0cffe" };
  function l(e, o) {
    let r = 0;
    for (var t = []; r < e; ) {
      var s = "w" + (r + 1).toString(),
        a = Math.floor(Math.random() * (o.max - o.min + 1)) + o.min;
      t.push({ x: s, y: a }), r++;
    }
    return t;
  }
  var c = document.querySelector("#lineAreaChart"),
    d = {
      chart: {
        height: 400,
        fontFamily: "Inter",
        type: "area",
        parentHeightOffset: 0,
        toolbar: { show: !1 },
      },
      dataLabels: { enabled: !1 },
      stroke: { show: !1, curve: "straight" },
      legend: {
        show: !0,
        position: "top",
        horizontalAlign: "start",
        fontSize: "13px",
        markers: { width: 10, height: 10 },
        labels: { colors: s, useSeriesColors: !1 },
      },
      grid: { borderColor: t, xaxis: { lines: { show: !0 } } },
      colors: [n.series3, n.series2, n.series1],
      series: [
        {
          name: "Visits",
          data: [
            100, 120, 90, 170, 130, 160, 140, 240, 220, 180, 270, 280, 375,
          ],
        },
        {
          name: "Clicks",
          data: [60, 80, 70, 110, 80, 100, 90, 180, 160, 140, 200, 220, 275],
        },
        {
          name: "Sales",
          data: [20, 40, 30, 70, 40, 60, 50, 140, 120, 100, 140, 180, 220],
        },
      ],
      xaxis: {
        categories: [
          "7/12",
          "8/12",
          "9/12",
          "10/12",
          "11/12",
          "12/12",
          "13/12",
          "14/12",
          "15/12",
          "16/12",
          "17/12",
          "18/12",
          "19/12",
          "20/12",
        ],
        axisBorder: { show: !1 },
        axisTicks: { show: !1 },
        labels: { style: { colors: r, fontSize: "13px" } },
      },
      yaxis: { labels: { style: { colors: r, fontSize: "13px" } } },
      fill: { opacity: 1, type: "solid" },
      tooltip: { shared: !1 },
    },
    c =
      (null !== c && new ApexCharts(c, d).render(),
      document.querySelector("#barChart")),
    d = {
      chart: {
        height: 400,
        fontFamily: "Inter",
        type: "bar",
        stacked: !0,
        parentHeightOffset: 0,
        toolbar: { show: !1 },
      },
      plotOptions: {
        bar: {
          columnWidth: "15%",
          colors: {
            backgroundBarColors: [a.bg, a.bg, a.bg, a.bg, a.bg],
            backgroundBarRadius: 10,
          },
        },
      },
      dataLabels: { enabled: !1 },
      legend: {
        show: !0,
        position: "top",
        horizontalAlign: "start",
        fontSize: "13px",
        markers: { width: 10, height: 10 },
        labels: { colors: s, useSeriesColors: !1 },
      },
      colors: [a.series1, a.series2],
      stroke: { show: !0, colors: ["transparent"] },
      grid: { borderColor: t, xaxis: { lines: { show: !0 } } },
      series: [
        { name: "Commission", data: [85, 100, 30, 40, 95, 90, 30, 110, 62, 20] },
      ],
      xaxis: {
        categories: [
          "08/24",
          "07/24",
          "06/24",
          "05/24",
          "04/24",
          "03/24",
          "02/24",
          "01/24",
          "12/24",
          "11/24",
        ],
        axisBorder: { show: !1 },
        axisTicks: { show: !1 },
        labels: { style: { colors: r, fontSize: "13px" } },
      },
      yaxis: { labels: { style: { colors: r, fontSize: "13px" } } },
      fill: { opacity: 1 },
    },
    c =
      (null !== c && new ApexCharts(c, d).render(),
      document.querySelector("#scatterChart")),
    d = {
      chart: {
        height: 400,
        fontFamily: "Inter",
        type: "scatter",
        zoom: { enabled: !0, type: "xy" },
        parentHeightOffset: 0,
        toolbar: { show: !1 },
      },
      grid: { borderColor: t, xaxis: { lines: { show: !0 } } },
      legend: {
        show: !0,
        position: "top",
        horizontalAlign: "start",
        fontSize: "13px",
        markers: { width: 10, height: 10 },
        labels: { colors: s, useSeriesColors: !1 },
      },
      colors: [
        config.colors.warning,
        config.colors.primary,
        config.colors.success,
      ],
      series: [
        {
          name: "Angular",
          data: [
            [5.4, 170],
            [5.4, 100],
            [5.7, 110],
            [5.9, 150],
            [6, 200],
            [6.3, 170],
            [5.7, 140],
            [5.9, 130],
            [7, 150],
            [8, 120],
            [9, 170],
            [10, 190],
            [11, 220],
            [12, 170],
            [13, 230],
          ],
        },
        {
          name: "Vue",
          data: [
            [14, 220],
            [15, 280],
            [16, 230],
            [18, 320],
            [17.5, 280],
            [19, 250],
            [20, 350],
            [20.5, 320],
            [20, 320],
            [19, 280],
            [17, 280],
            [22, 300],
            [18, 120],
          ],
        },
        {
          name: "React",
          data: [
            [14, 290],
            [13, 190],
            [20, 220],
            [21, 350],
            [21.5, 290],
            [22, 220],
            [23, 140],
            [19, 400],
            [20, 200],
            [22, 90],
            [20, 120],
          ],
        },
      ],
      xaxis: {
        tickAmount: 10,
        axisBorder: { show: !1 },
        axisTicks: { show: !1 },
        labels: {
          formatter: function (e) {
            return parseFloat(e).toFixed(1);
          },
          style: { colors: r, fontSize: "13px" },
        },
      },
      yaxis: { labels: { style: { colors: r, fontSize: "13px" } } },
    },
    c =
      (null !== c && new ApexCharts(c, d).render(),
      document.querySelector("#totalRegler")),
    d = {
      chart: {
        height: 400,
        fontFamily: "Inter",
        type: "line",
        parentHeightOffset: 0,
        zoom: { enabled: !1 },
        toolbar: { show: !1 },
      },
      series: [
        {
          data: [
            1230, 1400, 987, 632, 1000, 1244, 1300, 999,
          ],
        },
      ],
      markers: {
        strokeWidth: 7,
        strokeOpacity: 1,
        strokeColors: [e],
        colors: [config.colors.warning],
      },
      dataLabels: { enabled: !1 },
      stroke: { curve: "straight" },
      colors: [config.colors.warning],
      grid: {
        borderColor: t,
        xaxis: { lines: { show: !0 } },
        padding: { top: -20 },
      },
      tooltip: {
        custom: function ({ series: e, seriesIndex: o, dataPointIndex: r }) {
          return '<div class="px-3 py-2"><span>' + e[o][r] + "€</span></div>";
        },
      },
      xaxis: {
        categories: [
          "Janvier",
          "Février",
          "Mars",
          "Avril",
          "Mai",
          "Juin",
          "Juillet",
          "Août"
        ],
        axisBorder: { show: !1 },
        axisTicks: { show: !1 },
        labels: { style: { colors: r, fontSize: "13px" } },
      },
      yaxis: { labels: { style: { colors: r, fontSize: "13px" } } },
    },
    c =
      (null !== c && new ApexCharts(c, d).render(),
      document.querySelector("#horizontalBarChart")),
    d = {
      chart: {
        height: 400,
        fontFamily: "Inter",
        type: "bar",
        toolbar: { show: !1 },
      },
      plotOptions: {
        bar: {
          horizontal: !0,
          barHeight: "30%",
          startingShape: "rounded",
          borderRadius: 8,
        },
      },
      grid: {
        borderColor: t,
        xaxis: { lines: { show: !1 } },
        padding: { top: -20, bottom: -12 },
      },
      colors: config.colors.info,
      dataLabels: { enabled: !1 },
      series: [{ data: [700, 350, 480, 600, 210, 550, 150] }],
      xaxis: {
        categories: [
          "MON, 11",
          "THU, 14",
          "FRI, 15",
          "MON, 18",
          "WED, 20",
          "FRI, 21",
          "MON, 23",
        ],
        axisBorder: { show: !1 },
        axisTicks: { show: !1 },
        labels: { style: { colors: r, fontSize: "13px" } },
      },
      yaxis: { labels: { style: { colors: r, fontSize: "13px" } } },
    };
  null !== c && new ApexCharts(c, d).render();
  const h = document.querySelector("#candleStickChart"),
    p = "#28c76f",
    f = "#ea5455",
    m = {
      chart: {
        height: 410,
        fontFamily: "Inter",
        type: "candlestick",
        parentHeightOffset: 0,
        toolbar: { show: !1 },
      },
      series: [
        {
          data: [
            { x: new Date(15387786e5), y: [150, 170, 50, 100] },
            { x: new Date(15387804e5), y: [200, 400, 170, 330] },
            { x: new Date(15387822e5), y: [330, 340, 250, 280] },
            { x: new Date(1538784e6), y: [300, 330, 200, 320] },
            { x: new Date(15387858e5), y: [320, 450, 280, 350] },
            { x: new Date(15387876e5), y: [300, 350, 80, 250] },
            { x: new Date(15387894e5), y: [200, 330, 170, 300] },
            { x: new Date(15387912e5), y: [200, 220, 70, 130] },
            { x: new Date(1538793e6), y: [220, 270, 180, 250] },
            { x: new Date(15387948e5), y: [200, 250, 80, 100] },
            { x: new Date(15387966e5), y: [150, 170, 50, 120] },
            { x: new Date(15387984e5), y: [110, 450, 10, 420] },
            { x: new Date(15388002e5), y: [400, 480, 300, 320] },
            { x: new Date(1538802e6), y: [380, 480, 350, 450] },
          ],
        },
      ],
      xaxis: {
        type: "datetime",
        axisBorder: { show: !1 },
        axisTicks: { show: !1 },
        labels: { style: { colors: r, fontSize: "13px" } },
      },
      yaxis: {
        tooltip: { enabled: !0 },
        labels: { style: { colors: r, fontSize: "13px" } },
      },
      grid: {
        borderColor: t,
        xaxis: { lines: { show: !0 } },
        padding: { top: -20 },
      },
      plotOptions: {
        candlestick: { colors: { upward: p, downward: f } },
        bar: { columnWidth: "40%" },
      },
    };
  null !== h && new ApexCharts(h, m).render();
  (c = document.querySelector("#heatMapChart")),
    (d = {
      chart: {
        height: 350,
        fontFamily: "Inter",
        type: "heatmap",
        parentHeightOffset: 0,
        toolbar: { show: !1 },
      },
      plotOptions: {
        heatmap: {
          enableShades: !1,
          colorScale: {
            ranges: [
              { from: 0, to: 10, name: "0-10", color: "#b9b3f8" },
              { from: 11, to: 20, name: "10-20", color: "#aba4f6" },
              { from: 21, to: 30, name: "20-30", color: "#9d95f5" },
              { from: 31, to: 40, name: "30-40", color: "#8f85f3" },
              { from: 41, to: 50, name: "40-50", color: "#8176f2" },
              { from: 51, to: 60, name: "50-60", color: "#7367f0" },
            ],
          },
        },
      },
      dataLabels: { enabled: !1 },
      grid: { show: !1 },
      legend: {
        show: !0,
        position: "bottom",
        fontSize: "13px",
        labels: { colors: s, useSeriesColors: !1 },
        markers: { offsetY: 0, offsetX: -3, height: 10, width: 10 },
        itemMargin: { vertical: 3, horizontal: 10 },
      },
      stroke: { curve: "smooth", width: 2, lineCap: "round", colors: [e] },
      series: [
        { name: "SUN", data: l(24, { min: 0, max: 60 }) },
        { name: "MON", data: l(24, { min: 0, max: 60 }) },
        { name: "TUE", data: l(24, { min: 0, max: 60 }) },
        { name: "WED", data: l(24, { min: 0, max: 60 }) },
        { name: "THU", data: l(24, { min: 0, max: 60 }) },
        { name: "FRI", data: l(24, { min: 0, max: 60 }) },
        { name: "SAT", data: l(24, { min: 0, max: 60 }) },
      ],
      xaxis: {
        labels: { show: !1, style: { colors: r, fontSize: "11px" } },
        axisBorder: { show: !1 },
        axisTicks: { show: !1 },
      },
      yaxis: { labels: { style: { colors: r, fontSize: "13px" } } },
    }),
    null !== c && new ApexCharts(c, d).render(),
    (c = document.querySelector("#radialBarChart")),
    (d = {
      chart: { height: 380, fontFamily: "Inter", type: "radialBar" },
      colors: [i.series1, i.series2, i.series4],
      plotOptions: {
        radialBar: {
          size: 185,
          hollow: { size: "40%" },
          track: { margin: 10, background: config.colors_label.secondary },
          dataLabels: {
            name: { fontSize: "2rem" },
            value: { fontSize: "0.9375rem", color: s },
            total: {
              show: !0,
              fontWeight: 500,
              fontSize: "0.9375rem",
              color: o,
              label: "Comments",
              formatter: function (e) {
                return "80%";
              },
            },
          },
        },
      },
      grid: { borderColor: t, padding: { top: -29, bottom: -31 } },
      legend: {
        show: !0,
        position: "bottom",
        fontSize: "13px",
        markers: { width: 10, height: 10 },
        labels: { colors: s, useSeriesColors: !1 },
      },
      stroke: { lineCap: "round" },
      series: [80, 50, 35],
      labels: ["Comments", "Replies", "Shares"],
    }),
    null !== c && new ApexCharts(c, d).render(),
    (c = document.querySelector("#radarChart")),
    (d = {
      chart: {
        height: 350,
        fontFamily: "Inter",
        type: "radar",
        toolbar: { show: !1 },
        dropShadow: { enabled: !1, blur: 8, left: 1, top: 1, opacity: 0.2 },
      },
      legend: {
        show: !0,
        position: "bottom",
        fontSize: "13px",
        markers: { width: 10, height: 10 },
        labels: { colors: s, useSeriesColors: !1 },
      },
      plotOptions: {
        radar: { polygons: { strokeColors: t, connectorColors: t } },
      },
      yaxis: { show: !1 },
      series: [
        { name: "iPhone 12", data: [41, 64, 81, 60, 42, 42, 33, 23] },
        { name: "Samsung s20", data: [65, 46, 42, 25, 58, 63, 76, 43] },
      ],
      colors: [i.series4, i.series3],
      xaxis: {
        categories: [
          "Battery",
          "Brand",
          "Camera",
          "Memory",
          "Storage",
          "Display",
          "OS",
          "Price",
        ],
        labels: {
          show: !0,
          style: { colors: [r, r, r, r, r, r, r, r], fontSize: "13px" },
        },
      },
      fill: { opacity: [1, 0.8] },
      stroke: { show: !1, width: 0 },
      markers: { size: 0 },
      grid: { show: !1, padding: { top: -20, bottom: -20 } },
    }),
    null !== c && new ApexCharts(c, d).render(),
    (c = document.querySelector("#donutChart")),
    (d = {
      chart: { height: 390, fontFamily: "Inter", type: "donut" },
      labels: ["Operational", "Networking", "Hiring", "R&D"],
      series: [42, 7, 25, 25],
      colors: [i.series1, i.series3, i.series4, i.series5],
      stroke: { show: !1, curve: "straight" },
      dataLabels: {
        enabled: !0,
        formatter: function (e, o) {
          return parseInt(e, 10) + "%";
        },
        style: { fontSize: "15px", fontWeight: "normal" },
        dropShadow: { enabled: !1 },
      },
      legend: {
        show: !0,
        position: "bottom",
        fontSize: "13px",
        markers: { offsetX: -3, width: 10, height: 10 },
        itemMargin: { vertical: 3, horizontal: 10 },
        labels: { colors: s, useSeriesColors: !1 },
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: !0,
              name: { fontSize: "2rem" },
              value: {
                fontSize: "0.9375rem",
                fontWeight: 500,
                color: s,
                formatter: function (e) {
                  return parseInt(e, 10) + "%";
                },
              },
              total: {
                show: !0,
                fontSize: "0.9375rem",
                fontWeight: 500,
                color: o,
                label: "Operational",
                formatter: function (e) {
                  return "42%";
                },
              },
            },
          },
        },
      },
      responsive: [
        {
          breakpoint: 992,
          options: {
            chart: { height: 380 },
            legend: {
              position: "bottom",
              labels: { colors: s, useSeriesColors: !1 },
            },
          },
        },
        {
          breakpoint: 576,
          options: {
            chart: { height: 320 },
            plotOptions: {
              pie: {
                donut: {
                  labels: {
                    show: !0,
                    name: { fontSize: "1.5rem" },
                    value: { fontSize: "1rem" },
                    total: { fontSize: "1.5rem" },
                  },
                },
              },
            },
            legend: {
              position: "bottom",
              labels: { colors: s, useSeriesColors: !1 },
            },
          },
        },
        {
          breakpoint: 420,
          options: { chart: { height: 280 }, legend: { show: !1 } },
        },
        {
          breakpoint: 360,
          options: { chart: { height: 250 }, legend: { show: !1 } },
        },
      ],
    });
  null !== c && new ApexCharts(c, d).render();
})();
