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
  var e,
    s = $(".datatables-users"),
    i = $(".select2"),
    o = "app-user-view-account.html";
    
  i.length &&
    ((i = i),
    select2Focus(i),
    i
      .wrap('<div class="position-relative"></div>')
      .select2({ placeholder: "Select Country", dropdownParent: i.parent() })),
    s.length &&
      ((e = s.DataTable({
        ajax: assetsPath + "json/user-list.json",
        columns: [
          { data: "" },
          { data: "id" },
          { data: "full_name" },
          { data: "email" },
          { data: "role" },
          { data: "current_plan" },
          { data: "document" },
          { data: "action" },
        ],
        columnDefs: [
          {
            className: "control",
            searchable: !1,
            orderable: !1,
            responsivePriority: 2,
            targets: 0,
            render: function (e, t, n, a) {
              return "";
            },
          },
          {
            targets: 1,
            orderable: !1,
            render: function () {
              return '<input type="checkbox" class="dt-checkboxes form-check-input">';
            },
            checkboxes: {
              selectAllRender:
                '<input type="checkbox" class="form-check-input">',
            },
          },
          {
            targets: 2,
            responsivePriority: 4,
            render: function (e, t, n, a) {
              var s = n.full_name,
                i = n.email,
                r = n.avatar;
              return (
                '<div class="d-flex justify-content-start align-items-center user-name"><div class="avatar-wrapper"><div class="avatar avatar-sm me-3">' +
                (r
                  ? '<img src="' +
                    assetsPath +
                    "img/avatars/" +
                    r +
                    '" alt="Avatar" class="rounded-circle">'
                  : '<span class="avatar-initial rounded-circle bg-label-' +
                    [
                      "success",
                      "danger",
                      "warning",
                      "info",
                      "dark",
                      "primary",
                      "secondary",
                    ][Math.floor(6 * Math.random())] +
                    '">' +
                    (r = (
                      ((r = (s = n.full_name).match(/\b\w/g) || []).shift() ||
                        "") + (r.pop() || "")
                    ).toUpperCase()) +
                    "</span>") +
                '</div></div><div class="d-flex flex-column"><a href="' +
                o +
                '" class="text-truncate text-heading"><span class="fw-medium">' +
                s +
                "</span></a><small>" +
                i +
                "</small></div></div>"
              );
            },
          },
          {
            targets: 3,
            render: function (e, t, n, a) {
              return "<span >" + n.email + "</span>";
            },
          },
          {
            targets: 4,
            render: function (e, t, n, a) {
              n = n.role;
              return (
                "<span class='text-truncate d-flex align-items-center text-heading'>" +
                {
                    Actif:
                    '<span class="badge badge-center rounded-pill bg-success"><i class="ri-check-line"></i></span>',
                  'Pas Actif':
                    '<span class="badge badge-center rounded-pill bg-danger"><i class="ri-close-line"></i></span>',
                  
                }[n] +n+
                
                "</span>"
              );
            },
          },
          {
            targets: 5,
            render: function (e, t, n, a) {
                n = n.current_plan;
                return (
                  "<span class='text-truncate d-flex align-items-center text-heading'>" +
                  {
                    "Oui":
                      '<span class="badge badge-center rounded-pill bg-success"><i class="ri-check-line"></i></span>',
                    Sans:
                      '<span class="badge badge-center rounded-pill bg-danger"><i class="ri-close-line"></i></span>',
                    
                  }[n] +n+
                  
                  "</span>"
                );
            },
          },
          {
            targets: 6,
            render: function (e, t, n, a) {
              doc = n.document;
              return (
                '<a href="javascript:void(0);" class="badge bg-label-success rounded-pill"> ' + doc +"</a>"
              );
            },
          },
          {
            targets: -1,
            title: "Actions",
            searchable: !1,
            orderable: !1,
            render: function (e, t, n, a) {
              return '<div class="d-inline-block text-nowrap"><a href="/html/professionnels/edit.html" class="btn btn-lg btn-icon btn-warning waves-effect waves-light rounded-pill me-50"><i class="ri-edit-box-line ri-20px"></i></a><button class="btn btn-lg btn-icon btn-danger waves-effect waves-light rounded-pill me-50"><i class="ri-delete-bin-6-line ri-20px"></i></button></div>';
            },
          },
        ],
        order: [[2, "desc"]],
        dom: '<"row"<"col-md-2 d-flex align-items-center justify-content-md-start justify-content-center"<"dt-action-buttons mt-5 mt-md-0"B>><"col-md-10"<"d-flex align-items-center justify-content-md-end justify-content-center"<"me-4"f><"add-new">>>>t<"row"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
        language: {
          sLengthMenu: "Show _MENU_",
          search: "",
          searchPlaceholder: "Rechercher ",
          paginate: {
            next: '<i class="ri-arrow-right-s-line"></i>',
            previous: '<i class="ri-arrow-left-s-line"></i>',
          },
        },
        buttons: [
          {
            extend: "collection",
            className:
              "btn btn-outline-secondary dropdown-toggle waves-effect waves-light",
            text: '<span class="d-flex align-items-center"><i class="ri-upload-2-line ri-16px me-2"></i> <span class="d-none d-sm-inline-block">Exporter</span></span> ',
            buttons: [
              {
                extend: "print",
                text: '<i class="ri-printer-line me-1" ></i>Imprimer',
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
        ],
        responsive: {
          details: {
            display: $.fn.dataTable.Responsive.display.modal({
              header: function (e) {
                return "Details of " + e.data().full_name;
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
                      '"><td>' +
                      e.title +
                      ":</td> <td>" +
                      e.data +
                      "</td></tr>"
                  : "";
              }).join("");
              return !!n && $('<table class="table"/><tbody />').append(n);
            },
          },
        },
        initComplete: function () {
          this.api()
            .columns(4)
            .every(function () {
              var t = this,
                n = $(
                  '<select id="UserRole" class="form-select text-capitalize"><option value=""> Choisir option </option></select>'
                )
                  .appendTo(".user_role")
                  .on("change", function () {
                    var e = $.fn.dataTable.util.escapeRegex($(this).val());
                    t.search(e ? "^" + e + "$" : "", !0, !1).draw();
                  });
              t.data()
                .unique()
                .sort()
                .each(function (e, t) {
                  n.append('<option value="' + e + '">' + e + "</option>");
                });
            }),
            this.api()
              .columns(5)
              .every(function () {
                var t = this,
                  n = $(
                    '<select id="UserPlan" class="form-select text-capitalize"><option value=""> Avec Contract ? </option></select>'
                  )
                    .appendTo(".user_plan")
                    .on("change", function () {
                      var e = $.fn.dataTable.util.escapeRegex($(this).val());
                      t.search(e ? "^" + e + "$" : "", !0, !1).draw();
                    });
                t.data()
                  .unique()
                  .sort()
                  .each(function (e, t) {
                    n.append('<option value="' + e + '">' + e + "</option>");
                  });
              })
          
        },
      })),
      $(".add-new").html(
        
      )),
    $(".datatables-users tbody").on("click", ".delete-record", function () {
      e.row($(this).parents("tr")).remove().draw();
    });
}),
  (function () {
    var e = document.querySelectorAll(".phone-mask"),
      t = document.getElementById("addNewUserForm");
    e &&
      e.forEach(function (e) {
        new Cleave(e, { phone: !0, phoneRegionCode: "US" });
      }),
      FormValidation.formValidation(t, {
        fields: {
          userFullname: {
            validators: { notEmpty: { message: "Please enter fullname " } },
          },
          userEmail: {
            validators: {
              notEmpty: { message: "Please enter your email" },
              emailAddress: {
                message: "The value is not a valid email address",
              },
            },
          },
        },
        plugins: {
          trigger: new FormValidation.plugins.Trigger(),
          bootstrap5: new FormValidation.plugins.Bootstrap5({
            eleValidClass: "",
            rowSelector: function (e, t) {
              return ".mb-5";
            },
          }),
          submitButton: new FormValidation.plugins.SubmitButton(),
          autoFocus: new FormValidation.plugins.AutoFocus(),
        },
      });
  })();
