//This file is used for defining acyclic animations.

//This function defines 'No' animation.
function EDAGAMENoAnim() {

	$('#EDAGAMEEda')	
		.attr('src', EDAGAMEAnimationsAcyclicNo[0].src)
		.delay(40, function() {$('#EDAGAMEEda').attr('src', EDAGAMEAnimationsAcyclicNo[1].src);})
		.delay(40, function() {$('#EDAGAMEEda').attr('src', EDAGAMEAnimationsAcyclicNo[2].src);})
		.delay(40, function() {$('#EDAGAMEEda').attr('src', EDAGAMEAnimationsAcyclicNo[3].src);})
		.delay(40, function() {$('#EDAGAMEEda').attr('src', EDAGAMEAnimationsAcyclicNo[4].src);})
		.delay(450, function() {$('#EDAGAMEEda').attr('src', EDAGAMEAnimationsAcyclicNo[3].src);})
		.delay(40, function() {$('#EDAGAMEEda').attr('src', EDAGAMEAnimationsAcyclicNo[2].src);})
		.delay(40, function() {$('#EDAGAMEEda').attr('src', EDAGAMEAnimationsAcyclicNo[1].src);})
		.delay(40, function() {$('#EDAGAMEEda').attr('src', EDAGAMEAnimationsAcyclicNo[0].src);})
		.delay(40, function() {$('#EDAGAMEEda').attr('src', EDAGAMEAnimationsCyclic[0].src);});

};

//The next two functions define 'Start' animation.
function EDAGAMEStartAnim() {

	if (document.getElementById('EDAGAMELinkBG').src == EDAGAMEImagesOther[0].src) {
		
		EDAGAMEStartAnimDuration();
		
	}
	
	else {
		
		$('#EDAGAMELinkBG').finish();
		EDAGAMEStartAnimDuration();
		
	};

};

function EDAGAMEStartAnimDuration() {
   
	$('#EDAGAMELinkBG')
		.attr('src', EDAGAMEAnimationsAcyclicStart[0].src)
		.delay(40, function() {$('#EDAGAMELinkBG').attr('src', EDAGAMEAnimationsAcyclicStart[1].src);})
		.delay(40, function() {$('#EDAGAMELinkBG').attr('src', EDAGAMEAnimationsAcyclicStart[2].src);})
		.delay(40, function() {$('#EDAGAMELinkBG').attr('src', EDAGAMEAnimationsAcyclicStart[3].src);})
		.delay(40, function() {$('#EDAGAMELinkBG').attr('src', EDAGAMEAnimationsAcyclicStart[4].src);})
		.delay(40, function() {$('#EDAGAMELinkBG').attr('src', EDAGAMEAnimationsAcyclicStart[5].src);})
		.delay(40, function() {$('#EDAGAMELinkBG').attr('src', EDAGAMEAnimationsAcyclicStart[6].src);})
		.delay(40, function() {$('#EDAGAMELinkBG').attr('src', EDAGAMEAnimationsAcyclicStart[7].src);})
		.delay(40, function() {$('#EDAGAMELinkBG').attr('src', EDAGAMEAnimationsAcyclicStart[8].src);})
		.delay(40, function() {$('#EDAGAMELinkBG').attr('src', EDAGAMEAnimationsAcyclicStart[9].src);})
		.delay(40, function() {$('#EDAGAMELinkBG').attr('src', EDAGAMEAnimationsAcyclicStart[10].src);})
		.delay(40, function() {$('#EDAGAMELinkBG').attr('src', EDAGAMEAnimationsAcyclicStart[11].src);})
		.delay(40, function() {$('#EDAGAMELinkBG').attr('src', EDAGAMEAnimationsAcyclicStart[12].src);})
		.delay(40, function() {$('#EDAGAMELinkBG').attr('src', EDAGAMEAnimationsAcyclicStart[13].src);})
		.delay(40, function() {$('#EDAGAMELinkBG').attr('src', EDAGAMEAnimationsAcyclicStart[14].src);})
		.delay(40, function() {$('#EDAGAMELinkBG').attr('src', EDAGAMEAnimationsAcyclicStart[15].src);})
		.delay(40, function() {$('#EDAGAMELinkBG').attr('src', EDAGAMEAnimationsAcyclicStart[16].src);})
		.delay(40, function() {$('#EDAGAMELinkBG').attr('src', EDAGAMEAnimationsAcyclicStart[15].src);})
		.delay(40, function() {$('#EDAGAMELinkBG').attr('src', EDAGAMEAnimationsAcyclicStart[14].src);})
		.delay(40, function() {$('#EDAGAMELinkBG').attr('src', EDAGAMEAnimationsAcyclicStart[13].src);})
		.delay(40, function() {$('#EDAGAMELinkBG').attr('src', EDAGAMEAnimationsAcyclicStart[12].src);})
		.delay(40, function() {$('#EDAGAMELinkBG').attr('src', EDAGAMEAnimationsAcyclicStart[11].src);})
		.delay(40, function() {$('#EDAGAMELinkBG').attr('src', EDAGAMEAnimationsAcyclicStart[10].src);})
		.delay(40, function() {$('#EDAGAMELinkBG').attr('src', EDAGAMEAnimationsAcyclicStart[9].src);})
		.delay(40, function() {$('#EDAGAMELinkBG').attr('src', EDAGAMEAnimationsAcyclicStart[8].src);})
		.delay(40, function() {$('#EDAGAMELinkBG').attr('src', EDAGAMEAnimationsAcyclicStart[7].src);})
		.delay(40, function() {$('#EDAGAMELinkBG').attr('src', EDAGAMEAnimationsAcyclicStart[6].src);})
		.delay(40, function() {$('#EDAGAMELinkBG').attr('src', EDAGAMEAnimationsAcyclicStart[5].src);})
		.delay(40, function() {$('#EDAGAMELinkBG').attr('src', EDAGAMEAnimationsAcyclicStart[4].src);})
		.delay(40, function() {$('#EDAGAMELinkBG').attr('src', EDAGAMEAnimationsAcyclicStart[3].src);})
		.delay(40, function() {$('#EDAGAMELinkBG').attr('src', EDAGAMEAnimationsAcyclicStart[2].src);})
		.delay(40, function() {$('#EDAGAMELinkBG').attr('src', EDAGAMEAnimationsAcyclicStart[1].src);})
		.delay(40, function() {$('#EDAGAMELinkBG').attr('src', EDAGAMEAnimationsAcyclicStart[0].src);})
		.delay(40, function() {$('#EDAGAMELinkBG').attr('src', EDAGAMEImagesOther[0].src);});

};

//This function defines 'Wave' animation (the part of 'intro.js' code).
function EDAGAMEWaveAnim() {

	$('#EDAGAMEIntroEda')
		.attr('src', EDAGAMEAnimationsAcyclicWave[0].src)
		.delay(40, function() {$('#EDAGAMEIntroEda').attr('src', EDAGAMEAnimationsAcyclicWave[1].src);})
		.delay(40, function() {$('#EDAGAMEIntroEda').attr('src', EDAGAMEAnimationsAcyclicWave[2].src);})
		.delay(40, function() {$('#EDAGAMEIntroEda').attr('src', EDAGAMEAnimationsAcyclicWave[3].src);})
		.delay(40, function() {$('#EDAGAMEIntroEda').attr('src', EDAGAMEAnimationsAcyclicWave[4].src);})
		.delay(40, function() {$('#EDAGAMEIntroEda').attr('src', EDAGAMEAnimationsAcyclicWave[5].src);})
		.delay(40, function() {$('#EDAGAMEIntroEda').attr('src', EDAGAMEAnimationsAcyclicWave[6].src);})
		.delay(40, function() {$('#EDAGAMEIntroEda').attr('src', EDAGAMEAnimationsAcyclicWave[7].src);})
		.delay(40, function() {$('#EDAGAMEIntroEda').attr('src', EDAGAMEAnimationsAcyclicWave[8].src);})
		.delay(40, function() {$('#EDAGAMEIntroEda').attr('src', EDAGAMEAnimationsAcyclicWave[9].src);})
		.delay(40, function() {$('#EDAGAMEIntroEda').attr('src', EDAGAMEAnimationsAcyclicWave[10].src);})
		.delay(40, function() {$('#EDAGAMEIntroEda').attr('src', EDAGAMEAnimationsAcyclicWave[11].src);})
		.delay(40, function() {$('#EDAGAMEIntroEda').attr('src', EDAGAMEAnimationsAcyclicWave[12].src);})
		.delay(40, function() {$('#EDAGAMEIntroEda').attr('src', EDAGAMEAnimationsAcyclicWave[13].src);})
		.delay(40, function() {$('#EDAGAMEIntroEda').attr('src', EDAGAMEAnimationsAcyclicWave[12].src);})
		.delay(40, function() {$('#EDAGAMEIntroEda').attr('src', EDAGAMEAnimationsAcyclicWave[11].src);})
		.delay(40, function() {$('#EDAGAMEIntroEda').attr('src', EDAGAMEAnimationsAcyclicWave[12].src);})
		.delay(40, function() {$('#EDAGAMEIntroEda').attr('src', EDAGAMEAnimationsAcyclicWave[13].src);})
		.delay(40, function() {$('#EDAGAMEIntroEda').attr('src', EDAGAMEAnimationsAcyclicWave[12].src);})
		.delay(40, function() {$('#EDAGAMEIntroEda').attr('src', EDAGAMEAnimationsAcyclicWave[11].src);})
		.delay(40, function() {$('#EDAGAMEIntroEda').attr('src', EDAGAMEAnimationsAcyclicWave[10].src);})
		.delay(40, function() {$('#EDAGAMEIntroEda').attr('src', EDAGAMEAnimationsAcyclicWave[9].src);})
		.delay(40, function() {$('#EDAGAMEIntroEda').attr('src', EDAGAMEAnimationsAcyclicWave[8].src);})
		.delay(40, function() {$('#EDAGAMEIntroEda').attr('src', EDAGAMEAnimationsAcyclicWave[7].src);})
		.delay(40, function() {$('#EDAGAMEIntroEda').attr('src', EDAGAMEAnimationsAcyclicWave[6].src);})
		.delay(40, function() {$('#EDAGAMEIntroEda').attr('src', EDAGAMEAnimationsAcyclicWave[5].src);})
		.delay(40, function() {$('#EDAGAMEIntroEda').attr('src', EDAGAMEAnimationsAcyclicWave[4].src);})
		.delay(40, function() {$('#EDAGAMEIntroEda').attr('src', EDAGAMEAnimationsAcyclicWave[3].src);})
		.delay(40, function() {$('#EDAGAMEIntroEda').attr('src', EDAGAMEAnimationsAcyclicWave[2].src);})
		.delay(40, function() {$('#EDAGAMEIntroEda').attr('src', EDAGAMEAnimationsAcyclicWave[1].src);})
		.delay(40, function() {$('#EDAGAMEIntroEda').attr('src', EDAGAMEAnimationsAcyclicWave[0].src);})
		.delay(40, function() {$('#EDAGAMEIntroEda').attr('src', EDAGAMEAnimationsCyclic[0].src);});
						 
	$.when($('#EDAGAMEIntroEda')).then(function() {
			
		if (document.getElementById('EDAGAMEBackground').style.display == 'block') {EDAGAMEIntroDuration13();}
		else {return;};
			
	});
		
};

//This function defines 'Yes' animation.
function EDAGAMEYesAnim() {

	$('#EDAGAMEEda')
		.attr('src', EDAGAMEAnimationsAcyclicYes[0].src)
		.delay(50, function() {$('#EDAGAMEEda').attr('src', EDAGAMEAnimationsAcyclicYes[1].src);})
		.delay(50, function() {$('#EDAGAMEEda').attr('src', EDAGAMEAnimationsAcyclicYes[2].src);})
		.delay(50, function() {$('#EDAGAMEEda').attr('src', EDAGAMEAnimationsAcyclicYes[3].src);})
		.delay(50, function() {$('#EDAGAMEEda').attr('src', EDAGAMEAnimationsAcyclicYes[4].src);})
		.delay(50, function() {$('#EDAGAMEEda').attr('src', EDAGAMEAnimationsAcyclicYes[5].src);})
		.delay(50, function() {$('#EDAGAMEEda').attr('src', EDAGAMEAnimationsAcyclicYes[6].src);})
		.delay(50, function() {$('#EDAGAMEEda').attr('src', EDAGAMEAnimationsAcyclicYes[7].src);})
		.delay(50, function() {$('#EDAGAMEEda').attr('src', EDAGAMEAnimationsAcyclicYes[8].src);})
		.delay(50, function() {$('#EDAGAMEEda').attr('src', EDAGAMEAnimationsAcyclicYes[9].src);})
		.delay(50, function() {$('#EDAGAMEEda').attr('src', EDAGAMEAnimationsAcyclicYes[10].src);})
		.delay(50, function() {$('#EDAGAMEEda').attr('src', EDAGAMEAnimationsAcyclicYes[11].src);})
		.delay(50, function() {$('#EDAGAMEEda').attr('src', EDAGAMEAnimationsAcyclicYes[12].src);})
		.delay(50, function() {$('#EDAGAMEEda').attr('src', EDAGAMEAnimationsAcyclicYes[13].src);})
		.delay(450, function() {$('#EDAGAMEEda').attr('src', EDAGAMEAnimationsAcyclicYes[12].src);})
		.delay(50, function() {$('#EDAGAMEEda').attr('src', EDAGAMEAnimationsAcyclicYes[11].src);})
		.delay(50, function() {$('#EDAGAMEEda').attr('src', EDAGAMEAnimationsAcyclicYes[10].src);})
		.delay(50, function() {$('#EDAGAMEEda').attr('src', EDAGAMEAnimationsAcyclicYes[9].src);})
		.delay(50, function() {$('#EDAGAMEEda').attr('src', EDAGAMEAnimationsAcyclicYes[8].src);})
		.delay(50, function() {$('#EDAGAMEEda').attr('src', EDAGAMEAnimationsAcyclicYes[7].src);})
		.delay(50, function() {$('#EDAGAMEEda').attr('src', EDAGAMEAnimationsAcyclicYes[6].src);})
		.delay(50, function() {$('#EDAGAMEEda').attr('src', EDAGAMEAnimationsAcyclicYes[5].src);})
		.delay(50, function() {$('#EDAGAMEEda').attr('src', EDAGAMEAnimationsAcyclicYes[4].src);})
		.delay(50, function() {$('#EDAGAMEEda').attr('src', EDAGAMEAnimationsAcyclicYes[3].src);})
		.delay(50, function() {$('#EDAGAMEEda').attr('src', EDAGAMEAnimationsAcyclicYes[2].src);})
		.delay(50, function() {$('#EDAGAMEEda').attr('src', EDAGAMEAnimationsAcyclicYes[1].src);})
		.delay(50, function() {$('#EDAGAMEEda').attr('src', EDAGAMEAnimationsAcyclicYes[0].src);})
		.delay(50, function() {$('#EDAGAMEEda').attr('src', EDAGAMEAnimationsCyclic[0].src);});

};