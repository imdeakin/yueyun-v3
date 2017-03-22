/**
 * Created by Deakin on 2017/3/22 0022.
 */
function scrollToTop(query, options) {
  var defaults = {
    showTop: 300,
    speed: 500,
  }, setting = (function (defaults, options) {
    for (var key in options) {
      if (typeof options[key] !== 'undefined') {
        defaults[key] = options[key];
      }
    }
    return defaults;
  })(defaults, options);

  function updateVisibleStatus() {
    if (window.scrollY >= setting.showTop) {
      btn.style.display = 'block';
    } else {
      btn.style.display = 'none';
    }
  }

  var btn = document.querySelector(query);

  updateVisibleStatus();

  window.onscroll = function () {
    updateVisibleStatus();
  };

  btn.onclick = function () {
    var top = window.scrollY,
      delay = 10,
      a = top / (setting.speed / delay);
    var id = setInterval(function () {
      top -= a;
      window.scrollTo(0, top);
      if (top <= 0) {
        console.log(new Date().getSeconds());
        clearInterval(id);
      }
    }, delay);
  }
}
