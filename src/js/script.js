$(document).ready(function() {



$(document).ready(function(){
    //slick slider

    //validation form contacts
      $('#contact_form').bootstrapValidator({
           feedbackIcons: {
               valid: 'glyphicon glyphicon-ok',
               invalid: 'glyphicon glyphicon-remove',
               validating: 'glyphicon glyphicon-refresh'
           },
           fields: {
               first_name: {
                   validators: {
                           stringLength: {
                           min: 2,
                       },
                           notEmpty: {
                           message: 'Пожалуйста, введите ваше имя'
                       }
                   }
               },
                last_name: {
                   validators: {
                        stringLength: {
                           min: 2,
                       },
                       notEmpty: {
                           message: 'Пожалуйста, введите вашу фамилию'
                       }
                   }
               },
               email: {
                   validators: {
                       notEmpty: {
                           message: 'Пожалуйста, введите ваш email'
                       },
                       emailAddress: {
                           message: 'Пожалуйста, заполните валидный email'
                       }
                   }
               },
               phone: {
                   validators: {
                       notEmpty: {
                           message: 'Пожалуйста, введите ваш телефоный номер'
                       }
                   }
               },

               message: {
                   validators: {
                         stringLength: {
                           min: 10,
                           max: 200,
                           message:'Пожалуйста введите не менее 10 сиволов, но не больше 200'
                       },
                       notEmpty: {
                           message: 'Пожалуйста, введите сообщение'
                       }
                       }
                   }
               }
           })
           .on('success.form.bv', function(e) {
               $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                   $('#contact_form').data('bootstrapValidator').resetForm();

               // Prevent form submission
               e.preventDefault();

               // Get the form instance
               var $form = $(e.target);

               // Get the BootstrapValidator instance
               var bv = $form.data('bootstrapValidator');

               // Use Ajax to submit form data
               $.post($form.attr('action'), $form.serialize(), function(result) {
                   console.log(result);
               }, 'json');
           });




    //carousel active travelling
       $('.carousel').carousel({
           interval: 6000
         })
       });

       $('#myTab').tabCollapse();

    $('.your-class').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,

          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });


  //hamburger in header nav
  	$('#nav-icon2').click(function(){
  		$(this).toggleClass('open');
  	});

  //nav in header
  $('.nav').nav({
      navButton: '.nav-button',
      subMenu: '.nav-submenu',
      mouseOver: true,
      disableSubMenuLink: 'always',
      slideSpeed: 500
  });



    //navigation scroll
  $(".nav").on("click","a", function (event) {

    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top - 100}, 300);
  });

  //sticky header
  $(window).scroll(function(){
      if($(this).scrollTop()>300){
          $('.sticky-header').addClass('sticky');
      }
      else if ($(this).scrollTop()<300){
          $('.sticky-header').removeClass('sticky');
      }
  });

 //plagin for scroll and animation
  new WOW().init();


          //ayax
  function loadUsers() {
      var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.myjson.com/bins/cqdu5', false);
      //xhr.open('GET', 'https://api.myjson.com/bins/1f75px', false);
      xhr.send();

      if (xhr.status !== 200) {
        alert('Ошибка ' + xhr.status + ': ' + xhr.statusText);
      } else {
        var data = JSON.parse(xhr.responseText);

        var item = '';
          for (var i=0, ln = data.length; i < ln; ++i) {
            item += '<div class="card"><figure><img class="card__foto" src="' + data[i]["image"] + '"/><ul class="card__info"><li class="card__calendar">'+ data[i]["calendar"] + '</li><li class="data__price">'+ data[i]["price"] + '</li></ul>';

            item += '<figcaption><h4> '+ data[i]["title"] + '</h4>';
            item += '<p class="textMainContent">'+ data[i]["paragraph"] + '</p></figcaption></figure></div>';
          }
      document.getElementById('galery-ajax-row').innerHTML = item;
      }
    }

  var load = document.querySelector('#load');
   load.addEventListener("click", loadUsers);     //click for button "load more"




//ellipsis pla

 $('.box--responsive').ellipsis({ responsive: true });


  jQuery(function () {
    jQuery(window).scroll(function () {
      if (jQuery(this).scrollTop() > 1000)
        jQuery('a#move_up').fadeIn();
      else
        jQuery('a#move_up').fadeOut(400);
    });
    jQuery('a#move_up').click(function () {
      jQuery('body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
  });


});
