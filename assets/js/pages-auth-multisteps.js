$(function () {
  var e = $(".select2");
  e.length &&
    e.each(function () {
      var e = $(this);
      select2Focus(e),
        e.wrap('<div class="position-relative"></div>'),
        e.select2({
          placeholder: "Select an country",
          dropdownParent: e.parent(),
        });
    });
}),
  document.addEventListener("DOMContentLoaded", function (e) {
    var s = document.querySelector("#multiStepsValidation");
    if (null !== s) {
      var r = s.querySelector("#multiStepsForm");
      let e = r.querySelector("#accountDetailsValidation");
      var o = r.querySelector("#personalInfoValidation"),
        l = r.querySelector("#billingLinksValidation"),
        m = [].slice.call(r.querySelectorAll(".btn-next")),
        r = [].slice.call(r.querySelectorAll(".btn-prev")),
        u = document.querySelector(".multi-steps-exp-date"),
        d = document.querySelector(".multi-steps-cvv"),
        c = document.querySelector(".multi-steps-mobile"),
        p = document.querySelector(".multi-steps-pincode"),
        g = document.querySelector(".multi-steps-card");
      u && new Cleave(u, { date: !0, delimiter: "/", datePattern: ["m", "y"] }),
        d && new Cleave(d, { numeral: !0, numeralPositiveOnly: !0 }),
        c && new Cleave(c, { phone: !0, phoneRegionCode: "US" }),
        p && new Cleave(p, { delimiter: "", numeral: !0 }),
        g &&
          new Cleave(g, {
            creditCard: !0,
            onCreditCardTypeChanged: function (e) {
              document.querySelector(".card-type").innerHTML =
                "" != e && "unknown" != e
                  ? '<img src="' +
                    assetsPath +
                    "img/icons/payments/" +
                    e +
                    '-cc.png" height="18"/>'
                  : "";
            },
          });
      let t = new Stepper(s, { linear: !0 }),
        n = FormValidation.formValidation(e, {
          fields: {
            multiStepsUsername: {
              validators: {
                notEmpty: { message: "Please enter username" },
                stringLength: {
                  min: 6,
                  max: 30,
                  message:
                    "The name must be more than 6 and less than 30 characters long",
                },
                regexp: {
                  regexp: /^[a-zA-Z0-9 ]+$/,
                  message:
                    "The name can only consist of alphabetical, number and space",
                },
              },
            },
            multiStepsEmail: {
              validators: {
                notEmpty: { message: "Please enter email address" },
                emailAddress: {
                  message: "The value is not a valid email address",
                },
              },
            },
            multiStepsPass: {
              validators: { notEmpty: { message: "Please enter password" } },
            },
            multiStepsConfirmPass: {
              validators: {
                notEmpty: { message: "Confirm Password is required" },
                identical: {
                  compare: function () {
                    return e.querySelector('[name="multiStepsPass"]').value;
                  },
                  message: "The password and its confirm are not the same",
                },
              },
            },
          },
          plugins: {
            trigger: new FormValidation.plugins.Trigger(),
            bootstrap5: new FormValidation.plugins.Bootstrap5({
              eleValidClass: "",
              rowSelector: ".col-sm-6",
            }),
            autoFocus: new FormValidation.plugins.AutoFocus(),
            submitButton: new FormValidation.plugins.SubmitButton(),
          },
          init: (e) => {
            e.on("plugins.message.placed", function (e) {
              e.element.parentElement.classList.contains("input-group") &&
                e.element.parentElement.insertAdjacentElement(
                  "afterend",
                  e.messageElement
                );
            });
          },
        }).on("core.form.valid", function () {
          t.next();
        }),
        a = FormValidation.formValidation(o, {
          fields: {
            multiStepsFirstName: {
              validators: { notEmpty: { message: "Please enter first name" } },
            },
            multiStepsAddress: {
              validators: {
                notEmpty: { message: "Please enter your address" },
              },
            },
          },
          plugins: {
            trigger: new FormValidation.plugins.Trigger(),
            bootstrap5: new FormValidation.plugins.Bootstrap5({
              eleValidClass: "",
              rowSelector: function (e, t) {
                switch (e) {
                  case "multiStepsFirstName":
                    return ".col-sm-6";
                  case "multiStepsAddress":
                    return ".col-md-12";
                  default:
                    return ".row";
                }
              },
            }),
            autoFocus: new FormValidation.plugins.AutoFocus(),
            submitButton: new FormValidation.plugins.SubmitButton(),
          },
        }).on("core.form.valid", function () {
          t.next();
        }),
        i = FormValidation.formValidation(l, {
          fields: {
            multiStepsCard: {
              validators: { notEmpty: { message: "Please enter card number" } },
            },
          },
          plugins: {
            trigger: new FormValidation.plugins.Trigger(),
            bootstrap5: new FormValidation.plugins.Bootstrap5({
              eleValidClass: "",
              rowSelector: function (e, t) {
                return "multiStepsCard" !== e ? ".col-dm-6" : ".col-md-12";
              },
            }),
            autoFocus: new FormValidation.plugins.AutoFocus(),
            submitButton: new FormValidation.plugins.SubmitButton(),
          },
          init: (e) => {
            e.on("plugins.message.placed", function (e) {
              e.element.parentElement.classList.contains("input-group") &&
                e.element.parentElement.insertAdjacentElement(
                  "afterend",
                  e.messageElement
                );
            });
          },
        }).on("core.form.valid", function () {
          alert("Submitted..!!");
        });
      m.forEach((e) => {
        e.addEventListener("click", (e) => {
          switch (t._currentIndex) {
            case 0:
              n.validate();
              break;
            case 1:
              a.validate();
              break;
            case 2:
              i.validate();
          }
        });
      }),
        r.forEach((e) => {
          e.addEventListener("click", (e) => {
            switch (t._currentIndex) {
              case 2:
              case 1:
                t.previous();
            }
          });
        });
    }
  });
