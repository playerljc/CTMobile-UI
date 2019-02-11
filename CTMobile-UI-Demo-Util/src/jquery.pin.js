$.fn.pin = function (options) {
  let scrollY = 0,
    elements = [],
    disabled = false,
    $window = $(window);

  options = options || {};

  const recalculateLimits = function () {
    for (let i = 0, len = elements.length; i < len; i++) {
      const $this = elements[i];

      if (options.minWidth && $window.width() <= options.minWidth) {
        if ($this.parent().is('.pin-wrapper')) {
          $this.unwrap();
        }
        $this.css({
          width: '',
          left: '',
          top: '',
          position: '',
        });
        if (options.activeClass) {
          $this.removeClass(options.activeClass);
        }
        disabled = true;
        continue;
      } else {
        disabled = false;
      }

      const $container = options.containerSelector ? $this.closest(options.containerSelector) : $(document.body);
      const offset = $this.offset();
      const containerOffset = $container.offset();
      const parentOffset = $this.offsetParent().offset();

      if (!$this.parent().is('.pin-wrapper')) {
        $this.wrap("<div class='pin-wrapper'>");
      }

      const pad = $.extend({
        top: 0,
        bottom: 0,
      }, options.padding || {});

      $this.data('pin', {
        pad,
        from: (options.containerSelector ? containerOffset.top : offset.top) - pad.top,
        to: containerOffset.top + $container.height() - $this.outerHeight() - pad.bottom,
        end: containerOffset.top + $container.height(),
        parentTop: parentOffset.top,
      });

      $this.css({
        width: $this.outerWidth(),
      });
      $this.parent().css('height', $this.outerHeight());
    }
  };

  const onScroll = function () {
    if (disabled) {
      return;
    }

    scrollY = $window.scrollTop();

    const elmts = [];
    for (let i = 0, len = elements.length; i < len; i++) {
      let $this = $(elements[i]),
        data = $this.data('pin');

      if (!data) { // Removed element
        continue;
      }

      elmts.push($this);

      let from = data.from - data.pad.bottom,
        to = data.to - data.pad.top;

      if (from + $this.outerHeight() > data.end) {
        $this.css('position', '');
        continue;
      }

      if (from < scrollY && to > scrollY) {
        !($this.css('position') == 'fixed') && $this.css({
          left: $this.offset().left,
          top: data.pad.top,
        }).css('position', 'fixed');
        if (options.activeClass) {
          $this.addClass(options.activeClass);
        }
      } else if (scrollY >= to) {
        $this.css({
          left: '',
          top: to - data.parentTop + data.pad.top,
        }).css('position', 'absolute');
        if (options.activeClass) {
          $this.addClass(options.activeClass);
        }
      } else {
        $this.css({
          position: '',
          top: '',
          left: '',
        });
        if (options.activeClass) {
          $this.removeClass(options.activeClass);
        }
      }
    }
    elements = elmts;
  };

  const update = function () {
    recalculateLimits();
    onScroll();
  };

  this.each(function () {
    const $this = $(this),
      data = $(this).data('pin') || {};

    if (data && data.update) {
      return;
    }
    elements.push($this);
    $('img', this).one('load', recalculateLimits);
    data.update = update;
    $(this).data('pin', data);
  });

  $window.scroll(onScroll);
  $window.resize(() => {
    recalculateLimits();
  });
  recalculateLimits();

  window.onload = update;

  return this;
};
