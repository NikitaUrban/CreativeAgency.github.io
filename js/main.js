/* script for the img-gallery on-click for all the img's inside 
class gallery in section work */

	$(function(){
baguetteBox.run('.gallery');/*для галереи */

	$(window).on('load', function(){
        $('.preloader').delay(500).fadeOut('slow', function(){
        	$(this).attr('style', 'display: none !important');
        });
    });/*для preloader */

	$(window).scroll(function(){
		if ($(this).scrollTop() > 300) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});/*для кнопки вверх */

	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});/*для кнопки вверх */

});



/* script for the button-start playing video in section design */
function onYouTubeIframeAPIReady() {
	var iStatus;
/* здесь вставляем id нашего видео */
	oPlayer = new YT.Player('videoPlayer', {
		events: {
			'onStateChange': onPlayerStateChange
		}
	});
/* здесь вставляем id нашей кнопки */
	var $playButton = $('#videoPlayBtn');
	$playButton.on("click", function() {
		if (iStatus == YT.PlayerState.PLAYING) {
			$playButton.show();
			oPlayer.pauseVideo();
			iStatus = YT.PlayerState.PAUSED;
		} else {
			oPlayer.playVideo();
			iStatus = YT.PlayerState.PLAYING;
			$playButton.hide();
		}
	});

	function onPlayerStateChange(event) {
		if (event.data == YT.PlayerState.PAUSED) {
			$playButton.show();
			iStatus = YT.PlayerState.PAUSED;
		} else if (event.data == YT.PlayerState.PLAYING) {
			iStatus = YT.PlayerState.PLAYING;
			$playButton.hide();
		}
	}
}

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);