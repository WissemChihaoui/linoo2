$(function () {
  var a,
    e = $(".invoice-list-table");
  e.length &&
    (a = e.DataTable({
      ajax: assetsPath + "json/invoice-list.json",
      columns: [
        { data: "invoice_id" },
        { data: "client_name" },
        { data: "mail" },
        { data: "phone" },
        { data: "total" },
      ],
      columnDefs: [
        {
          className: "control",
          responsivePriority: 2,
          searchable: !1,
          targets: 0,
          render: function (a, e, t, n) {
            return "";
          },
        },
        {
          targets: 1,
          orderable: !1,
          checkboxes: {
            selectAllRender: '<input type="checkbox" class="form-check-input">',
          },
          render: function () {
            return '<input type="checkbox" class="dt-checkboxes form-check-input">';
          },
          searchable: !1,
        },
        {
          targets: 2,
          render: function (a, e, t, n) {
            // Extracting and formatting the issued date
            const issuedDate = new Date(t.issued_date);
            const year = issuedDate.getFullYear();
            const month = String(issuedDate.getMonth() + 1).padStart(2, '0'); // Add leading zero if necessary
            const day = String(issuedDate.getDate()).padStart(2, '0'); // Add leading zero if necessary
        
            // Formatting as yyyymmdd-id
            const formattedId = `${year}${month}${day}-${t.invoice_id}`;
        
            return (
              '<a href="app-invoice-preview.html"><span>#' +
              formattedId +
              "</span></a>"
            );
          },
        },
       
        {
          targets: 3,
          responsivePriority: 2,
          render: function (a, e, t, n) {
            var s = t.client_name,
              i = t.service,
              r = t.avatar_image,
              l = Math.floor(11 * Math.random()) + 1;
            return (
              '<div class="d-flex justify-content-start align-items-center"><div class="avatar-wrapper"><div class="avatar avatar-sm me-3">' +
              (!0 === r
                ? '<img src="' +
                  assetsPath +
                  "img/avatars/" +
                  (l + ".png") +
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
                    ((r = (s = t.client_name).match(/\b\w/g) || []).shift() ||
                      "") + (r.pop() || "")
                  ).toUpperCase()) +
                  "</span>") +
              '</div></div><div class="d-flex flex-column"><a href="javascript:void(0);" class="text-truncate text-heading"><p class="mb-0 fw-medium">' +
              s +
              '</p></a></div></div>'
            );
          },
        },
        {
            targets: 4,
            render: function (a, e, t, n) {
              return '<a class="badge bg-label-primary" href="mailto:'+t.mail+'" ><i class="ri-mail-line me-2"></i>'+t.mail+'</a>'
            },
          },
         
        {
            targets: 5,
            render: function (a, e, t, n) {
                var fax= t.fax,
                    mobile = t.mobile;
              return(
                '<div class="d-flex flex-column">'+
                '<a class="badge bg-label-success mb-1" href="tel:'+mobile+'"><i class="ri-phone-line"></i>'+mobile+'</a>'+
                '<a class="badge bg-label-success" href="tel:'+fax+'"><i class="ri-file-paper-line"></i>'+fax+'</a>'+
                '</div>'
              )
            },
          },
        {
          targets: 6,
          orderable:1,
          render: function (a, e, t, n) {
            return "<span class='fw-bold fs-5'>$" + t.total + "</span>";
          },
        },
        
        
        
        
      ],
      order: [[2, "desc"]],
      dom: '<"row mx-1"<"col-12 col-md-6 d-flex align-items-center justify-content-center justify-content-md-start gap-4 mt-md-0 mt-5"l<"dt-action-buttons text-xl-end text-lg-start text-md-end text-start"B>><"col-12 col-md-6 d-flex align-items-center justify-content-end flex-column flex-md-row pe-3 gap-md-4"f<"invoice_status mb-5 mb-md-0">>>t<"row mx-2"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
      language: {
        sLengthMenu: "Show _MENU_",
        search: "",
        searchPlaceholder: "Rechercher",
        paginate: {
          next: '<i class="ri-arrow-right-s-line"></i>',
          previous: '<i class="ri-arrow-left-s-line"></i>',
        },
      },
      buttons: [
        
      ],
      responsive: {
        details: {
          display: $.fn.dataTable.Responsive.display.modal({
            header: function (a) {
              return "Details of " + a.data().full_name;
            },
          }),
          type: "column",
          renderer: function (a, e, t) {
            t = $.map(t, function (a, e) {
              return "" !== a.title
                ? '<tr data-dt-row="' +
                    a.rowIndex +
                    '" data-dt-column="' +
                    a.columnIndex +
                    '"><td>' +
                    a.title +
                    ":</td> <td>" +
                    a.data +
                    "</td></tr>"
                : "";
            }).join("");
            return !!t && $('<table class="table"/><tbody />').append(t);
          },
        },
      },
  
    })),
    e.on("draw.dt", function () {
      [].slice
        .call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        .map(function (a) {
          return new bootstrap.Tooltip(a, { boundary: document.body });
        });
    }),
    $(".invoice-list-table tbody").on("click", ".delete-record", function () {
      $(this).closest($('[data-bs-toggle="tooltip"]').tooltip("hide")),
        a.row($(this).parents("tr")).remove().draw();
    }),
    setTimeout(() => {
      $(".invoice_status .form-select").addClass("form-select-sm");
    }, 300);
});
