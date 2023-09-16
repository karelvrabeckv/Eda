//This file is used for reseting important things as the Engine System, the Game System, audios or sounds.

//This function resets the Engine System.
function EDAGAMEEngineReset() {

	for (var loop = 0; loop <= 5; loop++) {$('#EDAGAMEObject' + loop).stop(true, true, true).fadeOut();};
	for (var loop = 0; loop <= 5; loop++) {document.getElementById('EDAGAMEObject' + loop).src = EDAGAMEImagesOther[13].src;};
	
	var EDAGAMECountDowns = [EDAGAMEToStart0,
							 EDAGAMEToStart1,
							 EDAGAMEToStart2,
							 EDAGAMEToStart3,
							 EDAGAMEToStart4,
							 EDAGAMEToStart5];

	for (var loop = 0; loop <= 5; loop++) {clearTimeout(EDAGAMECountDowns[loop]);};
	
	var EDAGAMEEngineRuns = [EDAGAMEEngineRun0CountDown,
							 EDAGAMEEngineRun1CountDown,
							 EDAGAMEEngineRun2CountDown,
							 EDAGAMEEngineRun3CountDown,
							 EDAGAMEEngineRun4CountDown,
							 EDAGAMEEngineRun5CountDown];

	for (var loop = 0; loop <= 5; loop++) {clearTimeout(EDAGAMEEngineRuns[loop]);};							 

};

//This function resets the Bounce Effect and the object movement (the part of the Engine System).
function clearTimeOutEngineCountDowns(id) {
	
		 if (id == 0) {clearTimeout(EDAGAMEEngineRun0CountDown);}
	else if (id == 1) {clearTimeout(EDAGAMEEngineRun1CountDown);}
	else if (id == 2) {clearTimeout(EDAGAMEEngineRun2CountDown);}
	else if (id == 3) {clearTimeout(EDAGAMEEngineRun3CountDown);}
	else if (id == 4) {clearTimeout(EDAGAMEEngineRun4CountDown);}
	else if (id == 5) {clearTimeout(EDAGAMEEngineRun5CountDown);};
	
};

//This function resets the Game System.
function EDAGAMEMenuReset() {

	EDAGAMEVoiceReset();
	
	$('#EDAGAMERepeat').finish();
	$('#EDAGAMERepeat2').finish();
	
	clearTimeout(EDAGAMECOUNTDOWNCOLYes);
	clearTimeout(EDAGAMECOUNTDOWNSHAYes);
    clearTimeout(EDAGAMECOUNTDOWNANIYes);
    clearTimeout(EDAGAMECOUNTDOWNINSYes);
    clearTimeout(EDAGAMECOUNTDOWNPAIYes);

    clearTimeout(EDAGAMECOUNTDOWNCOLNo);
    clearTimeout(EDAGAMECOUNTDOWNSHANo);
    clearTimeout(EDAGAMECOUNTDOWNANINo);
    clearTimeout(EDAGAMECOUNTDOWNINSNo);
    clearTimeout(EDAGAMECOUNTDOWNPAINo);

    clearTimeout(EDAGAMECountDownToNextDabingSHA);
    clearTimeout(EDAGAMECountDownToNextDabingANI);
    clearTimeout(EDAGAMECountDownToNextDabingINS);
	
	clearTimeout(EDAGAMEChangeBG1); clearTimeout(EDAGAMEReturnBG1); clearTimeout(EDAGAMEChangeBG2); clearTimeout(EDAGAMEReturnBG2); clearTimeout(EDAGAMEChangeBG3); clearTimeout(EDAGAMEReturnBG3);
    clearTimeout(EDAGAMEColorsBG); clearTimeout(EDAGAMEShapesBG); clearTimeout(EDAGAMEAnimalsBG); clearTimeout(EDAGAMEInstrumentsBG);
    clearTimeout(EDAGAMEReturnColorsBG); clearTimeout(EDAGAMEReturnShapesBG); clearTimeout(EDAGAMEReturnAnimalsBG); clearTimeout(EDAGAMEReturnInstrumentsBG);
	
	if (document.getElementById('EDAGAMETask').bgColor != '#F7F5BA') {$('#EDAGAMETask').css({'background-color': '#F7F5BA'});};

	$('#EDAGAMERepeat').css({'display': 'none'}).attr({'src': EDAGAMEImagesOther[13].src});
	$('#EDAGAMERepeat2').css({'display': 'none'}).attr({'src': EDAGAMEImagesOther[13].src});
	
	$('#EDAGAMEEda').finish();
    $('#EDAGAMEChecker').attr({'src': EDAGAMEImagesOther[13].src});
	 
}

//This function resets audios and sounds.
function EDAGAMEVoiceReset() {

	for (var loop = 0; loop <= 12; loop++) {EDAGAMEVoicesMainBasic[loop].pause(); EDAGAMEVoicesMainBasic[loop].currentTime = 0;};
	for (var loop = 0; loop <= 12; loop++) {EDAGAMEVoicesMainInfo[loop].pause(); EDAGAMEVoicesMainInfo[loop].currentTime = 0;};
	for (var loop = 0; loop <= 10; loop++) {EDAGAMEVoicesColorsInfo[loop].pause(); EDAGAMEVoicesColorsInfo[loop].currentTime = 0;};
	for (var loop = 0; loop <= 19; loop++) {EDAGAMEVoicesShapesInfo[loop].pause(); EDAGAMEVoicesShapesInfo[loop].currentTime = 0;};
	for (var loop = 0; loop <= 19; loop++) {EDAGAMEVoicesShapesTask[loop].pause(); EDAGAMEVoicesShapesTask[loop].currentTime = 0;};
	for (var loop = 0; loop <= 14; loop++) {EDAGAMEVoicesAnimalsInfo[loop].pause(); EDAGAMEVoicesAnimalsInfo[loop].currentTime = 0;};
	for (var loop = 0; loop <= 14; loop++) {EDAGAMEVoicesAnimalsTask[loop].pause(); EDAGAMEVoicesAnimalsTask[loop].currentTime = 0;};
	for (var loop = 0; loop <= 10; loop++) {EDAGAMEVoicesInstrumentsInfo[loop].pause(); EDAGAMEVoicesInstrumentsInfo[loop].currentTime = 0;};
	for (var loop = 0; loop <= 10; loop++) {EDAGAMESounds[loop].pause(); EDAGAMESounds[loop].currentTime = 0;};

};