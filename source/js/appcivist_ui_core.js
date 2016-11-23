( function(window, document){
  var appcvui = window.appcvui || {};
  appcvui.equalHeights = function(selector) {

    var elms = document.querySelectorAll(selector);
    var len = elms.length;
    var tallest = 0;
    var elm, elmHeight, x;

    for (x=0; x < len; x++) {
      elm = elms[x];
      elmHeight = elm.offsetHeight;
      tallest = (elmHeight > tallest) ? elmHeight : tallest;
    }

    for (x=0; x < len; x++) {
      elms[x].style.height = tallest + 'px';
    }
  };

  appcvui.initialize = function(){
    vex.defaultOptions.className = 'vex-theme-plain';
    appcvui.navigation = new appcvui.Navigation('.appcivist', '#appcivist__nav');
    if( document.querySelector('.appmain > .campaign') != null ) {
      appcvui.campaign = new appcvui.Campaign('.campaign');
    }
  };

  window.appcvui = appcvui;

}( window, document));
