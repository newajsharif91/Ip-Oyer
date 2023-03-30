jQuery(document).ready(function (a) {
  a(".scroll").click(function (g) {
    var b, c, d, e, f;
    g.preventDefault(), b = this.href, c = b.split("#"), d = c[1], e = a("#" + d).offset(), f = e.top, a('html, body').animate({
      scrollTop: f
    }, 750), a(this).fadeOut()
  }), a("#mobileTrigger, #desktopTrigger").click(function (b) {
    b.preventDefault(), console.log("triggered"), a("#mobileTrigger").toggleClass('open'), a("#main-menu").toggleClass('open'), a("#nav-main").hasClass('open') ? (a("#nav-main").removeClass('open'), a("#static-menu").fadeIn(500), a("#fp-nav").fadeIn(500), a("#mobileTriggerLabel").removeClass("hide"), a("#mobileHeaderDarken").removeClass("hide"), a("#nav-bottom").removeClass('visible animated fadeIn'), a("#main-menu-navs > li").removeClass('visible animated fadeInUp faster'), a("ul.sub-menu").slideUp()) : (a("#nav-main").addClass('open'), a("#static-menu").fadeOut(500), a("#fp-nav").fadeOut(500), a("#mobileTriggerLabel").addClass("hide"), a("#mobileHeaderDarken").addClass("hide"), a("#nav-bottom").addClass('visible animated fadeIn'), a("#main-menu-navs > li").addClass('visible animated fadeInUp faster'))
  }), a("ul#main-menu-navs > li.menu-item-has-children > a").click(function (b) {
    b.preventDefault(), a(this).toggleClass('expanded'), a(this).hasClass('expanded') ? (a(this).parent().find("ul.sub-menu").addClass('expanded'), a(this).parent().find("ul.sub-menu").slideDown(200, 'swing', function () {
      a("ul.sub-menu li").addClass('visible animated fadeIn faster')
    })) : (a(this).parent().find("ul.sub-menu").removeClass('expanded'), a(this).parent().find("ul.sub-menu li").removeClass('visible animated fadeIn faster'), a(this).parent().find("ul.sub-menu").slideUp())
  }), a("#nav-properties-filter a").click(function (b) {
    b.preventDefault(), console.log("show filter"), a("#nav-properties-filter a").toggleClass('filter-active'), a("#nav-properties-filter-panel").toggleClass('filter-open')
  })
}), jQuery(function () {
  jQuery('#client-grid article').matchHeight({
    byRow: !1
  }), jQuery('#prop-grid article').matchHeight({
    byRow: !1
  }), jQuery('article.service-testimonial.half-width').matchHeight({
    byRow: !1
  })
}), jQuery(document).ready(function (a) {
  var b = a(".video-slider"),
    e = b.find('.embed-player'),
    f = b.find('.slide-image'),
    g = 0;

  function c(a, b) {
    if (a == null || b == null) return;
    a.contentWindow.postMessage(JSON.stringify(b), "*")
  }

  function d(h, g) {
    var a, d, f, b, e;
    if (a = h.find(".slick-current").find(".item"), d = a.attr("class").split(" ")[1], b = a.find("iframe").get(0), f = a.data("video-start"), console.log(d), d === "vimeo") switch (g) {
      case "play":
        f != null && f > 0 && !a.hasClass('started') && (a.addClass('started'), c(b, {
          method: "setCurrentTime",
          value: f
        })), c(b, {
          method: "play",
          value: 1
        });
        break;
      case "pause":
        c(b, {
          method: "pause",
          value: 1
        });
        break
    } else if (d === "youtube") switch (g) {
      case "play":
        c(b, {
          event: "command",
          func: "mute"
        }), c(b, {
          event: "command",
          func: "playVideo"
        });
        break;
      case "pause":
        c(b, {
          event: "command",
          func: "pauseVideo"
        });
        break
    } else d === "video" && (e = a.children("video").get(0), e != null && (g === "play" ? e.play() : e.pause()))
  }

  function h(h, b) {
    if (!h[0]) return;
    var g = a(".video-slider"),
      c = g.width(),
      f, d = g.height(),
      e, b = b || 16 / 9;
    h.each(function () {
      var g = a(this);
      c / b < d ? (f = Math.ceil(d * b), g.width(f).height(d).css({
        left: (c - f) / 2,
        top: 0
      })) : (e = Math.ceil(c / b), g.width(c).height(e).css({
        left: 0,
        top: (d - e) / 2
      }))
    })
  }
  a(function () {
    b.on("init", function (b) {
      b = a(b.currentTarget), setTimeout(function () {
        d(b, "play")
      }, 1e3), h(e, 16 / 9)
    }), b.on("beforeChange", function (c, b) {
      b = a(b.$slider), d(b, "pause")
    }), b.on("afterChange", function (c, b) {
      b = a(b.$slider), d(b, "play")
    }), b.on("lazyLoaded", function (a, b, c, d) {
      g++, g === f.length && f.addClass('show')
    });
    var c = ['Patent', 'Team', 'Services', "Contact"];
    b.slick({
      lazyLoad: "progressive",
      speed: 600,
      arrows: !1,
      dots: !0,
      fade: !0,
      cssEase: "cubic-bezier(0.87, 0.03, 0.41, 0.9)",
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: !0,
      pauseOnHover: !1,
      autoplaySpeed: 8e3,
      customPaging: function (b, a) {
        return '<a>' + c[a] + '</a>'
      }
    })
  }), a(window).on("resize.slickVideoPlayer", function () {
    h(e, 16 / 9), console.log("resized!")
  })
}),
  function (a) {
    a(window).load(function () {
      a('.fade-in').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: '20%'
      }), a('.fade-in-no-offset').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: '0%'
      }), a('.fade-in-up').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: '20%'
      }), a('.fade-in-up-small').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUpSmall',
        offset: '20%'
      })
    })
  }(jQuery)
