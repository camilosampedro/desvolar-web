function rectime(secs) {
    var hr = Math.floor(secs / 3600);
    var min = Math.floor((secs - (hr * 3600))/60);
    var sec = Math.floor(secs - (hr * 3600) - (min * 60));

    if (hr < 10) {hr = '0' + hr; }
    if (min < 10) {min = '0' + min;}
    if (sec < 10) {sec = '0' + sec;}
    if (hr) {hr = '00';}
    return hr + ':' + min + ':' + sec;
}

(function($) {
    $.fn.myPlayer = function() {
        return this.each(function() {
            // variables
            var $oMain = $(this);
            var $oVideo = $('video', $oMain);
            var $oPlay = $('.play', $oMain);
            var $oPause = $('.pause', $oMain);
            var $oTimeSlider = $('.time_slider', $oMain);
            var $oTimer = $('.timer', $oMain);
            var $oVolSlider = $('.volume_slider', $oMain);
            var $oMute = $('.mute', $oMain);
            var $oUnmute = $('.unmute', $oMain);
            var bTimeSlide = false;
            var iVolume = 1;

            // functions section
            var prepareTimeSlider = function() {
                if (! $oVideo[0].readyState) {
                    setTimeout(prepareTimeSlider, 1000);
                } else {
                    $oTimeSlider.slider({
                        value: 0,
                        step: 0.01,
                        orientation: 'horizontal',
                        range: 'min',
                        max: $oVideo[0].duration,
                        animate: true,
                        slide: function() {
                            bTimeSlide = true;
                        },
                        stop:function(e, ui) {
                            bTimeSlide = false;
                            $oVideo[0].currentTime = ui.value;
                        }
                    });
                };
            };

            // events section
            $oPlay.click(function () {  
                $oVideo[0].play();
                $oPlay.hide();
                $oPause.css('display', 'block');
            });
            $oPause.click(function () {  
                $oVideo[0].pause();
                $oPause.hide();
                $oPlay.css('display', 'block');
            });
            $oMute.click(function () {  
                $oVideo[0].muted = true;
                $oVolSlider.slider('value', '0');
                $oMute.hide();
                $oUnmute.css('display', 'block');
            });
            $oUnmute.click(function () {  
                $oVideo[0].muted = false;
                $oVolSlider.slider('value', iVolume);
                $oUnmute.hide();
                $oMute.css('display', 'block');
            });

            // bind extra inner events
            $oVideo.bind('ended', function() {
                $oVideo[0].pause();
                $oPause.hide();
                $oPlay.css('display', 'block');
            });
            $oVideo.bind('timeupdate', function() {
                var iNow = $oVideo[0].currentTime;
                $oTimer.text(rectime(iNow));
                if (! bTimeSlide)
                    $oTimeSlider.slider('value', iNow);
            });

            // rest initialization
            $oVolSlider.slider({
                value: 1,
                orientation: 'vertical',
                range: 'min',
                max: 1,
                step: 0.02,
                animate: true,
                slide: function(e, ui) {
                    $oVideo[0].muted = false;
                    iVolume = ui.value;
                    $oVideo[0].volume = ui.value;
                }
            });
            prepareTimeSlider();
            $oVideo.removeAttr('controls');
        });
    };
})(jQuery);