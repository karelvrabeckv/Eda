//This file is used for defining what happens after clicking 'Exit' buttons.

//This function defines what happens after clicking the 'Exit1' game button.
function EDAGAMEExiting1() {

	if (document.getElementById('EDAGAMESpeaker').src == EDAGAMEAnimationsCyclic[3].src ||
		document.getElementById('EDAGAMEEda').src != EDAGAMEAnimationsCyclic[0].src) {return;}
		
	else {
			   
		EDAGAMEEngineReset();
		EDAGAMEVoiceReset();

		$('#EDAGAMEBackground').fadeOut(250);
	
		$('#EDAGAMECongratulation').fadeOut(250);
		$('#EDAGAMEPaiKit').fadeOut(250);
		$('#EDAGAMECatch').fadeOut(250);
	
		$('#EDAGAMERepeat').fadeOut(250);
		$('#EDAGAMERepeat2').fadeOut(250);
		$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
		$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});

		$('#EDAGAMETask').slideUp(400);
		setTimeout(function() {$('#EDAGAMEPoint').css({'display': 'block'});}, 400);
		for (var loop = 1; loop <= 5; loop++) {$('a#EDAGAMEA' + loop).removeClass('EDAGAMECurrent');}
		
	};

};

//This function defines what happens after clicking the 'Exit2' pairs button.
function EDAGAMEExiting2() {
	
	EDAGAMEEngineReset();
	EDAGAMEVoiceReset();
	
	clearTimeout(EDAGAMEColorsBG); clearTimeout(EDAGAMEShapesBG); clearTimeout(EDAGAMEAnimalsBG); clearTimeout(EDAGAMEInstrumentsBG);
	clearTimeout(EDAGAMEReturnColorsBG); clearTimeout(EDAGAMEReturnShapesBG); clearTimeout(EDAGAMEReturnAnimalsBG); clearTimeout(EDAGAMEReturnInstrumentsBG);

	$('#EDAGAMEBackground').fadeOut(250);
	$('#EDAGAMEPairs').fadeOut(250);
	for (var loop = 1; loop <= 4; loop++) {$('#EDAGAMEFigure' + loop).css('background', '#F7F5BA');};
	
	$('#EDAGAMERepeat').fadeOut(250);
	$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
	$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});

	$('#EDAGAMETask').slideUp(0);
	$('#EDAGAMEPoint').css({'display': 'block'});
	$('a#EDAGAMEA5').removeClass('EDAGAMECurrent');

};

//This function defines what happens after clicking the 'Exit3' web button.
function EDAGAMEExiting3() {
	
	$('#EDAGAMEAboutTheGame').fadeOut(250);
	$('#EDAGAMEAutors').fadeOut(250);
	$('#EDAGAMEHistory').fadeOut(250);
	$('#EDAGAMEBeforeYouStart').fadeOut(250);
	$('#EDAGAMEWriteUs').fadeOut(250);
	
	$('#EDAGAMEBackground').fadeOut(250);

};

//This function defines what happens after clicking the 'Exit4' clear button.
function EDAGAMEExiting4() {
	
	$('#EDAGAMEPairsLeft').attr({src: 'images/other/Transparent.png'});
	$('#EDAGAMEPairsRight').attr({src: 'images/other/Transparent.png'});
	
	if ((document.getElementById('EDAGAMEObject0').style.display == 'none') &&
		(document.getElementById('EDAGAMEObject1').style.display == 'none') &&
		(document.getElementById('EDAGAMEObject2').style.display == 'none') &&
		(document.getElementById('EDAGAMEObject3').style.display == 'none') &&
		(document.getElementById('EDAGAMEObject4').style.display == 'none') &&
		(document.getElementById('EDAGAMEObject5').style.display == 'none')) {EDAGAMEEngineRefresh();}
		
	else {return;};

};

