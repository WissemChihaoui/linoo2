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
          ajax: assetsPath + "json/ecommerce-category-list.json",
          columns: [
            { data: "" },
            { data: "id" },
            { data: "categories" },
            
            { data: "" },
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
              orderable: !1,
              searchable: !1,
              responsivePriority: 4,
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
              responsivePriority: 2,
              render: function (e, t, n, a) {
               var spec = n.specialtie;
               return (
                '<div class="text-body text-wrap fw-medium">'+spec+'</div>'
               );
              },
            },
            {
              targets: -1,
              title: "Actions",
              searchable: !1,
              orderable: !1,
              render: function (e, t, n, a) {
                return '<div class="d-inline-block text-nowrap"><button class="btn btn-lg btn-icon btn-warning waves-effect waves-light rounded-pill me-50" data-bs-toggle="modal" data-bs-target="#edit_spec"><i class="ri-edit-box-line ri-20px"></i></button><button class="btn btn-lg btn-icon delete-row btn-danger waves-effect waves-light rounded-pill me-50"><i class="ri-delete-bin-6-line ri-20px"></i></button></div>';
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
              text: '<i class="ri-upload-2-line me-1"></i> <span class="d-none d-sm-inline-block">Export</span>',
              buttons: [
                {
                  extend: "print",
                  text: '<i class="ri-printer-line me-1"></i>Print',
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
                  text: '<i class="ri-file-copy-line me-1"></i>Copy',
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
            {
              text: '<i class="ri-add-line ri-16px me-0 me-sm-1 align-baseline"></i><span class="d-none d-sm-inline-block">Ajouter Spécialité</span>',
              className: "add-new btn btn-primary waves-effect waves-light",
              attr: {
                "data-bs-toggle": "modal",
                "data-bs-target": "#modal_add_spec",
              },
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
