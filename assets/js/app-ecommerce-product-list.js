$(function () {
  let e, n, a;
  a = (
    isDarkStyle
      ? ((e = config.colors_dark.borderColor),
        (n = config.colors_dark.bodyBg),
        config.colors_dark)
      : ((e = config.colors.borderColor),
        (n = config.colors.bodyBg),
        config.colors)
  ).headingColor;
  var t = $(".datatables-products"),
    s = {
      1: { title: "En Cours", class: "bg-label-info" },
      2: { title: "Clôturée", class: "bg-label-primary" },
      3: { title: "En Attente", class: "bg-label-secondary" },
      4: { title: "Annulée", class: "bg-label-warning" },
      5: { title: "Refusée", class: "bg-label-danger" },
    },
    i = {
      0: { title: "Household" },
      1: { title: "Office" },
      2: { title: "Electronics" },
      3: { title: "Shoes" },
      4: { title: "Accessories" },
      5: { title: "Game" },
    },
    o = { 0: { title: "Out_of_Stock" }, 1: { title: "In_Stock" } },
    r = { 0: { title: "Out of Stock" }, 1: { title: "In Stock" } };
  t.length &&
    (t.DataTable({
      ajax: assetsPath + "json/ecommerce-product-list.json",
      columns: [
        { data: "id" },
        { data: "product_name" },
        { data: "category" },
        { data: "stock" },
        { data: "sku" },
        { data: "price" },
        { data: "quantity" },
        { data: "montant" },
        { data: "status" },
        { data: null },
        { data: null },
      ],
      columnDefs: [
        {
          className: "control",
          searchable: !1,
          orderable: !1,
          responsivePriority: 2,
          targets: 0,
          render: function (t, e, n, a) {
            return "";
          },
        },
        {
          targets: 4,
          responsivePriority: 1,
          render: function (t, e, n, a) {
            var s = n.product_name,
              o = n.product_brand,
              r = n.mail;
            return (
              '<div class="d-flex justify-content-start align-items-center product-name"><div class="avatar-wrapper me-3">' +
             
              '</div</div><div class="d-flex flex-column"><span class="text-nowrap text-heading fw-medium">' +
              s +
              '</span><small class="text-truncate d-none d-sm-block">' +
              o +
              '</small><a href="mailto:'+r+'">'+r+'</a></div></div>'
            );
          },
        },
        {
          targets: 1,
          responsivePriority: 5,
          render: function (t, e, n, a) {
            return ("<a href='javascript:void(0)'>#"+n.id+"</a>")
          },
        },
        {
          targets: 3,
          render: function (t, e, n, a) {
            return "<span>" + n.hour + "</span>";
          },
        },
        {
          targets: 2,
          render: function (t, e, n, a) {
            return "<span>" + n.date + "</span>";
          },
        },
        {
          targets: 5,
          responsivePriority: 2,
          render: function (t, e, n, a) {
            var s = n.intrepret,
              o = n.mail_intrepret;
            return (
              '<div class="d-flex justify-content-start align-items-center product-name"><div class="avatar-wrapper me-3">' +
             
              '</div</div><div class="d-flex flex-column"><span class="text-nowrap text-heading fw-medium">' +
              s +
              '</span><a href="mailto:'+o+'" class="text-truncate d-none d-sm-block">' +
              o +
              '</a></div></div>'
            );
          },
        },
        {
          targets: 6,
          responsivePriority: 4,
          render: function (t, e, n, a) {
            return "<span>" + n.qty + "</span>";
          },
        },
        {
          targets: 7,
          responsivePriority: 4,
          render: function (t, e, n, a) {
            return "<span>" + n.montant + "</span>";
          },
        },
        {
          targets: -3,
          render: function (t, e, n, a) {
            n = n.status;
            return (
              '<span class="badge rounded-pill ' +
              s[n].class +
              '" text-capitalized>' +
              s[n].title +
              "</span>"
            );
          },
        },
        {
          targets: -2, // Second-to-last column
          render: function(t, e, n, a) {
            return (
              '<a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#modal_regler" class="btn btn-primary">Règler ?</a>'
            );
          }
        },
        {
          targets: -1,
          title: "Actions",
          searchable: !1,
          orderable: !1,
          render: function (t, e, n, a) {
            return '<div class="d-inline-block text-nowrap"><button class="btn btn-lg btn-icon btn-danger waves-effect waves-light rounded-pill me-50" ><i class="ri-delete-bin-6-line ri-20px"></i></button><button data-bs-toggle="modal" data-bs-target="#view-mission" class="btn btn-lg btn-icon btn-primary waves-effect waves-light rounded-pill me-50"><i class="ri-eye-line ri-20px"></i></button></div>';
          },
        },
      ],
      order: [2, "asc"],
      dom: '<"card-header d-flex border-top rounded-0 flex-wrap pb-md-0 pt-0"<"me-5 ms-n2"f><"d-flex justify-content-start justify-content-md-end align-items-baseline"<"dt-action-buttons d-flex align-items-start align-items-md-center justify-content-sm-center gap-4"lB>>>t<"row mx-1"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
      lengthMenu: [7, 10, 20, 50, 70, 100],
      language: {
        sLengthMenu: "_MENU_",
        search: "",
        searchPlaceholder: "Rechercher",
        info: "Affichage de _START_ à _END_ des entrées _TOTAL_.",
        paginate: {
          next: '<i class="ri-arrow-right-s-line"></i>',
          previous: '<i class="ri-arrow-left-s-line"></i>',
        },
      },
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
                columns: [1, 2, 3, 4, 5],
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
                columns: [1, 2, 3, 4, 5],
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
                columns: [1, 2, 3, 4, 5],
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
                columns: [1, 2, 3, 4, 5],
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
              extend: "copy",
              text: '<i class="ri-file-copy-line me-1"></i>Copier',
              className: "dropdown-item",
              exportOptions: {
                columns: [1, 2, 3, 4, 5],
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
        },
       
      ],
      responsive: {
        details: {
          display: $.fn.dataTable.Responsive.display.modal({
            header: function (t) {
              return "Details of " + t.data().product_name;
            },
          }),
          type: "column",
          renderer: function (t, e, n) {
            n = $.map(n, function (t, e) {
              return "" !== t.title
                ? '<tr data-dt-row="' +
                    t.rowIndex +
                    '" data-dt-column="' +
                    t.columnIndex +
                    '"><td>' +
                    t.title +
                    ":</td> <td>" +
                    t.data +
                    "</td></tr>"
                : "";
            }).join("");
            return !!n && $('<table class="table"/><tbody />').append(n);
          },
        },
      },
      initComplete: function () {
        this.api()
          .columns(-2)
          .every(function () {
            var e = this,
              n = $(
                '<select id="ProductStatus" class="form-select text-capitalize"><option value="">Status</option></select>'
              )
                .appendTo(".product_status")
                .on("change", function () {
                  var t = $.fn.dataTable.util.escapeRegex($(this).val());
                  e.search(t ? "^" + t + "$" : "", !0, !1).draw();
                });
            e.data()
              .unique()
              .sort()
              .each(function (t, e) {
                n.append(
                  '<option value="' +
                    s[t].title +
                    '">' +
                    s[t].title +
                    "</option>"
                );
              });
          }),
          this.api()
            .columns(3)
            .every(function () {
              var e = this,
                n = $(
                  '<select id="ProductCategory" class="form-select text-capitalize"><option value="">Category</option></select>'
                )
                  .appendTo(".product_category")
                  .on("change", function () {
                    var t = $.fn.dataTable.util.escapeRegex($(this).val());
                    e.search(t ? "^" + t + "$" : "", !0, !1).draw();
                  });
              e.data()
                .unique()
                .sort()
                .each(function (t, e) {
                  n.append(
                    '<option value="' +
                      i[t].title +
                      '">' +
                      i[t].title +
                      "</option>"
                  );
                });
            }),
          this.api()
            .columns(4)
            .every(function () {
              var e = this,
                n = $(
                  '<select id="ProductStock" class="form-select text-capitalize"><option value=""> Stock </option></select>'
                )
                  .appendTo(".product_stock")
                  .on("change", function () {
                    var t = $.fn.dataTable.util.escapeRegex($(this).val());
                    e.search(t ? "^" + t + "$" : "", !0, !1).draw();
                  });
              e.data()
                .unique()
                .sort()
                .each(function (t, e) {
                  n.append(
                    '<option value="' +
                      o[t].title +
                      '">' +
                      r[t].title +
                      "</option>"
                  );
                });
            });
      },
    }),
    $(".dt-action-buttons").addClass("pt-0"),
    $(".dt-buttons").addClass("d-flex flex-wrap"));
});
