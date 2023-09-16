//This file is used for checking catched objects in 'Animals' game, scoring and giving a result.

//This function checks the correctness of a catched object.
function EDAGAMEANICheck(id) {

	if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesAnimals[0].src &&
        document.getElementById('EDAGAMENumber').innerHTML == '0') {
			   
				if (document.getElementById('EDAGAMEScore').innerHTML == '14') {
				   
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEEngineReset();
					EDAGAMEANIScore();
					
				}
				   
				else {
					
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEVoiceReset();
					EDAGAMEANIYes(id);
					EDAGAMEANIScore();
					EDAGAMEEngineRefresh();
					
				};
				
	}
				
				
	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesAnimals[1].src &&
             document.getElementById('EDAGAMENumber').innerHTML == '1') {
			   
				if (document.getElementById('EDAGAMEScore').innerHTML == '14') {
				   
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEEngineReset();
					EDAGAMEANIScore();
					
				}
				   
				else {
					
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEVoiceReset();
					EDAGAMEANIYes(id);
					EDAGAMEANIScore();
					EDAGAMEEngineRefresh();
					
				};
				
	}

	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesAnimals[2].src &&
             document.getElementById('EDAGAMENumber').innerHTML == '2') {
			   
				if (document.getElementById('EDAGAMEScore').innerHTML == '14') {
				   
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEEngineReset();
					EDAGAMEANIScore();
					
				}
				   
				else {
					
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEVoiceReset();
					EDAGAMEANIYes(id);
					EDAGAMEANIScore();
					EDAGAMEEngineRefresh();
					
				};
				
	}
				
	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesAnimals[3].src &&
             document.getElementById('EDAGAMENumber').innerHTML == '3') {
			   
				if (document.getElementById('EDAGAMEScore').innerHTML == '14') {
				   
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEEngineReset();
					EDAGAMEANIScore();
					
				}
				   
				else {
					
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEVoiceReset();
					EDAGAMEANIYes(id);
					EDAGAMEANIScore();
					EDAGAMEEngineRefresh();
					
				};
				
	}

	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesAnimals[4].src &&
             document.getElementById('EDAGAMENumber').innerHTML == '4') {
			   
				if (document.getElementById('EDAGAMEScore').innerHTML == '14') {
				   
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEEngineReset();
					EDAGAMEANIScore();
					
				}
				   
				else {
					
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEVoiceReset();
					EDAGAMEANIYes(id);
					EDAGAMEANIScore();
					EDAGAMEEngineRefresh();
					
				};
				
	}
				
	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesAnimals[5].src &&
             document.getElementById('EDAGAMENumber').innerHTML == '5') {
			   
				if (document.getElementById('EDAGAMEScore').innerHTML == '14') {
				   
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEEngineReset();
					EDAGAMEANIScore();
					
				}
				   
				else {
					
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEVoiceReset();
					EDAGAMEANIYes(id);
					EDAGAMEANIScore();
					EDAGAMEEngineRefresh();
					
				};
				
	}
				
	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesAnimals[6].src &&
             document.getElementById('EDAGAMENumber').innerHTML == '6') {
			   
				if (document.getElementById('EDAGAMEScore').innerHTML == '14') {
				   
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEEngineReset();
					EDAGAMEANIScore();
					
				}
				   
				else {
					
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEVoiceReset();
					EDAGAMEANIYes(id);
					EDAGAMEANIScore();
					EDAGAMEEngineRefresh();
					
				};
				
	}
				
	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesAnimals[7].src &&
             document.getElementById('EDAGAMENumber').innerHTML == '7') {
			   
				if (document.getElementById('EDAGAMEScore').innerHTML == '14') {
				   
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEEngineReset();
					EDAGAMEANIScore();
					
				}
				   
				else {
					
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEVoiceReset();
					EDAGAMEANIYes(id);
					EDAGAMEANIScore();
					EDAGAMEEngineRefresh();
					
				};
				
	}
				
	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesAnimals[8].src &&
             document.getElementById('EDAGAMENumber').innerHTML == '8') {
			   
				if (document.getElementById('EDAGAMEScore').innerHTML == '14') {
				   
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEEngineReset();
					EDAGAMEANIScore();
					
				}
				   
				else {
					
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEVoiceReset();
					EDAGAMEANIYes(id);
					EDAGAMEANIScore();
					EDAGAMEEngineRefresh();
					
				};
				
	}
				
	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesAnimals[9].src &&
             document.getElementById('EDAGAMENumber').innerHTML == '9') {
			   
				if (document.getElementById('EDAGAMEScore').innerHTML == '14') {
				   
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEEngineReset();
					EDAGAMEANIScore();
					
				}
				   
				else {
					
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEVoiceReset();
					EDAGAMEANIYes(id);
					EDAGAMEANIScore();
					EDAGAMEEngineRefresh();
					
				};
				
	}

	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesAnimals[10].src &&
             document.getElementById('EDAGAMENumber').innerHTML == '10') {
			   
				if (document.getElementById('EDAGAMEScore').innerHTML == '14') {
				   
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEEngineReset();
					EDAGAMEANIScore();
					
				}
				   
				else {
					
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEVoiceReset();
					EDAGAMEANIYes(id);
					EDAGAMEANIScore();
					EDAGAMEEngineRefresh();
					
				};
				
	}

	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesAnimals[11].src &&
             document.getElementById('EDAGAMENumber').innerHTML == '11') {
			   
				if (document.getElementById('EDAGAMEScore').innerHTML == '14') {
				   
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEEngineReset();
					EDAGAMEANIScore();
					
				}
				   
				else {
					
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEVoiceReset();
					EDAGAMEANIYes(id);
					EDAGAMEANIScore();
					EDAGAMEEngineRefresh();
					
				};
				
	}

	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesAnimals[12].src &&
             document.getElementById('EDAGAMENumber').innerHTML == '12') {
			   
				if (document.getElementById('EDAGAMEScore').innerHTML == '14') {
				   
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEEngineReset();
					EDAGAMEANIScore();
					
				}
				   
				else {
					
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEVoiceReset();
					EDAGAMEANIYes(id);
					EDAGAMEANIScore();
					EDAGAMEEngineRefresh();
					
				};
				
	}

	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesAnimals[13].src &&
             document.getElementById('EDAGAMENumber').innerHTML == '13') {
			   
				if (document.getElementById('EDAGAMEScore').innerHTML == '14') {
				   
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEEngineReset();
					EDAGAMEANIScore();
					
				}
				   
				else {
					
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEVoiceReset();
					EDAGAMEANIYes(id);
					EDAGAMEANIScore();
					EDAGAMEEngineRefresh();
					
				};
				
	}

	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesAnimals[14].src &&
             document.getElementById('EDAGAMENumber').innerHTML == '14') {
			   
				if (document.getElementById('EDAGAMEScore').innerHTML == '14') {
				   
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEEngineReset();
					EDAGAMEANIScore();
					
				}
				   
				else {
					
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEVoiceReset();
					EDAGAMEANIYes(id);
					EDAGAMEANIScore();
					EDAGAMEEngineRefresh();
					
				};
				
	}

	else {EDAGAMEVoiceReset(); EDAGAMEANINo();};	

};

var EDAGAMECountDownToNextDabingANI;

//This function checks a score and changes a task audio.
function EDAGAMEANIScore() {

	$('#EDAGAMETask').animate({'background-color': '#FFD600'}, 250);
	$('#EDAGAMETask').delay(250).animate({'background-color': '#F7F5BA'}, 250);

	var Score = document.getElementById('EDAGAMEScore').innerHTML; Score++;
	document.getElementById('EDAGAMEScore').innerHTML = Score;

	if (Score == '1') {
			
			document.getElementById('EDAGAMENumber').innerHTML = EDAGAMEBANI;
			$('#EDAGAMEStar1').attr({'src': EDAGAMEImagesOther[3].src});
			EDAGAMECountDownToNextDabingANI = setTimeout(function() {
				
				EDAGAMEANITimer();
				EDAGAMEVoiceReset();
				EDAGAMEVoicesAnimalsTask[EDAGAMEBANI].play();
				
			}, 2400);
				
	}
				
	else if (Score == '2') {
			
			document.getElementById('EDAGAMENumber').innerHTML = EDAGAMECANI;
			$('#EDAGAMEStar2').attr({'src': EDAGAMEImagesOther[3].src});
			EDAGAMECountDownToNextDabingANI = setTimeout(function() {
				
				EDAGAMEANITimer();
				EDAGAMEVoiceReset();
				EDAGAMEVoicesAnimalsTask[EDAGAMECANI].play();
				
			}, 2400);
				
	}
				
	else if (Score == '3') {
			
			document.getElementById('EDAGAMENumber').innerHTML = EDAGAMEDANI;
			$('#EDAGAMEStar3').attr({'src': EDAGAMEImagesOther[3].src});
			EDAGAMECountDownToNextDabingANI = setTimeout(function() {
				
				EDAGAMEANITimer();
				EDAGAMEVoiceReset();
				EDAGAMEVoicesAnimalsTask[EDAGAMEDANI].play();
				
			}, 2400);
				
	}
				
	else if (Score == '4') {
			
			document.getElementById('EDAGAMENumber').innerHTML = EDAGAMEEANI;
			$('#EDAGAMEStar4').attr({'src': EDAGAMEImagesOther[3].src});
			EDAGAMECountDownToNextDabingANI = setTimeout(function() {
				
				EDAGAMEANITimer();
				EDAGAMEVoiceReset();
				EDAGAMEVoicesAnimalsTask[EDAGAMEEANI].play();
				
			}, 2400);
				
	}
				
	else if (Score == '5') {
			
			document.getElementById('EDAGAMENumber').innerHTML = EDAGAMEFANI;
			$('#EDAGAMEStar5').attr({'src': EDAGAMEImagesOther[3].src});
			EDAGAMECountDownToNextDabingANI = setTimeout(function() {
				
				EDAGAMEANITimer();
				EDAGAMEVoiceReset();
				EDAGAMEVoicesAnimalsTask[EDAGAMEFANI].play();
				
			}, 2400);
				
	}
				
	else if (Score == '6') {
			
			document.getElementById('EDAGAMENumber').innerHTML = EDAGAMEGANI;
			$('#EDAGAMEStar6').attr({'src': EDAGAMEImagesOther[3].src});
			EDAGAMECountDownToNextDabingANI = setTimeout(function() {
				
				EDAGAMEANITimer();
				EDAGAMEVoiceReset();
				EDAGAMEVoicesAnimalsTask[EDAGAMEGANI].play();
				
			}, 2400);
				
	}
				
	else if (Score == '7') {
			
			document.getElementById('EDAGAMENumber').innerHTML = EDAGAMEHANI;
			$('#EDAGAMEStar7').attr({'src': EDAGAMEImagesOther[3].src});
			EDAGAMECountDownToNextDabingANI = setTimeout(function() {
				
				EDAGAMEANITimer();
				EDAGAMEVoiceReset();
				EDAGAMEVoicesAnimalsTask[EDAGAMEHANI].play();
				
			}, 2400);
				
	}
				
	else if (Score == '8') {
			
			document.getElementById('EDAGAMENumber').innerHTML = EDAGAMEIANI;
			$('#EDAGAMEStar8').attr({'src': EDAGAMEImagesOther[3].src});
			EDAGAMECountDownToNextDabingANI = setTimeout(function() {
				
				EDAGAMEANITimer();
				EDAGAMEVoiceReset();
				EDAGAMEVoicesAnimalsTask[EDAGAMEIANI].play();
				
			}, 2400);
				
	}
				
	else if (Score == '9') {
			
			document.getElementById('EDAGAMENumber').innerHTML = EDAGAMEJANI;
			$('#EDAGAMEStar9').attr({'src': EDAGAMEImagesOther[3].src});
			EDAGAMECountDownToNextDabingANI = setTimeout(function() {
				
				EDAGAMEANITimer();
				EDAGAMEVoiceReset();
				EDAGAMEVoicesAnimalsTask[EDAGAMEJANI].play();
				
			}, 2400);
				
	}

	else if (Score == '10') {
			
			document.getElementById('EDAGAMENumber').innerHTML = EDAGAMEKANI;
			$('#EDAGAMEStar10').attr({'src': EDAGAMEImagesOther[3].src});
			EDAGAMECountDownToNextDabingANI = setTimeout(function() {
				
				EDAGAMEANITimer();
				EDAGAMEVoiceReset();
				EDAGAMEVoicesAnimalsTask[EDAGAMEKANI].play();
				
			}, 2400);
				
	}

	else if (Score == '11') {
			
			document.getElementById('EDAGAMENumber').innerHTML = EDAGAMELANI;
			$('#EDAGAMEStar11').attr({'src': EDAGAMEImagesOther[3].src});
			EDAGAMECountDownToNextDabingANI = setTimeout(function() {
				
				EDAGAMEANITimer();
				EDAGAMEVoiceReset();
				EDAGAMEVoicesAnimalsTask[EDAGAMELANI].play();
				
			}, 2400);
				
	}

	else if (Score == '12') {
			
			document.getElementById('EDAGAMENumber').innerHTML = EDAGAMEMANI;
			$('#EDAGAMEStar12').attr({'src': EDAGAMEImagesOther[3].src});
			EDAGAMECountDownToNextDabingANI = setTimeout(function() {
				
				EDAGAMEANITimer();
				EDAGAMEVoiceReset();
				EDAGAMEVoicesAnimalsTask[EDAGAMEMANI].play();
				
			}, 2400);
				
	}

	else if (Score == '13') {
			
			document.getElementById('EDAGAMENumber').innerHTML = EDAGAMENANI;
			$('#EDAGAMEStar13').attr({'src': EDAGAMEImagesOther[3].src});
			EDAGAMECountDownToNextDabingANI = setTimeout(function() {
				
				EDAGAMEANITimer();
				EDAGAMEVoiceReset();
				EDAGAMEVoicesAnimalsTask[EDAGAMENANI].play();
				
			}, 2400);
				
	}
		
	else if (Score == '14') {
			
			document.getElementById('EDAGAMENumber').innerHTML = EDAGAMEOANI;
			$('#EDAGAMEStar14').attr({'src': EDAGAMEImagesOther[3].src});
			EDAGAMECountDownToNextDabingANI = setTimeout(function() {
				
				EDAGAMEANITimer();
				EDAGAMEVoiceReset();
				EDAGAMEVoicesAnimalsTask[EDAGAMEOANI].play();
				
			}, 2400);
				
	}

	else if (Score == '15') {
			
			$('#EDAGAMEChecker').css({'display': 'none'});
			$('#EDAGAMEStar15').attr({'src': EDAGAMEImagesOther[3].src});
			
			$('#EDAGAMEBackground').fadeIn(250);
			$('#EDAGAMECongratulation').fadeIn(250);
			
			EDAGAMEVoiceReset(); EDAGAMEVoicesMainBasic[2].play();
			
			$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
			$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
			EDAGAMEVoicesMainBasic[2].onended = function() {
				
				$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
				$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				
			};

	};	

};

//This function controls all icons including Eda during the task audio plays.
function EDAGAMEANITimer() {

	if (document.getElementById('EDAGAMENumber').innerHTML == '0')   {
		   
			$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
			$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
			EDAGAMEVoicesAnimalsTask[0].onended = function() {
				
				$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
				$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				$('#EDAGAMERepeat').fadeIn();
				$('#EDAGAMERepeat').attr({'src': EDAGAMEImagesOther[7].src});
				$('#EDAGAMERepeat2').attr({'src': EDAGAMEImagesOther[8].src}).fadeIn();
				
			};
			
	}

	else if (document.getElementById('EDAGAMENumber').innerHTML == '1')   {
		   
			$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
			$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
			EDAGAMEVoicesAnimalsTask[1].onended = function() {
				
				$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
				$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				$('#EDAGAMERepeat').fadeIn();
				$('#EDAGAMERepeat').attr({'src': EDAGAMEImagesOther[7].src});
				$('#EDAGAMERepeat2').attr({'src': EDAGAMEImagesOther[8].src}).fadeIn();
				
			};
			
	}
			
	else if (document.getElementById('EDAGAMENumber').innerHTML == '2')   {
		   
			$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
			$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
			EDAGAMEVoicesAnimalsTask[2].onended = function() {
				
				$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
				$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				$('#EDAGAMERepeat').fadeIn();
				$('#EDAGAMERepeat').attr({'src': EDAGAMEImagesOther[7].src});
				$('#EDAGAMERepeat2').attr({'src': EDAGAMEImagesOther[8].src}).fadeIn();
				
			};
			
	}
			
	else if (document.getElementById('EDAGAMENumber').innerHTML == '3')   {
		   
			$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
			$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
			EDAGAMEVoicesAnimalsTask[3].onended = function() {
				
				$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
				$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				$('#EDAGAMERepeat').fadeIn();
				$('#EDAGAMERepeat').attr({'src': EDAGAMEImagesOther[7].src});
				$('#EDAGAMERepeat2').attr({'src': EDAGAMEImagesOther[8].src}).fadeIn();
				
			};
			
	}
			
	else if (document.getElementById('EDAGAMENumber').innerHTML == '4')   {
		   
			$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
			$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
			EDAGAMEVoicesAnimalsTask[4].onended = function() {
				
				$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
				$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				$('#EDAGAMERepeat').fadeIn();
				$('#EDAGAMERepeat').attr({'src': EDAGAMEImagesOther[7].src});
				$('#EDAGAMERepeat2').attr({'src': EDAGAMEImagesOther[8].src}).fadeIn();
				
			};
			
	}
			
	else if (document.getElementById('EDAGAMENumber').innerHTML == '5')   {
		   
			$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
			$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
			EDAGAMEVoicesAnimalsTask[5].onended = function() {
				
				$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
				$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				$('#EDAGAMERepeat').fadeIn();
				$('#EDAGAMERepeat').attr({'src': EDAGAMEImagesOther[7].src});
				$('#EDAGAMERepeat2').attr({'src': EDAGAMEImagesOther[8].src}).fadeIn();
				
			};
			
	}
			
	else if (document.getElementById('EDAGAMENumber').innerHTML == '6')   {
		   
			$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
			$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
			EDAGAMEVoicesAnimalsTask[6].onended = function() {
				
				$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
				$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				$('#EDAGAMERepeat').fadeIn();
				$('#EDAGAMERepeat').attr({'src': EDAGAMEImagesOther[7].src});
				$('#EDAGAMERepeat2').attr({'src': EDAGAMEImagesOther[8].src}).fadeIn();
				
			};
			
	}
			
	else if (document.getElementById('EDAGAMENumber').innerHTML == '7')   {
		   
			$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
			$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
			EDAGAMEVoicesAnimalsTask[7].onended = function() {
				
				$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
				$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				$('#EDAGAMERepeat').fadeIn();
				$('#EDAGAMERepeat').attr({'src': EDAGAMEImagesOther[7].src});
				$('#EDAGAMERepeat2').attr({'src': EDAGAMEImagesOther[8].src}).fadeIn();
				
			};
			
	}
			
	else if (document.getElementById('EDAGAMENumber').innerHTML == '8')   {
		   
			$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
			$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
			EDAGAMEVoicesAnimalsTask[8].onended = function() {
				
				$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
				$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				$('#EDAGAMERepeat').fadeIn();
				$('#EDAGAMERepeat').attr({'src': EDAGAMEImagesOther[7].src});
				$('#EDAGAMERepeat2').attr({'src': EDAGAMEImagesOther[8].src}).fadeIn();
				
			};
			
	}
			
	else if (document.getElementById('EDAGAMENumber').innerHTML == '9')   {
		   
			$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
			$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
			EDAGAMEVoicesAnimalsTask[9].onended = function() {
				
				$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
				$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				$('#EDAGAMERepeat').fadeIn();
				$('#EDAGAMERepeat').attr({'src': EDAGAMEImagesOther[7].src});
				$('#EDAGAMERepeat2').attr({'src': EDAGAMEImagesOther[8].src}).fadeIn();
				
			};
			
	}
			
	else if (document.getElementById('EDAGAMENumber').innerHTML == '10')   {
		   
			$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
			$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
			EDAGAMEVoicesAnimalsTask[10].onended = function() {
				
				$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
				$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				$('#EDAGAMERepeat').fadeIn();
				$('#EDAGAMERepeat').attr({'src': EDAGAMEImagesOther[7].src});
				$('#EDAGAMERepeat2').attr({'src': EDAGAMEImagesOther[8].src}).fadeIn();
				
			};
			
	}
			
	else if (document.getElementById('EDAGAMENumber').innerHTML == '11')   {
		   
			$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
			$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
			EDAGAMEVoicesAnimalsTask[11].onended = function() {
				
				$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
				$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				$('#EDAGAMERepeat').fadeIn();
				$('#EDAGAMERepeat').attr({'src': EDAGAMEImagesOther[7].src});
				$('#EDAGAMERepeat2').attr({'src': EDAGAMEImagesOther[8].src}).fadeIn();
				
			};
			
	}
			
	else if (document.getElementById('EDAGAMENumber').innerHTML == '12')   {
		   
			$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
			$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
			EDAGAMEVoicesAnimalsTask[12].onended = function() {
				
				$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
				$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				$('#EDAGAMERepeat').fadeIn();
				$('#EDAGAMERepeat').attr({'src': EDAGAMEImagesOther[7].src});
				$('#EDAGAMERepeat2').attr({'src': EDAGAMEImagesOther[8].src}).fadeIn();
				
			};
			
	}
			
	else if (document.getElementById('EDAGAMENumber').innerHTML == '13')   {
		   
			$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
			$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
			EDAGAMEVoicesAnimalsTask[13].onended = function() {
				
				$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
				$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				$('#EDAGAMERepeat').fadeIn();
				$('#EDAGAMERepeat').attr({'src': EDAGAMEImagesOther[7].src});
				$('#EDAGAMERepeat2').attr({'src': EDAGAMEImagesOther[8].src}).fadeIn();
				
			};
			
	}
			
	else if (document.getElementById('EDAGAMENumber').innerHTML == '14')   {
		   
			$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
			$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
			EDAGAMEVoicesAnimalsTask[14].onended = function() {
				
				$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
				$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				$('#EDAGAMERepeat').fadeIn();
				$('#EDAGAMERepeat').attr({'src': EDAGAMEImagesOther[7].src});
				$('#EDAGAMERepeat2').attr({'src': EDAGAMEImagesOther[8].src}).fadeIn();
				
			};
			
	};

};

var EDAGAMECOUNTDOWNANIYes;

//This function makes Eda to express a consent.
function EDAGAMEANIYes(id) {

	if (document.getElementById('EDAGAMEChecker').src == EDAGAMEImagesOther[6].src ||
		document.getElementById('EDAGAMEChecker').src == EDAGAMEImagesOther[15].src) {return;}
	
	else {
		
		$('#EDAGAMEObject' + id).stop(true, true, true).fadeOut(0);
		$('#EDAGAMEChecker').css({'width': '120px', 'height': '120px'});
        $('#EDAGAMEChecker').attr({'src': EDAGAMEImagesOther[15].src})
							.fadeIn(25)
							.animate({'opacity': '1', 'top': '-=50px', 'width': '+=100px', 'height': '+=100px'});
        $('#EDAGAMEChecker').fadeOut(200).animate({'opacity': '0', 'top': '+=50px'});
		
		clearTimeout(EDAGAMECOUNTDOWNANIYes);
		EDAGAMECOUNTDOWNANIYes = setTimeout(function() {
			
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

var EDAGAMECOUNTDOWNANINo;

//This function makes Eda to express an objection.
function EDAGAMEANINo() {

	if (document.getElementById('EDAGAMEChecker').src == EDAGAMEImagesOther[6].src ||
		document.getElementById('EDAGAMEChecker').src == EDAGAMEImagesOther[15].src) {return;}
		
	else {
		
		$('#EDAGAMEChecker').css({'width': '120px', 'height': '120px'});
        $('#EDAGAMEChecker').attr({'src': EDAGAMEImagesOther[6].src})
							.fadeIn(25)
							.animate({'opacity': '1', 'top': '-=50px', 'width': '+=100px', 'height': '+=100px'})
        $('#EDAGAMEChecker').fadeOut(200).animate({'opacity': '0', 'top': '+=50px'});
		
		clearTimeout(EDAGAMECOUNTDOWNANINo);
		EDAGAMECOUNTDOWNANINo = setTimeout(function() {
			
			$('#EDAGAMEChecker').css({'width': '-=100px', 'height': '-=100px'}).attr({'src': EDAGAMEImagesOther[13].src});
			
		}, 1400);
		
        EDAGAMENoAnim();
        EDAGAMEVoiceReset(); EDAGAMEVoicesMainBasic[9].play();  
	
	};

};