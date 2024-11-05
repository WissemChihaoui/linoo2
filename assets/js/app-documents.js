$(function () {
    var a,
      e = $(".invoice-list-table");
    e.length &&
      (a = e.DataTable({
        ajax: assetsPath + "json/factures.json",
        columns: [
          { data: "due_date" },
          { data: "document" },
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
                  const issuedDate = new Date(t.due_date).toLocaleDateString('fr-FR', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  });
              
                  return '<span>' + issuedDate + '</span>';
                },
              },
              {
                targets: 3,
                responsivePriority: 2,
                render: function (a, e, t, n) {
                  var s = t.document;
                  return (
                    '<a href="#">'+s+'</a>'
                  );
                },
              },
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
  