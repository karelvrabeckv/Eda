//This file is used for checking catched objects in 'Pairs' game, scoring and giving a result.

//This function compares two places for catched objects.
function EDAGAMEPAICheck(id, EDAGAMEMaxPoint) {

	clearTimeOutEngineCountDowns(id);
	$('#EDAGAMEObject' + id).stop(true, true, true).css({'display': 'none'});

	var EDAGAMEMaxPoint = $('#EDAGAMEScoreFinal').html();

	if (document.getElementById('EDAGAMEPairsLeft').src == EDAGAMEImagesOther[13].src) {
		
		document.getElementById('EDAGAMEPairsLeft').src = document.getElementById('EDAGAMEObject' + id).src;
		
	}
		
	else {
		
		if (document.getElementById('EDAGAMEPairsLeft').src != EDAGAMEImagesOther[13].src &&
            document.getElementById('EDAGAMEPairsRight').src == EDAGAMEImagesOther[13].src &&
            document.getElementById('EDAGAMEPairsRight').style.backgroundColor != '#FB6464' &&
            document.getElementById('EDAGAMEPairsRight').style.backgroundColor != '#FFD600' &&
            document.getElementById('EDAGAMEEda').src == EDAGAMEAnimationsCyclic[0].src) {EDAGAMEPAIControl(id, EDAGAMEMaxPoint);}
			
        else {return;};
		
	};

};

//This function compares two catched objects.
function EDAGAMEPAIControl(id, EDAGAMEMaxPoint) {

	document.getElementById('EDAGAMEPairsRight').src = document.getElementById('EDAGAMEObject' + id).src;
	
	if (document.getElementById('EDAGAMEPairsLeft').src == document.getElementById('EDAGAMEPairsRight').src) {
		   
		if (document.getElementById('EDAGAMEScore').innerHTML == EDAGAMEMaxPoint - 1) {
			
            if ((document.getElementById('EDAGAMECatch1').src != document.getElementById('EDAGAMEObject' + id).src) &&
				(document.getElementById('EDAGAMECatch2').src != document.getElementById('EDAGAMEObject' + id).src) &&
				(document.getElementById('EDAGAMECatch3').src != document.getElementById('EDAGAMEObject' + id).src) &&
				(document.getElementById('EDAGAMECatch4').src != document.getElementById('EDAGAMEObject' + id).src) &&
				(document.getElementById('EDAGAMECatch5').src != document.getElementById('EDAGAMEObject' + id).src) &&
				(document.getElementById('EDAGAMECatch6').src != document.getElementById('EDAGAMEObject' + id).src) &&
				(document.getElementById('EDAGAMECatch7').src != document.getElementById('EDAGAMEObject' + id).src) &&
				(document.getElementById('EDAGAMECatch8').src != document.getElementById('EDAGAMEObject' + id).src) &&
				(document.getElementById('EDAGAMECatch9').src != document.getElementById('EDAGAMEObject' + id).src) &&
				(document.getElementById('EDAGAMECatch10').src != document.getElementById('EDAGAMEObject' + id).src) &&
				(document.getElementById('EDAGAMECatch11').src != document.getElementById('EDAGAMEObject' + id).src) &&
				(document.getElementById('EDAGAMECatch12').src != document.getElementById('EDAGAMEObject' + id).src) &&
				(document.getElementById('EDAGAMECatch13').src != document.getElementById('EDAGAMEObject' + id).src) &&
				(document.getElementById('EDAGAMECatch14').src != document.getElementById('EDAGAMEObject' + id).src) &&
				(document.getElementById('EDAGAMECatch15').src != document.getElementById('EDAGAMEObject' + id).src) &&
				(document.getElementById('EDAGAMECatch16').src != document.getElementById('EDAGAMEObject' + id).src) &&
				(document.getElementById('EDAGAMECatch17').src != document.getElementById('EDAGAMEObject' + id).src) &&
				(document.getElementById('EDAGAMECatch18').src != document.getElementById('EDAGAMEObject' + id).src) &&
				(document.getElementById('EDAGAMECatch19').src != document.getElementById('EDAGAMEObject' + id).src) &&
				(document.getElementById('EDAGAMECatch20').src == EDAGAMEImagesOther[13].src)) {
				   
				   EDAGAMEVoiceReset(); EDAGAMEPAICatch(id, EDAGAMEMaxPoint);
				   
			}		
			
			else {EDAGAMEVoiceReset(); EDAGAMEPAICatch(id, EDAGAMEMaxPoint); EDAGAMEPAIYes(id); EDAGAMEEngineRefresh();};	
			
		}
		
		else {EDAGAMEVoiceReset(); EDAGAMEPAICatch(id, EDAGAMEMaxPoint); EDAGAMEPAIYes(id); EDAGAMEEngineRefresh();};
		   
	}
	
	else {EDAGAMEVoiceReset(); EDAGAMEPAINo(id); EDAGAMEEngineRefresh();};

};

//This function compares a catched pair to pairs that have already been catched.
function EDAGAMEPAICatch(id, EDAGAMEMaxPoint) {

	if (document.getElementById('EDAGAMECatch1').src == EDAGAMEImagesOther[13].src) {
			
				document.getElementById('EDAGAMEStar1').src = EDAGAMEImagesOther[3].src;
				document.getElementById('EDAGAMECatch1').src = document.getElementById('EDAGAMEObject' + id).src;
				EDAGAMEPAIScore(EDAGAMEMaxPoint);
			
	}

	else if ((document.getElementById('EDAGAMECatch1').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch1').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch2').src == EDAGAMEImagesOther[13].src)) {
				   
				document.getElementById('EDAGAMEStar2').src = EDAGAMEImagesOther[3].src;
				document.getElementById('EDAGAMECatch2').src = document.getElementById('EDAGAMEObject' + id).src;
				EDAGAMEPAIScore(EDAGAMEMaxPoint);
			
	}

	else if ((document.getElementById('EDAGAMECatch1').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch2').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch1').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch2').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch3').src == EDAGAMEImagesOther[13].src)) {
			   
				document.getElementById('EDAGAMEStar3').src = EDAGAMEImagesOther[3].src;
                document.getElementById('EDAGAMECatch3').src = document.getElementById('EDAGAMEObject' + id).src;
                EDAGAMEPAIScore(EDAGAMEMaxPoint);
				
	}

	else if ((document.getElementById('EDAGAMECatch1').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch2').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch3').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch1').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch2').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch3').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch4').src == EDAGAMEImagesOther[13].src)) {
				
				document.getElementById('EDAGAMEStar4').src = EDAGAMEImagesOther[3].src;
                document.getElementById('EDAGAMECatch4').src = document.getElementById('EDAGAMEObject' + id).src;
                EDAGAMEPAIScore(EDAGAMEMaxPoint);
				
	}

	else if ((document.getElementById('EDAGAMECatch1').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch2').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch3').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch4').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch1').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch2').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch3').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch4').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch5').src == EDAGAMEImagesOther[13].src)) {
				
				document.getElementById('EDAGAMEStar5').src = EDAGAMEImagesOther[3].src;
                document.getElementById('EDAGAMECatch5').src = document.getElementById('EDAGAMEObject' + id).src;
                EDAGAMEPAIScore(EDAGAMEMaxPoint);
				
	}

	else if ((document.getElementById('EDAGAMECatch1').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch2').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch3').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch4').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch5').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch1').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch2').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch3').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch4').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch5').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch6').src == EDAGAMEImagesOther[13].src)) {
				
				document.getElementById('EDAGAMEStar6').src = EDAGAMEImagesOther[3].src;
                document.getElementById('EDAGAMECatch6').src = document.getElementById('EDAGAMEObject' + id).src;
                EDAGAMEPAIScore(EDAGAMEMaxPoint);
				
	}

	else if ((document.getElementById('EDAGAMECatch1').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch2').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch3').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch4').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch5').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch6').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch1').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch2').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch3').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch4').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch5').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch6').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch7').src == EDAGAMEImagesOther[13].src)) {
				
				document.getElementById('EDAGAMEStar7').src = EDAGAMEImagesOther[3].src;
                document.getElementById('EDAGAMECatch7').src = document.getElementById('EDAGAMEObject' + id).src;
                EDAGAMEPAIScore(EDAGAMEMaxPoint);
				
	}

	else if ((document.getElementById('EDAGAMECatch1').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch2').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch3').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch4').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch5').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch6').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch7').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch1').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch2').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch3').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch4').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch5').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch6').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch7').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch8').src == EDAGAMEImagesOther[13].src)) {
				
				document.getElementById('EDAGAMEStar8').src = EDAGAMEImagesOther[3].src;
                document.getElementById('EDAGAMECatch8').src = document.getElementById('EDAGAMEObject' + id).src;
                EDAGAMEPAIScore(EDAGAMEMaxPoint);
				
	}

	else if ((document.getElementById('EDAGAMECatch1').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch2').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch3').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch4').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch5').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch6').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch7').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch8').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch1').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch2').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch3').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch4').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch5').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch6').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch7').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch8').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch9').src == EDAGAMEImagesOther[13].src)) {
				
				document.getElementById('EDAGAMEStar9').src = EDAGAMEImagesOther[3].src;
                document.getElementById('EDAGAMECatch9').src = document.getElementById('EDAGAMEObject' + id).src;
                EDAGAMEPAIScore(EDAGAMEMaxPoint);
				
	}

	else if ((document.getElementById('EDAGAMECatch1').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch2').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch3').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch4').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch5').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch6').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch7').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch8').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch9').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch1').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch2').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch3').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch4').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch5').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch6').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch7').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch8').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch9').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch10').src == EDAGAMEImagesOther[13].src)) {
				
				document.getElementById('EDAGAMEStar10').src = EDAGAMEImagesOther[3].src;
                document.getElementById('EDAGAMECatch10').src = document.getElementById('EDAGAMEObject' + id).src;
                EDAGAMEPAIScore(EDAGAMEMaxPoint);
				
	}
				
	else if ((document.getElementById('EDAGAMECatch1').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch2').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch3').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch4').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch5').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch6').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch7').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch8').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch9').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch10').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch1').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch2').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch3').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch4').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch5').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch6').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch7').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch8').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch9').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch10').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch11').src == EDAGAMEImagesOther[13].src)) {
				
				document.getElementById('EDAGAMEStar11').src = EDAGAMEImagesOther[3].src;
                document.getElementById('EDAGAMECatch11').src = document.getElementById('EDAGAMEObject' + id).src;
                EDAGAMEPAIScore(EDAGAMEMaxPoint);
				
	}

	else if ((document.getElementById('EDAGAMECatch1').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch2').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch3').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch4').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch5').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch6').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch7').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch8').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch9').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch10').src != EDAGAMEImagesOther[13].src) &&
		     (document.getElementById('EDAGAMECatch11').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch1').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch2').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch3').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch4').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch5').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch6').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch7').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch8').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch9').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch10').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch11').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch12').src == EDAGAMEImagesOther[13].src)) {
				
				document.getElementById('EDAGAMEStar12').src = EDAGAMEImagesOther[3].src;
                document.getElementById('EDAGAMECatch12').src = document.getElementById('EDAGAMEObject' + id).src;
                EDAGAMEPAIScore(EDAGAMEMaxPoint);
				
	}
				
	else if ((document.getElementById('EDAGAMECatch1').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch2').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch3').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch4').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch5').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch6').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch7').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch8').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch9').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch10').src != EDAGAMEImagesOther[13].src) &&
			 (document.getElementById('EDAGAMECatch11').src != EDAGAMEImagesOther[13].src) &&
			 (document.getElementById('EDAGAMECatch12').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch1').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch2').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch3').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch4').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch5').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch6').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch7').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch8').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch9').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch10').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch11').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch12').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch13').src == EDAGAMEImagesOther[13].src)) {
				
				document.getElementById('EDAGAMEStar13').src = EDAGAMEImagesOther[3].src;
                document.getElementById('EDAGAMECatch13').src = document.getElementById('EDAGAMEObject' + id).src;
                EDAGAMEPAIScore(EDAGAMEMaxPoint);
				
	}
				
	else if ((document.getElementById('EDAGAMECatch1').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch2').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch3').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch4').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch5').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch6').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch7').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch8').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch9').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch10').src != EDAGAMEImagesOther[13].src) &&
			 (document.getElementById('EDAGAMECatch11').src != EDAGAMEImagesOther[13].src) &&
			 (document.getElementById('EDAGAMECatch12').src != EDAGAMEImagesOther[13].src) &&
			 (document.getElementById('EDAGAMECatch13').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch1').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch2').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch3').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch4').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch5').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch6').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch7').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch8').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch9').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch10').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch11').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch12').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch13').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch14').src == EDAGAMEImagesOther[13].src)) {
				
				document.getElementById('EDAGAMEStar14').src = EDAGAMEImagesOther[3].src;
                document.getElementById('EDAGAMECatch14').src = document.getElementById('EDAGAMEObject' + id).src;
                EDAGAMEPAIScore(EDAGAMEMaxPoint);
				
	}
				
	else if ((document.getElementById('EDAGAMECatch1').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch2').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch3').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch4').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch5').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch6').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch7').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch8').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch9').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch10').src != EDAGAMEImagesOther[13].src) &&
		     (document.getElementById('EDAGAMECatch11').src != EDAGAMEImagesOther[13].src) &&
		 	 (document.getElementById('EDAGAMECatch12').src != EDAGAMEImagesOther[13].src) &&
			 (document.getElementById('EDAGAMECatch13').src != EDAGAMEImagesOther[13].src) &&
			 (document.getElementById('EDAGAMECatch14').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch1').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch2').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch3').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch4').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch5').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch6').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch7').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch8').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch9').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch10').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch11').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch12').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch13').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch14').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch15').src == EDAGAMEImagesOther[13].src)) {
				
				document.getElementById('EDAGAMEStar15').src = EDAGAMEImagesOther[3].src;
                document.getElementById('EDAGAMECatch15').src = document.getElementById('EDAGAMEObject' + id).src;
                EDAGAMEPAIScore(EDAGAMEMaxPoint);
				
	}
				
	else if ((document.getElementById('EDAGAMECatch1').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch2').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch3').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch4').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch5').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch6').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch7').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch8').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch9').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch10').src != EDAGAMEImagesOther[13].src) &&
			 (document.getElementById('EDAGAMECatch11').src != EDAGAMEImagesOther[13].src) &&
		 	 (document.getElementById('EDAGAMECatch12').src != EDAGAMEImagesOther[13].src) &&
			 (document.getElementById('EDAGAMECatch13').src != EDAGAMEImagesOther[13].src) &&
			 (document.getElementById('EDAGAMECatch14').src != EDAGAMEImagesOther[13].src) &&
			 (document.getElementById('EDAGAMECatch15').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch1').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch2').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch3').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch4').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch5').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch6').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch7').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch8').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch9').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch10').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch11').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch12').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch13').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch14').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch15').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch16').src == EDAGAMEImagesOther[13].src)) {
				
				document.getElementById('EDAGAMEStar16').src = EDAGAMEImagesOther[3].src;
                document.getElementById('EDAGAMECatch16').src = document.getElementById('EDAGAMEObject' + id).src;
                EDAGAMEPAIScore(EDAGAMEMaxPoint);
				
	}
				
	else if ((document.getElementById('EDAGAMECatch1').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch2').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch3').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch4').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch5').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch6').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch7').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch8').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch9').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch10').src != EDAGAMEImagesOther[13].src) &&
			 (document.getElementById('EDAGAMECatch11').src != EDAGAMEImagesOther[13].src) &&
			 (document.getElementById('EDAGAMECatch12').src != EDAGAMEImagesOther[13].src) &&
			 (document.getElementById('EDAGAMECatch13').src != EDAGAMEImagesOther[13].src) &&
			 (document.getElementById('EDAGAMECatch14').src != EDAGAMEImagesOther[13].src) &&
			 (document.getElementById('EDAGAMECatch15').src != EDAGAMEImagesOther[13].src) &&
			 (document.getElementById('EDAGAMECatch16').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch1').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch2').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch3').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch4').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch5').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch6').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch7').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch8').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch9').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch10').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch11').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch12').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch13').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch14').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch15').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch16').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch17').src == EDAGAMEImagesOther[13].src)) {
				
				document.getElementById('EDAGAMEStar17').src = EDAGAMEImagesOther[3].src;
                document.getElementById('EDAGAMECatch17').src = document.getElementById('EDAGAMEObject' + id).src;
                EDAGAMEPAIScore(EDAGAMEMaxPoint);
				
	}
				
	else if ((document.getElementById('EDAGAMECatch1').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch2').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch3').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch4').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch5').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch6').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch7').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch8').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch9').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch10').src != EDAGAMEImagesOther[13].src) &&
			 (document.getElementById('EDAGAMECatch11').src != EDAGAMEImagesOther[13].src) &&
		     (document.getElementById('EDAGAMECatch12').src != EDAGAMEImagesOther[13].src) &&
			 (document.getElementById('EDAGAMECatch13').src != EDAGAMEImagesOther[13].src) &&
			 (document.getElementById('EDAGAMECatch14').src != EDAGAMEImagesOther[13].src) &&
			 (document.getElementById('EDAGAMECatch15').src != EDAGAMEImagesOther[13].src) &&
			 (document.getElementById('EDAGAMECatch16').src != EDAGAMEImagesOther[13].src) &&
			 (document.getElementById('EDAGAMECatch17').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch1').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch2').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch3').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch4').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch5').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch6').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch7').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch8').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch9').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch10').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch11').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch12').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch13').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch14').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch15').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch16').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch17').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch18').src == EDAGAMEImagesOther[13].src)) {
				
				document.getElementById('EDAGAMEStar18').src = EDAGAMEImagesOther[3].src;
                document.getElementById('EDAGAMECatch18').src = document.getElementById('EDAGAMEObject' + id).src;
                EDAGAMEPAIScore(EDAGAMEMaxPoint);
				
	}
				
	else if ((document.getElementById('EDAGAMECatch1').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch2').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch3').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch4').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch5').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch6').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch7').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch8').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch9').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch10').src != EDAGAMEImagesOther[13].src) &&
			 (document.getElementById('EDAGAMECatch11').src != EDAGAMEImagesOther[13].src) &&
			 (document.getElementById('EDAGAMECatch12').src != EDAGAMEImagesOther[13].src) &&
			 (document.getElementById('EDAGAMECatch13').src != EDAGAMEImagesOther[13].src) &&
			 (document.getElementById('EDAGAMECatch14').src != EDAGAMEImagesOther[13].src) &&
			 (document.getElementById('EDAGAMECatch15').src != EDAGAMEImagesOther[13].src) &&
			 (document.getElementById('EDAGAMECatch16').src != EDAGAMEImagesOther[13].src) &&
			 (document.getElementById('EDAGAMECatch17').src != EDAGAMEImagesOther[13].src) &&
			 (document.getElementById('EDAGAMECatch18').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch1').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch2').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch3').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch4').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch5').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch6').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch7').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch8').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch9').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch10').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch11').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch12').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch13').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch14').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch15').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch16').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch17').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch18').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch19').src == EDAGAMEImagesOther[13].src)) {
				
				document.getElementById('EDAGAMEStar19').src = EDAGAMEImagesOther[3].src;
                document.getElementById('EDAGAMECatch19').src = document.getElementById('EDAGAMEObject' + id).src;
                EDAGAMEPAIScore(EDAGAMEMaxPoint);
				
	}
				
    else if ((document.getElementById('EDAGAMECatch1').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch2').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch3').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch4').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch5').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch6').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch7').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch8').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch9').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch10').src != EDAGAMEImagesOther[13].src) &&
			 (document.getElementById('EDAGAMECatch11').src != EDAGAMEImagesOther[13].src) &&
			 (document.getElementById('EDAGAMECatch12').src != EDAGAMEImagesOther[13].src) &&
			 (document.getElementById('EDAGAMECatch13').src != EDAGAMEImagesOther[13].src) &&
			 (document.getElementById('EDAGAMECatch14').src != EDAGAMEImagesOther[13].src) &&
			 (document.getElementById('EDAGAMECatch15').src != EDAGAMEImagesOther[13].src) &&
			 (document.getElementById('EDAGAMECatch16').src != EDAGAMEImagesOther[13].src) &&
			 (document.getElementById('EDAGAMECatch17').src != EDAGAMEImagesOther[13].src) &&
			 (document.getElementById('EDAGAMECatch18').src != EDAGAMEImagesOther[13].src) &&
			 (document.getElementById('EDAGAMECatch19').src != EDAGAMEImagesOther[13].src) &&
             (document.getElementById('EDAGAMECatch1').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch2').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch3').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch4').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch5').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch6').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch7').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch8').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch9').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch10').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch11').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch12').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch13').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch14').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch15').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch16').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch17').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch18').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch19').src != document.getElementById('EDAGAMEObject' + id).src) &&
             (document.getElementById('EDAGAMECatch20').src == EDAGAMEImagesOther[13].src)) {
				
				document.getElementById('EDAGAMEStar20').src = EDAGAMEImagesOther[3].src;
                document.getElementById('EDAGAMECatch20').src = document.getElementById('EDAGAMEObject' + id).src;
                EDAGAMEPAIScore(EDAGAMEMaxPoint);
				
	};
				
};

//This function checks a score.
function EDAGAMEPAIScore(EDAGAMEMaxPoint) {

	var Score = document.getElementById('EDAGAMEScore').innerHTML; Score++;
	document.getElementById('EDAGAMEScore').innerHTML = Score;

	if (Score == EDAGAMEMaxPoint) {
		
		EDAGAMEEngineReset();
		$('#EDAGAMEChecker').css({'display': 'none'});
		$('#EDAGAMEPairsLeft').animate({'background-color': '#FFD600'}, 250);
		$('#EDAGAMEPairsRight').animate({'background-color': '#FFD600'}, 250);
		
        setTimeout(function EDAGAMEComeBack() {
			
			$('#EDAGAMEPairsLeft').attr({'src': EDAGAMEImagesOther[13].src}).css('background', '#FFF');
            $('#EDAGAMEPairsRight').attr({'src': EDAGAMEImagesOther[13].src}).css('background', '#FFF');
			
		}, 750);

		$('#EDAGAMEBackground').fadeIn(250);
        $('#EDAGAMECongratulation').fadeIn(250);

        EDAGAMEVoiceReset(); EDAGAMEVoicesMainBasic[5].play();

		$('#EDAGAMESpeaker').attr({'src': EDAGAMEAnimationsCyclic[3].src});
		$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[2].src});		
		EDAGAMEVoicesMainBasic[5].onended = function() {
				
			$('#EDAGAMESpeaker').attr({'src': EDAGAMEImagesOther[13].src});
			$('#EDAGAMEEda').attr({'src': EDAGAMEAnimationsCyclic[0].src});
				
		};

	};	
		
};

var EDAGAMECOUNTDOWNPAIYes;

//This function makes Eda to express a consent.
function EDAGAMEPAIYes(id) {

	if (document.getElementById('EDAGAMEChecker').src == EDAGAMEImagesOther[6].src ||
		document.getElementById('EDAGAMEChecker').src == EDAGAMEImagesOther[15].src) {return;}
	
	else {
		
		$('#EDAGAMEObject' + id).stop(true, true, true).fadeOut(0);
		$('#EDAGAMEChecker').css({'width': '120px', 'height': '120px'});	
        $('#EDAGAMEChecker').attr({'src': EDAGAMEImagesOther[15].src})
							.fadeIn(25)
							.animate({'opacity': '1', 'top': '-=50px', 'width': '+=100px', 'height': '+=100px'});
        $('#EDAGAMEChecker').fadeOut(200).animate({'opacity': '0', 'top': '+=50px'});
		
		clearTimeout(EDAGAMECOUNTDOWNPAIYes);
		EDAGAMECOUNTDOWNPAIYes = setTimeout(function() {
			
			$('#EDAGAMEChecker').css({'width': '-=100px', 'height': '-=100px'}).attr({'src': EDAGAMEImagesOther[13].src});
			
		}, 1400);

		$('#EDAGAMEPairsLeft').animate({'background-color': '#FFD600'}, 250);
		$('#EDAGAMEPairsRight').animate({'background-color': '#FFD600'}, 250);
		
        setTimeout(function EDAGAMEComeBack() {
			
			$('#EDAGAMEPairsLeft').attr({'src': EDAGAMEImagesOther[13].src}).css('background', '#FFF');
            $('#EDAGAMEPairsRight').attr({'src': EDAGAMEImagesOther[13].src}).css('background', '#FFF');
											   
		}, 750);
	
		
        EDAGAMEYesAnim();
		EDAGAMEVoiceReset(); EDAGAMEVoicesMainBasic[12].play();

        $('#EDAGAMERepeat').delay(300).fadeOut(250);
        $('#EDAGAMERepeat').delay(750).fadeIn(250);

	};

};

var EDAGAMECOUNTDOWNPAINo;

//This function makes Eda to express an objection.
function EDAGAMEPAINo() {

	if (document.getElementById('EDAGAMEChecker').src == EDAGAMEImagesOther[6].src ||
		document.getElementById('EDAGAMEChecker').src == EDAGAMEImagesOther[15].src) {return;}
		
	else {
		
		$('#EDAGAMEChecker').css({'width': '120px', 'height': '120px'});
        $('#EDAGAMEChecker').attr({'src': EDAGAMEImagesOther[6].src})
							.fadeIn(25)
							.animate({'opacity': '1', 'top': '-=50px', 'width': '+=100px', 'height': '+=100px'})
        $('#EDAGAMEChecker').fadeOut(200).animate({'opacity': '0', 'top': '+=50px'});
		
		clearTimeout(EDAGAMECOUNTDOWNPAINo);
		EDAGAMECOUNTDOWNPAINo = setTimeout(function() {
			
			$('#EDAGAMEChecker').css({'width': '-=100px', 'height': '-=100px'}).attr({'src': EDAGAMEImagesOther[13].src});
			
		}, 1400);

		$('#EDAGAMEPairsLeft').animate({'background-color': '#FB6464'}, 250);
		$('#EDAGAMEPairsRight').animate({'background-color': '#FB6464'}, 250);
		
        setTimeout(function EDAGAMEComeBack() {
			
			$('#EDAGAMEPairsLeft').attr({'src': EDAGAMEImagesOther[13].src}).css('background', '#FFF');
            $('#EDAGAMEPairsRight').attr({'src': EDAGAMEImagesOther[13].src}).css('background', '#FFF');
			
		}, 750);
		
        EDAGAMENoAnim();
        EDAGAMEVoiceReset(); EDAGAMEVoicesMainBasic[9].play();  
	
	};

};