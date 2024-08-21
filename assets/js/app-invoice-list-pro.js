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
          { data: "" },
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
                '<a href="javascript:void(0);"><span>#' +
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
              targets: 6,
              render: function (a, e, t, n) {
                return '<button class="btn btn-primary " type="button" id="solded-invoice" " >Solder ?</button>'
              },
            },
           
          {
              targets: 4,
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
            targets: 5,
            orderable:1,
            render: function (a, e, t, n) {
              return "<span class='fw-bold fs-5'>€" + t.total + "</span>";
            },
          },
          {
            targets: 7,
            render: function (a, e, t, n){
                return '<div class="d-inline-block text-nowrap"><a href="/html/professionnels/edit-facture.html" class="btn btn-lg btn-icon btn-warning waves-effect waves-light rounded-pill me-50"><i class="ri-edit-box-line ri-20px"></i></a><a href="javascript:void(0)" data-bs-target="#view-invoice" data-bs-toggle="modal" class="btn btn-lg btn-icon btn-info waves-effect waves-light rounded-pill me-50"><i class="ri-eye-line ri-20px"></i></a></div>'
            }
          }          
        ],
        order: [[2, "desc"]],
        dom: '<"row mx-1"<"col-12 col-md-6 d-flex align-items-center justify-content-center justify-content-md-start gap-4 mt-md-0 mt-5"l<"dt-action-buttons text-xl-end text-lg-start text-md-end text-start"B>><"col-12 col-md-6 d-flex align-items-center justify-content-end flex-column flex-md-row pe-3 gap-md-4"f<"invoice_status mb-5 mb-md-0">>>t<"row mx-2"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
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
  !(function () {
    var C = document.querySelector('#solded-invoice');

    C &&
      (C.onclick = function () {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: !0,
          confirmButtonText: "Yes, delete it!",
          customClass: {
            confirmButton: "btn btn-primary me-3 waves-effect waves-light",
            cancelButton: "btn btn-outline-secondary waves-effect",
          },
          buttonsStyling: !1,
        }).then(function (t) {
          t.value &&
            Swal.fire({
              icon: "success",
              title: "Deleted!",
              text: "Your file has been deleted.",
              customClass: { confirmButton: "btn btn-success waves-effect" },
            });
        });
      })
  })