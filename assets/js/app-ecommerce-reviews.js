!(function () {
  let e;
  e = (isDarkStyle ? config.colors_dark : config.colors).textMuted;
  var t = document.querySelector("#reviewsChart"),
    a = {
      chart: { height: 160, width: 190, type: "bar", toolbar: { show: !1 } },
      plotOptions: {
        bar: {
          barHeight: "75%",
          columnWidth: "40%",
          startingShape: "rounded",
          endingShape: "rounded",
          borderRadius: 5,
          distributed: !0,
        },
      },
      grid: { show: !1, padding: { top: -25, bottom: -12 } },
      colors: [
        config.colors_label.success,
        config.colors_label.success,
        config.colors_label.success,
        config.colors_label.success,
        config.colors.success,
        config.colors_label.success,
        config.colors_label.success,
      ],
      dataLabels: { enabled: !1 },
      series: [{ data: [20, 40, 60, 80, 100, 80, 60] }],
      legend: { show: !1 },
      xaxis: {
        categories: ["M", "T", "W", "T", "F", "S", "S"],
        axisBorder: { show: !1 },
        axisTicks: { show: !1 },
        labels: { style: { colors: e, fontSize: "13px" } },
      },
      yaxis: { labels: { show: !1 } },
      responsive: [
        {
          breakpoint: 0,
          options: {
            chart: { width: "100%" },
            plotOptions: { bar: { columnWidth: "40%" } },
          },
        },
        {
          breakpoint: 1440,
          options: {
            chart: { height: 150, width: 190, toolbar: { show: !1 } },
            plotOptions: { bar: { borderRadius: 6, columnWidth: "40%" } },
          },
        },
        {
          breakpoint: 1400,
          options: {
            plotOptions: { bar: { borderRadius: 6, columnWidth: "40%" } },
          },
        },
        {
          breakpoint: 1200,
          options: {
            chart: { height: 130, width: 190, toolbar: { show: !1 } },
            plotOptions: { bar: { borderRadius: 6, columnWidth: "40%" } },
          },
        },
        {
          breakpoint: 992,
          chart: { height: 150, width: 190, toolbar: { show: !1 } },
          options: {
            plotOptions: { bar: { borderRadius: 5, columnWidth: "40%" } },
          },
        },
        {
          breakpoint: 883,
          options: {
            plotOptions: { bar: { borderRadius: 5, columnWidth: "40%" } },
          },
        },
        {
          breakpoint: 768,
          options: {
            chart: { height: 150, width: 190, toolbar: { show: !1 } },
            plotOptions: { bar: { borderRadius: 4, columnWidth: "40%" } },
          },
        },
        {
          breakpoint: 576,
          options: {
            chart: { width: "100%", height: "200", type: "bar" },
            plotOptions: { bar: { borderRadius: 6, columnWidth: "30% " } },
          },
        },
        {
          breakpoint: 420,
          options: {
            plotOptions: {
              chart: { width: "100%", height: "200", type: "bar" },
              bar: { borderRadius: 3, columnWidth: "30%" },
            },
          },
        },
      ],
    };
  null !== t && new ApexCharts(t, a).render();
})(),
  $(function () {
    let t, a, s;
    s = (
      isDarkStyle
        ? ((t = config.colors_dark.borderColor),
          (a = config.colors_dark.bodyBg),
          config.colors_dark)
        : ((t = config.colors.borderColor),
          (a = config.colors.bodyBg),
          config.colors)
    ).headingColor;
    var e,
      r = $(".datatables-review"),
      o = {
        Pending: { title: "Pending", class: "bg-label-warning" },
        Published: { title: "Published", class: "bg-label-success" },
      };
    r.length &&
      ((e = r.DataTable(
        {
        ajax: assetsPath + "json/app-ecommerce-reviews.json",
        columns: [
          { data: "" },
          { data: "id" },
          { data: "product" },
          { data: "reviewer" },
          { data: "review" },
          { data: "date" },
          { data: "review" },
          { data: " " },
        ],
        columnDefs: [
          {
            className: "control",
            searchable: !1,
            orderable: !1,
            responsivePriority: 2,
            targets: 0,
            render: function (e, t, a, s) {
              return "";
            },
          },
          {
            targets: 1,
            orderable: !1,
            searchable: !1,
            responsivePriority: 3,
            checkboxes: !0,
            checkboxes: {
              selectAllRender:
                '<input type="checkbox" class="form-check-input">',
            },
            render: function () {
              return '<input type="checkbox" class="dt-checkboxes form-check-input">';
            },
          },
          {
            targets: 2,
            render: function (e, t, a, s) {
              var r = a.prof;
              return (
                r
              );
            },
          },
          {
            targets: 3,
            responsivePriority: 1,
            render: function (e, t, a, s) {
              var r = a.reviewer;
              return (
                '<div class="d-flex justify-content-start align-items-center customer-name"><div class="d-flex flex-column"><a href="app-ecommerce-customer-details-overview.html"><span class="fw-medium">' +
                r +
                '</span></a></div></div>'
              );
            },
          },
          {
            targets: 4,
            responsivePriority: 2,
            render: function (e, t, a, s) {
              
              return (
               "hey"
              );
            },
          },
          {
            targets: 5,
            render: function (e, t, a, s) {
              return (
                '<span class="text-nowrap">' +
                new Date(a.date).toLocaleDateString("fr-FR", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                }) +
                "</span>"
              );
            },
          },
          {
            targets: 6,
            render: function (e, t, a, s) {
              a = a.para;
              return( a)
          }},
          {
            targets: -1,
            title: "Actions",
            searchable: !1,
            orderable: !1,
            render: function (e, t, a, s) {
              return '<div><div class="dropdown"><a href="javascript:;" class="btn btn-sm btn-icon btn-text-secondary rounded-pill waves-effect dropdown-toggle hide-arrow p-0" data-bs-toggle="dropdown"><i class="ri-more-2-line ri-20px"></i></a><div class="dropdown-menu dropdown-menu-end"><a href="javascript:;" class="dropdown-item">Download</a><a href="javascript:;" class="dropdown-item">Edit</a><a href="javascript:;" class="dropdown-item">Duplicate</a><div class="dropdown-divider"></div><a href="javascript:;" class="dropdown-item delete-record text-danger">Delete</a></div></div></div>';
            },
          },
        ],
        order: [[2, "asc"]],
        dom: '<"card-header d-flex align-items-md-center flex-wrap pb-md-0 pt-0"<"me-5 ms-n2"f><"dt-action-buttons text-xl-end text-lg-start text-md-end text-start d-flex align-items-end align-items-md-center justify-content-md-end pt-0 gap-4 flex-wrap"l<"review_filter"> <"mx-0 me-md-n3 mt-sm-0"B>>>t<"row mx-2"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
        language: {
          sLengthMenu: "_MENU_",
          search: "",
          searchPlaceholder: "Search",
          paginate: {
            next: '<i class="ri-arrow-right-s-line"></i>',
            previous: '<i class="ri-arrow-left-s-line"></i>',
          },
        },
        buttons: [
          {
            extend: "collection",
            className:
              "btn btn-primary dropdown-toggle me-3 waves-effect waves-light",
            text: '<i class="ri-upload-2-line ri-16px me-1"></i> <span class="d-none d-sm-inline-block">Export</span>',
            buttons: [
              {
                extend: "print",
                text: '<i class="ri-printer-line me-1" ></i>Print',
                className: "dropdown-item",
                exportOptions: {
                  columns: [1, 2, 3, 4, 5],
                  format: {
                    body: function (e, t, a) {
                      var s;
                      return e.length <= 0
                        ? e
                        : ((e = $.parseHTML(e)),
                          (s = ""),
                          $.each(e, function (e, t) {
                            void 0 !== t.classList &&
                            t.classList.contains("customer-name")
                              ? (s += t.lastChild.firstChild.textContent)
                              : void 0 === t.innerText
                              ? (s += t.textContent)
                              : (s += t.innerText);
                          }),
                          s);
                    },
                  },
                },
                customize: function (e) {
                  $(e.document.body)
                    .css("color", s)
                    .css("border-color", t)
                    .css("background-color", a),
                    $(e.document.body)
                      .find("table")
                      .addClass("compact")
                      .css("color", "inherit")
                      .css("border-color", "inherit")
                      .css("background-color", "inherit");
                },
              },
              {
                extend: "csv",
                text: '<i class="ri-file-text-line me-1" ></i>Csv',
                className: "dropdown-item",
                exportOptions: {
                  columns: [1, 2, 3, 4, 5],
                  format: {
                    body: function (e, t, a) {
                      var s;
                      return e.length <= 0
                        ? e
                        : ((e = $.parseHTML(e)),
                          (s = ""),
                          $.each(e, function (e, t) {
                            void 0 !== t.classList &&
                            t.classList.contains("customer-name")
                              ? (s += t.lastChild.firstChild.textContent)
                              : void 0 === t.innerText
                              ? (s += t.textContent)
                              : (s += t.innerText);
                          }),
                          s);
                    },
                  },
                },
              },
              {
                extend: "excel",
                text: '<i class="ri-file-excel-line me-1"></i>Excel',
                className: "dropdown-item",
                exportOptions: {
                  columns: [1, 2, 3, 4, 5],
                  format: {
                    body: function (e, t, a) {
                      var s;
                      return e.length <= 0
                        ? e
                        : ((e = $.parseHTML(e)),
                          (s = ""),
                          $.each(e, function (e, t) {
                            void 0 !== t.classList &&
                            t.classList.contains("customer-name")
                              ? (s += t.lastChild.firstChild.textContent)
                              : void 0 === t.innerText
                              ? (s += t.textContent)
                              : (s += t.innerText);
                          }),
                          s);
                    },
                  },
                },
              },
              {
                extend: "pdf",
                text: '<i class="ri-file-pdf-line me-1"></i>Pdf',
                className: "dropdown-item",
                exportOptions: {
                  columns: [1, 2, 3, 4, 5],
                  format: {
                    body: function (e, t, a) {
                      var s;
                      return e.length <= 0
                        ? e
                        : ((e = $.parseHTML(e)),
                          (s = ""),
                          $.each(e, function (e, t) {
                            void 0 !== t.classList &&
                            t.classList.contains("customer-name")
                              ? (s += t.lastChild.firstChild.textContent)
                              : void 0 === t.innerText
                              ? (s += t.textContent)
                              : (s += t.innerText);
                          }),
                          s);
                    },
                  },
                },
              },
              {
                extend: "copy",
                text: '<i class="ri-file-copy-line me-1"></i>Copy',
                className: "dropdown-item",
                exportOptions: {
                  columns: [1, 2, 3, 4, 5],
                  format: {
                    body: function (e, t, a) {
                      var s;
                      return e.length <= 0
                        ? e
                        : ((e = $.parseHTML(e)),
                          (s = ""),
                          $.each(e, function (e, t) {
                            void 0 !== t.classList &&
                            t.classList.contains("customer-name")
                              ? (s += t.lastChild.firstChild.textContent)
                              : void 0 === t.innerText
                              ? (s += t.textContent)
                              : (s += t.innerText);
                          }),
                          s);
                    },
                  },
                },
              },
            ],
          },
        ],
        responsive: {
          details: {
            display: $.fn.dataTable.Responsive.display.modal({
              header: function (e) {
                return "Details of " + e.data().product;
              },
            }),
            type: "column",
            renderer: function (e, t, a) {
              a = $.map(a, function (e, t) {
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
              return !!a && $('<table class="table"/><tbody />').append(a);
            },
          },
        },
        initComplete: function () {
          this.api()
            .columns(6)
            .every(function () {
              var t = this,
                a = $(
                  '<select id="Review" class="form-select"><option value=""> All </option></select>'
                )
                  .appendTo(".review_filter")
                  .on("change", function () {
                    var e = $.fn.dataTable.util.escapeRegex($(this).val());
                    t.search(e ? "^" + e + "$" : "", !0, !1).draw();
                  });
              t.data()
                .unique()
                .sort()
                .each(function (e, t) {
                  a.append(
                    '<option value="' +
                      e +
                      '" class="text-capitalize">' +
                      e +
                      "</option>"
                  );
                });
            });
        },
      })),
      $(".dataTables_length").addClass("my-0")),
      $(".datatables-review tbody").on("click", ".delete-record", function () {
        e.row($(this).parents("tr")).remove().draw();
      }),
      setTimeout(() => {
        $(".review_filter .form-select").addClass("form-select-sm");
      }, 300);
  });
