let commentEditor = document.querySelector(".comment-editor");
commentEditor &&
  new Quill(commentEditor, {
    modules: { toolbar: ".comment-toolbar" },
    placeholder: "Write a Comment...",
    theme: "snow",
  }),
  $(function () {
    let t, n, a;
    a = (
      isDarkStyle
        ? ((t = config.colors_dark.borderColor),
          (n = config.colors_dark.bodyBg),
          config.colors_dark)
        : ((t = config.colors.borderColor),
          (n = config.colors.bodyBg),
          config.colors)
    ).headingColor;
    var e = $(".datatables-category-list"),
      s = $(".select2");
    s.length &&
      s.each(function () {
        var e = $(this);
        select2Focus(e),
          e
            .wrap('<div class="position-relative"></div>')
            .select2({
              dropdownParent: e.parent(),
              placeholder: e.data("placeholder"),
            });
      }),
      e.length &&
        (e.DataTable({
          ajax: assetsPath + "json/commission-mensuelles.json",
          columns: [
            { data: "" },
            { data: "date" },
            { data: "com" },
          ],
          columnDefs: [
            {
              className: "control",
              searchable: !1,
              orderable: !1,
              targets: 0,
              render: function (e, t, n, a) {
                return "";
              },
            },
            {
              targets: 1,
              responsivePriority: 1,
              render: function (e, t, n, a) {
                return (
                  '<div class="text-center">' + n.date + "</div>"
                );
              },
            },
            {
              targets: 2,
              render: function (e, t, n, a) {
                return (
                  "<div class='text-center'>" + n.com + "</div>"
                );
              },
            },
           
          ],
          order: [2, "desc"],
          dom: '<"card-header d-flex rounded-0 flex-wrap pb-md-0 pt-0"<"me-5 ms-n2"f><"d-flex justify-content-start justify-content-md-end align-items-baseline"<"dt-action-buttons d-flex align-items-start align-items-md-center justify-content-sm-center mb-0 gap-4"lB>>>t<"row mx-1"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
          lengthMenu: [7, 10, 20, 50, 70, 100],
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
          buttons: [
            {
              extend: "collection",
              className:
                "btn btn-outline-secondary dropdown-toggle me-4 waves-effect waves-light",
              text: '<i class="ri-upload-2-line me-1"></i> <span class="d-none d-sm-inline-block">Exporter</span>',
              buttons: [
                {
                  extend: "print",
                  text: '<i class="ri-printer-line me-1"></i>Imprimer',
                  className: "dropdown-item",
                  exportOptions: {
                    columns: [1, 2, 3, 4, 5],
                    format: {
                      body: function (e, t, n) {
                        var a;
                        return e.length <= 0
                          ? e
                          : ((e = $.parseHTML(e)),
                            (a = ""),
                            $.each(e, function (e, t) {
                              void 0 !== t.classList &&
                              t.classList.contains("user-name")
                                ? (a += t.lastChild.firstChild.textContent)
                                : void 0 === t.innerText
                                ? (a += t.textContent)
                                : (a += t.innerText);
                            }),
                            a);
                      },
                    },
                  },
                  customize: function (e) {
                    $(e.document.body)
                      .css("color", a)
                      .css("border-color", t)
                      .css("background-color", n),
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
                      body: function (e, t, n) {
                        var a;
                        return e.length <= 0
                          ? e
                          : ((e = $.parseHTML(e)),
                            (a = ""),
                            $.each(e, function (e, t) {
                              void 0 !== t.classList &&
                              t.classList.contains("user-name")
                                ? (a += t.lastChild.firstChild.textContent)
                                : void 0 === t.innerText
                                ? (a += t.textContent)
                                : (a += t.innerText);
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
                      body: function (e, t, n) {
                        var a;
                        return e.length <= 0
                          ? e
                          : ((e = $.parseHTML(e)),
                            (a = ""),
                            $.each(e, function (e, t) {
                              void 0 !== t.classList &&
                              t.classList.contains("user-name")
                                ? (a += t.lastChild.firstChild.textContent)
                                : void 0 === t.innerText
                                ? (a += t.textContent)
                                : (a += t.innerText);
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
                      body: function (e, t, n) {
                        var a;
                        return e.length <= 0
                          ? e
                          : ((e = $.parseHTML(e)),
                            (a = ""),
                            $.each(e, function (e, t) {
                              void 0 !== t.classList &&
                              t.classList.contains("user-name")
                                ? (a += t.lastChild.firstChild.textContent)
                                : void 0 === t.innerText
                                ? (a += t.textContent)
                                : (a += t.innerText);
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
                      body: function (e, t, n) {
                        var a;
                        return e.length <= 0
                          ? e
                          : ((e = $.parseHTML(e)),
                            (a = ""),
                            $.each(e, function (e, t) {
                              void 0 !== t.classList &&
                              t.classList.contains("user-name")
                                ? (a += t.lastChild.firstChild.textContent)
                                : void 0 === t.innerText
                                ? (a += t.textContent)
                                : (a += t.innerText);
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
                header: function (e) {
                  return "Details of " + e.data().categories;
                },
              }),
              type: "column",
              renderer: function (e, t, n) {
                n = $.map(n, function (e, t) {
                  return "" !== e.title
                    ? '<tr data-dt-row="' +
                        e.rowIndex +
                        '" data-dt-column="' +
                        e.columnIndex +
                        '"><td> ' +
                        e.title +
                        ':</td> <td class="ps-0">' +
                        e.data +
                        "</td></tr>"
                    : "";
                }).join("");
                return !!n && $('<table class="table"/><tbody />').append(n);
              },
            },
          },
        }),
        $(".dataTables_length").addClass("my-0"),
        $(".dt-action-buttons").addClass("pt-0"));
  }),
  (function () {
    var e = document.getElementById("eCommerceCategoryListForm");
    FormValidation.formValidation(e, {
      fields: {
        categoryTitle: {
          validators: { notEmpty: { message: "Please enter category title" } },
        },
        slug: { validators: { notEmpty: { message: "Please enter slug" } } },
      },
      plugins: {
        trigger: new FormValidation.plugins.Trigger(),
        bootstrap5: new FormValidation.plugins.Bootstrap5({
          eleValidClass: "is-valid",
          rowSelector: function (e, t) {
            return ".mb-5";
          },
        }),
        submitButton: new FormValidation.plugins.SubmitButton(),
        autoFocus: new FormValidation.plugins.AutoFocus(),
      },
    });
  })();
