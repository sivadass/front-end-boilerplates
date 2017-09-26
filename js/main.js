// Slider  Configuration
$(document).ready(function() {
  $("#lightSlider").lightSlider({
    item: 1,
    mode: "slide",
    useCSS: true,
    cssEasing: "ease", //'cubic-bezier(0.25, 0, 0.25, 1)',//
    easing: "linear",
    speed: 600, //ms'
    auto: true,
    loop: true,
    slideEndAnimation: true,
    pause: 5000
  });
});
$(document).ready(function() {
  $("#brandSlider").lightSlider({
    item: 3,
    //autoWidth: true,
    //mode: "slide",
    useCSS: true,
    cssEasing: "ease", //'cubic-bezier(0.25, 0, 0.25, 1)',//
    easing: "linear",
    speed: 600, //ms'
    auto: true,
    loop: true,
    slideEndAnimation: true,
    pause: 1500,
    controls: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          item: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          item: 1
        }
      }
    ]
  });
});

$(window).scroll(function() {
  var scroll = $(window).scrollTop();

  if (scroll >= 2) {
    $("header").addClass("fixed");
  } else {
    $("header").removeClass("fixed");
  }
});

// Contact Form
$(document).ready(function() {
  $("#contactForm").validate({
    rules: {
      name: "required",
      phone: {
        required: true,
        number: true
      }
    },
    errorElement: "span",
    messages: {
      name: "Please enter your sweet name",
      phone: "Please enter your mobile number"
    },
    submitHandler: function(form) {
      var dataparam = $("#contactForm").serialize();
      $.ajax({
        type: "POST",
        async: true,
        url: "contact.php",
        data: dataparam,
        datatype: "json",
        cache: true,
        global: false,
        beforeSend: function() {
          $("#loader").show();
          $("#submitContactLabel").html("Submitting");
        },
        success: function(data) {
          if (data == "success") {
            //console.log(data);
          } else {
            //console.log(data);
            //$('#submitContact').addClass('failed');
            //$('#submitContactLabel').html("SORRY, TRY AGAIN!");
          }
        },
        complete: function() {
          $("#loader").hide();
          $("#contactForm")[0].reset();
          ChangeCaptcha();
          $("#submitContact").addClass("success");
          $("#submitContactLabel").html("SUCCESS!");
        }
      });
    }
  });
});
