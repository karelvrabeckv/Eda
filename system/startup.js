//This file is used for defining the behavior of 'Start/Quit' button.

//This function defines what happens after clicking the 'Start/Quit' button.
function EDAGAMEStartUp() {

	var link = document.getElementById('EDAGAMELinkSPAN');

	if (link.innerHTML == 'ZAPNOUT HRU') {

		link.innerHTML = 'VYPNOUT HRU';
		
		$('#EDAGAMEMenu1').addClass('ontheright');
		for (var loop = 0; loop <= 5; loop++) {document.getElementById('EDAGAMEObject' + loop).style.opacity = '1';};
		EDAGAMEIntro();
		return;
		
	};

	if ((link.innerHTML == 'VYPNOUT HRU') && 
		($('#EDAGAMEMenu1').hasClass('ontheleft'))) { 

		link.innerHTML = 'ZAPNOUT HRU';
		
		EDAGAMEEngineReset();
		EDAGAMEMenuReset();
		EDAGAMEVoiceReset();

		$('#EDAGAMEMenu3').toggle('slide', {direction: 'right'}, 500);
		$('#EDAGAMESettings').hide('slide', {direction: 'up'}, 500);
		$.when($('#EDAGAMEMenu1')).then(function() {$('#EDAGAMEMenu1').removeClass('ontheleft');});
		for (var loop = 1; loop <= 5; loop++) {$('a#EDAGAMEA' + loop).removeClass('EDAGAMECurrent');}
		$('#EDAGAMESkip').removeClass('unclickable');
		
		$('#EDAGAMERepeat').delay(500).queue(function(next) {$(this).css({'display': 'none'}).attr({'src': EDAGAMEImagesOther[13].src}); next();});
		$('#EDAGAMERepeat2').delay(500).queue(function(next) {$(this).css({'display': 'none'}).attr({'src': EDAGAMEImagesOther[13].src}); next();});
		$('#EDAGAMENote').delay(500).queue(function(next) {$(this).css({'display': 'none'}).attr({'src': EDAGAMEImagesOther[13].src}); next();});
		$('#EDAGAMESpeaker').delay(500).queue(function(next) {$(this).css({'display': 'none'}).attr({'src': EDAGAMEImagesOther[13].src}); next();});
	   
		$('#EDAGAMEPairs').fadeOut(250);
		$('#EDAGAMECongratulation').fadeOut(250);
		$('#EDAGAMEPaiKit').fadeOut(250);
		$('#EDAGAMECatch').fadeOut(250);
		$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});

		setTimeout(function() {$('#EDAGAMEPairsLeft').attr({'src': EDAGAMEImagesOther[13].src})}, 500);
		setTimeout(function() {$('#EDAGAMEPairsRight').attr({'src': EDAGAMEImagesOther[13].src})}, 500);

		setTimeout(function(){$('#EDAGAMETask').css({'display': 'none'});
							  $('#EDAGAMEPoint').css({'display': 'block'});}, 500)
		
	};

};