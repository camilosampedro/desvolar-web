/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-csstransitions-audio-shiv-cssclasses-testprop-testallprops-domprefixes-load
 */

;window.Modernizr=function(a,b,c){function x(a){j.cssText=a}function y(a,b){return x(prefixes.join(a+";")+(b||""))}function z(a,b){return typeof a===b}function A(a,b){return!!~(""+a).indexOf(b)}function B(a,b){for(var d in a){var e=a[d];if(!A(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function C(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:z(f,"function")?f.bind(d||b):f}return!1}function D(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+n.join(d+" ")+d).split(" ");return z(b,"string")||z(b,"undefined")?B(e,b):(e=(a+" "+o.join(d+" ")+d).split(" "),C(e,b,c))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m="Webkit Moz O ms",n=m.split(" "),o=m.toLowerCase().split(" "),p={},q={},r={},s=[],t=s.slice,u,v={}.hasOwnProperty,w;!z(v,"undefined")&&!z(v.call,"undefined")?w=function(a,b){return v.call(a,b)}:w=function(a,b){return b in a&&z(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=t.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(t.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(t.call(arguments)))};return e}),p.csstransitions=function(){return D("transition")},p.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c};for(var E in p)w(p,E)&&(u=E.toLowerCase(),e[u]=p[E](),s.push((e[u]?"":"no-")+u));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)w(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},x(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._domPrefixes=o,e._cssomPrefixes=n,e.testProp=function(a){return B([a])},e.testAllProps=D,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+s.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
// Generated by CoffeeScript 1.7.1
(function() {
  var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  this.AudioPlayer = (function() {
    AudioPlayer.States = {
      Ready: 0,
      Playing: 1,
      Loading: 2,
      Error: 3
    };

    AudioPlayer.prototype.audioPlayerEvents = ["abort", "error", "play", "playing", "seeked", "pause", "ended", "canplay", "loadstart", "loadeddata", "canplaythrough", "seeking", "stalled", "waiting", "progress"];

    function AudioPlayer(options) {
      this.setOptions(options);
    }

    AudioPlayer.prototype.setOptions = function(options) {
      var key, value;
      if (options == null) {
        options = {};
      }
      for (key in options) {
        value = options[key];
        this[key] = value;
      }
      if (options.el) {
        return this.setEl(options.el);
      }
    };

    AudioPlayer.prototype.setEl = function(el) {
      if (this.el) {
        this._unbindEvents();
      }
      this.el = el;
      return this._bindEvents();
    };

    AudioPlayer.prototype.updateState = function(e) {
      var state, _ref;
      state = this.isErrored() ? AudioPlayer.States.Error : this.isLoading() ? AudioPlayer.States.Loading : this.isPlaying() ? AudioPlayer.States.Playing : AudioPlayer.States.Ready;
      if (this.state !== state) {
        this.state = state;
        return (_ref = this.ui) != null ? _ref.AudioPlayerUpdateState(state) : void 0;
      }
    };

    AudioPlayer.prototype.isPlaying = function() {
      return this.el && !this.el.paused;
    };

    AudioPlayer.prototype.isPaused = function() {
      return this.el && this.el.paused;
    };

    AudioPlayer.prototype.isLoading = function() {
      if (!this.state && this.isEmpty()) {
        return false;
      }
      return this.el.networkState === this.el.NETWORK_LOADING && this.el.readyState < this.el.HAVE_FUTURE_DATA;
    };

    AudioPlayer.prototype.isErrored = function() {
      return this.el.error || this.el.networkState === this.el.NETWORK_NO_SOURCE;
    };

    AudioPlayer.prototype.isEmpty = function() {
      return this.el.readyState === this.el.HAVE_NOTHING;
    };

    AudioPlayer.prototype.isEnded = function() {
      return this.el.ended;
    };

    AudioPlayer.prototype.play = function() {
      var _ref;
      if (this.isEmpty()) {
        if ((_ref = this.ui) != null) {
          _ref.AudioPlayerUpdateState(AudioPlayer.States.Loading);
        }
      }
      return this.el.play();
    };

    AudioPlayer.prototype.pause = function() {
      return this.el.pause();
    };

    AudioPlayer.prototype.load = function() {
      return this.el.load();
    };

    AudioPlayer.prototype.duration = function() {
      return this.el.duration;
    };

    AudioPlayer.prototype.seekTo = function(time) {
      return this.el.currentTime = parseInt(time, 10);
    };

    AudioPlayer.prototype.percentComplete = function() {
      var number;
      number = ~~((this.el.currentTime / this.el.duration) * 10000);
      return number / 10000;
    };

    AudioPlayer.prototype.handleEvent = function(event) {
      var _ref;
      if (_ref = event.type, __indexOf.call(this.audioPlayerEvents, _ref) >= 0) {
        return this.updateState(event);
      } else if (event.type === "timeupdate") {
        return this._timeUpdate(event);
      }
    };

    AudioPlayer.prototype.destroy = function() {
      this.ui = null;
      return this._unbindEvents();
    };

    AudioPlayer.prototype._bindEvents = function() {
      var eventName, _i, _len, _ref;
      _ref = this.audioPlayerEvents;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        eventName = _ref[_i];
        this.el.addEventListener(eventName, this);
      }
      return this.el.addEventListener("timeupdate", this);
    };

    AudioPlayer.prototype._unbindEvents = function() {
      var eventName, _i, _len, _ref;
      _ref = this.audioPlayerEvents;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        eventName = _ref[_i];
        this.el.removeEventListener(eventName, this);
      }
      return this.el.removeEventListener("timeupdate", this);
    };

    AudioPlayer.prototype._timeUpdate = function(e) {
      var _ref;
      if (!this.isLoading()) {
        return (_ref = this.ui) != null ? typeof _ref.AudioPlayerTimeUpdated === "function" ? _ref.AudioPlayerTimeUpdated(this.percentComplete()) : void 0 : void 0;
      }
    };

    return AudioPlayer;

  })();

  this.AudioPlayerUI = (function() {
    AudioPlayerUI.prototype.transitionEvents = ["transitionend", "webkitTransitionEnd", "MSTransitionEnd", "oTransitionEnd"];

    function AudioPlayerUI(options) {
      if (options == null) {
        options = {};
      }
      this.setOptions(options);
      this.audioPlayer = new AudioPlayer({
        ui: this
      });
      this._createAudioEl();
      this._createImageEl();
      if (options.el) {
        this.setEl(options.el);
      }
      this.goToSong(0);
    }

    AudioPlayerUI.prototype.setOptions = function(options) {
      var key, value, _results;
      _results = [];
      for (key in options) {
        value = options[key];
        _results.push(this[key] = value);
      }
      return _results;
    };

    AudioPlayerUI.prototype.setEl = function(el) {
      this._unbindEvents();
      this.el = el;
      this.$el = $(this.el);
      this.$el.append(this.audioEl);
      this.$imageContainer = this.$el.find(".audio-player-image");
      this.$imageContainer.append(this.image);
      this.$progressContainer = this.$el.find(".audio-player-progress");
      this.$progressBar = this.$el.find(".audio-player-progress-bar");
      this.$button = this.$el.find(".audio-player-place-pause-button");
      this.$backButton = this.$el.find(".icon-backward");
      this.$nextButton = this.$el.find(".icon-forward");
      this.$name = this.$el.find(".audio-player-song-name");
      return this._bindEvents();
    };

    AudioPlayerUI.prototype.togglePlayPause = function() {
      if (this.audioPlayer.isPlaying()) {
        return this.audioPlayer.pause();
      } else {
        return this.audioPlayer.play();
      }
    };

    AudioPlayerUI.prototype.goToSong = function(index) {
      var wasPlaying;
      this.currentSong = index;
      wasPlaying = this.audioPlayer.isPlaying();
      this._updateSourceAttributes(index);
      this._updateImageAttributes(index);
      this.$name[0].innerHTML = this.songs[index].name;
      this.audioPlayer.setEl(this.audioEl);
      this.$progressBar.css({
        width: 0
      });
      this.audioPlayer.load();
      if (wasPlaying) {
        return this.audioPlayer.play();
      }
    };

    AudioPlayerUI.prototype.nextSong = function() {
      if (this.currentSong === this.songs.length - 1) {
        return this.goToSong(0);
      } else {
        return this.goToSong(this.currentSong + 1);
      }
    };

    AudioPlayerUI.prototype.previousSong = function() {
      if (this.currentSong === 0) {
        return this.goToSong(this.songs.length - 1);
      } else {
        return this.goToSong(this.currentSong - 1);
      }
    };

    AudioPlayerUI.prototype.seek = function(e) {
      var duration, offset, percent, seekTo, _ref;
      if (offset = e.offsetX || ((_ref = e.originalEvent) != null ? _ref.layerX : void 0)) {
        percent = offset / this.$progressContainer.width();
        duration = this.audioPlayer.duration();
        seekTo = duration * percent;
        return this.audioPlayer.seekTo(seekTo);
      }
    };

    AudioPlayerUI.prototype.AudioPlayerUpdateState = function() {
      this.$el.toggleClass("error", this.audioPlayer.isErrored());
      this.$progressContainer.toggleClass("loading", this.audioPlayer.isLoading());
      if (this.audioPlayer.isPlaying()) {
        this.$button.removeClass("icon-play").addClass("icon-pause");
      } else {
        this.$button.removeClass("icon-pause").addClass("icon-play");
      }
      if (this.audioPlayer.isEnded() && this.currentSong !== this.songs.length - 1) {
        this.nextSong();
        return this.audioPlayer.play();
      }
    };

    AudioPlayerUI.prototype.AudioPlayerTimeUpdated = function(percentComplete) {
      return this.$progressBar.css({
        width: "" + (percentComplete * 100) + "%"
      });
    };

    AudioPlayerUI.prototype._createImageEl = function() {
      return this.image = document.createElement("img");
    };

    AudioPlayerUI.prototype._createAudioEl = function() {
      return this.audioEl = document.createElement("audio");
    };

    AudioPlayerUI.prototype._updateSourceAttributes = function(index) {
      var source, sourceEl, _i, _len, _ref, _results;
      while (this.audioEl.firstChild) {
        this.audioEl.removeChild(this.audioEl.firstChild);
      }
      _ref = this.songs[index].srcs;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        source = _ref[_i];
        sourceEl = document.createElement("source");
        sourceEl.setAttribute("src", source.src);
        sourceEl.setAttribute("type", source.type);
        _results.push(this.audioEl.appendChild(sourceEl));
      }
      return _results;
    };

    AudioPlayerUI.prototype._updateImageAttributes = function(index) {
      var callback, secondImage;
      callback = (function(_this) {
        return function() {
          _this.image.removeAttribute("class");
          $(_this.image).off(_this.transitionEvents.join(" "));
          _this.image.setAttribute("src", _this.songs[index].image);
          return setTimeout(function() {
            if (secondImage) {
              return _this.$imageContainer[0].removeChild(secondImage);
            }
          }, 500);
        };
      })(this);
      if (Modernizr.csstransitions && this.$imageContainer && this.image.getAttribute("src")) {
        secondImage = document.createElement("img");
        secondImage.setAttribute("src", this.songs[index].image);
        this.image.setAttribute("class", "fading");
        this.$imageContainer.append(secondImage);
        return $(this.image).on(this.transitionEvents.join(" "), callback);
      } else {
        return callback();
      }
    };

    AudioPlayerUI.prototype._bindEvents = function() {
      this.$button.on("click", $.proxy(this, "togglePlayPause"));
      this.$backButton.on("click", $.proxy(this, "previousSong"));
      this.$nextButton.on("click", $.proxy(this, "nextSong"));
      return this.$progressContainer.on("mouseup", $.proxy(this, "seek"));
    };

    AudioPlayerUI.prototype._unbindEvents = function() {
      var _ref, _ref1, _ref2, _ref3;
      if ((_ref = this.$button) != null) {
        _ref.off("click", this.togglePlayPause);
      }
      if ((_ref1 = this.$backButton) != null) {
        _ref1.off("click", this.previousSong);
      }
      if ((_ref2 = this.$nextButton) != null) {
        _ref2.off("click", this.nextSong);
      }
      return (_ref3 = this.$progressContainer) != null ? _ref3.off("mouseup", this.seek) : void 0;
    };

    return AudioPlayerUI;

  })();

  this.audioPlayer = new AudioPlayerUI({
    el: document.getElementById("audio-player"),
    songs: [
      {
        image: " ",
        name: "Sunhawk - She Snake Shuffle",
        srcs: [
          {
            src: "SheSnake.mp3",
            type: "audio/mp3",
          }
        ]
      }, {
        image: " ",
        name: "Sunhawk - Shotgun Love",
        srcs: [
          {
            src: "ShotgunLove.mp3",
            type: "audio/mp3"
          }, {
            src: "ShotgunLove.m4a",
            type: "audio/mp4"
          }, {
            src: "ShotgunLove.ogg",
            type: "audio/ogg"
          }
        ]
      }
    ]
  });

}).call(this);
