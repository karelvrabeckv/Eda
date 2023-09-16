//This file is used for defining repeat actions.

//This function defines what happens after clicking the 'Repeat' button in each game.
function EDAGAMERepeatTheGame() {

	if (document.getElementById('EDAGAMESpeaker').src == EDAGAMEAnimationsCyclic[3].src ||
		document.getElementById('EDAGAMEEda').src != EDAGAMEAnimationsCyclic[0].src) {return;}
		
	else {
		
		if (document.getElementById('EDAGAMEScore').innerHTML == '0') {return;};

		$('#EDAGAMEScore').html('0');
		
		$('.EDAGAMEStar').attr({'src': EDAGAMEImagesOther[1].src});
		$('#EDAGAMETask').css('background-color', '#F7F5BA');
		
		$('.EDAGAMECatch').attr({'src': EDAGAMEImagesOther[13].src}).css('background', '#EEE8AA');		
		EDAGAMEVoiceReset();

			 if ($('a#EDAGAMEA1').hasClass('EDAGAMECurrent')) {EDAGAMENumACOL(); EDAGAMEStartEngine();}
		else if ($('a#EDAGAMEA2').hasClass('EDAGAMECurrent')) {EDAGAMENumASHA(); EDAGAMEStartEngine(); EDAGAMEVoicesShapesTask[EDAGAMEASHA].play(); EDAGAMESHATimer();}
		else if ($('a#EDAGAMEA3').hasClass('EDAGAMECurrent')) {EDAGAMENumAANI(); EDAGAMEStartEngine(); EDAGAMEVoicesAnimalsTask[EDAGAMEAANI].play(); EDAGAMEANITimer();}
		else if ($('a#EDAGAMEA4').hasClass('EDAGAMECurrent')) {EDAGAMENumAINS(); EDAGAMEStartEngine(); EDAGAMESounds[EDAGAMEAINS].play(); EDAGAMEINSTimer();}
		else if ($('a#EDAGAMEA5').hasClass('EDAGAMECurrent')) {EDAGAMEStartEngine();};

		$('#EDAGAMECongratulation').fadeOut(250);
		$('#EDAGAMEBackground').fadeOut(250);
		$('#EDAGAMEPairsLeft').attr({'src': EDAGAMEImagesOther[13].src}).css('background', '#FFF');
		$('#EDAGAMEPairsRight').attr({'src': EDAGAMEImagesOther[13].src}).css('background', '#FFF');
		
	}

}

//This function defines what happens after clicking the 'Repeat Main Task' blue button in each game.
function EDAGAMERepeatMainTask() {

	if (document.getElementById('EDAGAMESpeaker').src == EDAGAMEAnimationsCyclic[3].src ||
		document.getElementById('EDAGAMEEda').src != EDAGAMEAnimationsCyclic[0].src ||
		document.getElementById('EDAGAMENote').src == EDAGAMEAnimationsCyclic[1].src) {return;}
	  
	else {

		EDAGAMEVoiceReset();

		if ($('a#EDAGAMEA1').hasClass('EDAGAMECurrent')) {
		
			$('#EDAGAMETask').css('background-color', '#F7F5BA');
			$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
			$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
			EDAGAMEChangeBG1 = setTimeout(function() {$('#EDAGAMETask').animate({'background-color': '#FFD600'}, 250);}, 3900);
			EDAGAMEReturnBG1 = setTimeout(function() {$('#EDAGAMETask').animate({'background-color': '#F7F5BA'}, 250);}, 4400);
			EDAGAMEChangeBG2 = setTimeout(function() {$('#EDAGAMETask').animate({'background-color': '#FFD600'}, 250);}, 4900);
			EDAGAMEReturnBG2 = setTimeout(function() {$('#EDAGAMETask').animate({'background-color': '#F7F5BA'}, 250);}, 5400);
			EDAGAMEChangeBG3 = setTimeout(function() {$('#EDAGAMETask').animate({'background-color': '#FFD600'}, 250);}, 5900);
			EDAGAMEReturnBG3 = setTimeout(function() {$('#EDAGAMETask').animate({'background-color': '#F7F5BA'}, 250);}, 6400);			
			EDAGAMEVoicesMainBasic[1].play();
			EDAGAMEVoicesMainBasic[1].onended = function() {
				
				$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
				$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				$('#EDAGAMERepeat').fadeIn();
				
			};
			
		};
		
		if ($('a#EDAGAMEA2').hasClass('EDAGAMECurrent')) {
		
			$('#EDAGAMETask').css('background-color', '#F7F5BA');
			$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
			$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
			EDAGAMEVoicesMainBasic[11].play();
			EDAGAMEVoicesMainBasic[11].onended = function() {
				
				$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
				$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				$('#EDAGAMERepeat').fadeIn();
				
			};
			
		};
		
		if ($('a#EDAGAMEA3').hasClass('EDAGAMECurrent')) {
		
			$('#EDAGAMETask').css('background-color', '#F7F5BA');
			$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
			$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
			EDAGAMEVoicesMainBasic[0].play();
			EDAGAMEVoicesMainBasic[0].onended = function() {
				
				$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
				$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				$('#EDAGAMERepeat').fadeIn();
				
			};
			
		};

		if ($('a#EDAGAMEA4').hasClass('EDAGAMECurrent')) {
		
			$('#EDAGAMETask').css('background-color', '#F7F5BA');
			$('#EDAGAMEMusic').attr({'src': EDAGAMEImagesOther[13].src});
			$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
			$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
			EDAGAMEVoicesMainBasic[7].play();
			EDAGAMEVoicesMainBasic[7].onended = function() {
				
				$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
				$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				$('#EDAGAMERepeat').fadeIn();
				
			};
			
		};
		
		if ($('a#EDAGAMEA5').hasClass('EDAGAMECurrent')) {
		
			$('#EDAGAMETask').css('background-color', '#F7F5BA');
			$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
			$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
			EDAGAMEVoicesMainBasic[10].play();
			EDAGAMEVoicesMainBasic[10].onended = function() {
				
				$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
				$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				$('#EDAGAMERepeat').fadeIn();
				
			};
			
		};

	};
	
};

//This function defines what happens after clicking the 'Repeat Task' orange button in each game.
function EDAGAMERepeatTask() {

	if (document.getElementById('EDAGAMESpeaker').src == EDAGAMEAnimationsCyclic[3].src ||
		document.getElementById('EDAGAMEEda').src != EDAGAMEAnimationsCyclic[0].src ||
		document.getElementById('EDAGAMENote').src == EDAGAMEAnimationsCyclic[1].src) {return;}

		else {

			EDAGAMEVoiceReset();

			if (($('a#EDAGAMEA2').hasClass('EDAGAMECurrent')) &&
			    (document.getElementById('EDAGAMENumber').innerHTML == '0')) {
					
							$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
							$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
							EDAGAMEVoicesShapesTask[0].play(); 
							EDAGAMEVoicesShapesTask[0].onended = function() {
				
									$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
									$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				
							};
					
			}
			
			else if (($('a#EDAGAMEA2').hasClass('EDAGAMECurrent')) &&
					 (document.getElementById('EDAGAMENumber').innerHTML == '1')) {
					
							$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
							$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
							EDAGAMEVoicesShapesTask[1].play(); 
							EDAGAMEVoicesShapesTask[1].onended = function() {
				
									$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
									$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				
							};
					
			}
			
			else if (($('a#EDAGAMEA2').hasClass('EDAGAMECurrent')) &&
					 (document.getElementById('EDAGAMENumber').innerHTML == '2')) {
					
							$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
							$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
							EDAGAMEVoicesShapesTask[2].play(); 
							EDAGAMEVoicesShapesTask[2].onended = function() {
				
									$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
									$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				
							};
					
			}
			
			else if (($('a#EDAGAMEA2').hasClass('EDAGAMECurrent')) &&
					 (document.getElementById('EDAGAMENumber').innerHTML == '3')) {
					
							$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
							$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
							EDAGAMEVoicesShapesTask[3].play(); 
							EDAGAMEVoicesShapesTask[3].onended = function() {
				
									$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
									$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				
							};
					
			}
			
			else if (($('a#EDAGAMEA2').hasClass('EDAGAMECurrent')) &&
					 (document.getElementById('EDAGAMENumber').innerHTML == '4')) {
					
							$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
							$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
							EDAGAMEVoicesShapesTask[4].play(); 
							EDAGAMEVoicesShapesTask[4].onended = function() {
				
									$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
									$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				
							};
					
			}
			
			else if (($('a#EDAGAMEA2').hasClass('EDAGAMECurrent')) &&
					 (document.getElementById('EDAGAMENumber').innerHTML == '5')) {
					
							$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
							$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
							EDAGAMEVoicesShapesTask[5].play(); 
							EDAGAMEVoicesShapesTask[5].onended = function() {
				
									$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
									$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				
							};
					
			}
			
			else if (($('a#EDAGAMEA2').hasClass('EDAGAMECurrent')) &&
					 (document.getElementById('EDAGAMENumber').innerHTML == '6')) {
					
							$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
							$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
							EDAGAMEVoicesShapesTask[6].play(); 
							EDAGAMEVoicesShapesTask[6].onended = function() {
				
									$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
									$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				
							}; 
					
			}
			
			else if (($('a#EDAGAMEA2').hasClass('EDAGAMECurrent')) &&
					 (document.getElementById('EDAGAMENumber').innerHTML == '7')) {
					
							$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
							$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
							EDAGAMEVoicesShapesTask[7].play(); 
							EDAGAMEVoicesShapesTask[7].onended = function() {
				
									$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
									$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				
							};
					
			}
			
			else if (($('a#EDAGAMEA2').hasClass('EDAGAMECurrent')) &&
					 (document.getElementById('EDAGAMENumber').innerHTML == '8')) {
					
							$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
							$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
							EDAGAMEVoicesShapesTask[8].play(); 
							EDAGAMEVoicesShapesTask[8].onended = function() {
				
									$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
									$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				
							};
					
			}
			
			else if (($('a#EDAGAMEA2').hasClass('EDAGAMECurrent')) &&
					 (document.getElementById('EDAGAMENumber').innerHTML == '9')) {
					
							$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
							$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
							EDAGAMEVoicesShapesTask[9].play(); 
							EDAGAMEVoicesShapesTask[9].onended = function() {
				
									$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
									$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				
							};
					
			}
			
			else if (($('a#EDAGAMEA2').hasClass('EDAGAMECurrent')) &&
					 (document.getElementById('EDAGAMENumber').innerHTML == '10')) {
					
							$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
							$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
							EDAGAMEVoicesShapesTask[10].play(); 
							EDAGAMEVoicesShapesTask[10].onended = function() {
				
									$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
									$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				
							};
					
			}
			
			else if (($('a#EDAGAMEA2').hasClass('EDAGAMECurrent')) &&
					 (document.getElementById('EDAGAMENumber').innerHTML == '11')) {
					
							$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
							$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
							EDAGAMEVoicesShapesTask[11].play(); 
							EDAGAMEVoicesShapesTask[11].onended = function() {
				
									$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
									$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				
							};
					
			}
			
			else if (($('a#EDAGAMEA2').hasClass('EDAGAMECurrent')) &&
					 (document.getElementById('EDAGAMENumber').innerHTML == '12')) {
					
							$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
							$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
							EDAGAMEVoicesShapesTask[12].play(); 
							EDAGAMEVoicesShapesTask[12].onended = function() {
				
									$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
									$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				
							};
					
			}
			
			else if (($('a#EDAGAMEA2').hasClass('EDAGAMECurrent')) &&
					 (document.getElementById('EDAGAMENumber').innerHTML == '13')) {
					
							$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
							$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
							EDAGAMEVoicesShapesTask[13].play(); 
							EDAGAMEVoicesShapesTask[13].onended = function() {
				
									$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
									$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				
							};
					
			}
			
			else if (($('a#EDAGAMEA2').hasClass('EDAGAMECurrent')) &&
					 (document.getElementById('EDAGAMENumber').innerHTML == '14')) {
					
							$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
							$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
							EDAGAMEVoicesShapesTask[14].play(); 
							EDAGAMEVoicesShapesTask[14].onended = function() {
				
									$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
									$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				
							};
					
			}
			
			else if (($('a#EDAGAMEA2').hasClass('EDAGAMECurrent')) &&
					 (document.getElementById('EDAGAMENumber').innerHTML == '15')) {
					
							$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
							$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
							EDAGAMEVoicesShapesTask[15].play(); 
							EDAGAMEVoicesShapesTask[15].onended = function() {
				
									$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
									$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				
							};
					
			}
			
			else if (($('a#EDAGAMEA2').hasClass('EDAGAMECurrent')) &&
					 (document.getElementById('EDAGAMENumber').innerHTML == '16')) {
					
							$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
							$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
							EDAGAMEVoicesShapesTask[16].play(); 
							EDAGAMEVoicesShapesTask[16].onended = function() {
				
									$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
									$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				
							};
					
			}
			
			else if (($('a#EDAGAMEA2').hasClass('EDAGAMECurrent')) &&
					 (document.getElementById('EDAGAMENumber').innerHTML == '17')) {
					
							$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
							$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
							EDAGAMEVoicesShapesTask[17].play(); 
							EDAGAMEVoicesShapesTask[17].onended = function() {
				
									$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
									$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				
							};
					
			}
			
			else if (($('a#EDAGAMEA2').hasClass('EDAGAMECurrent')) &&
					 (document.getElementById('EDAGAMENumber').innerHTML == '18')) {
					
							$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
							$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
							EDAGAMEVoicesShapesTask[18].play(); 
							EDAGAMEVoicesShapesTask[18].onended = function() {
				
									$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
									$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				
							};
					
			}
			
			else if (($('a#EDAGAMEA2').hasClass('EDAGAMECurrent')) &&
					 (document.getElementById('EDAGAMENumber').innerHTML == '19')) {
					
							$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
							$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
							EDAGAMEVoicesShapesTask[19].play(); 
							EDAGAMEVoicesShapesTask[19].onended = function() {
				
									$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
									$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				
							};
					
			}
 
			else if (($('a#EDAGAMEA3').hasClass('EDAGAMECurrent')) &&
					 (document.getElementById('EDAGAMENumber').innerHTML == '0')) {
					
							$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
							$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
							EDAGAMEVoicesAnimalsTask[0].play(); 
							EDAGAMEVoicesAnimalsTask[0].onended = function() {
				
									$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
									$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				
							};
					
			}
			
			else if (($('a#EDAGAMEA3').hasClass('EDAGAMECurrent')) &&
					 (document.getElementById('EDAGAMENumber').innerHTML == '1')) {
					
							$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
							$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
							EDAGAMEVoicesAnimalsTask[1].play(); 
							EDAGAMEVoicesAnimalsTask[1].onended = function() {
				
									$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
									$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				
							};
					
			}
			
			else if (($('a#EDAGAMEA3').hasClass('EDAGAMECurrent')) &&
					 (document.getElementById('EDAGAMENumber').innerHTML == '2')) {
					
							$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
							$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
							EDAGAMEVoicesAnimalsTask[2].play(); 
							EDAGAMEVoicesAnimalsTask[2].onended = function() {
				
									$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
									$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				
							};
					
			}
			
			else if (($('a#EDAGAMEA3').hasClass('EDAGAMECurrent')) &&
					 (document.getElementById('EDAGAMENumber').innerHTML == '3')) {
					
							$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
							$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
							EDAGAMEVoicesAnimalsTask[3].play(); 
							EDAGAMEVoicesAnimalsTask[3].onended = function() {
				
									$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
									$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				
							};
					
			}
			
			else if (($('a#EDAGAMEA3').hasClass('EDAGAMECurrent')) &&
					 (document.getElementById('EDAGAMENumber').innerHTML == '4')) {
					
							$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
							$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
							EDAGAMEVoicesAnimalsTask[4].play(); 
							EDAGAMEVoicesAnimalsTask[4].onended = function() {
				
									$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
									$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				
							};
					
			}
			
			else if (($('a#EDAGAMEA3').hasClass('EDAGAMECurrent')) &&
					 (document.getElementById('EDAGAMENumber').innerHTML == '5')) {
					
							$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
							$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
							EDAGAMEVoicesAnimalsTask[5].play(); 
							EDAGAMEVoicesAnimalsTask[5].onended = function() {
				
									$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
									$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				
							};
					
			}
			
			else if (($('a#EDAGAMEA3').hasClass('EDAGAMECurrent')) &&
					 (document.getElementById('EDAGAMENumber').innerHTML == '6')) {
					
							$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
							$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
							EDAGAMEVoicesAnimalsTask[6].play(); 
							EDAGAMEVoicesAnimalsTask[6].onended = function() {
				
									$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
									$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				
							};
					
			}
			
			else if (($('a#EDAGAMEA3').hasClass('EDAGAMECurrent')) &&
					 (document.getElementById('EDAGAMENumber').innerHTML == '7')) {
					
							$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
							$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
							EDAGAMEVoicesAnimalsTask[7].play(); 
							EDAGAMEVoicesAnimalsTask[7].onended = function() {
				
									$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
									$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				
							};
					
			}
			
			else if (($('a#EDAGAMEA3').hasClass('EDAGAMECurrent')) &&
					 (document.getElementById('EDAGAMENumber').innerHTML == '8')) {
					
							$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
							$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
							EDAGAMEVoicesAnimalsTask[8].play(); 
							EDAGAMEVoicesAnimalsTask[8].onended = function() {
				
									$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
									$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				
							};
					
			}
			
			else if (($('a#EDAGAMEA3').hasClass('EDAGAMECurrent')) &&
					 (document.getElementById('EDAGAMENumber').innerHTML == '9')) {
					
							$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
							$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
							EDAGAMEVoicesAnimalsTask[9].play(); 
							EDAGAMEVoicesAnimalsTask[9].onended = function() {
				
									$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
									$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				
							};
					
			}
			
			else if (($('a#EDAGAMEA3').hasClass('EDAGAMECurrent')) &&
					 (document.getElementById('EDAGAMENumber').innerHTML == '10')) {
					
							$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
							$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
							EDAGAMEVoicesAnimalsTask[10].play(); 
							EDAGAMEVoicesAnimalsTask[10].onended = function() {
				
									$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
									$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				
							};
					
			}
			
			else if (($('a#EDAGAMEA3').hasClass('EDAGAMECurrent')) &&
					 (document.getElementById('EDAGAMENumber').innerHTML == '11')) {
					
							$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
							$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
							EDAGAMEVoicesAnimalsTask[11].play(); 
							EDAGAMEVoicesAnimalsTask[11].onended = function() {
				
									$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
									$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				
							};
					
			}
			
			else if (($('a#EDAGAMEA3').hasClass('EDAGAMECurrent')) &&
					 (document.getElementById('EDAGAMENumber').innerHTML == '12')) {
					
							$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
							$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
							EDAGAMEVoicesAnimalsTask[12].play(); 
							EDAGAMEVoicesAnimalsTask[12].onended = function() {
				
									$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
									$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				
							};
					
			}
			
			else if (($('a#EDAGAMEA3').hasClass('EDAGAMECurrent')) &&
					 (document.getElementById('EDAGAMENumber').innerHTML == '13')) {
					
							$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
							$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
							EDAGAMEVoicesAnimalsTask[13].play(); 
							EDAGAMEVoicesAnimalsTask[13].onended = function() {
				
									$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
									$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				
							};
					
			}
			
			else if (($('a#EDAGAMEA3').hasClass('EDAGAMECurrent')) &&
					 (document.getElementById('EDAGAMENumber').innerHTML == '14')) {
					
							$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
							$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
							EDAGAMEVoicesAnimalsTask[14].play(); 
							EDAGAMEVoicesAnimalsTask[14].onended = function() {
				
									$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
									$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				
							};
					
			}
 
			else if (($('a#EDAGAMEA4').hasClass('EDAGAMECurrent')) &&
					 (document.getElementById('EDAGAMENumber').innerHTML == '0')) {
					
							$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
							$('#EDAGAMENote').attr({'src': EDAGAMEAnimationsCyclic[1].src});
							EDAGAMESounds[0].play(); 
							EDAGAMESounds[0].onended = function() {
				
									$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
									$('#EDAGAMENote').attr({'src': EDAGAMEImagesOther[13].src});
				
							};
					
			}
			
			else if (($('a#EDAGAMEA4').hasClass('EDAGAMECurrent')) &&
					 (document.getElementById('EDAGAMENumber').innerHTML == '1')) {
					
							$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
							$('#EDAGAMENote').attr({'src': EDAGAMEAnimationsCyclic[1].src});
							EDAGAMESounds[1].play(); 
							EDAGAMESounds[1].onended = function() {
				
									$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
									$('#EDAGAMENote').attr({'src': EDAGAMEImagesOther[13].src});
				
							};
					
			}
			
			else if (($('a#EDAGAMEA4').hasClass('EDAGAMECurrent')) &&
					 (document.getElementById('EDAGAMENumber').innerHTML == '2')) {
					
							$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
							$('#EDAGAMENote').attr({'src': EDAGAMEAnimationsCyclic[1].src});
							EDAGAMESounds[2].play(); 
							EDAGAMESounds[2].onended = function() {
				
									$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
									$('#EDAGAMENote').attr({'src': EDAGAMEImagesOther[13].src});
				
							};
					
			}
			
			else if (($('a#EDAGAMEA4').hasClass('EDAGAMECurrent')) &&
					 (document.getElementById('EDAGAMENumber').innerHTML == '3')) {
					
							$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
							$('#EDAGAMENote').attr({'src': EDAGAMEAnimationsCyclic[1].src});
							EDAGAMESounds[3].play(); 
							EDAGAMESounds[3].onended = function() {
				
									$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
									$('#EDAGAMENote').attr({'src': EDAGAMEImagesOther[13].src});
				
							};
					
			}
			
			else if (($('a#EDAGAMEA4').hasClass('EDAGAMECurrent')) &&
					 (document.getElementById('EDAGAMENumber').innerHTML == '4')) {
					
							$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
							$('#EDAGAMENote').attr({'src': EDAGAMEAnimationsCyclic[1].src});
							EDAGAMESounds[4].play(); 
							EDAGAMESounds[4].onended = function() {
				
									$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
									$('#EDAGAMENote').attr({'src': EDAGAMEImagesOther[13].src});
				
							};
					
			}
			
			else if (($('a#EDAGAMEA4').hasClass('EDAGAMECurrent')) &&
					 (document.getElementById('EDAGAMENumber').innerHTML == '5')) {
					
							$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
							$('#EDAGAMENote').attr({'src': EDAGAMEAnimationsCyclic[1].src});
							EDAGAMESounds[5].play(); 
							EDAGAMESounds[5].onended = function() {
				
									$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
									$('#EDAGAMENote').attr({'src': EDAGAMEImagesOther[13].src});
				
							};
					
			}
			
			else if (($('a#EDAGAMEA4').hasClass('EDAGAMECurrent')) &&
					 (document.getElementById('EDAGAMENumber').innerHTML == '6')) {
					
							$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
							$('#EDAGAMENote').attr({'src': EDAGAMEAnimationsCyclic[1].src});
							EDAGAMESounds[6].play(); 
							EDAGAMESounds[6].onended = function() {
				
									$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
									$('#EDAGAMENote').attr({'src': EDAGAMEImagesOther[13].src});
				
							};
					
			}
			
			else if (($('a#EDAGAMEA4').hasClass('EDAGAMECurrent')) &&
					 (document.getElementById('EDAGAMENumber').innerHTML == '7')) {
					
							$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
							$('#EDAGAMENote').attr({'src': EDAGAMEAnimationsCyclic[1].src});
							EDAGAMESounds[7].play(); 
							EDAGAMESounds[7].onended = function() {
				
									$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
									$('#EDAGAMENote').attr({'src': EDAGAMEImagesOther[13].src});
				
							};
					
			}
			
			else if (($('a#EDAGAMEA4').hasClass('EDAGAMECurrent')) &&
					 (document.getElementById('EDAGAMENumber').innerHTML == '8')) {
					
							$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
							$('#EDAGAMENote').attr({'src': EDAGAMEAnimationsCyclic[1].src});
							EDAGAMESounds[8].play(); 
							EDAGAMESounds[8].onended = function() {
				
									$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
									$('#EDAGAMENote').attr({'src': EDAGAMEImagesOther[13].src});
				
							};
					
			}
			
			else if (($('a#EDAGAMEA4').hasClass('EDAGAMECurrent')) &&
					 (document.getElementById('EDAGAMENumber').innerHTML == '9')) {
					
							$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
							$('#EDAGAMENote').attr({'src': EDAGAMEAnimationsCyclic[1].src});
							EDAGAMESounds[9].play(); 
							EDAGAMESounds[9].onended = function() {
				
									$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
									$('#EDAGAMENote').attr({'src': EDAGAMEImagesOther[13].src});
				
							};
					
			}
			
			else if (($('a#EDAGAMEA4').hasClass('EDAGAMECurrent')) &&
					 (document.getElementById('EDAGAMENumber').innerHTML == '10')) {
					
							$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
							$('#EDAGAMENote').attr({'src': EDAGAMEAnimationsCyclic[1].src});
							EDAGAMESounds[10].play(); 
							EDAGAMESounds[10].onended = function() {
				
									$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
									$('#EDAGAMENote').attr({'src': EDAGAMEImagesOther[13].src});
				
							};
					
			};
 
		};
		
};