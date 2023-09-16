//This file is used for defining what happens after clicking menu and website items.

var EDAGAMEChangeBG1;
var EDAGAMEReturnBG1;
var EDAGAMEChangeBG2;
var EDAGAMEReturnBG2;
var EDAGAMEChangeBG3;
var EDAGAMEReturnBG3;

var EDAGAMEColorsBG;
var EDAGAMEShapesBG;
var EDAGAMEAnimalsBG;
var EDAGAMEInstrumentsBG;
var EDAGAMEReturnColorsBG;
var EDAGAMEReturnShapesBG;
var EDAGAMEReturnAnimalsBG;
var EDAGAMEReturnInstrumentsBG;

$(document).ready(function(){

	$('li#EDAGAMELi1').click(function(){

		if ($('a#EDAGAMEA1').hasClass('EDAGAMECurrent')) {return;};

		for (var loop = 1; loop <= 5; loop++) {$('a#EDAGAMEA' + loop).removeClass('EDAGAMECurrent');}
		
		$('a#EDAGAMEA1').addClass('EDAGAMECurrent');		
		$('#EDAGAMEScore').html('0');
		$('#EDAGAMEScoreFinal').html('11');

		EDAGAMENumACOL();
		EDAGAMEEngineReset();
		EDAGAMEMenuReset();
		EDAGAMEVoiceReset(); EDAGAMEVoicesMainBasic[1].play();    

		EDAGAMEVoicesMainBasic[1].onended = function() {
		 
			EDAGAMEStartEngine();
			$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
			$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
			$('#EDAGAMERepeat').css({'display': 'block'}).attr({'src': EDAGAMEImagesOther[7].src});
	 
		};

		$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
		$('#EDAGAMEPoint').slideDown('slow');
		$('#EDAGAMETask').slideDown('slow');
		$('#EDAGAMESpeaker').css({'display': 'block'}).attr({'src': EDAGAMEAnimationsCyclic[3].src});
		$('#EDAGAMENote').css({'display': 'block'}).attr({'src': EDAGAMEImagesOther[13].src});
	 
		$('#EDAGAMEPaiKit').fadeOut(250);
		$('#EDAGAMECatch').fadeOut(250);
		$('#EDAGAMEPairsLeft').attr({'src': EDAGAMEImagesOther[13].src});
		$('#EDAGAMEPairsRight').attr({'src': EDAGAMEImagesOther[13].src});
	
		EDAGAMEChangeBG1 = setTimeout(function() {$('#EDAGAMETask').css({'background-color': '#FFD600'});}, 3900);
		EDAGAMEReturnBG1 = setTimeout(function() {$('#EDAGAMETask').css({'background-color': '#F7F5BA'});}, 4400);
		EDAGAMEChangeBG2 = setTimeout(function() {$('#EDAGAMETask').css({'background-color': '#FFD600'});}, 4900);
		EDAGAMEReturnBG2 = setTimeout(function() {$('#EDAGAMETask').css({'background-color': '#F7F5BA'});}, 5400);
		EDAGAMEChangeBG3 = setTimeout(function() {$('#EDAGAMETask').css({'background-color': '#FFD600'});}, 5900);
		EDAGAMEReturnBG3 = setTimeout(function() {$('#EDAGAMETask').css({'background-color': '#F7F5BA'});}, 6400);

		for (var loop = 1; loop <= 20; loop++) {$('#EDAGAMEStar' + loop).fadeIn(0);}
		for (var loop = 12; loop <= 20; loop++) {$('#EDAGAMEStar' + loop).fadeOut(0);}

		$('.EDAGAMEStar').attr({'src': EDAGAMEImagesOther[1].src});
		$('#Break5').remove(); $('#Break7').remove(); $('#EDAGAMEScoreIMG > img:nth-child(5)').after('<br id="Break5">');
		$('.EDAGAMECatch').attr({'src': EDAGAMEImagesOther[13].src}).css('background-color', '#EEE8AA');

	});

	$('li#EDAGAMELi2').click(function(){

		if ($('a#EDAGAMEA2').hasClass('EDAGAMECurrent')) {return;};
			
		for (var loop = 1; loop <= 5; loop++) {$('a#EDAGAMEA' + loop).removeClass('EDAGAMECurrent');}	
		
		$('a#EDAGAMEA2').addClass('EDAGAMECurrent');
		$('#EDAGAMEScore').html('0');
		$('#EDAGAMEScoreFinal').html('20');

		EDAGAMENumASHA();
		EDAGAMEEngineReset();
		EDAGAMEMenuReset();
		EDAGAMEVoiceReset(); EDAGAMEVoicesMainBasic[11].play();
		
		EDAGAMEVoicesMainBasic[11].onended = function() {
			
				EDAGAMEStartEngine();
				$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
				$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				setTimeout(function() {
					
					if ($('a#EDAGAMEA2').hasClass('EDAGAMECurrent')) {
					
						EDAGAMEVoiceReset();
						EDAGAMEVoicesShapesTask[EDAGAMEASHA].play();
						EDAGAMESHATimer();}
			
					else {return;}
										
				}, 250);
							
		}

		$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
		$('#EDAGAMEPoint').slideUp('slow');
		$('#EDAGAMETask').slideDown('slow');
		$('#EDAGAMESpeaker').css({'display': 'block'}).attr({'src': EDAGAMEAnimationsCyclic[3].src});
		$('#EDAGAMENote').css({'display': 'block'}).attr({'src': EDAGAMEImagesOther[13].src});
	 	 
		$('#EDAGAMEPaiKit').fadeOut(250);
		$('#EDAGAMECatch').fadeOut(250);
		$('#EDAGAMEPairsLeft').attr({'src': EDAGAMEImagesOther[13].src});
		$('#EDAGAMEPairsRight').attr({'src': EDAGAMEImagesOther[13].src});

		for (var loop = 1; loop <= 20; loop++) {$('#EDAGAMEStar' + loop).fadeIn(0);}

		$('.EDAGAMEStar').attr({'src': EDAGAMEImagesOther[1].src});
		$('#Break5').remove(); $('#Break7').remove();
		$('.EDAGAMECatch').attr({'src': EDAGAMEImagesOther[13].src}).css('background-color', '#EEE8AA');

	});

	$('li#EDAGAMELi3').click(function(){

		if ($('a#EDAGAMEA3').hasClass('EDAGAMECurrent')) {return;};

		for (var loop = 1; loop <= 5; loop++) {$('a#EDAGAMEA' + loop).removeClass('EDAGAMECurrent');}

		$('a#EDAGAMEA3').addClass('EDAGAMECurrent');		
		$('#EDAGAMEScore').html('0');
		$('#EDAGAMEScoreFinal').html('15');

		EDAGAMENumAANI();
		EDAGAMEEngineReset();
		EDAGAMEMenuReset();
		EDAGAMEVoiceReset(); EDAGAMEVoicesMainBasic[0].play();
		
		EDAGAMEVoicesMainBasic[0].onended = function() {

				EDAGAMEStartEngine();
				$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
				$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				setTimeout(function() {
					
					if ($('a#EDAGAMEA3').hasClass('EDAGAMECurrent')) {
					
						EDAGAMEVoiceReset();
						EDAGAMEVoicesAnimalsTask[EDAGAMEAANI].play();
						EDAGAMEANITimer();}
			
					else {return;}
										
				}, 250);
			
		}

		$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
		$('#EDAGAMEPoint').slideUp('slow');
		$('#EDAGAMETask').slideDown('slow');
		$('#EDAGAMESpeaker').css({'display': 'block'}).attr({'src': EDAGAMEAnimationsCyclic[3].src});
		$('#EDAGAMENote').css({'display': 'block'}).attr({'src': EDAGAMEImagesOther[13].src});
	 
		$('#EDAGAMEPaiKit').fadeOut(250);
		$('#EDAGAMECatch').fadeOut(250);
		$('#EDAGAMEPairsLeft').attr({'src': EDAGAMEImagesOther[13].src});
		$('#EDAGAMEPairsRight').attr({'src': EDAGAMEImagesOther[13].src});
		
		for (var loop = 1; loop <= 20; loop++) {$('#EDAGAMEStar' + loop).fadeIn(0);}
		for (var loop = 16; loop <= 20; loop++) {$('#EDAGAMEStar' + loop).fadeOut(0);}

		$('.EDAGAMEStar').attr({'src': EDAGAMEImagesOther[1].src});
		$('#Break5').remove(); $('#Break7').remove(); $('#EDAGAMEScoreIMG > img:nth-child(7)').after('<br id="Break7">');
		$('.EDAGAMECatch').attr({'src': EDAGAMEImagesOther[13].src}).css('background-color', '#EEE8AA');

	});

	$('li#EDAGAMELi4').click(function(){
		
		if ($('a#EDAGAMEA4').hasClass('EDAGAMECurrent')) {return;};

		for (var loop = 1; loop <= 5; loop++) {$('a#EDAGAMEA' + loop).removeClass('EDAGAMECurrent');}

		$('a#EDAGAMEA4').addClass('EDAGAMECurrent');
		$('#EDAGAMEScore').html('0');
		$('#EDAGAMEScoreFinal').html('11');

		EDAGAMENumAINS();
		EDAGAMEEngineReset();
		EDAGAMEMenuReset();
		EDAGAMEVoiceReset(); EDAGAMEVoicesMainBasic[7].play();
		
		EDAGAMEVoicesMainBasic[7].onended = function() {

				EDAGAMEStartEngine();
				$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
				$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				setTimeout(function() {
					
					if ($('a#EDAGAMEA4').hasClass('EDAGAMECurrent')) {
					
						EDAGAMEVoiceReset();
						EDAGAMESounds[EDAGAMEAINS].play();
						EDAGAMEINSTimer();}
			
					else {return;}
										
				}, 250);
			
		}

		$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
		$('#EDAGAMEPoint').slideUp('slow');
		$('#EDAGAMETask').slideDown('slow');
		$('#EDAGAMESpeaker').css({'display': 'block'}).attr({'src': EDAGAMEAnimationsCyclic[3].src});
		$('#EDAGAMENote').css({'display': 'block'}).attr({'src': EDAGAMEImagesOther[13].src});
	 
		$('#EDAGAMEPaiKit').fadeOut(250);
		$('#EDAGAMECatch').fadeOut(250);
		$('#EDAGAMEPairsLeft').attr({'src': EDAGAMEImagesOther[13].src});
		$('#EDAGAMEPairsRight').attr({'src': EDAGAMEImagesOther[13].src});

		for (var loop = 1; loop <= 20; loop++) {$('#EDAGAMEStar' + loop).fadeIn(0);}
		for (var loop = 12; loop <= 20; loop++) {$('#EDAGAMEStar' + loop).fadeOut(0);}

		$('.EDAGAMEStar').attr({'src': EDAGAMEImagesOther[1].src});
		$('#Break5').remove(); $('#Break7').remove(); $('#EDAGAMEScoreIMG > img:nth-child(5)').after('<br id="Break5">');
		$('.EDAGAMECatch').attr({'src': EDAGAMEImagesOther[13].src}).css('background-color', '#EEE8AA');

	});

	$('li#EDAGAMELi5').click(function(){
		
		EDAGAMEEngineReset();
		EDAGAMEMenuReset();
		EDAGAMEVoiceReset(); EDAGAMEVoicesMainBasic[10].play();
		
		if($('a#EDAGAMEA5').hasClass('EDAGAMECurrent')) {return;};

		for (var loop = 1; loop <= 5; loop++) {$('a#EDAGAMEA' + loop).removeClass('EDAGAMECurrent');};
		for (var loop = 1; loop <= 4; loop++) {$('#EDAGAMEFigure' + loop).css({'opacity': '1'});};

		$('a#EDAGAMEA5').addClass('EDAGAMECurrent');		
		$('#EDAGAMEScore').html('0');
		
		$('#EDAGAMETask').slideUp(400);
		
		$('#EDAGAMEChecker').css({'display': 'none'});
		
		EDAGAMEVoicesMainBasic[10].onended = function() {
			
			$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
			$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
			
		}

		EDAGAMEColorsBG = setTimeout(function EDAGAMEColorsBG() {$('#EDAGAMEFigure1').css('background', '#FFD600');}, 2400);
		EDAGAMEReturnColorsBG = setTimeout(function EDAGAMEColorsBG() {$('#EDAGAMEFigure1').css('background', '#F7F5BA');}, 2900);

		EDAGAMEShapesBG = setTimeout(function EDAGAMEShapesBG() {$('#EDAGAMEFigure2').css('background', '#FFD600');}, 3200);
		EDAGAMEReturnShapesBG = setTimeout(function EDAGAMEShapesBG() {$('#EDAGAMEFigure2').css('background', '#F7F5BA');}, 3700);

		EDAGAMEAnimalsBG = setTimeout(function EDAGAMEAnimalsBG() {$('#EDAGAMEFigure3').css('background-color', '#FFD600');}, 3900);
		EDAGAMEReturnAnimalsBG = setTimeout(function EDAGAMEAnimalsBG() {$('#EDAGAMEFigure3').css('background', '#F7F5BA');}, 4400);

		EDAGAMEInstrumentsBG = setTimeout(function EDAGAMEInstrumentsBG() {$('#EDAGAMEFigure4').css('background', '#FFD600');}, 4700);
		EDAGAMEReturnInstrumentsBG = setTimeout(function EDAGAMEInsrumentsBG() {$('#EDAGAMEFigure4').css('background', '#F7F5BA');}, 5200);

		$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
		$('#EDAGAMESpeaker').css({'display': 'block'}).attr({'src': EDAGAMEAnimationsCyclic[3].src});
		$('#EDAGAMENote').css({'display': 'block'}).attr({'src': EDAGAMEImagesOther[13].src});

		$('#EDAGAMEBackground').fadeIn(250);
		$('#EDAGAMEPairs').fadeIn(250);
		
		$('.EDAGAMEStar').attr({'src': EDAGAMEImagesOther[1].src});
		
	});
	
	$('a#EDAGAMEWebsiteA1').click(function(){
	
		$('#EDAGAMEChecker').css({'display': 'none'});
		$('#EDAGAMEBackground').fadeIn(250);
		$('#EDAGAMEAboutTheGame').fadeIn(250);
	
	});

	$('a#EDAGAMEWebsiteA2').click(function(){

		$('#EDAGAMEChecker').css({'display': 'none'});	
		$('#EDAGAMEBackground').fadeIn(250);
		$('#EDAGAMEAutors').fadeIn(250);
	
	});

	$('a#EDAGAMEWebsiteA3').click(function(){

		$('#EDAGAMEChecker').css({'display': 'none'});	
		$('#EDAGAMEBackground').fadeIn(250);
		$('#EDAGAMEHistory').fadeIn(250);
	
	});

	$('a#EDAGAMEWebsiteA4').click(function(){

		$('#EDAGAMEChecker').css({'display': 'none'});	
		$('#EDAGAMEBackground').fadeIn(250);
		$('#EDAGAMEWriteUs').fadeIn(250);
	
	});
	
});