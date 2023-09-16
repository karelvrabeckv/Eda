//This file is the main part of the Check System of the game.

//This function finds out the source of calling, calls a next 'Check' function and sets a default speed to objects.
function EDAGAMECheck(id) {

	if ($('a#EDAGAMEA1').hasClass('EDAGAMECurrent') &&
		document.getElementById('EDAGAMESpeaker').src == EDAGAMEImagesOther[13].src &&
		document.getElementById('EDAGAMEChecker').src == EDAGAMEImagesOther[13].src &&
		document.getElementById('EDAGAMEEda').src == EDAGAMEAnimationsCyclic[0].src) {EDAGAMEDefaultSpeed(); EDAGAMECOLCheck(id);};

	if ($('a#EDAGAMEA2').hasClass('EDAGAMECurrent') &&
		document.getElementById('EDAGAMESpeaker').src == EDAGAMEImagesOther[13].src &&
		document.getElementById('EDAGAMEChecker').src == EDAGAMEImagesOther[13].src &&
		document.getElementById('EDAGAMEEda').src == EDAGAMEAnimationsCyclic[0].src) {EDAGAMEDefaultSpeed(); EDAGAMESHACheck(id);};

	if ($('a#EDAGAMEA3').hasClass('EDAGAMECurrent') &&
		document.getElementById('EDAGAMESpeaker').src == EDAGAMEImagesOther[13].src &&
		document.getElementById('EDAGAMEChecker').src == EDAGAMEImagesOther[13].src &&
		document.getElementById('EDAGAMEEda').src == EDAGAMEAnimationsCyclic[0].src) {EDAGAMEDefaultSpeed(); EDAGAMEANICheck(id);};

	if ($('a#EDAGAMEA4').hasClass('EDAGAMECurrent') &&
		document.getElementById('EDAGAMESpeaker').src == EDAGAMEImagesOther[13].src &&
		document.getElementById('EDAGAMEChecker').src == EDAGAMEImagesOther[13].src &&
		document.getElementById('EDAGAMEEda').src == EDAGAMEAnimationsCyclic[0].src) {EDAGAMEDefaultSpeed(); EDAGAMEINSCheck(id);};
												   
	if ($('a#EDAGAMEA5').hasClass('EDAGAMECurrent') &&
		document.getElementById('EDAGAMESpeaker').src == EDAGAMEImagesOther[13].src &&
		document.getElementById('EDAGAMEChecker').src == EDAGAMEImagesOther[13].src &&
		document.getElementById('EDAGAMEEda').src == EDAGAMEAnimationsCyclic[0].src) {EDAGAMEDefaultSpeed(); EDAGAMEPAICheck(id);};

};