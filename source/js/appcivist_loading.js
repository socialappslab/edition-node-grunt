(function(appcvui, document, window) {

  appcvui.PaceLoading = function (element) {
    this.initialize(element);
    return this;
  }

  p = appcvui.PaceLoading.prototype;

  p.constructor = appcvui.PaceLoading;

  p.initialize = function(el) {
    window.paceOptions = {
      ajax: false, // disabled
      document: false, // disabled
      eventLag: false, // disabled
      elements: {
        selectors: [el]
      }
    };

    this.el = el;

    this.paceOptions = window.paceOptions;
  }

  p.start =  function (element) {
    vex.open({
      unsafeContent: this.el.querySelector('.modal-content').innerHTML
    })
    Pace.start();
  }


  p.stop =  function (element) {
    Pace.stop();
  }

}( window.appcvui =  window.appcvui || {}, document, window, window.vex ));
