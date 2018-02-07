$(document).ready(function() {
   //For Hiding Unselected Images
   $('.smlimg').not('#hm1,#hm2').hide();

   // Click on images in the homepage
   $('#image1,#hm1').click(function() {

      $('#hm1').show();
      $('#hm2').show();
      $('#hm1').addClass('border');
      $('.homeimage').not('#homeimage1').hide();
      $('#homeimage1').show();

      $('#hm2').click(function() {
         $('#hm1').removeClass('border');
         $('#hm2').addClass('border');

         $('#homeimage2').show();
         $('.homeimage').not('#homeimage2').hide();

      });
      $('.smlimg').not('#hm1,#hm2').hide();

   });

   $('#image2,#hm3').click(function() {

      $('#hm3').show();
      $('#hm4').show();
      $('#hm4').addClass('border');
      $('.homeimage').not('#homeimage3').hide();
      $('#homeimage3').show();

      $('#hm4').click(function() {
         $('#hm5').removeClass('border');
         $('#hm4').addClass('border');
         $('#homeimage4').show();
         $('.homeimage').not('#homeimage4').hide();

      });
      $('.smlimg').not('#hm3,#hm4').hide();

   });
   $('#image3,#hm5').click(function() {

      $('#hm5').show();
      $('#hm6').show();
      $('#hm5').addClass('border');
      $('.homeimage').not('#homeimage5').hide();
      $('#homeimage5').show();

      $('#hm6').click(function() {
         $('#hm5').removeClass('border');
         $('#hm6').addClass('border');
         $('#homeimage6').show();
         $('.homeimage').not('#homeimage6').hide();

      });
      $('.smlimg').not('#hm5,#hm6').hide();

   });
   $('#image4,#hm7').click(function() {

      $('#hm7').show();
      $('#hm8').show();
      $('#hm7').addClass('border');
      $('.homeimage').not('#homeimage7').hide();
      $('#homeimage7').show();

      $('#hm8').click(function() {
         $('#hm7').removeClass('border');
         $('#hm8').addClass('border');

         $('#homeimage8').show();
         $('.homeimage').not('#homeimage8').hide();

      });
      $('.smlimg').not('#hm7,#hm8').hide();

   });

   $('#image5,#hm9').click(function() {

      $('#hm9').show();
      $('#hm10').show();
      $('#hm9').addClass('border');
      $('.homeimage').not('#homeimage9').hide();
      $('#homeimage9').show();

      $('#hm10').click(function() {
         $('#hm9').removeClass('border');
         $('#hm10').addClass('border');

         $('#homeimage10').show();
         $('.homeimage').not('#homeimage10').hide();

      });
      $('.smlimg').not('#hm9,#hm10').hide();

   });

   // Star Ratings
   $('#stars li').click(function() {
      var onStar = parseInt($(this).data('value'), 10); // The star currently selected
      var stars = $(this).parent().children('li.star');

      for (i = 0; i < stars.length; i++) {
         $(stars[i]).removeClass('selected');
      }

      for (i = 0; i < onStar; i++) {
         $(stars[i]).addClass('selected');
      }

   });
   // For Magnifying Glass
   ! function($) {

      "use strict"; // jshint ;_;

      /* MAGNIFY PUBLIC CLASS DEFINITION
       * =============================== */

      var Magnify = function(element, options) {
         this.init('magnify', element, options)
      }

      Magnify.prototype = {

         constructor: Magnify

            ,
         init: function(type, element, options) {
               var event = 'mousemove',
                  eventOut = 'mouseleave';

               this.type = type
               this.$element = $(element)
               this.options = this.getOptions(options)
               this.nativeWidth = 0
               this.nativeHeight = 0

               this.$element.wrap('<div class="magnify" \>');
               this.$element.parent('.magnify').append('<div class="magnify-large" \>');
               this.$element.siblings(".magnify-large").css("background", "url('" + this.$element.attr("src") + "') no-repeat");

               this.$element.parent('.magnify').on(event + '.' + this.type, $.proxy(this.check, this));
               this.$element.parent('.magnify').on(eventOut + '.' + this.type, $.proxy(this.check, this));
            }

            ,
         getOptions: function(options) {
               options = $.extend({}, $.fn[this.type].defaults, options, this.$element.data())

               if (options.delay && typeof options.delay == 'number') {
                  options.delay = {
                     show: options.delay,
                     hide: options.delay
                  }
               }

               return options
            }

            ,
         check: function(e) {
            var container = $(e.currentTarget);
            var self = container.children('img');
            var mag = container.children(".magnify-large");

            // Get the native dimensions of the image
            if (!this.nativeWidth && !this.nativeHeight) {
               var image = new Image();
               image.src = self.attr("src");

               this.nativeWidth = image.width;
               this.nativeHeight = image.height;

            } else {

               var magnifyOffset = container.offset();
               var mx = e.pageX - magnifyOffset.left;
               var my = e.pageY - magnifyOffset.top;

               if (mx < container.width() && my < container.height() && mx > 0 && my > 0) {
                  mag.fadeIn(100);
               } else {
                  mag.fadeOut(100);
               }

               if (mag.is(":visible")) {
                  var rx = Math.round(mx / container.width() * this.nativeWidth - mag.width() / 2) * -1;
                  var ry = Math.round(my / container.height() * this.nativeHeight - mag.height() / 2) * -1;
                  var bgp = rx + "px " + ry + "px";

                  var px = mx - mag.width() / 2;
                  var py = my - mag.height() / 2;

                  mag.css({
                     left: px,
                     top: py,
                     backgroundPosition: bgp
                  });
               }
            }

         }
      }

      /* MAGNIFY PLUGIN DEFINITION
       * ========================= */

      $.fn.magnify = function(option) {
         return this.each(function() {
            var $this = $(this),
               data = $this.data('magnify'),
               options = typeof option == 'object' && option
            if (!data) $this.data('tooltip', (data = new Magnify(this, options)))
            if (typeof option == 'string') data[option]()
         })
      }

      $.fn.magnify.Constructor = Magnify

      $.fn.magnify.defaults = {
         delay: 0
      }

      /* MAGNIFY DATA-API
       * ================ */

      $(window).on('load', function() {
         $('[data-toggle="magnify"]').each(function() {
            var $mag = $(this);
            $mag.magnify()
         })
      })

   }(window.jQuery);

   //Sliding Various Products
   var slideCount = $('#slider ul li').length;
   var slideWidth = $('#slider ul li').width();
   var slideHeight = $('#slider ul li').height();
   var sliderUlWidth = slideCount * slideWidth;

   $('#slider').css({
      width: slideWidth,
      height: slideHeight
   });

   $('#slider ul').css({
      width: sliderUlWidth,
      marginLeft: -slideWidth
   });

   $('#slider ul li:last-child').prependTo('#slider ul');

   function moveLeft() {
      $('#slider ul').animate({
         left: +slideWidth
      }, 200, function() {
         $('#slider ul li:last-child').prependTo('#slider ul');
         $('#slider ul').css('left', '');
      });
   };

   function moveRight() {
      $('#slider ul').animate({
         left: -slideWidth
      }, 200, function() {
         $('#slider ul li:first-child').appendTo('#slider ul');
         $('#slider ul').css('left', '');
      });
   };

   $('a.control_next').click(function() {
      moveRight();
   });

   $('a.control_prev').click(function() {
      moveLeft();
   });

});