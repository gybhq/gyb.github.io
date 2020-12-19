/* You can add more configuration options to webfontloader by previously defining the WebFontConfig with your options */
if ( typeof WebFontConfig === "undefined" ) {
    WebFontConfig = new Object();
}
WebFontConfig['google'] = {families: ['Old+Standard+TT:400,700,400italic&amp;subset=latin']};
 WebFontConfig['active'] = function() { 
   var event = document.createEvent('Event');
   event.initEvent('fontLoaded', true, true);
   window.dispatchEvent(event);
   fontLoaded = true;
};

(function() {
    var wf = document.createElement( 'script' );
    wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName( 'script' )[0];
    s.parentNode.insertBefore( wf, s );
})();