!(function () {
  let e, t, r, o, s;
  r = isDarkStyle
    ? ((e = config.colors_dark.textMuted),
      (t = config.colors_dark.headingColor),
      (o = config.colors_dark.bodyColor),
      (s = config.colors_dark.borderColor),
      "dark")
    : ((e = config.colors.textMuted),
      (t = config.colors.headingColor),
      (o = config.colors.bodyColor),
      (s = config.colors.borderColor),
      "light");
  var a = {
      donut: {
        series1: config.colors.success,
        series2: "#8EE753",
        series3: "#AAED7E",
        series4: "#C7F3A9",
      },
      line: {
        series1: config.colors.warning,
        series2: config.colors.primary,
        series3: "#7367f029",
      },
    },
    i = document.querySelector("#shipmentStatisticsChart"),
    n = {
      series: [
        {
          name: "Mission total",
          type: "column",
          data: [38, 45, 33, 38, 32, 50, 48, 40, 42, 37],
        },
        {
          name: "Mission régler",
          type: "line",
          data: [23, 28, 23, 32, 28, 44, 32, 38, 26, 34],
        },
      ],
      chart: {
        height: 280,
        type: "line",
        stacked: !1,
        parentHeightOffset: 0,
        toolbar: { show: !1 },
        zoom: { enabled: !1 },
      },
      markers: {
        size: 5,
        colors: [config.colors.white],
        strokeColors: a.line.series2,
        hover: { size: 6 },
        borderRadius: 4,
      },
      stroke: { curve: "smooth", width: [0, 3], lineCap: "round" },
      legend: {
        show: !0,
        position: "bottom",
        markers: { width: 8, height: 8, offsetX: -3 },
        height: 40,
        offsetY: 10,
        itemMargin: { horizontal: 8, vertical: 0 },
        fontSize: "15px",
        fontFamily: "Inter",
        fontWeight: 400,
        labels: { colors: t, useSeriesColors: !1 },
        offsetY: 10,
      },
      grid: { strokeDashArray: 8, borderColor: s },
      colors: [a.line.series1, a.line.series2],
      fill: { opacity: [1, 1] },
      plotOptions: {
        bar: {
          columnWidth: "30%",
          startingShape: "rounded",
          endingShape: "rounded",
          borderRadius: 4,
        },
      },
      dataLabels: { enabled: !1 },
      xaxis: {
        tickAmount: 12,
        categories: [
          "Janvier",
          "Février",
          "Mars",
          "Avril",
          "Mai",
          "Juin",
          "Juillet",
          "Août",
          "Septembre",
          "Octobre",
          "Novembre",
          "Décembre",
        ],
        labels: {
          style: {
            colors: e,
            fontSize: "13px",
            fontFamily: "Inter",
            fontWeight: 400,
          },
        },
        axisBorder: { show: !1 },
        axisTicks: { show: !1 },
      },
      yaxis: {
        tickAmount: 4,
        min: 10,
        max: 50,
        labels: {
          style: {
            colors: e,
            fontSize: "13px",
            fontFamily: "Inter",
            fontWeight: 400,
          },
          formatter: function (e) {
            return e;
          },
        },
      },
      responsive: [
        {
          breakpoint: 1400,
          options: {
            chart: { height: 270 },
            xaxis: { labels: { style: { fontSize: "10px" } } },
            legend: {
              itemMargin: { vertical: 0, horizontal: 10 },
              fontSize: "13px",
              offsetY: 12,
            },
          },
        },
        {
          breakpoint: 1399,
          options: {
            chart: { height: 415 },
            plotOptions: { bar: { columnWidth: "50%" } },
          },
        },
        {
          breakpoint: 982,
          options: { plotOptions: { bar: { columnWidth: "30%" } } },
        },
        {
          breakpoint: 480,
          options: { chart: { height: 250 }, legend: { offsetY: 7 } },
        },
      ],
    },
    
    i =
      (null !== i && new ApexCharts(i, n).render(),
      document.querySelector("#deliveryExceptionsChart")),
    n = {
      chart: { height: 420, parentHeightOffset: 0, type: "donut" },
      labels: [
        "Incorrect address",
        "Weather conditions",
        "Federal Holidays",
        "Damage during transit",
      ],
      series: [13, 25, 22, 40],
      colors: [
        a.donut.series1,
        a.donut.series2,
        a.donut.series3,
        a.donut.series4,
      ],
      stroke: { width: 0 },
      dataLabels: {
        enabled: !1,
        formatter: function (e, t) {
          return parseInt(e) + "%";
        },
      },
      legend: {
        show: !0,
        position: "bottom",
        offsetY: 10,
        markers: { width: 8, height: 8, offsetX: -5 },
        itemMargin: { horizontal: 16, vertical: 5 },
        fontSize: "13px",
        fontFamily: "Inter",
        fontWeight: 400,
        labels: { colors: t, useSeriesColors: !1 },
      },
      tooltip: { theme: r },
      grid: { padding: { top: 15 } },
      plotOptions: {
        pie: {
          donut: {
            size: "75%",
            labels: {
              show: !0,
              value: {
                fontSize: "24px",
                fontFamily: "Inter",
                color: t,
                fontWeight: 500,
                offsetY: -30,
                formatter: function (e) {
                  return parseInt(e) + "%";
                },
              },
              name: { offsetY: 20, fontFamily: "Inter" },
              total: {
                show: !0,
                fontSize: "15px",
                fontFamily: "Inter",
                label: "AVG. Exceptions",
                color: o,
                formatter: function (e) {
                  return "30%";
                },
              },
            },
          },
        },
      },
      responsive: [{ breakpoint: 420, options: { chart: { height: 360 } } }],
    };
  null !== i && new ApexCharts(i, n).render();
})(),
  $(function () {
    var e = $(".dt-route-vehicles");
    e.length &&
      (e.DataTable({
        ajax: assetsPath + "json/logistics-dashboard.json",
        columns: [
          { data: "id" },
          { data: "id" },
          { data: "location" },
          { data: "start_city" },
          { data: "end_city" },
          { data: "warnings" },
          { data: "progress" },
        ],
        columnDefs: [
          {
            className: "control",
            orderable: !1,
            searchable: !1,
            responsivePriority: 2,
            targets: 0,
            render: function (e, t, r, o) {
              return "";
            },
          },
          {
            targets: 1,
            orderable: !1,
            searchable: !1,
            checkboxes: !0,
            checkboxes: {
              selectAllRender:
                '<input type="checkbox" class="form-check-input">',
            },
            responsivePriority: 3,
            render: function () {
              return '<input type="checkbox" class="dt-checkboxes form-check-input">';
            },
          },
          {
            targets: 2,
            responsivePriority: 1,
            render: function (e, t, r, o) {
              return (
                '<div class="d-flex justify-content-start align-items-center user-name"><div class="avatar-wrapper"><div class="avatar me-3"><span class="avatar-initial rounded-circle bg-label-secondary"><i class="ri-car-line ri-28px"></i></span></div></div><div class="d-flex flex-column"><a class="text-heading fw-medium" href="app-logistics-fleet.html">VOL-' +
                r.location +
                "</a></div></div>"
              );
            },
          },
          {
            targets: 3,
            render: function (e, t, r, o) {
              return (
                '<div class="text-body">' +
                r.start_city +
                ", " +
                r.start_country +
                "</div >"
              );
            },
          },
          {
            targets: 4,
            render: function (e, t, r, o) {
              return (
                '<div class="text-body">' +
                r.end_city +
                ", " +
                r.end_country +
                "</div >"
              );
            },
          },
          {
            targets: -2,
            render: function (e, t, r, o) {
              var r = r.warnings,
                s = {
                  1: { title: "No Warnings", class: "bg-label-success" },
                  2: {
                    title: "Temperature Not Optimal",
                    class: "bg-label-warning",
                  },
                  3: { title: "Ecu Not Responding", class: "bg-label-danger" },
                  4: { title: "Oil Leakage", class: "bg-label-info" },
                  5: { title: "fuel problems", class: "bg-label-primary" },
                };
              return void 0 === s[r]
                ? e
                : '<span class="badge rounded-pill ' +
                    s[r].class +
                    '">' +
                    s[r].title +
                    "</span>";
            },
          },
          {
            targets: -1,
            render: function (e, t, r, o) {
              r = r.progress;
              return (
                '<div class="d-flex align-items-center"><div div class="progress w-100 rounded" style="height: 8px;"><div class="progress-bar" role="progressbar" style="width:' +
                r +
                '%;" aria-valuenow="' +
                r +
                '" aria-valuemin="0" aria-valuemax="100"></div></div><div class="text-body ms-2">' +
                r +
                "%</div></div>"
              );
            },
          },
        ],
        order: [2, "asc"],
        dom: '<"table-responsive"t><"row d-flex align-items-center"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
        displayLength: 5,
        language: {
          paginate: {
            next: '<i class="ri-arrow-right-s-line"></i>',
            previous: '<i class="ri-arrow-left-s-line"></i>',
          },
        },
        responsive: {
          details: {
            display: $.fn.dataTable.Responsive.display.modal({
              header: function (e) {
                return "Details of " + e.data().location;
              },
            }),
            type: "column",
            renderer: function (e, t, r) {
              r = $.map(r, function (e, t) {
                return "" !== e.title
                  ? '<tr data-dt-row="' +
                      e.rowIndex +
                      '" data-dt-column="' +
                      e.columnIndex +
                      '"><td>' +
                      e.title +
                      ":</td> <td>" +
                      e.data +
                      "</td></tr>"
                  : "";
              }).join("");
              return !!r && $('<table class="table"/><tbody />').append(r);
            },
          },
        },
      }),
      $(".dataTables_info").addClass("pt-0"));
  });
