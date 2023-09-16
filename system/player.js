//This file is used for defining all informational audios.

//This function defines the informational audio of 'Animals' button.
function EDAGAMEVoiceInfoANIPlay() {
	
	if ($('a#EDAGAMEA3').hasClass('EDAGAMECurrent') ||
		document.getElementById('EDAGAMESpeaker').src == EDAGAMEAnimationsCyclic[3].src ||
		document.getElementById('EDAGAMEChecker').src == EDAGAMEImagesOther[15].src ||
		document.getElementById('EDAGAMEChecker').src == EDAGAMEImagesOther[6].src ||
		document.getElementById('EDAGAMEEda').src != EDAGAMEAnimationsCyclic[0].src) {return;}
		
	else {EDAGAMEVoiceReset(); EDAGAMEVoicesMainInfo[0].play();}; //Animals.mp3
		
};

//This function defines the informational audio of 'Clear' button in 'Pairs' game.
function EDAGAMEVoiceInfoClearPlay() {
	
	if (document.getElementById('EDAGAMESpeaker').src == EDAGAMEAnimationsCyclic[3].src ||
		document.getElementById('EDAGAMEChecker').src == EDAGAMEImagesOther[15].src ||
		document.getElementById('EDAGAMEChecker').src == EDAGAMEImagesOther[6].src ||
		document.getElementById('EDAGAMEEda').src != EDAGAMEAnimationsCyclic[0].src) {return;}
		
	else {EDAGAMEVoiceReset(); EDAGAMEVoicesMainInfo[1].play();}; //Clear.mp3
		
};

//This function defines the informational audio of 'Colors' button.
function EDAGAMEVoiceInfoCOLPlay() {
	
	if (($('a#EDAGAMEA1').hasClass('EDAGAMECurrent')) ||
		(document.getElementById('EDAGAMESpeaker').src == EDAGAMEAnimationsCyclic[3].src) ||
		(document.getElementById('EDAGAMEChecker').src == EDAGAMEImagesOther[15].src) ||
		(document.getElementById('EDAGAMEChecker').src == EDAGAMEImagesOther[6].src) ||
		(document.getElementById('EDAGAMEEda').src != EDAGAMEAnimationsCyclic[0].src)) {return;}
		
	else {EDAGAMEVoiceReset(); EDAGAMEVoicesMainInfo[2].play();}; //Colors.mp3
		
};

//This function defines the informational audio of 'Exit' button.
function EDAGAMEVoiceInfoExitPlay() {
	
	if (document.getElementById('EDAGAMESpeaker').src == EDAGAMEAnimationsCyclic[3].src ||
		document.getElementById('EDAGAMEChecker').src == EDAGAMEImagesOther[15].src ||
		document.getElementById('EDAGAMEChecker').src == EDAGAMEImagesOther[6].src ||
		document.getElementById('EDAGAMEEda').src != EDAGAMEAnimationsCyclic[0].src) {return;}
		
	else {EDAGAMEVoiceReset(); EDAGAMEVoicesMainInfo[3].play();}; //Exit.mp3
		
};

//This function defines the informational audio of 'Instruments' button.
function EDAGAMEVoiceInfoINSPlay() {
	
	if ($('a#EDAGAMEA4').hasClass('EDAGAMECurrent') ||
		document.getElementById('EDAGAMESpeaker').src == EDAGAMEAnimationsCyclic[3].src ||
		document.getElementById('EDAGAMEChecker').src == EDAGAMEImagesOther[15].src ||
		document.getElementById('EDAGAMEChecker').src == EDAGAMEImagesOther[6].src ||
		document.getElementById('EDAGAMEEda').src != EDAGAMEAnimationsCyclic[0].src) {return;}
		
	else {EDAGAMEVoiceReset(); EDAGAMEVoicesMainInfo[4].play();}; //Instruments.mp3
		
};

//This function defines the informational audio of 'Pairs' button.
function EDAGAMEVoiceInfoPAIPlay() {
	
	if ($('a#EDAGAMEA5').hasClass('EDAGAMECurrent') ||
		document.getElementById('EDAGAMESpeaker').src == EDAGAMEAnimationsCyclic[3].src ||
		document.getElementById('EDAGAMEChecker').src == EDAGAMEImagesOther[15].src ||
		document.getElementById('EDAGAMEChecker').src == EDAGAMEImagesOther[6].src ||
		document.getElementById('EDAGAMEEda').src != EDAGAMEAnimationsCyclic[0].src) {return;}
		
	else {EDAGAMEVoiceReset(); EDAGAMEVoicesMainInfo[5].play();}; //Pairs.mp3
		
};

//This function defines the informational audio of 'Repeat' button at the end of some game).
function EDAGAMEVoiceInfoRepeatPlay() {
	
	if (document.getElementById('EDAGAMESpeaker').src == EDAGAMEAnimationsCyclic[3].src ||
		document.getElementById('EDAGAMEChecker').src == EDAGAMEImagesOther[15].src ||
		document.getElementById('EDAGAMEChecker').src == EDAGAMEImagesOther[6].src ||
		document.getElementById('EDAGAMEEda').src != EDAGAMEAnimationsCyclic[0].src) {return;}
		
	else {EDAGAMEVoiceReset(); EDAGAMEVoicesMainInfo[7].play();}; //Repeat.mp3
		
};

//This function defines the informational audio of 'Repeat Main Task' blue button.
function EDAGAMEVoiceInfoRepeatMainTaskPlay() {
	
	if (document.getElementById('EDAGAMESpeaker').src == EDAGAMEAnimationsCyclic[3].src ||
		document.getElementById('EDAGAMEChecker').src == EDAGAMEImagesOther[15].src ||
		document.getElementById('EDAGAMEChecker').src == EDAGAMEImagesOther[6].src ||
		document.getElementById('EDAGAMEEda').src != EDAGAMEAnimationsCyclic[0].src) {return;}
		
	else {EDAGAMEVoiceReset(); EDAGAMEVoicesMainInfo[8].play();}; //RepeatMainTask.mp3
		
};

//This function defines the informational audio of 'Repeat Task' orange button.
function EDAGAMEVoiceInfoRepeatTaskPlay() {
	
	if (document.getElementById('EDAGAMESpeaker').src == EDAGAMEAnimationsCyclic[3].src ||
		document.getElementById('EDAGAMEChecker').src == EDAGAMEImagesOther[15].src ||
		document.getElementById('EDAGAMEChecker').src == EDAGAMEImagesOther[6].src ||
		document.getElementById('EDAGAMEEda').src != EDAGAMEAnimationsCyclic[0].src) {return;}
		
	else {EDAGAMEVoiceReset(); EDAGAMEVoicesMainInfo[9].play();}; //RepeatTask.mp3
		
};

//This function defines the informational audio of 'Shapes' button.
function EDAGAMEVoiceInfoSHAPlay() {
	
	if ($('a#EDAGAMEA2').hasClass('EDAGAMECurrent') ||
		document.getElementById('EDAGAMESpeaker').src == EDAGAMEAnimationsCyclic[3].src ||
		document.getElementById('EDAGAMEChecker').src == EDAGAMEImagesOther[15].src ||
		document.getElementById('EDAGAMEChecker').src == EDAGAMEImagesOther[6].src ||
		document.getElementById('EDAGAMEEda').src != EDAGAMEAnimationsCyclic[0].src) {return;}
		
	else {EDAGAMEVoiceReset(); EDAGAMEVoicesMainInfo[10].play();}; //Shapes.mp3
	   
};

//This function defines the informational audio of 'Skip' button.
function EDAGAMEVoiceInfoSkipPlay() {
	
	if (document.getElementById('EDAGAMESkip').style.opacity != '1') {return;}	
	
	else if (document.getElementById('EDAGAMEIntroEda').src != EDAGAMEAnimationsCyclic[2].src) {
		
		$('#EDAGAMESkip').css({'cursor': 'pointer'});
		EDAGAMEVoiceReset(); EDAGAMEVoicesMainInfo[11].play(); //Skip.mp3
		
	};
																						   
};

//The next two functions define the informational audio of 'Start/Quit' button.
function EDAGAMEVoiceInfoStartPlay() {
	
	if ((document.getElementById('EDAGAMESpeaker').src == EDAGAMEAnimationsCyclic[3].src) ||
		(document.getElementById('EDAGAMEChecker').src == EDAGAMEImagesOther[15].src) ||
		(document.getElementById('EDAGAMEChecker').src == EDAGAMEImagesOther[6].src) ||
		(document.getElementById('EDAGAMEEda').src != EDAGAMEAnimationsCyclic[0].src)) {return;}
		
	else {EDAGAMEVoiceReset(); EDAGAMEVoiceStartOrQuit('EDAGAMELinkSPAN');};
		
};
										  
function EDAGAMEVoiceStartOrQuit(id) {

	if (document.getElementById(id).innerHTML == 'ZAPNOUT HRU') {EDAGAMEVoicesMainInfo[12].play();} //Start.mp3
	else if (document.getElementById(id).innerHTML == 'VYPNOUT HRU') {EDAGAMEVoicesMainInfo[6].play();}; //Quit.mp3

};

//This function defines the informational audio of 'Object0' image.
function EDAGAMEVoiceInfoObject0Play() {
	
	if (document.getElementById('EDAGAMESpeaker').src == EDAGAMEAnimationsCyclic[3].src ||
		document.getElementById('EDAGAMEChecker').src == EDAGAMEImagesOther[15].src ||
		document.getElementById('EDAGAMEChecker').src == EDAGAMEImagesOther[6].src ||
		document.getElementById('EDAGAMEEda').src != EDAGAMEAnimationsCyclic[0].src) {return;}
		
	else {EDAGAMEVoiceReset(); EDAGAMEVoiceObject(0);};
		
};

//This function defines the informational audio of 'Object1' image.
function EDAGAMEVoiceInfoObject1Play() {
	
	if (document.getElementById('EDAGAMESpeaker').src == EDAGAMEAnimationsCyclic[3].src ||
		document.getElementById('EDAGAMEChecker').src == EDAGAMEImagesOther[15].src ||
		document.getElementById('EDAGAMEChecker').src == EDAGAMEImagesOther[6].src ||
		document.getElementById('EDAGAMEEda').src != EDAGAMEAnimationsCyclic[0].src) {return;}
		
	else {EDAGAMEVoiceReset(); EDAGAMEVoiceObject(1);};
		
};

//This function defines the informational audio of 'Object2' image.
function EDAGAMEVoiceInfoObject2Play() {
	
	if (document.getElementById('EDAGAMESpeaker').src == EDAGAMEAnimationsCyclic[3].src ||
		document.getElementById('EDAGAMEChecker').src == EDAGAMEImagesOther[15].src ||
		document.getElementById('EDAGAMEChecker').src == EDAGAMEImagesOther[6].src ||
		document.getElementById('EDAGAMEEda').src != EDAGAMEAnimationsCyclic[0].src) {return;}
		
	else {EDAGAMEVoiceReset(); EDAGAMEVoiceObject(2);};
		
};

//This function defines the informational audio of 'Object3' image.
function EDAGAMEVoiceInfoObject3Play() {
	
	if (document.getElementById('EDAGAMESpeaker').src == EDAGAMEAnimationsCyclic[3].src ||
		document.getElementById('EDAGAMEChecker').src == EDAGAMEImagesOther[15].src ||
		document.getElementById('EDAGAMEChecker').src == EDAGAMEImagesOther[6].src ||
		document.getElementById('EDAGAMEEda').src != EDAGAMEAnimationsCyclic[0].src) {return;}
		
	else {EDAGAMEVoiceReset(); EDAGAMEVoiceObject(3);};
		
};

//This function defines the informational audio of 'Object4' image.
function EDAGAMEVoiceInfoObject4Play() {
	
	if (document.getElementById('EDAGAMESpeaker').src == EDAGAMEAnimationsCyclic[3].src ||
		document.getElementById('EDAGAMEChecker').src == EDAGAMEImagesOther[15].src ||
		document.getElementById('EDAGAMEChecker').src == EDAGAMEImagesOther[6].src ||
		document.getElementById('EDAGAMEEda').src != EDAGAMEAnimationsCyclic[0].src) {return;}
		
	else {EDAGAMEVoiceReset(); EDAGAMEVoiceObject(4);};
		
};

//This function defines the informational audio of 'Object5' image.
function EDAGAMEVoiceInfoObject5Play() {
	
	if (document.getElementById('EDAGAMESpeaker').src == EDAGAMEAnimationsCyclic[3].src ||
		document.getElementById('EDAGAMEChecker').src == EDAGAMEImagesOther[15].src ||
		document.getElementById('EDAGAMEChecker').src == EDAGAMEImagesOther[6].src ||
		document.getElementById('EDAGAMEEda').src != EDAGAMEAnimationsCyclic[0].src) {return;}
		
	else {EDAGAMEVoiceReset(); EDAGAMEVoiceObject(5);};
		
};

//This function defines the informational audios of all (0-5) objects in each game.
function EDAGAMEVoiceObject(id) {

		 if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesColors[0].src) {EDAGAMEVoicesColorsInfo[0].play();}			
	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesColors[1].src) {EDAGAMEVoicesColorsInfo[1].play();}
	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesColors[2].src) {EDAGAMEVoicesColorsInfo[2].play();}
	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesColors[3].src) {EDAGAMEVoicesColorsInfo[3].play();}
	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesColors[4].src) {EDAGAMEVoicesColorsInfo[4].play();}
	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesColors[5].src) {EDAGAMEVoicesColorsInfo[5].play();}
	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesColors[6].src) {EDAGAMEVoicesColorsInfo[6].play();}
	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesColors[7].src) {EDAGAMEVoicesColorsInfo[7].play();}
	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesColors[8].src) {EDAGAMEVoicesColorsInfo[8].play();}
	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesColors[9].src) {EDAGAMEVoicesColorsInfo[9].play();}
	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesColors[10].src) {EDAGAMEVoicesColorsInfo[10].play();}

	else if ((document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesShapes[0].src) && ($('a#EDAGAMEA5').hasClass('EDAGAMECurrent'))) {EDAGAMEVoicesShapesInfo[0].play();}
	else if ((document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesShapes[1].src) && ($('a#EDAGAMEA5').hasClass('EDAGAMECurrent'))) {EDAGAMEVoicesShapesInfo[1].play();}
	else if ((document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesShapes[2].src) && ($('a#EDAGAMEA5').hasClass('EDAGAMECurrent'))) {EDAGAMEVoicesShapesInfo[2].play();}
	else if ((document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesShapes[3].src) && ($('a#EDAGAMEA5').hasClass('EDAGAMECurrent'))) {EDAGAMEVoicesShapesInfo[3].play();}
	else if ((document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesShapes[4].src) && ($('a#EDAGAMEA5').hasClass('EDAGAMECurrent'))) {EDAGAMEVoicesShapesInfo[4].play();}
	else if ((document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesShapes[5].src) && ($('a#EDAGAMEA5').hasClass('EDAGAMECurrent'))) {EDAGAMEVoicesShapesInfo[5].play();}
	else if ((document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesShapes[6].src) && ($('a#EDAGAMEA5').hasClass('EDAGAMECurrent'))) {EDAGAMEVoicesShapesInfo[6].play();}
	else if ((document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesShapes[7].src) && ($('a#EDAGAMEA5').hasClass('EDAGAMECurrent'))) {EDAGAMEVoicesShapesInfo[7].play();}
	else if ((document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesShapes[8].src) && ($('a#EDAGAMEA5').hasClass('EDAGAMECurrent'))) {EDAGAMEVoicesShapesInfo[8].play();}
	else if ((document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesShapes[9].src) && ($('a#EDAGAMEA5').hasClass('EDAGAMECurrent'))) {EDAGAMEVoicesShapesInfo[9].play();}
	else if ((document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesShapes[10].src) && ($('a#EDAGAMEA5').hasClass('EDAGAMECurrent'))) {EDAGAMEVoicesShapesInfo[10].play();}
	else if ((document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesShapes[11].src) && ($('a#EDAGAMEA5').hasClass('EDAGAMECurrent'))) {EDAGAMEVoicesShapesInfo[11].play();}
	else if ((document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesShapes[12].src) && ($('a#EDAGAMEA5').hasClass('EDAGAMECurrent'))) {EDAGAMEVoicesShapesInfo[12].play();}
	else if ((document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesShapes[13].src) && ($('a#EDAGAMEA5').hasClass('EDAGAMECurrent'))) {EDAGAMEVoicesShapesInfo[13].play();}
	else if ((document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesShapes[14].src) && ($('a#EDAGAMEA5').hasClass('EDAGAMECurrent'))) {EDAGAMEVoicesShapesInfo[14].play();}
	else if ((document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesShapes[15].src) && ($('a#EDAGAMEA5').hasClass('EDAGAMECurrent'))) {EDAGAMEVoicesShapesInfo[15].play();}
	else if ((document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesShapes[16].src) && ($('a#EDAGAMEA5').hasClass('EDAGAMECurrent'))) {EDAGAMEVoicesShapesInfo[16].play();}
	else if ((document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesShapes[17].src) && ($('a#EDAGAMEA5').hasClass('EDAGAMECurrent'))) {EDAGAMEVoicesShapesInfo[17].play();}
	else if ((document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesShapes[18].src) && ($('a#EDAGAMEA5').hasClass('EDAGAMECurrent'))) {EDAGAMEVoicesShapesInfo[18].play();}
	else if ((document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesShapes[19].src) && ($('a#EDAGAMEA5').hasClass('EDAGAMECurrent'))) {EDAGAMEVoicesShapesInfo[19].play();}
		   
	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesAnimals[0].src) {EDAGAMEVoicesAnimalsInfo[0].play();}
	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesAnimals[1].src) {EDAGAMEVoicesAnimalsInfo[1].play();}
	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesAnimals[2].src) {EDAGAMEVoicesAnimalsInfo[2].play();}
	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesAnimals[3].src) {EDAGAMEVoicesAnimalsInfo[3].play();}
	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesAnimals[4].src) {EDAGAMEVoicesAnimalsInfo[4].play();}
	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesAnimals[5].src) {EDAGAMEVoicesAnimalsInfo[5].play();}
	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesAnimals[6].src) {EDAGAMEVoicesAnimalsInfo[6].play();}
	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesAnimals[7].src) {EDAGAMEVoicesAnimalsInfo[7].play();}
	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesAnimals[8].src) {EDAGAMEVoicesAnimalsInfo[8].play();}
	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesAnimals[9].src) {EDAGAMEVoicesAnimalsInfo[9].play();}
	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesAnimals[10].src) {EDAGAMEVoicesAnimalsInfo[10].play();}
	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesAnimals[11].src) {EDAGAMEVoicesAnimalsInfo[11].play();}
	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesAnimals[12].src) {EDAGAMEVoicesAnimalsInfo[12].play();}
	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesAnimals[13].src) {EDAGAMEVoicesAnimalsInfo[13].play();}
	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesAnimals[14].src) {EDAGAMEVoicesAnimalsInfo[14].play();}

	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesInstruments[0].src) {EDAGAMEVoicesInstrumentsInfo[0].play();}
	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesInstruments[1].src) {EDAGAMEVoicesInstrumentsInfo[1].play();}
	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesInstruments[2].src) {EDAGAMEVoicesInstrumentsInfo[2].play();}
	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesInstruments[3].src) {EDAGAMEVoicesInstrumentsInfo[3].play();}
	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesInstruments[4].src) {EDAGAMEVoicesInstrumentsInfo[4].play();}
	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesInstruments[5].src) {EDAGAMEVoicesInstrumentsInfo[5].play();}
	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesInstruments[6].src) {EDAGAMEVoicesInstrumentsInfo[6].play();}
	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesInstruments[7].src) {EDAGAMEVoicesInstrumentsInfo[7].play();}
	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesInstruments[8].src) {EDAGAMEVoicesInstrumentsInfo[8].play();}
	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesInstruments[9].src) {EDAGAMEVoicesInstrumentsInfo[9].play();}
	else if (document.getElementById('EDAGAMEObject' + id).src == EDAGAMEImagesInstruments[10].src) {EDAGAMEVoicesInstrumentsInfo[10].play();};

};

//This function defines the informational audios of a task image in 'Colors' game.
function EDAGAMEVoiceInfoTaskPlay() {
	
	if (document.getElementById('EDAGAMESpeaker').src == EDAGAMEAnimationsCyclic[3].src ||
        document.getElementById('EDAGAMEChecker').src == EDAGAMEImagesOther[15].src ||
        document.getElementById('EDAGAMEChecker').src == EDAGAMEImagesOther[6].src ||
		document.getElementById('EDAGAMEEda').src != EDAGAMEAnimationsCyclic[0].src) {return;} 

	else {
		
		EDAGAMEVoiceReset();

			 if (document.getElementById('EDAGAMEPoint').src == EDAGAMEImagesColors[0].src) {EDAGAMEVoicesColorsInfo[0].play();}
		else if (document.getElementById('EDAGAMEPoint').src == EDAGAMEImagesColors[1].src) {EDAGAMEVoicesColorsInfo[1].play();}
		else if (document.getElementById('EDAGAMEPoint').src == EDAGAMEImagesColors[2].src) {EDAGAMEVoicesColorsInfo[2].play();}
		else if (document.getElementById('EDAGAMEPoint').src == EDAGAMEImagesColors[3].src) {EDAGAMEVoicesColorsInfo[3].play();}
		else if (document.getElementById('EDAGAMEPoint').src == EDAGAMEImagesColors[4].src) {EDAGAMEVoicesColorsInfo[4].play();}
		else if (document.getElementById('EDAGAMEPoint').src == EDAGAMEImagesColors[5].src) {EDAGAMEVoicesColorsInfo[5].play();}
		else if (document.getElementById('EDAGAMEPoint').src == EDAGAMEImagesColors[6].src) {EDAGAMEVoicesColorsInfo[6].play();}
		else if (document.getElementById('EDAGAMEPoint').src == EDAGAMEImagesColors[7].src) {EDAGAMEVoicesColorsInfo[7].play();}
		else if (document.getElementById('EDAGAMEPoint').src == EDAGAMEImagesColors[8].src) {EDAGAMEVoicesColorsInfo[8].play();}
		else if (document.getElementById('EDAGAMEPoint').src == EDAGAMEImagesColors[9].src) {EDAGAMEVoicesColorsInfo[9].play();}
		else if (document.getElementById('EDAGAMEPoint').src == EDAGAMEImagesColors[10].src) {EDAGAMEVoicesColorsInfo[10].play();};
		
	};
  
};