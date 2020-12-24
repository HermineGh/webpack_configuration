/******/ (function() { // webpackBootstrap
/*!********************************!*\
  !*** ./analiticsTipescript.ts ***!
  \********************************/
function createAnalitics() {
  var counter = 0,
      isDestroyed = false;

  var listener = function listener() {
    return counter++;
  };

  document.addEventListener('click', listener);
  return {
    // by calling this method createAnalitics function will stop its action
    destroy: function destroy() {
      document.removeEventListener('click', listener);
      isDestroyed = true;
    },
    getClicks: function getClicks() {
      if (isDestroyed) {
        return 'Analitics is destroyed';
      }

      return counter;
    }
  };
} //creating analytics method for window object to make createAnalitics() globally usable


window['analitics'] = createAnalitics();
/******/ })()
;
//# sourceMappingURL=analiticsTipescript.js.map