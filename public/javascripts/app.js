require('../../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js')
require('../../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.velocity.js')
require('../../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js')
import $ from 'jquery'
import scrollMagic from 'scrollmagic'
require('../../node_modules/gsap/ScrollToPlugin.js')

"use strict";

$(() => {
// init controller
var controller = new scrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

new scrollMagic.Scene({triggerElement: "#katana"})
      .setTween("#katana > div", {y: "100%", ease: Linear.easeNone})
      .addTo(controller);

new scrollMagic.Scene({triggerElement: "#samurai"})
      .setTween("#samurai > div", {y: "100%", ease: Linear.easeNone})
      .addTo(controller);

new scrollMagic.Scene({triggerElement: "#workshop"})
      .setTween("#workshop > div", {y: "100%", ease: Linear.easeNone})
      .addTo(controller);
new scrollMagic.Scene({triggerElement: "#about"})
      .setTween("#about > div", {y: "100%", ease: Linear.easeNone})
      .addTo(controller);
new scrollMagic.Scene({triggerElement: "#contact"})
      .setTween("#contact > div", {y: "100%", ease: Linear.easeNone})
      .addTo(controller)

var nav = $('#menu'),
hambtn = $('#mobileHead'),
offset = nav.offset();
if (nav[0]) {
  $(window).scroll(function () {
    if($(window).scrollTop() > offset.top) {
      hambtn.addClass('fixed');
      nav.addClass('fixed');
    } else {
      hambtn.removeClass('fixed');
      nav.removeClass('fixed');
    }
  });
}


var detailNav = $('#dMenu'),
detailLogo = $('.detail-logo'),
detailOffset = detailNav.offset();
if (detailNav[0]) {
  $(window).scroll(function () {
    console.log(detailNav[0]);
    if($(window).scrollTop() > detailOffset.top) {
      detailNav.addClass('fixed');
      hambtn.addClass('fixed');
      hambtn.addClass('black');
      detailLogo.addClass('fixedBlock');
      detailNav.addClass('black');
    } else {
      detailLogo.removeClass('fixedBlock');
      hambtn.removeClass('fixed');
      detailNav.removeClass('black');
      detailNav.removeClass('fixed');
    }
  });
}

var activeClass = 'active';
function hamburgBtn() {
    $('.btn_hamburger').on('click', function(event) {
        var button = $(this);
        event.preventDefault();

        button.find('a').toggleClass(activeClass);
        button.next().slideToggle(250);
    });
};
hamburgBtn();


var tween = TweenMax.from("#animate", 0.5, {autoAlpha: 0, scale: 0.7});

controller.scrollTo(function (newpos) {
  TweenMax.to(window, 0.5, {scrollTo: {y: newpos}});
});

  //  bind scroll to anchor links
  $('.contact').on("click", function (e) {
    var id = $(this).attr("href");
    if ($(id).length > 0) {
      e.preventDefault();

      // trigger scroll
      controller.scrollTo(id);

      // if supported by the browser we can even update the URL.
      if (window.history && window.history.pushState) {
        history.pushState("", document.title, id);
      }
    }
  });
});
