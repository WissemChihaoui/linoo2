$(function () {
  var e = $(".selectpicker"),
    t = $(".select2"),
    c = $(".select2-icons");
  function l(e) {
    return e.id
      ? "<i class='" + $(e.element).data("icon") + " me-2'></i>" + e.text
      : e.text;
  }
  e.length && (e.selectpicker(), handleBootstrapSelectEvents()),
    t.length &&
      t.each(function () {
        var e = $(this);
        select2Focus(e),
          e
            .wrap('<div class="position-relative"></div>')
            .select2({
              placeholder: "Select value",
              dropdownParent: e.parent(),
            });
      }),
    c.length &&
      (select2Focus(c),
      c.wrap('<div class="position-relative"></div>').select2({
        dropdownParent: c.parent(),
        templateResult: l,
        templateSelection: l,
        escapeMarkup: function (e) {
          return e;
        },
      }));
});
