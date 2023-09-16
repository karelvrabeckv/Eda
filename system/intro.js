//This file is used for defining the intro of the game and its possibilities.

//This function resets the parts of the intro into a start position.
function EDAGAMEIntro() {

	$('#EDAGAMEBackground').fadeIn().css({'display': 'block'});
	$('#EDAGAMEReflector').fadeIn().css({'width': '0', 'height': '0', 'borderWidth': '0'});
	$('#EDAGAMEIntroEda').css({'top': '285px'}).attr({'src': EDAGAMEAnimationsCyclic[0].src});
	$('#EDAGAMEIntro').fadeOut(0);
	$('#EDAGAMELogo2').css({'bottom': '0'});
	$('#EDAGAMETitle').css({'bottom': '0'});
	$('#EDAGAMEHands').fadeOut(0).css({'bottom': '0', 'opacity': '1'});
	$('#EDAGAMESkip').css({'opacity': '0', 'cursor': 'default'});

	$.when($('#EDAGAMEBackground'),
			$('#EDAGAMEReflector'),
			 $('#EDAGAMEIntroEda'),
			  $('#EDAGAMEIntro'),
			   $('#EDAGAMELogo2'),
			    $('#EDAGAMETitle'),
				 $('#EDAGAMEHands'),
				  $('#EDAGAMESkip')).then(function() {if ($('#EDAGAMEMenu1').hasClass('ontheright')) {EDAGAMEIntroDuration();} else {return;};});

};

//This function makes a 'Reflector' part visible.
function EDAGAMEIntroDuration() {

	$('#EDAGAMEReflector').animate({'width': '+=30px', 'height': '+=30px'})
						  .animate({'width': '-=30px', 'height': '-=30px'})
						  .animate({'width': '+=50px', 'height': '+=50px'})
						  .animate({'width': '-=50px', 'height': '-=50px'})
						  .animate({'width': '+=285px', 'height': '+=285px', 'borderWidth': '10px'});

	$.when($('#EDAGAMEReflector')).then(function() {if ($('#EDAGAMEMenu1').hasClass('ontheright')) {EDAGAMEIntroDuration2();} else {return;};});

};

//This function makes 'Eda', 'Webová hra pro děti' signs and a 'Skip' part visible.
function EDAGAMEIntroDuration2() {

	$('#EDAGAMEIntro').fadeIn(500);

	$('#EDAGAMESkip').animate({'opacity': '1'}, 500)
					 .animate({'background-color': '#FFF486'}, {duration: 500, queue: false})
					 .animate({'background-color': '#FFF9BC'}, 500);                 

	$('#EDAGAMEReflector').animate({'background-color': '#FFF486'}, 500)
						  .animate({'background-color': '#FFF9BC'}, 500);

	$.when($('#EDAGAMEIntro'),
			$('#EDAGAMESkip'),
			 $('#EDAGAMEReflector')).then(function() {if ($('#EDAGAMEMenu1').hasClass('ontheright')) {EDAGAMEIntroDuration3();} else {return;};});

};

//This function makes a 'Hands' part to move up.
function EDAGAMEIntroDuration3() {

	$('#EDAGAMEHands').fadeIn(0).animate({'bottom': '+=15px'}, 300);
	$.when($('#EDAGAMEHands')).then(function() {if ($('#EDAGAMEMenu1').hasClass('ontheright')) {EDAGAMEIntroDuration4();} else {return;};});

};

//This function makes an 'Eda' part to move up.
function EDAGAMEIntroDuration4() {

	$('#EDAGAMEIntroEda').animate({'top': '200px'}, 3500);
	$.when($('#EDAGAMEIntroEda')).then(function() {if ($('#EDAGAMEMenu1').hasClass('ontheright')) {EDAGAMEIntroDuration5();} else {return;};});

};

//This function makes the 'Eda' part to move slowly down.
function EDAGAMEIntroDuration5() {

	$('#EDAGAMEIntroEda').delay(1500).animate({'top': '240px'}, 2500);
	$.when($('#EDAGAMEIntroEda')).then(function() {if ($('#EDAGAMEMenu1').hasClass('ontheright')) {EDAGAMEIntroDuration6();} else {return;};});

};

//This function makes the 'Eda' part to move quickly up and bump into signs.
function EDAGAMEIntroDuration6() {

	$('#EDAGAMEIntroEda').animate({'top': '190px'}, 170);
	$.when($('#EDAGAMEIntroEda')).then(function() {if ($('#EDAGAMEMenu1').hasClass('ontheright')) {EDAGAMEIntroDuration7();} else {return;};});

};

//This function makes the 'Webová hra pro děti' sign to move up.
function EDAGAMEIntroDuration7() {

	$('#EDAGAMETitle').animate({'bottom': '15px'}, 80);
	$.when($('#EDAGAMETitle')).then(function() {if ($('#EDAGAMEMenu1').hasClass('ontheright')) {EDAGAMEIntroDuration8();} else {return;};});

};

//This function makes the 'Eda' sign to move up and the 'Eda' part with the 'Hands' part to move quickly down.
function EDAGAMEIntroDuration8() {

	$('#EDAGAMELogo2').animate({'bottom': '50px'}, 450, 'easeOutExpo');
	$('#EDAGAMEIntroEda').animate({'top': '290px'}, 100);
	$('#EDAGAMEHands').delay(80).animate({bottom: '-=15px'}, 100);
	
	$.when($('#EDAGAMELogo2'),
			$('#EDAGAMEIntroEda'),
			 $('#EDAGAMEHands')).then(function() {if ($('#EDAGAMEMenu1').hasClass('ontheright')) {EDAGAMEIntroDuration9();} else {return;};});

};

//This function makes signs to move quickly down.
function EDAGAMEIntroDuration9() {

	$('#EDAGAMELogo2').delay(50).animate({'bottom': '-200px'}, 130);
	$('#EDAGAMETitle').delay(80).animate({'bottom': '-192px'}, 90);
	
	$.when($('#EDAGAMELogo2'),
			$('#EDAGAMETitle')).then(function() {if ($('#EDAGAMEMenu1').hasClass('ontheright')) {EDAGAMEIntroDuration10();} else {return;};});

};

//This function calls shaking of an eyelet.
function EDAGAMEIntroDuration10() {

	$('#EDAGAMEReflector').delay(100).animate({'top': '+=10px'}, 20)
									 .animate({'top': '-=20px'}, 20)
									 .animate({'top': '+=20px'}, 20)
									 .animate({'top': '-=20px'}, 20)
									 .animate({'top': '+=20px'}, 20)
									 .animate({'top': '-=20px'}, 20)
									 .animate({'top': '+=20px'}, 20)
									 .animate({'top': '-=20px'}, 20)
									 .animate({'top': '+=20px'}, 20)
									 .animate({'top': '-=10px'}, 20);
									 
	$.when($('#EDAGAMEReflector')).then(function() {if ($('#EDAGAMEMenu1').hasClass('ontheright')) {EDAGAMEIntroDuration11();} else {return;};});

};                   

//This function makes the 'Hands' part to move up again.
function EDAGAMEIntroDuration11() {

	$('#EDAGAMEHands').delay(1450).animate({'bottom': '+=15px'}, 300);
	$.when($('#EDAGAMEHands')).then(function() {if ($('#EDAGAMEMenu1').hasClass('ontheright')) {EDAGAMEIntroDuration12();} else {return;};});

};

//This function makes the 'Eda' part to move up again.
function EDAGAMEIntroDuration12() {

	$('#EDAGAMEIntroEda').animate({'top': '40px'}, 1100);
	$('#EDAGAMEHands').delay(700).fadeOut(0);
	
	$.when($('#EDAGAMEIntroEda'),
			$('#EDAGAMEHands')).then(function() {if ($('#EDAGAMEMenu1').hasClass('ontheright')) {EDAGAMEWaveAnim();} else {return;};});

};

//This function makes the 'Eda' part speaking.
function EDAGAMEIntroDuration13() {

	$('#EDAGAMEIntroEda').delay(250).attr({'src': EDAGAMEAnimationsCyclic[2].src});
	if ($('#EDAGAMEMenu1').hasClass('ontheright')) {EDAGAMEVoiceReset(); EDAGAMEVoicesMainBasic[8].play();}
	else {return;};
	EDAGAMEVoicesMainBasic[8].onended = function() {if ($('#EDAGAMEMenu1').hasClass('ontheright')) {EDAGAMEIntroEnd();} else {return;};};

};

//This function makes the end of the intro.
function EDAGAMEIntroEnd() {

	$('#EDAGAMESkip').addClass('unclickable');
	$('#EDAGAMEIntroEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});	
	$('#EDAGAMEBackground').fadeOut(250);
	$('#EDAGAMEReflector').fadeOut(250);
	$('#EDAGAMESkip').animate({'opacity': '0'}, 250);

	$('#EDAGAMEMenu3').delay(250).show('slide', {direction: 'right'}, 500);
	$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});

	$('#EDAGAMELi1').delay(700).animate({'background-color': '#FFF486'}, 250)
					.delay(700).animate({'background-color': '#FFF'}, 250).removeAttr('background-color');
	$('#EDAGAMELi2').delay(800).animate({'background-color': '#FFF486'}, 250)
					.delay(800).animate({'background-color': '#FFF'}, 250).removeAttr('background-color');
	$('#EDAGAMELi3').delay(900).animate({'background-color': '#FFF486'}, 250)
					.delay(900).animate({'background-color': '#FFF'}, 250).removeAttr('background-color');
	$('#EDAGAMELi4').delay(1000).animate({'background-color': '#FFF486'}, 250)
					.delay(1000).animate({'background-color': '#FFF'}, 250).removeAttr('background-color');
	$('#EDAGAMELi5').delay(1100).animate({'background-color': '#FFF486'}, 250)
					.delay(1100).animate({'background-color': '#FFF'}, 250).removeAttr('background-color');

	$.when($('#EDAGAMESkip'),
			$('#EDAGAMEIntroEda'),
			 $('#EDAGAMEBackground'),
			  $('#EDAGAMEReflector'),
			   $('#EDAGAMESkip'),
				$('#EDAGAMEMenu1')).then(function() {
							   
					$('#EDAGAMEMenu1').removeClass('ontheright').addClass('ontheleft');
					
					$('#EDAGAMEBackground').finish();
					$('#EDAGAMEReflector').finish();
					$('#EDAGAMEIntroEda').finish();
					$('#EDAGAMEIntro').finish();
					$('#EDAGAMELogo2').finish();
					$('#EDAGAMETitle').finish();
					$('#EDAGAMEHands').finish();
					$('#EDAGAMESkip').finish();
						
				});
						
};

//This function is used for skipping the intro.
function EDAGAMESkip() {

	if ((document.getElementById('EDAGAMESkip').style.opacity != '1') &&
        (document.getElementById('EDAGAMESkip').style.backgroundColor != '#FFF9BC')) {return;}
	   
		else {
			
			if (($('#EDAGAMESkip').hasClass('unclickable'))) {return;}
		
			else {

				$('#EDAGAMEMenu1').removeClass('ontheright').addClass('ontheleft');
					
				$('#EDAGAMEBackground').finish();
				$('#EDAGAMEReflector').finish();
				$('#EDAGAMEIntroEda').finish();
				$('#EDAGAMEIntro').finish();
				$('#EDAGAMELogo2').finish();
				$('#EDAGAMETitle').finish();
				$('#EDAGAMEHands').finish();
				$('#EDAGAMESkip').finish();
			
				EDAGAMEVoiceReset();
		
				$('#EDAGAMESkip').addClass('unclickable');			
				$('#EDAGAMEIntroEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});				
				$('#EDAGAMEBackground').fadeOut(0);
				$('#EDAGAMEReflector').fadeOut(0);
				$('#EDAGAMESkip').css({'opacity': '0'});

				$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				$('#EDAGAMEMenu3').show('slide', {direction: 'right'}, 500);
				$('#EDAGAMELi1').delay(700).animate({'background-color': '#FFF486'}, 250)
								.delay(700).animate({'background-color': '#FFF'}, 250).removeAttr('background-color');
				$('#EDAGAMELi2').delay(800).animate({'background-color': '#FFF486'}, 250)
								.delay(800).animate({'background-color': '#FFF'}, 250).removeAttr('background-color');
				$('#EDAGAMELi3').delay(900).animate({'background-color': '#FFF486'}, 250)
								.delay(900).animate({'background-color': '#FFF'}, 250).removeAttr('background-color');
				$('#EDAGAMELi4').delay(1000).animate({'background-color': '#FFF486'}, 250)
								.delay(1000).animate({'background-color': '#FFF'}, 250).removeAttr('background-color');
				$('#EDAGAMELi5').delay(1100).animate({'background-color': '#FFF486'}, 250)
								.delay(1100).animate({'background-color': '#FFF'}, 250).removeAttr('background-color');			
				
			};
							
		};
						
};