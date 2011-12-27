(function() {

  ;

  var __slice = Array.prototype.slice;

  (function($, window, document) {
    var GlideTo, defaults, filterPath, pluginName, scrollableElement;
    scrollableElement = function() {
      var $scrollElement, el, elements, isScrollable, _i, _len;
      elements = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      for (_i = 0, _len = elements.length; _i < _len; _i++) {
        el = elements[_i];
        $scrollElement = $(el);
        if ($scrollElement.scrollTop() > 0) {
          return el;
        } else {
          $scrollElement.scrollTop(1);
          isScrollable = $scrollElement.scrollTop() > 0;
          $scrollElement.scrollTop(0);
          if (isScrollable) return el;
        }
      }
      return [];
    };
    filterPath = function(string) {
      string = "" + string;
      return string.replace(/^\//, "").replace(/(index|default).[a-zA-Z]{3,4}$/, "").replace(/\/$/, "");
    };
    pluginName = 'glideTo';
    defaults = {
      scrollVertical: scrollableElement('html', 'body'),
      scrollHorizontal: '#main',
      easing: 'easeInOutQuad',
      duration: 1000,
      sectionSelector: 'section',
      screenSelector: 'article'
    };
    GlideTo = (function() {

      function GlideTo(options) {
        this.options = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.scrollVertical = $(this.options.scrollVertical);
        this.scrollHorizontal = $(this.options.scrollHorizontal);
        this.init();
      }

      GlideTo.prototype.glideUpTo = function(position, callback) {
        if (callback == null) callback = function() {};
        return this.scrollVertical.stop().animate({
          scrollTop: position
        }, this.options.duration, this.options.easing, callback);
      };

      GlideTo.prototype.glideLeftTo = function(position, callback) {
        if (callback == null) callback = function() {};
        return this.scrollHorizontal.stop().animate({
          scrollLeft: "+=" + position
        }, this.options.duration, this.options.easing, callback);
      };

      GlideTo.prototype.glideTo = function(target) {
        var $target, delayLeft, offset, that;
        $target = $(target);
        offset = $target.position();
        if (!$target.offsetParent().is(this.scrollHorizontal)) {
          offset.left = $target.offsetParent().position().left;
        }
        if (offset.left === 0) {
          return this.glideUpTo(offset.top, function() {
            return location.hash = target;
          });
        } else if (offset.top === 0 && this.scrollVertical.scrollTop() === 0) {
          return this.glideLeftTo(offset.left, function() {
            return location.hash = target;
          });
        } else {
          delayLeft = (this.scrollVertical.scrollTop() === 0 ? 0 : 100);
          that = this;
          return this.glideUpTo(0, function() {
            return setTimeout((function() {
              return that.glideLeftTo(offset.left, function() {
                return setTimeout((function() {
                  if (offset.top > 0) {
                    return that.glideUpTo(offset.top, function() {
                      return location.hash = target;
                    });
                  } else {
                    return location.hash = target;
                  }
                }), 100);
              });
            }), delayLeft);
          });
        }
      };

      GlideTo.prototype.init = function() {
        return this.locationPath = filterPath(location.pathname);
      };

      return GlideTo;

    })();
    $.glideTo = function(options) {
      if (!$('body').data("plugin_" + pluginName)) {
        return $('body').data("plugin_" + pluginName, new GlideTo(options));
      }
    };
    return $.fn.glide = function() {
      return this.each(function() {
        return $(this).click(function(event) {
          var glide, thisPath;
          event.preventDefault();
          glide = $('body').data("plugin_" + pluginName);
          thisPath = filterPath(this.pathname) || glide.locationPath;
          if (glide.locationPath === thisPath && (location.hostname === this.hostname || !this.hostname) && this.hash.replace(/#/, "")) {
            if (this.hash) return glide.glideTo(this.hash);
          }
        });
      });
    };
  })(jQuery, window, document);

}).call(this);
