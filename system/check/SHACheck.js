//This file is used for checking catched objects in 'Shapes' game, scoring and giving a result.

//This function checks the correctness of a catched object.
function EDAGAMESHACheck(id) {

	if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesShapes[0].src &&
        document.getElementById('EDAGAMENumber').innerHTML == '0') {
			   
				if (document.getElementById('EDAGAMEScore').innerHTML == '19') {
				   
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEEngineReset();
					EDAGAMESHAScore();
					
				}
				   
				else {
					
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEVoiceReset();
					EDAGAMESHAYes(id);
					EDAGAMESHAScore();
					EDAGAMEEngineRefresh();
					
				};
				
	}
				
				
	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesShapes[1].src &&
             document.getElementById('EDAGAMENumber').innerHTML == '1') {
			   
				if (document.getElementById('EDAGAMEScore').innerHTML == '19') {
				   
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEEngineReset();
					EDAGAMESHAScore();
					
				}
				   
				else {
					
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEVoiceReset();
					EDAGAMESHAYes(id);
					EDAGAMESHAScore();
					EDAGAMEEngineRefresh();
					
				};
				
	}

	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesShapes[2].src &&
             document.getElementById('EDAGAMENumber').innerHTML == '2') {
			   
				if (document.getElementById('EDAGAMEScore').innerHTML == '19') {
				   
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEEngineReset();
					EDAGAMESHAScore();
					
				}
				   
				else {
					
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEVoiceReset();
					EDAGAMESHAYes(id);
					EDAGAMESHAScore();
					EDAGAMEEngineRefresh();
					
				};
				
	}
				
	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesShapes[3].src &&
             document.getElementById('EDAGAMENumber').innerHTML == '3') {
			   
				if (document.getElementById('EDAGAMEScore').innerHTML == '19') {
				   
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEEngineReset();
					EDAGAMESHAScore();
					
				}
				   
				else {
					
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEVoiceReset();
					EDAGAMESHAYes(id);
					EDAGAMESHAScore();
					EDAGAMEEngineRefresh();
					
				};
				
	}

	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesShapes[4].src &&
             document.getElementById('EDAGAMENumber').innerHTML == '4') {
			   
				if (document.getElementById('EDAGAMEScore').innerHTML == '19') {
				   
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEEngineReset();
					EDAGAMESHAScore();
					
				}
				   
				else {
					
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEVoiceReset();
					EDAGAMESHAYes(id);
					EDAGAMESHAScore();
					EDAGAMEEngineRefresh();
					
				};
				
	}
				
	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesShapes[5].src &&
             document.getElementById('EDAGAMENumber').innerHTML == '5') {
			   
				if (document.getElementById('EDAGAMEScore').innerHTML == '19') {
				   
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEEngineReset();
					EDAGAMESHAScore();
					
				}
				   
				else {
					
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEVoiceReset();
					EDAGAMESHAYes(id);
					EDAGAMESHAScore();
					EDAGAMEEngineRefresh();
					
				};
				
	}
				
	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesShapes[6].src &&
             document.getElementById('EDAGAMENumber').innerHTML == '6') {
			   
				if (document.getElementById('EDAGAMEScore').innerHTML == '19') {
				   
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEEngineReset();
					EDAGAMESHAScore();
					
				}
				   
				else {
					
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEVoiceReset();
					EDAGAMESHAYes(id);
					EDAGAMESHAScore();
					EDAGAMEEngineRefresh();
					
				};
				
	}
				
	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesShapes[7].src &&
             document.getElementById('EDAGAMENumber').innerHTML == '7') {
			   
				if (document.getElementById('EDAGAMEScore').innerHTML == '19') {
				   
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEEngineReset();
					EDAGAMESHAScore();
					
				}
				   
				else {
					
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEVoiceReset();
					EDAGAMESHAYes(id);
					EDAGAMESHAScore();
					EDAGAMEEngineRefresh();
					
				};
				
	}
				
	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesShapes[8].src &&
             document.getElementById('EDAGAMENumber').innerHTML == '8') {
			   
				if (document.getElementById('EDAGAMEScore').innerHTML == '19') {
				   
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEEngineReset();
					EDAGAMESHAScore();
					
				}
				   
				else {
					
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEVoiceReset();
					EDAGAMESHAYes(id);
					EDAGAMESHAScore();
					EDAGAMEEngineRefresh();
					
				};
				
	}
				
	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesShapes[9].src &&
             document.getElementById('EDAGAMENumber').innerHTML == '9') {
			   
				if (document.getElementById('EDAGAMEScore').innerHTML == '19') {
				   
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEEngineReset();
					EDAGAMESHAScore();
					
				}
				   
				else {
					
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEVoiceReset();
					EDAGAMESHAYes(id);
					EDAGAMESHAScore();
					EDAGAMEEngineRefresh();
					
				};
				
	}

	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesShapes[10].src &&
             document.getElementById('EDAGAMENumber').innerHTML == '10') {
			   
				if (document.getElementById('EDAGAMEScore').innerHTML == '19') {
				   
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEEngineReset();
					EDAGAMESHAScore();
					
				}
				   
				else {
					
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEVoiceReset();
					EDAGAMESHAYes(id);
					EDAGAMESHAScore();
					EDAGAMEEngineRefresh();
					
				};
				
	}

	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesShapes[11].src &&
             document.getElementById('EDAGAMENumber').innerHTML == '11') {
			   
				if (document.getElementById('EDAGAMEScore').innerHTML == '19') {
				   
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEEngineReset();
					EDAGAMESHAScore();
					
				}
				   
				else {
					
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEVoiceReset();
					EDAGAMESHAYes(id);
					EDAGAMESHAScore();
					EDAGAMEEngineRefresh();
					
				};
				
	}

	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesShapes[12].src &&
             document.getElementById('EDAGAMENumber').innerHTML == '12') {
			   
				if (document.getElementById('EDAGAMEScore').innerHTML == '19') {
				   
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEEngineReset();
					EDAGAMESHAScore();
					
				}
				   
				else {
					
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEVoiceReset();
					EDAGAMESHAYes(id);
					EDAGAMESHAScore();
					EDAGAMEEngineRefresh();
					
				};
				
	}

	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesShapes[13].src &&
             document.getElementById('EDAGAMENumber').innerHTML == '13') {
			   
				if (document.getElementById('EDAGAMEScore').innerHTML == '19') {
				   
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEEngineReset();
					EDAGAMESHAScore();
					
				}
				   
				else {
					
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEVoiceReset();
					EDAGAMESHAYes(id);
					EDAGAMESHAScore();
					EDAGAMEEngineRefresh();
					
				};
				
	}

	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesShapes[14].src &&
             document.getElementById('EDAGAMENumber').innerHTML == '14') {
			   
				if (document.getElementById('EDAGAMEScore').innerHTML == '19') {
				   
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEEngineReset();
					EDAGAMESHAScore();
					
				}
				   
				else {
					
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEVoiceReset();
					EDAGAMESHAYes(id);
					EDAGAMESHAScore();
					EDAGAMEEngineRefresh();
					
				};
				
	}

	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesShapes[15].src &&
             document.getElementById('EDAGAMENumber').innerHTML == '15') {
			   
				if (document.getElementById('EDAGAMEScore').innerHTML == '19') {
				   
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEEngineReset();
					EDAGAMESHAScore();
					
				}
				   
				else {
					
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEVoiceReset();
					EDAGAMESHAYes(id);
					EDAGAMESHAScore();
					EDAGAMEEngineRefresh();
					
				};
				
	}

	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesShapes[16].src &&
             document.getElementById('EDAGAMENumber').innerHTML == '16') {
			   
				if (document.getElementById('EDAGAMEScore').innerHTML == '19') {
				   
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEEngineReset();
					EDAGAMESHAScore();
					
				}
				   
				else {
					
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEVoiceReset();
					EDAGAMESHAYes(id);
					EDAGAMESHAScore();
					EDAGAMEEngineRefresh();
					
				};
				
	}

	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesShapes[17].src &&
             document.getElementById('EDAGAMENumber').innerHTML == '17') {
			   
				if (document.getElementById('EDAGAMEScore').innerHTML == '19') {
				   
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEEngineReset();
					EDAGAMESHAScore();
					
				}
				   
				else {
					
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEVoiceReset();
					EDAGAMESHAYes(id);
					EDAGAMESHAScore();
					EDAGAMEEngineRefresh();
					
				};
				
	}

	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesShapes[18].src &&
             document.getElementById('EDAGAMENumber').innerHTML == '18') {
			   
				if (document.getElementById('EDAGAMEScore').innerHTML == '19') {
				   
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEEngineReset();
					EDAGAMESHAScore();
					
				}
				   
				else {
					
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEVoiceReset();
					EDAGAMESHAYes(id);
					EDAGAMESHAScore();
					EDAGAMEEngineRefresh();
					
				};
				
	}

	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesShapes[19].src &&
             document.getElementById('EDAGAMENumber').innerHTML == '19') {
			   
				if (document.getElementById('EDAGAMEScore').innerHTML == '19') {
				   
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEEngineReset();
					EDAGAMESHAScore();
					
				}
				   
				else {
					
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEVoiceReset();
					EDAGAMESHAYes(id);
					EDAGAMESHAScore();
					EDAGAMEEngineRefresh();
					
				};
				
	}				

	else {EDAGAMEVoiceReset(); EDAGAMESHANo();};	

};

var EDAGAMECountDownToNextDabingSHA;

//This function checks a score and changes a task audio.
function EDAGAMESHAScore() {

	$('#EDAGAMETask').animate({'background-color': '#FFD600'}, 250);
	$('#EDAGAMETask').delay(250).animate({'background-color': '#F7F5BA'}, 250);

	var Score = document.getElementById('EDAGAMEScore').innerHTML; Score++;
	document.getElementById('EDAGAMEScore').innerHTML = Score;

	if (Score == '1') {
			
			document.getElementById('EDAGAMENumber').innerHTML = EDAGAMEBSHA;
			$('#EDAGAMEStar1').attr({'src': EDAGAMEImagesOther[3].src});
			EDAGAMECountDownToNextDabingSHA = setTimeout(function() {
				
				EDAGAMESHATimer();
				EDAGAMEVoiceReset();
				EDAGAMEVoicesShapesTask[EDAGAMEBSHA].play();
				
			}, 2400);
				
	}
				
	else if (Score == '2') {
			
			document.getElementById('EDAGAMENumber').innerHTML = EDAGAMECSHA;
			$('#EDAGAMEStar2').attr({'src': EDAGAMEImagesOther[3].src});
			EDAGAMECountDownToNextDabingSHA = setTimeout(function() {
				
				EDAGAMESHATimer();
				EDAGAMEVoiceReset();
				EDAGAMEVoicesShapesTask[EDAGAMECSHA].play();
				
			}, 2400);
				
	}
				
	else if (Score == '3') {
			
			document.getElementById('EDAGAMENumber').innerHTML = EDAGAMEDSHA;
			$('#EDAGAMEStar3').attr({'src': EDAGAMEImagesOther[3].src});
			EDAGAMECountDownToNextDabingSHA = setTimeout(function() {
				
				EDAGAMESHATimer();
				EDAGAMEVoiceReset();
				EDAGAMEVoicesShapesTask[EDAGAMEDSHA].play();
				
			}, 2400);
				
	}
				
	else if (Score == '4') {
			
			document.getElementById('EDAGAMENumber').innerHTML = EDAGAMEESHA;
			$('#EDAGAMEStar4').attr({'src': EDAGAMEImagesOther[3].src});
			EDAGAMECountDownToNextDabingSHA = setTimeout(function() {
				
				EDAGAMESHATimer();
				EDAGAMEVoiceReset();
				EDAGAMEVoicesShapesTask[EDAGAMEESHA].play();
				
			}, 2400);
				
	}
				
	else if (Score == '5') {
			
			document.getElementById('EDAGAMENumber').innerHTML = EDAGAMEFSHA;
			$('#EDAGAMEStar5').attr({'src': EDAGAMEImagesOther[3].src});
			EDAGAMECountDownToNextDabingSHA = setTimeout(function() {
				
				EDAGAMESHATimer();
				EDAGAMEVoiceReset();
				EDAGAMEVoicesShapesTask[EDAGAMEFSHA].play();
				
			}, 2400);
				
	}
				
	else if (Score == '6') {
			
			document.getElementById('EDAGAMENumber').innerHTML = EDAGAMEGSHA;
			$('#EDAGAMEStar6').attr({'src': EDAGAMEImagesOther[3].src});
			EDAGAMECountDownToNextDabingSHA = setTimeout(function() {
				
				EDAGAMESHATimer();
				EDAGAMEVoiceReset();
				EDAGAMEVoicesShapesTask[EDAGAMEGSHA].play();
				
			}, 2400);
				
	}
				
	else if (Score == '7') {
			
			document.getElementById('EDAGAMENumber').innerHTML = EDAGAMEHSHA;
			$('#EDAGAMEStar7').attr({'src': EDAGAMEImagesOther[3].src});
			EDAGAMECountDownToNextDabingSHA = setTimeout(function() {
				
				EDAGAMESHATimer();
				EDAGAMEVoiceReset();
				EDAGAMEVoicesShapesTask[EDAGAMEHSHA].play();
				
			}, 2400);
				
	}
				
	else if (Score == '8') {
			
			document.getElementById('EDAGAMENumber').innerHTML = EDAGAMEISHA;
			$('#EDAGAMEStar8').attr({'src': EDAGAMEImagesOther[3].src});
			EDAGAMECountDownToNextDabingSHA = setTimeout(function() {
				
				EDAGAMESHATimer();
				EDAGAMEVoiceReset();
				EDAGAMEVoicesShapesTask[EDAGAMEISHA].play();
				
			}, 2400);
				
	}
				
	else if (Score == '9') {
			
			document.getElementById('EDAGAMENumber').innerHTML = EDAGAMEJSHA;
			$('#EDAGAMEStar9').attr({'src': EDAGAMEImagesOther[3].src});
			EDAGAMECountDownToNextDabingSHA = setTimeout(function() {
				
				EDAGAMESHATimer();
				EDAGAMEVoiceReset();
				EDAGAMEVoicesShapesTask[EDAGAMEJSHA].play();
				
			}, 2400);
				
	}

	else if (Score == '10') {
			
			document.getElementById('EDAGAMENumber').innerHTML = EDAGAMEKSHA;
			$('#EDAGAMEStar10').attr({'src': EDAGAMEImagesOther[3].src});
			EDAGAMECountDownToNextDabingSHA = setTimeout(function() {
				
				EDAGAMESHATimer();
				EDAGAMEVoiceReset();
				EDAGAMEVoicesShapesTask[EDAGAMEKSHA].play();
				
			}, 2400);
				
	}

	else if (Score == '11') {
			
			document.getElementById('EDAGAMENumber').innerHTML = EDAGAMELSHA;
			$('#EDAGAMEStar11').attr({'src': EDAGAMEImagesOther[3].src});
			EDAGAMECountDownToNextDabingSHA = setTimeout(function() {
				
				EDAGAMESHATimer();
				EDAGAMEVoiceReset();
				EDAGAMEVoicesShapesTask[EDAGAMELSHA].play();
				
			}, 2400);
				
	}

	else if (Score == '12') {
			
			document.getElementById('EDAGAMENumber').innerHTML = EDAGAMEMSHA;
			$('#EDAGAMEStar12').attr({'src': EDAGAMEImagesOther[3].src});
			EDAGAMECountDownToNextDabingSHA = setTimeout(function() {
				
				EDAGAMESHATimer();
				EDAGAMEVoiceReset();
				EDAGAMEVoicesShapesTask[EDAGAMEMSHA].play();
				
			}, 2400);
				
	}

	else if (Score == '13') {
			
			document.getElementById('EDAGAMENumber').innerHTML = EDAGAMENSHA;
			$('#EDAGAMEStar13').attr({'src': EDAGAMEImagesOther[3].src});
			EDAGAMECountDownToNextDabingSHA = setTimeout(function() {
				
				EDAGAMESHATimer();
				EDAGAMEVoiceReset();
				EDAGAMEVoicesShapesTask[EDAGAMENSHA].play();
				
			}, 2400);
				
	}

	else if (Score == '14') {
			
			document.getElementById('EDAGAMENumber').innerHTML = EDAGAMEOSHA;
			$('#EDAGAMEStar14').attr({'src': EDAGAMEImagesOther[3].src});
			EDAGAMECountDownToNextDabingSHA = setTimeout(function() {
				
				EDAGAMESHATimer();
				EDAGAMEVoiceReset();
				EDAGAMEVoicesShapesTask[EDAGAMEOSHA].play();
				
			}, 2400);
				
	}		

	else if (Score == '15') {
			
			document.getElementById('EDAGAMENumber').innerHTML = EDAGAMEPSHA;
			$('#EDAGAMEStar15').attr({'src': EDAGAMEImagesOther[3].src});
			EDAGAMECountDownToNextDabingSHA = setTimeout(function() {
				
				EDAGAMESHATimer();
				EDAGAMEVoiceReset();
				EDAGAMEVoicesShapesTask[EDAGAMEPSHA].play();
				
			}, 2400);
				
	}		

	else if (Score == '16') {
			
			document.getElementById('EDAGAMENumber').innerHTML = EDAGAMEQSHA;
			$('#EDAGAMEStar16').attr({'src': EDAGAMEImagesOther[3].src});
			EDAGAMECountDownToNextDabingSHA = setTimeout(function() {
				
				EDAGAMESHATimer();
				EDAGAMEVoiceReset();
				EDAGAMEVoicesShapesTask[EDAGAMEQSHA].play();
				
			}, 2400);
				
	}		

	else if (Score == '17') {
			
			document.getElementById('EDAGAMENumber').innerHTML = EDAGAMERSHA;
			$('#EDAGAMEStar17').attr({'src': EDAGAMEImagesOther[3].src});
			EDAGAMECountDownToNextDabingSHA = setTimeout(function() {
				
				EDAGAMESHATimer();
				EDAGAMEVoiceReset();
				EDAGAMEVoicesShapesTask[EDAGAMERSHA].play();
				
			}, 2400);
				
	}		

	else if (Score == '18') {
			
			document.getElementById('EDAGAMENumber').innerHTML = EDAGAMESSHA;
			$('#EDAGAMEStar18').attr({'src': EDAGAMEImagesOther[3].src});
			EDAGAMECountDownToNextDabingSHA = setTimeout(function() {
				
				EDAGAMESHATimer();
				EDAGAMEVoiceReset();
				EDAGAMEVoicesShapesTask[EDAGAMESSHA].play();
				
			}, 2400);
				
	}		

	else if (Score == '19') {
			
			document.getElementById('EDAGAMENumber').innerHTML = EDAGAMETSHA;
			$('#EDAGAMEStar19').attr({'src': EDAGAMEImagesOther[3].src});
			EDAGAMECountDownToNextDabingSHA = setTimeout(function() {
				
				EDAGAMESHATimer();
				EDAGAMEVoiceReset();
				EDAGAMEVoicesShapesTask[EDAGAMETSHA].play();
				
			}, 2400);
				
	}		

	else if (Score == '20') {
			
			$('#EDAGAMEChecker').css({'display': 'none'});
			$('#EDAGAMEStar20').attr({'src': EDAGAMEImagesOther[3].src});
			
			$('#EDAGAMEBackground').fadeIn(250);
			$('#EDAGAMECongratulation').fadeIn(250);
			
			EDAGAMEVoiceReset(); EDAGAMEVoicesMainBasic[6].play();
			
			$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
			$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
			EDAGAMEVoicesMainBasic[6].onended = function() {
				
				$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
				$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				
			};

	};

};

//This function controls all icons including Eda during the task audio plays.
function EDAGAMESHATimer() {

	if (document.getElementById('EDAGAMENumber').innerHTML == '0')   {
		   
			$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
			$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
			EDAGAMEVoicesShapesTask[0].onended = function() {
				
				$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
				$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				$('#EDAGAMERepeat').attr({'src': EDAGAMEImagesOther[7].src}).fadeIn();
				$('#EDAGAMERepeat2').attr({'src': EDAGAMEImagesOther[10].src}).fadeIn();
				
			};
			
	}

	else if (document.getElementById('EDAGAMENumber').innerHTML == '1')   {
		   
			$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
			$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
			EDAGAMEVoicesShapesTask[1].onended = function() {
				
				$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
				$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				$('#EDAGAMERepeat').fadeIn();
				$('#EDAGAMERepeat').attr({'src': EDAGAMEImagesOther[7].src});
				$('#EDAGAMERepeat2').attr({'src': EDAGAMEImagesOther[10].src}).fadeIn();
				
			};
			
	}
			
	else if (document.getElementById('EDAGAMENumber').innerHTML == '2')   {
		   
			$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
			$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
			EDAGAMEVoicesShapesTask[2].onended = function() {
				
				$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
				$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				$('#EDAGAMERepeat').fadeIn();
				$('#EDAGAMERepeat').attr({'src': EDAGAMEImagesOther[7].src});
				$('#EDAGAMERepeat2').attr({'src': EDAGAMEImagesOther[10].src}).fadeIn();
				
			};
			
	}
			
	else if (document.getElementById('EDAGAMENumber').innerHTML == '3')   {
		   
			$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
			$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
			EDAGAMEVoicesShapesTask[3].onended = function() {
				
				$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
				$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				$('#EDAGAMERepeat').fadeIn();
				$('#EDAGAMERepeat').attr({'src': EDAGAMEImagesOther[7].src});
				$('#EDAGAMERepeat2').attr({'src': EDAGAMEImagesOther[10].src}).fadeIn();
				
			};
			
	}
			
	else if (document.getElementById('EDAGAMENumber').innerHTML == '4')   {
		   
			$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
			$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
			EDAGAMEVoicesShapesTask[4].onended = function() {
				
				$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
				$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				$('#EDAGAMERepeat').fadeIn();
				$('#EDAGAMERepeat').attr({'src': EDAGAMEImagesOther[7].src});
				$('#EDAGAMERepeat2').attr({'src': EDAGAMEImagesOther[10].src}).fadeIn();
				
			};
			
	}
			
	else if (document.getElementById('EDAGAMENumber').innerHTML == '5')   {
		   
			$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
			$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
			EDAGAMEVoicesShapesTask[5].onended = function() {
				
				$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
				$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				$('#EDAGAMERepeat').fadeIn();
				$('#EDAGAMERepeat').attr({'src': EDAGAMEImagesOther[7].src});
				$('#EDAGAMERepeat2').attr({'src': EDAGAMEImagesOther[10].src}).fadeIn();
				
			};
			
	}
			
	else if (document.getElementById('EDAGAMENumber').innerHTML == '6')   {
		   
			$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
			$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
			EDAGAMEVoicesShapesTask[6].onended = function() {
				
				$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
				$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				$('#EDAGAMERepeat').fadeIn();
				$('#EDAGAMERepeat').attr({'src': EDAGAMEImagesOther[7].src});
				$('#EDAGAMERepeat2').attr({'src': EDAGAMEImagesOther[10].src}).fadeIn();
				
			};
			
	}
			
	else if (document.getElementById('EDAGAMENumber').innerHTML == '7')   {
		   
			$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
			$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
			EDAGAMEVoicesShapesTask[7].onended = function() {
				
				$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
				$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				$('#EDAGAMERepeat').fadeIn();
				$('#EDAGAMERepeat').attr({'src': EDAGAMEImagesOther[7].src});
				$('#EDAGAMERepeat2').attr({'src': EDAGAMEImagesOther[10].src}).fadeIn();
				
			};
			
	}
			
	else if (document.getElementById('EDAGAMENumber').innerHTML == '8')   {
		   
			$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
			$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
			EDAGAMEVoicesShapesTask[8].onended = function() {
				
				$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
				$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				$('#EDAGAMERepeat').fadeIn();
				$('#EDAGAMERepeat').attr({'src': EDAGAMEImagesOther[7].src});
				$('#EDAGAMERepeat2').attr({'src': EDAGAMEImagesOther[10].src}).fadeIn();
				
			};
			
	}
			
	else if (document.getElementById('EDAGAMENumber').innerHTML == '9')   {
		   
			$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
			$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
			EDAGAMEVoicesShapesTask[9].onended = function() {
				
				$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
				$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				$('#EDAGAMERepeat').fadeIn();
				$('#EDAGAMERepeat').attr({'src': EDAGAMEImagesOther[7].src});
				$('#EDAGAMERepeat2').attr({'src': EDAGAMEImagesOther[10].src}).fadeIn();
				
			};
			
	}
			
	else if (document.getElementById('EDAGAMENumber').innerHTML == '10')   {
		   
			$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
			$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
			EDAGAMEVoicesShapesTask[10].onended = function() {
				
				$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
				$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				$('#EDAGAMERepeat').fadeIn();
				$('#EDAGAMERepeat').attr({'src': EDAGAMEImagesOther[7].src});
				$('#EDAGAMERepeat2').attr({'src': EDAGAMEImagesOther[10].src}).fadeIn();
				
			};
			
	}
			
	else if (document.getElementById('EDAGAMENumber').innerHTML == '11')   {
		   
			$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
			$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
			EDAGAMEVoicesShapesTask[11].onended = function() {
				
				$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
				$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				$('#EDAGAMERepeat').fadeIn();
				$('#EDAGAMERepeat').attr({'src': EDAGAMEImagesOther[7].src});
				$('#EDAGAMERepeat2').attr({'src': EDAGAMEImagesOther[10].src}).fadeIn();
				
			};
			
	}
			
	else if (document.getElementById('EDAGAMENumber').innerHTML == '12')   {
		   
			$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
			$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
			EDAGAMEVoicesShapesTask[12].onended = function() {
				
				$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
				$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				$('#EDAGAMERepeat').fadeIn();
				$('#EDAGAMERepeat').attr({'src': EDAGAMEImagesOther[7].src});
				$('#EDAGAMERepeat2').attr({'src': EDAGAMEImagesOther[10].src}).fadeIn();
				
			};
			
	}
			
	else if (document.getElementById('EDAGAMENumber').innerHTML == '13')   {
		   
			$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
			$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
			EDAGAMEVoicesShapesTask[13].onended = function() {
				
				$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
				$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				$('#EDAGAMERepeat').fadeIn();
				$('#EDAGAMERepeat').attr({'src': EDAGAMEImagesOther[7].src});
				$('#EDAGAMERepeat2').attr({'src': EDAGAMEImagesOther[10].src}).fadeIn();
				
			};
			
	}
			
	else if (document.getElementById('EDAGAMENumber').innerHTML == '14')   {
		   
			$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
			$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
			EDAGAMEVoicesShapesTask[14].onended = function() {
				
				$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
				$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				$('#EDAGAMERepeat').fadeIn();
				$('#EDAGAMERepeat').attr({'src': EDAGAMEImagesOther[7].src});
				$('#EDAGAMERepeat2').attr({'src': EDAGAMEImagesOther[10].src}).fadeIn();
				
			};
			
	}
			
	else if (document.getElementById('EDAGAMENumber').innerHTML == '15')   {
		   
			$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
			$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
			EDAGAMEVoicesShapesTask[15].onended = function() {
				
				$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
				$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				$('#EDAGAMERepeat').fadeIn();
				$('#EDAGAMERepeat').attr({'src': EDAGAMEImagesOther[7].src});
				$('#EDAGAMERepeat2').attr({'src': EDAGAMEImagesOther[10].src}).fadeIn();
				
			};
			
	}
			
	else if (document.getElementById('EDAGAMENumber').innerHTML == '16')   {
		   
			$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
			$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
			EDAGAMEVoicesShapesTask[16].onended = function() {
				
				$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
				$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				$('#EDAGAMERepeat').fadeIn();
				$('#EDAGAMERepeat').attr({'src': EDAGAMEImagesOther[7].src});
				$('#EDAGAMERepeat2').attr({'src': EDAGAMEImagesOther[10].src}).fadeIn();
				
			};
			
	}
			
	else if (document.getElementById('EDAGAMENumber').innerHTML == '17')   {
			
			$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
			$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
			EDAGAMEVoicesShapesTask[17].onended = function() {
				
				$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
				$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				$('#EDAGAMERepeat').fadeIn();
				$('#EDAGAMERepeat').attr({'src': EDAGAMEImagesOther[7].src});
				$('#EDAGAMERepeat2').attr({'src': EDAGAMEImagesOther[10].src}).fadeIn();
				
			};
			
	}
			
	else if (document.getElementById('EDAGAMENumber').innerHTML == '18')   {
		   
			$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
			$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
			EDAGAMEVoicesShapesTask[18].onended = function() {
				
				$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
				$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				$('#EDAGAMERepeat').fadeIn();
				$('#EDAGAMERepeat').attr({'src': EDAGAMEImagesOther[7].src});
				$('#EDAGAMERepeat2').attr({'src': EDAGAMEImagesOther[10].src}).fadeIn();
				
			};
			
	}
			
	else if (document.getElementById('EDAGAMENumber').innerHTML == '19')   {
		   
			$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
			$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
			EDAGAMEVoicesShapesTask[19].onended = function() {
				
				$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
				$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				$('#EDAGAMERepeat').fadeIn();
				$('#EDAGAMERepeat').attr({'src': EDAGAMEImagesOther[7].src});
				$('#EDAGAMERepeat2').attr({'src': EDAGAMEImagesOther[10].src}).fadeIn();
				
			};
			
	};
 

};

var EDAGAMECOUNTDOWNSHAYes;

//This function makes Eda to express a consent.
function EDAGAMESHAYes(id) {

	if (document.getElementById('EDAGAMEChecker').src == EDAGAMEImagesOther[6].src ||
		document.getElementById('EDAGAMEChecker').src == EDAGAMEImagesOther[15].src) {return;}
	
	else {
		
		$('#EDAGAMEObject' + id).stop(true, true, true).fadeOut(0);
		$('#EDAGAMEChecker').css({'width': '120px', 'height': '120px'});
		$('#EDAGAMEChecker').attr({'src': EDAGAMEImagesOther[15].src})
							.fadeIn(25)
							.animate({'opacity': '1', 'top': '-=50px', 'width': '+=100px', 'height': '+=100px'});
        $('#EDAGAMEChecker').fadeOut(200).animate({'opacity': '0', 'top': '+=50px'});
		
		clearTimeout(EDAGAMECOUNTDOWNSHAYes);
		EDAGAMECOUNTDOWNSHAYes = setTimeout(function() {
			
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

var EDAGAMECOUNTDOWNSHANo;

//This function makes Eda to express an objection.
function EDAGAMESHANo() {

	if (document.getElementById('EDAGAMEChecker').src == EDAGAMEImagesOther[6].src ||
		document.getElementById('EDAGAMEChecker').src == EDAGAMEImagesOther[15].src) {return;}
		
	else {
		
		$('#EDAGAMEChecker').css({'width': '120px', 'height': '120px'});
        $('#EDAGAMEChecker').attr({'src': EDAGAMEImagesOther[6].src})
							.fadeIn(25)
							.animate({'opacity': '1', 'top': '-=50px', 'width': '+=100px', 'height': '+=100px'})
        $('#EDAGAMEChecker').fadeOut(200).animate({'opacity': '0', 'top': '+=50px'});
		
		clearTimeout(EDAGAMECOUNTDOWNSHANo);
		EDAGAMECOUNTDOWNSHANo = setTimeout(function() {
			
			$('#EDAGAMEChecker').css({'width': '-=100px', 'height': '-=100px'}).attr({'src': EDAGAMEImagesOther[13].src});
			
		}, 1400);
		
        EDAGAMENoAnim();
        EDAGAMEVoiceReset(); EDAGAMEVoicesMainBasic[9].play();  
	
	};

};