//This file is used for checking catched objects in 'Instruments' game, scoring and giving a result.

//This function checks the correctness of a catched object.
function EDAGAMEINSCheck(id) {

	if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesInstruments[0].src &&
        document.getElementById('EDAGAMENumber').innerHTML == '0') {
			   
				if (document.getElementById('EDAGAMEScore').innerHTML == '10') {
				   
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEEngineReset();
					EDAGAMEINSScore();
					
				}
				   
				else {
					
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEVoiceReset();
					EDAGAMEINSYes(id);
					EDAGAMEINSScore();
					EDAGAMEEngineRefresh();
					
				};
				
	}
				
				
	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesInstruments[1].src &&
             document.getElementById('EDAGAMENumber').innerHTML == '1') {
			   
				if (document.getElementById('EDAGAMEScore').innerHTML == '10') {
				   
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEEngineReset();
					EDAGAMEINSScore();
					
				}
				   
				else {
					
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEVoiceReset();
					EDAGAMEINSYes(id);
					EDAGAMEINSScore();
					EDAGAMEEngineRefresh();
					
				};
				
	}

	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesInstruments[2].src &&
             document.getElementById('EDAGAMENumber').innerHTML == '2') {
			   
				if (document.getElementById('EDAGAMEScore').innerHTML == '10') {
				   
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEEngineReset();
					EDAGAMEINSScore();
					
				}
				   
				else {
					
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEVoiceReset();
					EDAGAMEINSYes(id);
					EDAGAMEINSScore();
					EDAGAMEEngineRefresh();
					
				};
				
	}
				
	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesInstruments[3].src &&
             document.getElementById('EDAGAMENumber').innerHTML == '3') {
			   
				if (document.getElementById('EDAGAMEScore').innerHTML == '10') {
				   
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEEngineReset();
					EDAGAMEINSScore();
					
				}
				   
				else {
					
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEVoiceReset();
					EDAGAMEINSYes(id);
					EDAGAMEINSScore();
					EDAGAMEEngineRefresh();
					
				};
				
	}

	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesInstruments[4].src &&
             document.getElementById('EDAGAMENumber').innerHTML == '4') {
			   
				if (document.getElementById('EDAGAMEScore').innerHTML == '10') {
				   
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEEngineReset();
					EDAGAMEINSScore();
					
				}
				   
				else {
					
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEVoiceReset();
					EDAGAMEINSYes(id);
					EDAGAMEINSScore();
					EDAGAMEEngineRefresh();
					
				};
				
	}
				
	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesInstruments[5].src &&
             document.getElementById('EDAGAMENumber').innerHTML == '5') {
			   
				if (document.getElementById('EDAGAMEScore').innerHTML == '10') {
				   
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEEngineReset();
					EDAGAMEINSScore();
					
				}
				   
				else {
					
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEVoiceReset();
					EDAGAMEINSYes(id);
					EDAGAMEINSScore();
					EDAGAMEEngineRefresh();
					
				};
				
	}
				
	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesInstruments[6].src &&
             document.getElementById('EDAGAMENumber').innerHTML == '6') {
			   
				if (document.getElementById('EDAGAMEScore').innerHTML == '10') {
				   
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEEngineReset();
					EDAGAMEINSScore();
					
				}
				   
				else {
					
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEVoiceReset();
					EDAGAMEINSYes(id);
					EDAGAMEINSScore();
					EDAGAMEEngineRefresh();
					
				};
				
	}
				
	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesInstruments[7].src &&
             document.getElementById('EDAGAMENumber').innerHTML == '7') {
			   
				if (document.getElementById('EDAGAMEScore').innerHTML == '10') {
				   
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEEngineReset();
					EDAGAMEINSScore();
					
				}
				   
				else {
					
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEVoiceReset();
					EDAGAMEINSYes(id);
					EDAGAMEINSScore();
					EDAGAMEEngineRefresh();
					
				};
				
	}
				
	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesInstruments[8].src &&
             document.getElementById('EDAGAMENumber').innerHTML == '8') {
			   
				if (document.getElementById('EDAGAMEScore').innerHTML == '10') {
				   
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEEngineReset();
					EDAGAMEINSScore();
					
				}
				   
				else {
					
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEVoiceReset();
					EDAGAMEINSYes(id);
					EDAGAMEINSScore();
					EDAGAMEEngineRefresh();
					
				};
				
	}
				
	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesInstruments[9].src &&
             document.getElementById('EDAGAMENumber').innerHTML == '9') {
			   
				if (document.getElementById('EDAGAMEScore').innerHTML == '10') {
				   
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEEngineReset();
					EDAGAMEINSScore();
					
				}
				   
				else {
					
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEVoiceReset();
					EDAGAMEINSYes(id);
					EDAGAMEINSScore();
					EDAGAMEEngineRefresh();
					
				};
				
	}

	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesInstruments[10].src &&
             document.getElementById('EDAGAMENumber').innerHTML == '10') {
			   
				if (document.getElementById('EDAGAMEScore').innerHTML == '10') {
				   
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEEngineReset();
					EDAGAMEINSScore();
					
				}
				   
				else {
					
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEVoiceReset();
					EDAGAMEINSYes(id);
					EDAGAMEINSScore();
					EDAGAMEEngineRefresh();
					
				};
				
	}				

	else {EDAGAMEVoiceReset(); EDAGAMEINSNo();};	

};

var EDAGAMECountDownToNextDabingINS;

//This function checks a score and changes a task audio.
function EDAGAMEINSScore() {

	$('#EDAGAMETask').animate({'background-color': '#FFD600'}, 250);
	$('#EDAGAMETask').delay(250).animate({'background-color': '#F7F5BA'}, 250);

	var Score = document.getElementById('EDAGAMEScore').innerHTML; Score++;
	document.getElementById('EDAGAMEScore').innerHTML = Score;

	if (Score == '1') {
			
			document.getElementById('EDAGAMENumber').innerHTML = EDAGAMEBINS;
			$('#EDAGAMEStar1').attr({'src': EDAGAMEImagesOther[3].src});
			EDAGAMECountDownToNextDabingINS = setTimeout(function() {
				
				EDAGAMEINSTimer();
				EDAGAMEVoiceReset();
				EDAGAMESounds[EDAGAMEBINS].play();
				
			}, 2400);
				
	}
				
	else if (Score == '2') {
			
			document.getElementById('EDAGAMENumber').innerHTML = EDAGAMECINS;
			$('#EDAGAMEStar2').attr({'src': EDAGAMEImagesOther[3].src});
			EDAGAMECountDownToNextDabingINS = setTimeout(function() {
				
				EDAGAMEINSTimer();
				EDAGAMEVoiceReset();
				EDAGAMESounds[EDAGAMECINS].play();
				
			}, 2400);
				
	}
				
	else if (Score == '3') {
			
			document.getElementById('EDAGAMENumber').innerHTML = EDAGAMEDINS;
			$('#EDAGAMEStar3').attr({'src': EDAGAMEImagesOther[3].src});
			EDAGAMECountDownToNextDabingINS = setTimeout(function() {
				
				EDAGAMEINSTimer();
				EDAGAMEVoiceReset();
				EDAGAMESounds[EDAGAMEDINS].play();
				
			}, 2400);
				
	}
				
	else if (Score == '4') {
			
			document.getElementById('EDAGAMENumber').innerHTML = EDAGAMEEINS;
			$('#EDAGAMEStar4').attr({'src': EDAGAMEImagesOther[3].src});
			EDAGAMECountDownToNextDabingINS = setTimeout(function() {
				
				EDAGAMEINSTimer();
				EDAGAMEVoiceReset();
				EDAGAMESounds[EDAGAMEEINS].play();
				
			}, 2400);
				
	}
				
	else if (Score == '5') {
			
			document.getElementById('EDAGAMENumber').innerHTML = EDAGAMEFINS;
			$('#EDAGAMEStar5').attr({'src': EDAGAMEImagesOther[3].src});
			EDAGAMECountDownToNextDabingINS = setTimeout(function() {
				
				EDAGAMEINSTimer();
				EDAGAMEVoiceReset();
				EDAGAMESounds[EDAGAMEFINS].play();
				
			}, 2400);
				
	}
				
	else if (Score == '6') {
			
			document.getElementById('EDAGAMENumber').innerHTML = EDAGAMEGINS;
			$('#EDAGAMEStar6').attr({'src': EDAGAMEImagesOther[3].src});
			EDAGAMECountDownToNextDabingINS = setTimeout(function() {
				
				EDAGAMEINSTimer();
				EDAGAMEVoiceReset();
				EDAGAMESounds[EDAGAMEGINS].play();
				
			}, 2400);
				
	}
				
	else if (Score == '7') {
			
			document.getElementById('EDAGAMENumber').innerHTML = EDAGAMEHINS;
			$('#EDAGAMEStar7').attr({'src': EDAGAMEImagesOther[3].src});
			EDAGAMECountDownToNextDabingINS = setTimeout(function() {
				
				EDAGAMEINSTimer();
				EDAGAMEVoiceReset();
				EDAGAMESounds[EDAGAMEHINS].play();
				
			}, 2400);
				
	}
				
	else if (Score == '8') {
			
			document.getElementById('EDAGAMENumber').innerHTML = EDAGAMEIINS;
			$('#EDAGAMEStar8').attr({'src': EDAGAMEImagesOther[3].src});
			EDAGAMECountDownToNextDabingINS = setTimeout(function() {
				
				EDAGAMEINSTimer();
				EDAGAMEVoiceReset();
				EDAGAMESounds[EDAGAMEIINS].play();
				
			}, 2400);
				
	}
				
	else if (Score == '9') {
			
			document.getElementById('EDAGAMENumber').innerHTML = EDAGAMEJINS;
			$('#EDAGAMEStar9').attr({'src': EDAGAMEImagesOther[3].src});
			EDAGAMECountDownToNextDabingINS = setTimeout(function() {
				
				EDAGAMEINSTimer();
				EDAGAMEVoiceReset();
				EDAGAMESounds[EDAGAMEJINS].play();
				
			}, 2400);
				
	}

	else if (Score == '10') {
			
			document.getElementById('EDAGAMENumber').innerHTML = EDAGAMEKINS;
			$('#EDAGAMEStar10').attr({'src': EDAGAMEImagesOther[3].src});
			EDAGAMECountDownToNextDabingINS = setTimeout(function() {
				
				EDAGAMEINSTimer();
				EDAGAMEVoiceReset();
				EDAGAMESounds[EDAGAMEKINS].play();
				
			}, 2400);
				
	}

	else if (Score == '11') {
			
			$('#EDAGAMEChecker').css({'display': 'none'});
			$('#EDAGAMEStar15').attr({'src': EDAGAMEImagesOther[3].src});
			
			$('#EDAGAMEBackground').fadeIn(250);
			$('#EDAGAMECongratulation').fadeIn(250);
			
			EDAGAMEVoiceReset(); EDAGAMEVoicesMainBasic[4].play();
			
			$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
			$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
			EDAGAMEVoicesMainBasic[4].onended = function() {
				
				$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
				$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				
			};

	};		

};

//This function controls all icons including Eda during the task audio plays.
function EDAGAMEINSTimer() {

	if (document.getElementById('EDAGAMENumber').innerHTML == '0')   {
		   
			$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
			$('#EDAGAMENote').attr({'src': EDAGAMEAnimationsCyclic[1].src});
			EDAGAMESounds[0].onended = function() {
				
				$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
				$('#EDAGAMENote').attr({'src': EDAGAMEImagesOther[13].src});
				$('#EDAGAMERepeat').fadeIn();
				$('#EDAGAMERepeat').attr({'src': EDAGAMEImagesOther[7].src});
				$('#EDAGAMERepeat2').attr({'src': EDAGAMEImagesOther[9].src}).fadeIn();
				
			};
			
	}

	else if (document.getElementById('EDAGAMENumber').innerHTML == '1')   {
		   
			$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
			$('#EDAGAMENote').attr({'src': EDAGAMEAnimationsCyclic[1].src});
			EDAGAMESounds[1].onended = function() {
				
				$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
				$('#EDAGAMENote').attr({'src': EDAGAMEImagesOther[13].src});
				$('#EDAGAMERepeat').fadeIn();
				$('#EDAGAMERepeat').attr({'src': EDAGAMEImagesOther[7].src});
				$('#EDAGAMERepeat2').attr({'src': EDAGAMEImagesOther[9].src}).fadeIn();
				
			};
			
	}
			
	else if (document.getElementById('EDAGAMENumber').innerHTML == '2')   {
		   
			$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
			$('#EDAGAMENote').attr({'src': EDAGAMEAnimationsCyclic[1].src});
			EDAGAMESounds[2].onended = function() {
				
				$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
				$('#EDAGAMENote').attr({'src': EDAGAMEImagesOther[13].src});
				$('#EDAGAMERepeat').fadeIn();
				$('#EDAGAMERepeat').attr({'src': EDAGAMEImagesOther[7].src});
				$('#EDAGAMERepeat2').attr({'src': EDAGAMEImagesOther[9].src}).fadeIn();
				
			};
			
	}
			
	else if (document.getElementById('EDAGAMENumber').innerHTML == '3')   {
		   
			$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
			$('#EDAGAMENote').attr({'src': EDAGAMEAnimationsCyclic[1].src});
			EDAGAMESounds[3].onended = function() {
				
				$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
				$('#EDAGAMENote').attr({'src': EDAGAMEImagesOther[13].src});
				$('#EDAGAMERepeat').fadeIn();
				$('#EDAGAMERepeat').attr({'src': EDAGAMEImagesOther[7].src});
				$('#EDAGAMERepeat2').attr({'src': EDAGAMEImagesOther[9].src}).fadeIn();
				
			};
			
	}
			
	else if (document.getElementById('EDAGAMENumber').innerHTML == '4')   {
		   
			$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
			$('#EDAGAMENote').attr({'src': EDAGAMEAnimationsCyclic[1].src});
			EDAGAMESounds[4].onended = function() {
				
				$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
				$('#EDAGAMENote').attr({'src': EDAGAMEImagesOther[13].src});
				$('#EDAGAMERepeat').fadeIn();
				$('#EDAGAMERepeat').attr({'src': EDAGAMEImagesOther[7].src});
				$('#EDAGAMERepeat2').attr({'src': EDAGAMEImagesOther[9].src}).fadeIn();
				
			};
			
	}
			
	else if (document.getElementById('EDAGAMENumber').innerHTML == '5')   {
		   
			$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
			$('#EDAGAMENote').attr({'src': EDAGAMEAnimationsCyclic[1].src});
			EDAGAMESounds[5].onended = function() {
				
				$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
				$('#EDAGAMENote').attr({'src': EDAGAMEImagesOther[13].src});
				$('#EDAGAMERepeat').fadeIn();
				$('#EDAGAMERepeat').attr({'src': EDAGAMEImagesOther[7].src});
				$('#EDAGAMERepeat2').attr({'src': EDAGAMEImagesOther[9].src}).fadeIn();
				
			};
			
	}
			
	else if (document.getElementById('EDAGAMENumber').innerHTML == '6')   {
		   
			$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
			$('#EDAGAMENote').attr({'src': EDAGAMEAnimationsCyclic[1].src});
			EDAGAMESounds[6].onended = function() {
				
				$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
				$('#EDAGAMENote').attr({'src': EDAGAMEImagesOther[13].src});
				$('#EDAGAMERepeat').fadeIn();
				$('#EDAGAMERepeat').attr({'src': EDAGAMEImagesOther[7].src});
				$('#EDAGAMERepeat2').attr({'src': EDAGAMEImagesOther[9].src}).fadeIn();
				
			};
			
	}
			
	else if (document.getElementById('EDAGAMENumber').innerHTML == '7')   {
		   
			$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
			$('#EDAGAMENote').attr({'src': EDAGAMEAnimationsCyclic[1].src});
			EDAGAMESounds[7].onended = function() {
				
				$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
				$('#EDAGAMENote').attr({'src': EDAGAMEImagesOther[13].src});
				$('#EDAGAMERepeat').fadeIn();
				$('#EDAGAMERepeat').attr({'src': EDAGAMEImagesOther[7].src});
				$('#EDAGAMERepeat2').attr({'src': EDAGAMEImagesOther[9].src}).fadeIn();
				
			};
			
	}
			
	else if (document.getElementById('EDAGAMENumber').innerHTML == '8')   {
		   
			$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
			$('#EDAGAMENote').attr({'src': EDAGAMEAnimationsCyclic[1].src});
			EDAGAMESounds[8].onended = function() {
				
				$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
				$('#EDAGAMENote').attr({'src': EDAGAMEImagesOther[13].src});
				$('#EDAGAMERepeat').fadeIn();
				$('#EDAGAMERepeat').attr({'src': EDAGAMEImagesOther[7].src});
				$('#EDAGAMERepeat2').attr({'src': EDAGAMEImagesOther[9].src}).fadeIn();
				
			};
			
	}
			
	else if (document.getElementById('EDAGAMENumber').innerHTML == '9')   {
		   
			$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
			$('#EDAGAMENote').attr({'src': EDAGAMEAnimationsCyclic[1].src});
			EDAGAMESounds[9].onended = function() {
				
				$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
				$('#EDAGAMENote').attr({'src': EDAGAMEImagesOther[13].src});
				$('#EDAGAMERepeat').fadeIn();
				$('#EDAGAMERepeat').attr({'src': EDAGAMEImagesOther[7].src});
				$('#EDAGAMERepeat2').attr({'src': EDAGAMEImagesOther[9].src}).fadeIn();
				
			};
			
	}
			
	else if (document.getElementById('EDAGAMENumber').innerHTML == '10')   {
		   
			$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
			$('#EDAGAMENote').attr({'src': EDAGAMEAnimationsCyclic[1].src});
			EDAGAMESounds[10].onended = function() {
				
				$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
				$('#EDAGAMENote').attr({'src': EDAGAMEImagesOther[13].src});
				$('#EDAGAMERepeat').fadeIn();
				$('#EDAGAMERepeat').attr({'src': EDAGAMEImagesOther[7].src});
				$('#EDAGAMERepeat2').attr({'src': EDAGAMEImagesOther[9].src}).fadeIn();
				
			};
			
	};

};

var EDAGAMECOUNTDOWNINSYes;

//This function makes Eda to express a consent.
function EDAGAMEINSYes(id) {

	if (document.getElementById('EDAGAMEChecker').src == EDAGAMEImagesOther[6].src ||
		document.getElementById('EDAGAMEChecker').src == EDAGAMEImagesOther[15].src) {return;}
	
	else {
		
		$('#EDAGAMEObject' + id).stop(true, true, true).fadeOut(0);
		$('#EDAGAMEChecker').css({'width': '120px', 'height': '120px'});
        $('#EDAGAMEChecker').attr({'src': EDAGAMEImagesOther[15].src})
							.fadeIn(25)
							.animate({'opacity': '1', 'top': '-=50px', 'width': '+=100px', 'height': '+=100px'});
        $('#EDAGAMEChecker').fadeOut(200).animate({'opacity': '0', 'top': '+=50px'});
		
		clearTimeout(EDAGAMECOUNTDOWNINSYes);
		EDAGAMECOUNTDOWNINSYes = setTimeout(function() {
			
			$('#EDAGAMEChecker').css({'width': '-=100px', 'height': '-=100px'}).attr({'src': EDAGAMEImagesOther[13].src});
			
		}, 1400);

        EDAGAMEYesAnim();
		EDAGAMEVoiceReset(); EDAGAMEVoicesMainBasic[12].play();

        $('#EDAGAMERepeat').delay(300).fadeOut(250);
        $('#EDAGAMERepeat').delay(750).fadeIn(250);
		$('#EDAGAMERepeat2').delay(300).fadeOut(250);
        $('#EDAGAMERepeat2').delay(750).fadeIn(250);

	};

};

var EDAGAMECOUNTDOWNINSNo;

//This function makes Eda to express an objection.
function EDAGAMEINSNo() {

	if (document.getElementById('EDAGAMEChecker').src == EDAGAMEImagesOther[6].src ||
		document.getElementById('EDAGAMEChecker').src == EDAGAMEImagesOther[15].src) {return;}
		
	else {
		
		$('#EDAGAMEChecker').css({'width': '120px', 'height': '120px'});
        $('#EDAGAMEChecker').attr({'src': EDAGAMEImagesOther[6].src})
							.fadeIn(25)
							.animate({'opacity': '1', 'top': '-=50px', 'width': '+=100px', 'height': '+=100px'})
        $('#EDAGAMEChecker').fadeOut(200).animate({'opacity': '0', 'top': '+=50px'});
		
		clearTimeout(EDAGAMECOUNTDOWNINSNo);
		EDAGAMECOUNTDOWNINSNo = setTimeout(function() {
			
			$('#EDAGAMEChecker').css({'width': '-=100px', 'height': '-=100px'}).attr({'src': EDAGAMEImagesOther[13].src});
			
		}, 1400);
		
        EDAGAMENoAnim();
        EDAGAMEVoiceReset(); EDAGAMEVoicesMainBasic[9].play();  
	
	};

};