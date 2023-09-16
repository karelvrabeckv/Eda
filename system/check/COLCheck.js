//This file is used for checking catched objects in 'Colors' game, scoring and giving a result.

//This function checks the correctness of a catched object.
function EDAGAMECOLCheck(id) {

	if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesColors[0].src &&
        document.getElementById('EDAGAMEPoint').src == EDAGAMEImagesColors[0].src) {
			   
				if (document.getElementById('EDAGAMEScore').innerHTML == '10') {
				   
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEEngineReset();
					EDAGAMECOLScore();
					
				}
				   
				else {
					
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEVoiceReset();
					EDAGAMECOLYes(id);
					EDAGAMECOLScore();
					EDAGAMEEngineRefresh();
					  
				};
				
	}

	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesColors[1].src &&
             document.getElementById('EDAGAMEPoint').src == EDAGAMEImagesColors[1].src) {
				
				if (document.getElementById('EDAGAMEScore').innerHTML == '10') {
					
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEEngineReset();
					EDAGAMECOLScore();
					
				}
                
				else {
					
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEVoiceReset();
					EDAGAMECOLYes(id);
					EDAGAMECOLScore();
					EDAGAMEEngineRefresh();
					
				};
				
	}

	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesColors[2].src &&
             document.getElementById('EDAGAMEPoint').src == EDAGAMEImagesColors[2].src) {
				
				if (document.getElementById('EDAGAMEScore').innerHTML == '10') {
					
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEEngineReset();
					EDAGAMECOLScore();
					
				}
                
				else {
					
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEVoiceReset();
					EDAGAMECOLYes(id);
					EDAGAMECOLScore();
					EDAGAMEEngineRefresh();
					
				};
				
	}

	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesColors[3].src &&
             document.getElementById('EDAGAMEPoint').src == EDAGAMEImagesColors[3].src) {
				
				if (document.getElementById('EDAGAMEScore').innerHTML == '10') {
					
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEEngineReset();
					EDAGAMECOLScore();
					
				}
                
				else {
					
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEVoiceReset();
					EDAGAMECOLYes(id);
					EDAGAMECOLScore();
					EDAGAMEEngineRefresh();
					
				};
				
	}

	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesColors[4].src &&
             document.getElementById('EDAGAMEPoint').src == EDAGAMEImagesColors[4].src) {
				
				if (document.getElementById('EDAGAMEScore').innerHTML == '10') {
					
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEEngineReset();
					EDAGAMECOLScore();
					
				}
                                                                                    
				else {
					
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEVoiceReset();
					EDAGAMECOLYes(id);
					EDAGAMECOLScore();
					EDAGAMEEngineRefresh();
					
				};
				
	}

	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesColors[5].src &&
             document.getElementById('EDAGAMEPoint').src == EDAGAMEImagesColors[5].src) {
				
				if (document.getElementById('EDAGAMEScore').innerHTML == '10') {
					
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEEngineReset();
					EDAGAMECOLScore();
					
				}
                                                                                    
				else {
					
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEVoiceReset();
					EDAGAMECOLYes(id);
					EDAGAMECOLScore();
					EDAGAMEEngineRefresh();
					
				};
				
	}

	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesColors[6].src &&
             document.getElementById('EDAGAMEPoint').src == EDAGAMEImagesColors[6].src) {
				
				if (document.getElementById('EDAGAMEScore').innerHTML == '10') {
					
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEEngineReset();
					EDAGAMECOLScore();
					
				}
                                                                                    
				else {
					
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEVoiceReset();
					EDAGAMECOLYes(id);
					EDAGAMECOLScore();
					EDAGAMEEngineRefresh();
					
				};
				
	}

	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesColors[7].src &&
             document.getElementById('EDAGAMEPoint').src == EDAGAMEImagesColors[7].src) {
				
				if (document.getElementById('EDAGAMEScore').innerHTML == '10') {
					
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEEngineReset();
					EDAGAMECOLScore();
					
				}
                                                                                    
				else {
					
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEVoiceReset();
					EDAGAMECOLYes(id);
					EDAGAMECOLScore();
					EDAGAMEEngineRefresh();
					
				};
				
	}

	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesColors[8].src &&
             document.getElementById('EDAGAMEPoint').src == EDAGAMEImagesColors[8].src) {
				
				if (document.getElementById('EDAGAMEScore').innerHTML == '10') {
					
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEEngineReset();
					EDAGAMECOLScore();
					
				}
                                                                                    
				else {
					
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEVoiceReset();
					EDAGAMECOLYes(id);
					EDAGAMECOLScore();
					EDAGAMEEngineRefresh();
					
				};
				
	}

	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesColors[9].src &&
             document.getElementById('EDAGAMEPoint').src == EDAGAMEImagesColors[9].src) {
				
				if (document.getElementById('EDAGAMEScore').innerHTML == '10') {
					
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEEngineReset();
					EDAGAMECOLScore();
					
				}
                                                                                    
				else {
					
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEVoiceReset();
					EDAGAMECOLYes(id);
					EDAGAMECOLScore();
					EDAGAMEEngineRefresh();
					
				};
				
	}
				
	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesColors[10].src &&
             document.getElementById('EDAGAMEPoint').src == EDAGAMEImagesColors[10].src) {
				
				if (document.getElementById('EDAGAMEScore').innerHTML == '10') {
					
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEEngineReset();
					EDAGAMECOLScore();
					
				}
                                                                                    
				else {
					
					$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});
					clearTimeOutEngineCountDowns(id);
					EDAGAMEVoiceReset();
					EDAGAMECOLYes(id);
					EDAGAMECOLScore();
					EDAGAMEEngineRefresh();
					
				};
				
	}

	else {EDAGAMEVoiceReset(); EDAGAMECOLNo();};		

};

//This function checks a score and changes a task color.
function EDAGAMECOLScore() {

	$('#EDAGAMETask').animate({'background-color': '#FFD600'}, 250);
	$('#EDAGAMETask').delay(250).animate({'background-color': '#F7F5BA'}, 250);

	var Score = document.getElementById('EDAGAMEScore').innerHTML; Score++;
	document.getElementById('EDAGAMEScore').innerHTML = Score;

	if (Score == '1') {
			 
			$('#EDAGAMEPoint').attr({'src': EDAGAMEImagesColors[EDAGAMEBCOL].src});
			$('#EDAGAMEStar1').attr({'src': EDAGAMEImagesOther[3].src}); return;
			 
	}

	else if (Score == '2') {
		
			$('#EDAGAMEPoint').attr({'src': EDAGAMEImagesColors[EDAGAMECCOL].src});
			$('#EDAGAMEStar2').attr({'src': EDAGAMEImagesOther[3].src}); return;
		
	}
		
	else if (Score == '3') {
	   
			$('#EDAGAMEPoint').attr({'src': EDAGAMEImagesColors[EDAGAMEDCOL].src});
			$('#EDAGAMEStar3').attr({'src': EDAGAMEImagesOther[3].src}); return;
	   
	}
		
	else if (Score == '4') {
	   
			$('#EDAGAMEPoint').attr({'src': EDAGAMEImagesColors[EDAGAMEECOL].src});
			$('#EDAGAMEStar4').attr({'src': EDAGAMEImagesOther[3].src}); return;
	   
	}
		
	else if (Score == '5') {
	   
			$('#EDAGAMEPoint').attr({'src': EDAGAMEImagesColors[EDAGAMEFCOL].src});
			$('#EDAGAMEStar5').attr({'src': EDAGAMEImagesOther[3].src}); return;
	   
	}
		
	else if (Score == '6') {
	   
			$('#EDAGAMEPoint').attr({'src': EDAGAMEImagesColors[EDAGAMEGCOL].src});
			$('#EDAGAMEStar6').attr({'src': EDAGAMEImagesOther[3].src}); return;
	   
	}
		
	else if (Score == '7') {
	   
			$('#EDAGAMEPoint').attr({'src': EDAGAMEImagesColors[EDAGAMEHCOL].src});
			$('#EDAGAMEStar7').attr({'src': EDAGAMEImagesOther[3].src}); return;
	   
	}
		
	else if (Score == '8') {
	   
			$('#EDAGAMEPoint').attr({'src': EDAGAMEImagesColors[EDAGAMEICOL].src});
			$('#EDAGAMEStar8').attr({'src': EDAGAMEImagesOther[3].src}); return;
	   
	}
		
	else if (Score == '9') {
	   
			$('#EDAGAMEPoint').attr({'src': EDAGAMEImagesColors[EDAGAMEJCOL].src});
			$('#EDAGAMEStar9').attr({'src': EDAGAMEImagesOther[3].src}); return;
	   
	}
		
	else if (Score == '10') {
	   
			$('#EDAGAMEPoint').attr({'src': EDAGAMEImagesColors[EDAGAMEKCOL].src});
			$('#EDAGAMEStar10').attr({'src': EDAGAMEImagesOther[3].src}); return;
	   
	}
		
	else if (Score == '11') {
	   
			$('#EDAGAMEChecker').css({'display': 'none'});
			$('#EDAGAMEStar11').attr({'src': EDAGAMEImagesOther[3].src});
	 
			$('#EDAGAMEBackground').fadeIn(250);
			$('#EDAGAMECongratulation').fadeIn(250);
			
			EDAGAMEVoiceReset(); EDAGAMEVoicesMainBasic[3].play();

			$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
			$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});
			EDAGAMEVoicesMainBasic[3].onended = function() {
				
				$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
				$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				
			};
			
	};

};

var EDAGAMECOUNTDOWNCOLYes;

//This function makes Eda to express a consent.
function EDAGAMECOLYes(id) {

	if (document.getElementById('EDAGAMEChecker').src == EDAGAMEImagesOther[6].src ||
		document.getElementById('EDAGAMEChecker').src == EDAGAMEImagesOther[15].src) {return;}
	
	else {
		
		$('#EDAGAMEObject' + id).stop(true, true, true).fadeOut(0);
		$('#EDAGAMEChecker').css({'width': '120px', 'height': '120px'});		
        $('#EDAGAMEChecker').attr({'src': EDAGAMEImagesOther[15].src})
							.fadeIn(25)
							.animate({'opacity': '1', 'top': '-=50px', 'width': '+=100px', 'height': '+=100px'});
        $('#EDAGAMEChecker').fadeOut(200).animate({'opacity': '0', 'top': '+=50px'});
		
		clearTimeout(EDAGAMECOUNTDOWNCOLYes);
		EDAGAMECOUNTDOWNCOLYes = setTimeout(function() {
			
			$('#EDAGAMEChecker').css({'width': '-=100px', 'height': '-=100px'})
								.attr({'src': EDAGAMEImagesOther[13].src});
			
		}, 1400);

        EDAGAMEYesAnim();
		EDAGAMEVoiceReset(); EDAGAMEVoicesMainBasic[12].play();

        $('#EDAGAMERepeat').delay(300).fadeOut(250);
        $('#EDAGAMERepeat').delay(750).fadeIn(250);

	};

};

var EDAGAMECOUNTDOWNCOLNo;

//This function makes Eda to express an objection.
function EDAGAMECOLNo() {

	if (document.getElementById('EDAGAMEChecker').src == EDAGAMEImagesOther[6].src ||
		document.getElementById('EDAGAMEChecker').src == EDAGAMEImagesOther[15].src) {return;}
		
	else {

		$('#EDAGAMEChecker').css({'width': '120px', 'height': '120px'});
        $('#EDAGAMEChecker').attr({'src': EDAGAMEImagesOther[6].src})
							.fadeIn(25)
							.animate({'opacity': '1', 'top': '-=50px', 'width': '+=100px', 'height': '+=100px'})
        $('#EDAGAMEChecker').fadeOut(200).animate({'opacity': '0', 'top': '+=50px'});
		
		clearTimeout(EDAGAMECOUNTDOWNCOLNo);
		EDAGAMECOUNTDOWNCOLNo = setTimeout(function() {
			
			$('#EDAGAMEChecker').css({'width': '-=100px', 'height': '-=100px'})
								.attr({'src': EDAGAMEImagesOther[13].src});
			
		}, 1400);
		
        EDAGAMENoAnim();
        EDAGAMEVoiceReset(); EDAGAMEVoicesMainBasic[9].play();  
	
	};

};