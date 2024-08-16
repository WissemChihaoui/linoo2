!(function () {
    let e, s, a, r;
    r = isDarkStyle
      ? ((e = config.colors_dark.textMuted),
        (s = config.colors_dark.headingColor),
        (a = config.colors_dark.borderColor),
        "dark")
      : ((e = config.colors.textMuted),
        (s = config.colors.headingColor),
        (a = config.colors.borderColor),
        "light");
    
      i = document.querySelector("#leadsReportChart"),
     
    null !== i && new ApexCharts(i, t).render();
    let o = document.querySelector("#horizontalBarChart"),
      n = {
        chart: { height: 270, type: "bar", toolbar: { show: !1 } },
        plotOptions: {
          bar: {
            horizontal: !0,
            barHeight: "70%",
            distributed: !0,
            startingShape: "rounded",
            borderRadius: 7,
          },
        },
        grid: {
          strokeDashArray: 10,
          borderColor: a,
          xaxis: { lines: { show: !0 } },
          yaxis: { lines: { show: !1 } },
          padding: { top: -35, bottom: -12 },
        },
        fill: { opacity: 1 },
        colors: [
          config.colors.primary,
          config.colors.info,
          config.colors.success,
          config.colors.secondary,
          config.colors.danger,
          config.colors.warning,
        ],
        dataLabels: {
          enabled: !0,
          style: {
            colors: ["#fff"],
            fontWeight: 500,
            fontSize: "13px",
            fontFamily: "Inter",
          },
          formatter: function (e, a) {
            return n.labels[a.dataPointIndex];
          },
          offsetX: 0,
          dropShadow: { enabled: !1 },
        },
        labels: ["UI Design", "UX Design", "Music", "Animation", "React", "SEO"],
        series: [{ data: [35, 20, 14, 12, 10, 9] }],
        xaxis: {
          categories: ["6", "5", "4", "3", "2", "1"],
          axisBorder: { show: !1 },
          axisTicks: { show: !1 },
          labels: {
            style: { colors: e, fontSize: "13px" },
            formatter: function (e) {
              return e + "%";
            },
          },
        },
        yaxis: {
          max: 35,
          labels: {
            style: { colors: [e], fontFamily: "Inter", fontSize: "13px" },
          },
        },
        tooltip: {
          enabled: !0,
          style: { fontSize: "12px" },
          onDatasetHover: { highlightDataSeries: !1 },
          custom: function ({ series: e, seriesIndex: a, dataPointIndex: r }) {
            return '<div class="px-3 py-2"><span>' + e[a][r] + "%</span></div>";
          },
        },
        legend: { show: !1 },
      };
    null !== o && new ApexCharts(o, n).render();
    var l,
      i = document.querySelectorAll(".chart-progress"),
      t =
        (i &&
          i.forEach(function (e) {
            var a = config.colors[e.dataset.color],
              r = e.dataset.series,
              t = e.dataset.progress_variant,
              a =
                ((a = a), 
                (r = r),
                {
                  chart: {
                    height: "true" == (t = t) ? 58 : 55,
                    width: "true" == t ? 58 : 45,
                    type: "radialBar",
                  },
                  plotOptions: {
                    radialBar: {
                      hollow: { size: "true" == t ? "45%" : "25%" },
                      dataLabels: {
                        show: "true" == t,
                        value: {
                          offsetY: -10,
                          fontSize: "15px",
                          fontWeight: 500,
                          fontFamily: "Inter",
                          color: s,
                        },
                      },
                      track: { background: config.colors_label.secondary },
                    },
                  },
                  stroke: { lineCap: "round" },
                  colors: [a],
                  grid: {
                    padding: {
                      top: "true" == t ? -12 : -15,
                      bottom: "true" == t ? -17 : -15,
                      left: "true" == t ? -17 : -5,
                      right: -15,
                    },
                  },
                  series: [r],
                  labels: "true" == t ? [""] : ["Progress"],
                });
            new ApexCharts(e, a).render();
          }),
        $(".datatables-academy-course")),
      d = {
        angular:
          '<div class="avatar"><div class="avatar-initial bg-label-danger rounded"><i class="ri-angularjs-line ri-28px"></i></div></div>',
        figma:
          '<div class="avatar"><div class="avatar-initial bg-label-warning rounded"><i class="ri-pencil-line ri-28px"></i></div></div>',
        react:
          '<div class="avatar"><div class="avatar-initial bg-label-info rounded"><i class="ri-reactjs-line ri-28px"></i></div></div>',
        art: '<div class="avatar"><div class="avatar-initial bg-label-success rounded"><i class="ri-palette-line ri-28px"></i></div></div>',
        fundamentals:
          '<div class="avatar"><div class="avatar-initial bg-label-primary rounded"><i class="ri-star-smile-line ri-28px"></i></div></div>',
      };
    t.length &&
      ((l = t.DataTable({
        ajax: assetsPath + "json/app-academy-dashboard.json",
        columns: [
          { data: "" },
          { data: "id" },
          { data: "name" },
          { data: "type" },
          { data: "documents" },
          { data: "date" },
          { data: "actif" },
          { data: "tarifInter" },
          { data: "tarifTrad" },
          { data: ""}
        ],
        columnDefs: [
          {
            className: "control",
            searchable: !1,
            orderable: !1,
            responsivePriority: 2,
            targets: 0,
            render: function (e, a, r, t) {
              return "";
            },
          },
          {
            targets: 1,
            orderable: !1,
            searchable: !1,
            checkboxes: !0,
            checkboxes: {
              selectAllRender: '<input type="checkbox" class="form-check-input">',
            },
            render: function () {
              return '<input type="checkbox" class="dt-checkboxes form-check-input">';
            },
          },
          {
            targets:2,
            orderable:1,
            render: function (t, e, n, a) {
                var name = n.name,
                    img = n.image,
                    mail = n.mail;
                return (
                    '<div class="d-flex justify-content-start align-items-center product-name"><div class="avatar-wrapper me-3"><div class="avatar avatar-sm">' +
                    '<img src="../../assets/img/avatars/'+img+'" class="rounded-circle"/>'+
                    '</div></div><div class="d-flex flex-column"><span class="text-nowrap text-heading fw-medium">' +
                    name +
                    '</span><small class="text-truncate d-none d-sm-block">' +
                    '<a href="mailto:'+mail+'" class="">'+
                    mail +"</a>"+
                    "</small></div></div>"
                  );
            }
          },
          {
            targets: 3,
            orderable: 1,
            render: function (t, e, n, a) {
              var badgeClass = '';
              var badgeText = '';
              switch (n.type) {
                case 1:
                  badgeClass = 'bg-info';
                  badgeText = 'Traducteur';
                  break;
                case 2:
                  badgeClass = 'bg-success';
                  badgeText = 'Interprète';
                  break;
                case 3:
                  badgeClass = 'bg-warning';
                  badgeText = 'Interprète et traducteur';
                  break;
                default:
                  badgeClass = 'bg-secondary';
                  badgeText = 'Unknown';
              }
              return '<span class="badge ' + badgeClass + '">' + badgeText + '</span>';
                }
            },
            {
                targets: 4,
                orderable: !1,
                render: function (t, e, n, a) {
                  var buttons = n.documents.map(function (document) {
                    return '<div><a href="javascript:void(0);" class="badge badge-center rounded-pill bg-primary m-1" onclick="viewDocument(\'' + document.id + '\')"> <i class="ri-download-2-line"></i></a><span class="text-sm text-muted" style="font-size:11px">'+document.docType+'</span></div>';
                  });
                  return buttons.join(' ');
                }
            },
            {
                targets: 5,
                render: function (e, t, a, n) {
                  var s = new Date(a.date);
                  return (
                    '<span class="text-nowrap">' +
                    s.toLocaleDateString("fr-FR", {
                      month: "short",
                      day: "numeric",
                      year: "numeric"
                    }) +
                    "</span>"
                  );
                },
            },
            {
                targets:6,
                render: function (t,e,n,a) {
                    var actif = n.actif;
                    return '<label class="switch switch-success">'+
                            '<input type="checkbox" class="switch-input" '+ (actif ? "checked":"") +' />'+
                            '<span class="switch-toggle-slider">'+
                               ' <span class="switch-on">'+
                                '<i class="ri-check-line"></i>'+
                                '</span>'+
                                '<span class="switch-off">'+
                                '<i class="ri-close-line"></i>'+
                                '</span>'+
                           ' </span>'+
                            '</label>'
                }
            },
            {
                targets: -1,
                orderable: !1,
                render: function (t, e, n, a) {
                    return '<div class="d-inline-block text-nowrap"><button class="btn btn-lg btn-icon btn-warning waves-effect waves-light rounded-pill me-50"><i class="ri-edit-box-line ri-20px"></i></button><button class="btn btn-lg btn-icon btn-danger waves-effect waves-light rounded-pill me-50"><i class="ri-delete-bin-6-line ri-20px"></i></button></div>';
                },
            }

        ],
        order: [[2, "desc"]],
        dom: '<"card-header pt-sm-0 pb-0 d-flex flex-row justify-content-between"<"head-label text-center"><"d-flex justify-content-end align-items-center gap-2"fB>>t<"row mx-4"<"col-md-6 col-12 text-center text-md-start pb-2 pb-xl-0 px-0"i><"col-md-6 col-12 d-flex justify-content-center justify-content-md-end px-0"p>>',

        lengthMenu: [5],
        buttons: [
          {
            extend: "collection",
            className:
              "btn btn-outline-secondary dropdown-toggle me-4 waves-effect waves-light",
            text: '<i class="ri-upload-2-line ri-16px me-2"></i><span class="d-none d-sm-inline-block">Exporter </span>',
            buttons: [
              {
                extend: "print",
                text: '<i class="ri-printer-line me-1" ></i>Imprimer',
                className: "dropdown-item",
                exportOptions: {
                  columns: [1, 2, 3, 5, 7, 8],
                  format: {
                    body: function (t, e, n) {
                      var a;
                      return t.length <= 0
                        ? t
                        : ((t = $.parseHTML(t)),
                          (a = ""),
                          $.each(t, function (t, e) {
                            void 0 !== e.classList &&
                            e.classList.contains("product-name")
                              ? (a += e.lastChild.firstChild.textContent)
                              : void 0 === e.innerText
                              ? (a += e.textContent)
                              : (a += e.innerText);
                          }),
                          a);
                    },
                  },
                },
                customize: function (t) {
                  $(t.document.body)
                    .css("color", a)
                    .css("border-color", e)
                    .css("background-color", n),
                    $(t.document.body)
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
                  columns: [1, 2, 3, 5, 7, 8],
                  format: {
                    body: function (t, e, n) {
                      var a;
                      return t.length <= 0
                        ? t
                        : ((t = $.parseHTML(t)),
                          (a = ""),
                          $.each(t, function (t, e) {
                            void 0 !== e.classList &&
                            e.classList.contains("product-name")
                              ? (a += e.lastChild.firstChild.textContent)
                              : void 0 === e.innerText
                              ? (a += e.textContent)
                              : (a += e.innerText);
                          }),
                          a);
                    },
                  },
                },
              },
              {
                extend: "excel",
                text: '<i class="ri-file-excel-line me-1"></i>Excel',
                className: "dropdown-item",
                exportOptions: {
                  columns: [1, 2, 3, 5, 7, 8],
                  format: {
                    body: function (t, e, n) {
                      var a;
                      return t.length <= 0
                        ? t
                        : ((t = $.parseHTML(t)),
                          (a = ""),
                          $.each(t, function (t, e) {
                            void 0 !== e.classList &&
                            e.classList.contains("product-name")
                              ? (a += e.lastChild.firstChild.textContent)
                              : void 0 === e.innerText
                              ? (a += e.textContent)
                              : (a += e.innerText);
                          }),
                          a);
                    },
                  },
                },
              },
              {
                extend: "pdf",
                text: '<i class="ri-file-pdf-line me-1"></i>Pdf',
                className: "dropdown-item",
                exportOptions: {
                  columns: [1, 2, 3, 5, 7, 8],
                  format: {
                    body: function (t, e, n) {
                      var a;
                      return t.length <= 0
                        ? t
                        : ((t = $.parseHTML(t)),
                          (a = ""),
                          $.each(t, function (t, e) {
                            void 0 !== e.classList &&
                            e.classList.contains("product-name")
                              ? (a += e.lastChild.firstChild.textContent)
                              : void 0 === e.innerText
                              ? (a += e.textContent)
                              : (a += e.innerText);
                          }),
                          a);
                    },
                  },
                },
              },
             
            ],
          }
        ],
        language: {
            "sProcessing":     "Traitement en cours...",
            "sSearch":         "Rechercher&nbsp;:",
            "sLengthMenu":     "Afficher _MENU_ &eacute;l&eacute;ments",
            "sInfo":           "Affichage de l'&eacute;l&eacute;ment _START_ &agrave; _END_ sur _TOTAL_ &eacute;l&eacute;ments",
            "sInfoEmpty":      "Affichage de l'&eacute;l&eacute;ment 0 &agrave; 0 sur 0 &eacute;l&eacute;ment",
            "sInfoFiltered":   "(filtr&eacute; de _MAX_ &eacute;l&eacute;ments au total)",
            "sInfoPostFix":    "",
            "sLoadingRecords": "Chargement en cours...",
            "sZeroRecords":    "Aucun &eacute;l&eacute;ment &agrave; afficher",
            "sEmptyTable":     "Aucune donn&eacute;e disponible dans le tableau",
            "oPaginate": {
                "sFirst":      "Premier",
                "sPrevious":   "Pr&eacute;c&eacute;dent",
                "sNext":       "Suivant",
                "sLast":       "Dernier"
            },
            "oAria": {
                "sSortAscending":  ": activer pour trier la colonne par ordre croissant",
                "sSortDescending": ": activer pour trier la colonne par ordre d&eacute;croissant"
            },
            "select": {
                "rows": {
                    "_": "%d lignes s&eacute;lectionn&eacute;es",
                    "0": "Aucune ligne s&eacute;lectionn&eacute;e",
                    "1": "1 ligne s&eacute;lectionn&eacute;e"
                }
            }
          },
        responsive: {
          details: {
            display: $.fn.dataTable.Responsive.display.modal({
              header: function (e) {
                return "Details of " + e.data().user_number;
              },
            }),
            type: "column",
            renderer: function (e, a, r) {
              r = $.map(r, function (e, a) {
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
      })),
      $("div.head-label").html(
        '<h5 class="card-title mb-0 text-nowrap">Traducteurs & Interprètes</h5>'
      )),
      $(".datatables-orders tbody").on("click", ".delete-record", function () {
        l.row($(this).parents("tr")).remove().draw();
      });
  })();
  