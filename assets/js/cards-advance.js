!function(){let e,a,o,r;a=(isDarkStyle?(e=config.colors_dark.cardColor,r=config.colors_dark.textMuted,o=config.colors_dark.bodyColor,config.colors_dark):(e=config.colors.cardColor,r=config.colors.textMuted,o=config.colors.bodyColor,config.colors)).headingColor;var t=document.querySelectorAll(".chart-progress"),t=(t&&t.forEach(function(e){var o=config.colors[e.dataset.color],r=e.dataset.series,t=e.dataset.progress_variant||"false",o=(o=o,r=r,{chart:{height:"true"==(t=t)?58:55,width:"true"==t?58:45,type:"radialBar"},plotOptions:{radialBar:{hollow:{size:"true"==t?"50%":"25%"},dataLabels:{show:"true"==t,value:{offsetY:-10,fontSize:"15px",fontWeight:500,fontFamily:"Inter",color:a}},track:{background:config.colors_label.secondary}}},stroke:{lineCap:"round"},colors:[o],grid:{padding:{top:"true"==t?-12:-15,bottom:"true"==t?-17:-15,left:"true"==t?-17:-5,right:-15}},series:[r],labels:"true"==t?[""]:["Progress"]});new ApexCharts(e,o).render()}),document.querySelector(".credit-card-payment")),c=document.querySelector(".expiry-date-payment"),n=document.querySelectorAll(".cvv-code-payment");t&&new Cleave(t,{creditCard:!0,onCreditCardTypeChanged:function(e){document.querySelector(".card-payment-type").innerHTML=""!=e&&"unknown"!=e?'<img src="'+assetsPath+"img/icons/payments/"+e+'-cc.png" class="cc-icon-image" height="28"/>':""}}),c&&new Cleave(c,{date:!0,delimiter:"/",datePattern:["m","y"]}),n&&n.forEach(function(e){new Cleave(e,{numeral:!0,numeralPositiveOnly:!0})})}();