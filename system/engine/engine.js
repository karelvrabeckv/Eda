//This file is used for defining the Engine System and its possibilities.

//This function starts the Engine System.
function EDAGAMEStartEngine() {
	
	EDAGAMESetSource0(); 
	EDAGAMESetSource1();
	EDAGAMESetSource2();
	EDAGAMESetSource3();
	EDAGAMESetSource4();
	EDAGAMESetSource5();
	
};

var EDAGAMEWanted;
var EDAGAMEMainGroup = EDAGAMEImagesColors;

var EDAGAMERandomSource0PAI;

//This function sets the source of 'Object0'.
function EDAGAMESetSource0() {
	
	EDAGAMERandomSource0PAI = Math.floor(Math.random() * EDAGAMEMainGroup.length);
	
	if ($('a#EDAGAMEA1').hasClass('EDAGAMECurrent')) {
		
		EDAGAMEWanted = document.getElementById('EDAGAMEPoint').src;
		$('#EDAGAMEObject0').attr({'src': EDAGAMEWanted});
		EDAGAMESetPosition0();
		
	}
	
	else if ($('a#EDAGAMEA2').hasClass('EDAGAMECurrent')) {
		
		EDAGAMEWanted = document.getElementById('EDAGAMENumber').innerHTML;
		$('#EDAGAMEObject0').attr({'src': EDAGAMEImagesShapes[EDAGAMEWanted].src});
		EDAGAMESetPosition0();
		
	}

	else if ($('a#EDAGAMEA3').hasClass('EDAGAMECurrent')) {
		
		EDAGAMEWanted = document.getElementById('EDAGAMENumber').innerHTML;
		$('#EDAGAMEObject0').attr({'src': EDAGAMEImagesAnimals[EDAGAMEWanted].src});
		EDAGAMESetPosition0();
		
	}

	else if ($('a#EDAGAMEA4').hasClass('EDAGAMECurrent')) {
		
		EDAGAMEWanted = document.getElementById('EDAGAMENumber').innerHTML;
		$('#EDAGAMEObject0').attr({'src': EDAGAMEImagesInstruments[EDAGAMEWanted].src});
		EDAGAMESetPosition0();
		
	}
	
	else if ($('a#EDAGAMEA5').hasClass('EDAGAMECurrent')) {
		
			for (var loop = 1; loop <= 20; loop++) {
				
				if (EDAGAMEMainGroup[EDAGAMERandomSource0PAI].src == document.getElementById('EDAGAMECatch' + loop).src) {EDAGAMESetSource0(); return;};
				
			};
		
			if ((EDAGAMERandomSource0PAI == EDAGAMERandomSource1PAI) ||
				(EDAGAMERandomSource0PAI == EDAGAMERandomSource2PAI) ||
				(EDAGAMEMainGroup[EDAGAMERandomSource0PAI].src == document.getElementById('EDAGAMECatch1').src) ||
				(EDAGAMEMainGroup[EDAGAMERandomSource0PAI].src == document.getElementById('EDAGAMECatch2').src) ||
				(EDAGAMEMainGroup[EDAGAMERandomSource0PAI].src == document.getElementById('EDAGAMECatch3').src) ||
				(EDAGAMEMainGroup[EDAGAMERandomSource0PAI].src == document.getElementById('EDAGAMECatch4').src) ||
				(EDAGAMEMainGroup[EDAGAMERandomSource0PAI].src == document.getElementById('EDAGAMECatch5').src) ||
				(EDAGAMEMainGroup[EDAGAMERandomSource0PAI].src == document.getElementById('EDAGAMECatch6').src) ||
				(EDAGAMEMainGroup[EDAGAMERandomSource0PAI].src == document.getElementById('EDAGAMECatch7').src) ||
				(EDAGAMEMainGroup[EDAGAMERandomSource0PAI].src == document.getElementById('EDAGAMECatch8').src) ||
				(EDAGAMEMainGroup[EDAGAMERandomSource0PAI].src == document.getElementById('EDAGAMECatch9').src) ||
				(EDAGAMEMainGroup[EDAGAMERandomSource0PAI].src == document.getElementById('EDAGAMECatch10').src) ||
				(EDAGAMEMainGroup[EDAGAMERandomSource0PAI].src == document.getElementById('EDAGAMECatch11').src) ||
				(EDAGAMEMainGroup[EDAGAMERandomSource0PAI].src == document.getElementById('EDAGAMECatch12').src) ||
				(EDAGAMEMainGroup[EDAGAMERandomSource0PAI].src == document.getElementById('EDAGAMECatch13').src) ||
				(EDAGAMEMainGroup[EDAGAMERandomSource0PAI].src == document.getElementById('EDAGAMECatch14').src) ||
				(EDAGAMEMainGroup[EDAGAMERandomSource0PAI].src == document.getElementById('EDAGAMECatch15').src) ||
				(EDAGAMEMainGroup[EDAGAMERandomSource0PAI].src == document.getElementById('EDAGAMECatch16').src) ||
				(EDAGAMEMainGroup[EDAGAMERandomSource0PAI].src == document.getElementById('EDAGAMECatch17').src) ||
				(EDAGAMEMainGroup[EDAGAMERandomSource0PAI].src == document.getElementById('EDAGAMECatch18').src) ||
				(EDAGAMEMainGroup[EDAGAMERandomSource0PAI].src == document.getElementById('EDAGAMECatch19').src) ||
				(EDAGAMEMainGroup[EDAGAMERandomSource0PAI].src == document.getElementById('EDAGAMECatch20').src)) {setTimeout(function() {EDAGAMESetSource0();}, 1);}
                              
			else {
		
				$('#EDAGAMEObject0').attr({'src': EDAGAMEMainGroup[EDAGAMERandomSource0PAI].src});
				$('#EDAGAMEObject3').attr({'src': EDAGAMEMainGroup[EDAGAMERandomSource0PAI].src});
				EDAGAMESetPosition0();
		
			};
			
	};
	
};   

var EDAGAMERandomWidth0;
var EDAGAMERandomHeight0;

//This function sets the position of 'Object0'.
function EDAGAMESetPosition0() {
	
	EDAGAMERandomWidth0 = Math.floor((Math.random() * ($(window).width() - $('#EDAGAMEObject0').width() - $('#EDAGAMEMenu3').width())));
	EDAGAMERandomHeight0 = Math.floor((Math.random() * ($(window).height() - $('#EDAGAMEObject0').height() - $('#EDAGAMEMainMenu2').height())));
	
	if ((EDAGAMERandomWidth0 >= EDAGAMERandomWidth1 - $('#EDAGAMEObject0').width()) &&
        (EDAGAMERandomWidth0 <= EDAGAMERandomWidth1 + $('#EDAGAMEObject1').width()) &&
        (EDAGAMERandomHeight0 >= EDAGAMERandomHeight1 - $('#EDAGAMEObject0').height()) &&
        (EDAGAMERandomHeight0 <= EDAGAMERandomHeight1 + $('#EDAGAMEObject1').height())) {setTimeout(function() {EDAGAMESetPosition0();}, 1); return;};
		
	if ((EDAGAMERandomWidth0 >= EDAGAMERandomWidth2 - $('#EDAGAMEObject0').width()) &&
        (EDAGAMERandomWidth0 <= EDAGAMERandomWidth2 + $('#EDAGAMEObject2').width()) &&
        (EDAGAMERandomHeight0 >= EDAGAMERandomHeight2 - $('#EDAGAMEObject0').height()) &&
        (EDAGAMERandomHeight0 <= EDAGAMERandomHeight2 + $('#EDAGAMEObject2').height())) {setTimeout(function() {EDAGAMESetPosition0();}, 1); return;};

	if ((EDAGAMERandomWidth0 >= EDAGAMERandomWidth3 - $('#EDAGAMEObject0').width()) &&
        (EDAGAMERandomWidth0 <= EDAGAMERandomWidth3 + $('#EDAGAMEObject3').width()) &&
        (EDAGAMERandomHeight0 >= EDAGAMERandomHeight3 - $('#EDAGAMEObject0').height()) &&
        (EDAGAMERandomHeight0 <= EDAGAMERandomHeight3 + $('#EDAGAMEObject3').height())) {setTimeout(function() {EDAGAMESetPosition0();}, 1); return;};

	if ((EDAGAMERandomWidth0 >= EDAGAMERandomWidth4 - $('#EDAGAMEObject0').width()) &&
        (EDAGAMERandomWidth0 <= EDAGAMERandomWidth4 + $('#EDAGAMEObject4').width()) &&
        (EDAGAMERandomHeight0 >= EDAGAMERandomHeight4 - $('#EDAGAMEObject0').height()) &&
        (EDAGAMERandomHeight0 <= EDAGAMERandomHeight4 + $('#EDAGAMEObject4').height())) {setTimeout(function() {EDAGAMESetPosition0();}, 1); return;};

	if ((EDAGAMERandomWidth0 >= EDAGAMERandomWidth5 - $('#EDAGAMEObject0').width()) &&
        (EDAGAMERandomWidth0 <= EDAGAMERandomWidth5 + $('#EDAGAMEObject5').width()) &&
        (EDAGAMERandomHeight0 >= EDAGAMERandomHeight5 - $('#EDAGAMEObject0').height()) &&
        (EDAGAMERandomHeight0 <= EDAGAMERandomHeight5 + $('#EDAGAMEObject5').height())) {setTimeout(function() {EDAGAMESetPosition0();}, 1); return;}
		
	else {
			
		$('#EDAGAMEObject0').css({'left': EDAGAMERandomWidth0});
		$('#EDAGAMEObject0').css({'top': EDAGAMERandomHeight0});
		EDAGAMESetOrientation0();};
	
};

var EDAGAMEOrientation0 = new Array('plus', 'minus');

var EDAGAMERandomWidthOrientation0;
var EDAGAMERandomHeightOrientation0;

//This function sets the direction of the 'Object0' movement.
function EDAGAMESetOrientation0() {
	
	EDAGAMERandomWidthOrientation0 = Math.floor((Math.random() * EDAGAMEOrientation0.length));
	EDAGAMERandomHeightOrientation0 = Math.floor((Math.random() * EDAGAMEOrientation0.length));
	
	x[0] = EDAGAMEOrientation0[EDAGAMERandomWidthOrientation0];
	y[0] = EDAGAMEOrientation0[EDAGAMERandomHeightOrientation0];
	
	EDAGAMEEngine0On();
	
};  

var EDAGAMEToStart0;
 
//This function makes the 'Object0' visible.
function EDAGAMEEngine0On() {
	
	if (document.EDAGAMESettingsForm1.EDAGAMERegime[0].checked == true) {EDAGAMEEngineRun0();};
	$('#EDAGAMEObject0').fadeIn(750); 		
	
};

//This function makes the 'Object0' invisible.
function EDAGAMEEngine0Off() {

	$('#EDAGAMEObject0').fadeOut(750);
	EDAGAMEToStart0 = setTimeout(function() {
			
		clearTimeout(EDAGAMEEngineRun0CountDown);
		EDAGAMESetSource0();
			
	}, 2000);	
	
};

var EDAGAMERandomSource1COL;
var EDAGAMERandomSource1SHA;
var EDAGAMERandomSource1ANI;
var EDAGAMERandomSource1INS;
var EDAGAMERandomSource1PAI;

//This function sets the source of 'Object1'.
function EDAGAMESetSource1() {
	
	EDAGAMERandomSource1COL = Math.floor(Math.random() * EDAGAMEImagesColors.length);
	EDAGAMERandomSource1SHA = Math.floor(Math.random() * EDAGAMEImagesShapes.length);
	EDAGAMERandomSource1ANI = Math.floor(Math.random() * EDAGAMEImagesAnimals.length);
	EDAGAMERandomSource1INS = Math.floor(Math.random() * EDAGAMEImagesInstruments.length);
	EDAGAMERandomSource1PAI = Math.floor(Math.random() * EDAGAMEMainGroup.length);
    
	if ($('a#EDAGAMEA1').hasClass('EDAGAMECurrent')) {
		
			if ((EDAGAMEImagesColors[EDAGAMERandomSource1COL].src == document.getElementById('EDAGAMEPoint').src) ||
				(EDAGAMERandomSource1COL == EDAGAMERandomSource2COL) ||
				(EDAGAMERandomSource1COL == EDAGAMERandomSource3COL) ||
				(EDAGAMERandomSource1COL == EDAGAMERandomSource4COL) ||
				(EDAGAMERandomSource1COL == EDAGAMERandomSource5COL)) {EDAGAMESetSource1();}
                              
			else {
		
				$('#EDAGAMEObject1').attr({'src': EDAGAMEImagesColors[EDAGAMERandomSource1COL].src});
				EDAGAMESetPosition1();
		
			};
		
	}
	
	else if ($('a#EDAGAMEA2').hasClass('EDAGAMECurrent')) {
		
			if ((EDAGAMERandomSource1SHA == document.getElementById('EDAGAMENumber').innerHTML) ||
				(EDAGAMERandomSource1SHA == EDAGAMERandomSource2SHA) ||
				(EDAGAMERandomSource1SHA == EDAGAMERandomSource3SHA) ||
				(EDAGAMERandomSource1SHA == EDAGAMERandomSource4SHA) ||
				(EDAGAMERandomSource1SHA == EDAGAMERandomSource5SHA)) {EDAGAMESetSource1();}
                              
			else {
		
				$('#EDAGAMEObject1').attr({'src': EDAGAMEImagesShapes[EDAGAMERandomSource1SHA].src});
				EDAGAMESetPosition1();
		
			};
		
	}
	
	else if ($('a#EDAGAMEA3').hasClass('EDAGAMECurrent')) {
		
			if ((EDAGAMERandomSource1ANI == document.getElementById('EDAGAMENumber').innerHTML) ||
				(EDAGAMERandomSource1ANI == EDAGAMERandomSource2ANI) ||
				(EDAGAMERandomSource1ANI == EDAGAMERandomSource3ANI) ||
				(EDAGAMERandomSource1ANI == EDAGAMERandomSource4ANI) ||
				(EDAGAMERandomSource1ANI == EDAGAMERandomSource5ANI)) {EDAGAMESetSource1();}
                              
			else {
		
				$('#EDAGAMEObject1').attr({'src': EDAGAMEImagesAnimals[EDAGAMERandomSource1ANI].src});
				EDAGAMESetPosition1();
		
			};
		
	}
	
	else if ($('a#EDAGAMEA4').hasClass('EDAGAMECurrent')) {
		
			if ((EDAGAMERandomSource1INS == document.getElementById('EDAGAMENumber').innerHTML) ||
				(EDAGAMERandomSource1INS == EDAGAMERandomSource2INS) ||
				(EDAGAMERandomSource1INS == EDAGAMERandomSource3INS) ||
				(EDAGAMERandomSource1INS == EDAGAMERandomSource4INS) ||
				(EDAGAMERandomSource1INS == EDAGAMERandomSource5INS)) {EDAGAMESetSource1();}
                              
			else {
		
				$('#EDAGAMEObject1').attr({'src': EDAGAMEImagesInstruments[EDAGAMERandomSource1INS].src});
				EDAGAMESetPosition1();
		
			};
		
	}
	
	else if ($('a#EDAGAMEA5').hasClass('EDAGAMECurrent')) {
		
			if ((EDAGAMERandomSource1PAI == EDAGAMERandomSource0PAI) ||
				(EDAGAMERandomSource1PAI == EDAGAMERandomSource2PAI)) {setTimeout(function() {EDAGAMESetSource1();}, 1);}
                              
			else {
		
				$('#EDAGAMEObject1').attr({'src': EDAGAMEMainGroup[EDAGAMERandomSource1PAI].src});
				EDAGAMESetPosition1();
		
			};
			
	};
	
};

var EDAGAMERandomWidth1;
var EDAGAMERandomHeight1;

//This function sets the position of 'Object1'.
function EDAGAMESetPosition1() {
	
	EDAGAMERandomWidth1 = Math.floor((Math.random() * ($(window).width() - $('#EDAGAMEObject1').width() - $('#EDAGAMEMenu3').width())));
	EDAGAMERandomHeight1 = Math.floor((Math.random() * ($(window).height() - $('#EDAGAMEObject1').height() - $('#EDAGAMEMainMenu2').height())));
	
	if ((EDAGAMERandomWidth1 >= EDAGAMERandomWidth0 - $('#EDAGAMEObject1').width()) &&
        (EDAGAMERandomWidth1 <= EDAGAMERandomWidth0 + $('#EDAGAMEObject0').width()) &&
        (EDAGAMERandomHeight1 >= EDAGAMERandomHeight0 - $('#EDAGAMEObject1').height()) &&
        (EDAGAMERandomHeight1 <= EDAGAMERandomHeight0 + $('#EDAGAMEObject0').height())) {setTimeout(function() {EDAGAMESetPosition1();}, 1); return;};
		
	if ((EDAGAMERandomWidth1 >= EDAGAMERandomWidth2 - $('#EDAGAMEObject1').width()) &&
        (EDAGAMERandomWidth1 <= EDAGAMERandomWidth2 + $('#EDAGAMEObject2').width()) &&
        (EDAGAMERandomHeight1 >= EDAGAMERandomHeight2 - $('#EDAGAMEObject1').height()) &&
        (EDAGAMERandomHeight1 <= EDAGAMERandomHeight2 + $('#EDAGAMEObject2').height())) {setTimeout(function() {EDAGAMESetPosition1();}, 1); return;};

	if ((EDAGAMERandomWidth1 >= EDAGAMERandomWidth3 - $('#EDAGAMEObject1').width()) &&
        (EDAGAMERandomWidth1 <= EDAGAMERandomWidth3 + $('#EDAGAMEObject3').width()) &&
        (EDAGAMERandomHeight1 >= EDAGAMERandomHeight3 - $('#EDAGAMEObject1').height()) &&
        (EDAGAMERandomHeight1 <= EDAGAMERandomHeight3 + $('#EDAGAMEObject3').height())) {setTimeout(function() {EDAGAMESetPosition1();}, 1); return;};

	if ((EDAGAMERandomWidth1 >= EDAGAMERandomWidth4 - $('#EDAGAMEObject1').width()) &&
        (EDAGAMERandomWidth1 <= EDAGAMERandomWidth4 + $('#EDAGAMEObject4').width()) &&
        (EDAGAMERandomHeight1 >= EDAGAMERandomHeight4 - $('#EDAGAMEObject1').height()) &&
        (EDAGAMERandomHeight1 <= EDAGAMERandomHeight4 + $('#EDAGAMEObject4').height())) {setTimeout(function() {EDAGAMESetPosition1();}, 1); return;};

	if ((EDAGAMERandomWidth1 >= EDAGAMERandomWidth5 - $('#EDAGAMEObject1').width()) &&
        (EDAGAMERandomWidth1 <= EDAGAMERandomWidth5 + $('#EDAGAMEObject5').width()) &&
        (EDAGAMERandomHeight1 >= EDAGAMERandomHeight5 - $('#EDAGAMEObject1').height()) &&
        (EDAGAMERandomHeight1 <= EDAGAMERandomHeight5 + $('#EDAGAMEObject5').height())) {setTimeout(function() {EDAGAMESetPosition1();}, 1); return;}
		
	else {
			
		$('#EDAGAMEObject1').css({'left': EDAGAMERandomWidth1});
		$('#EDAGAMEObject1').css({'top': EDAGAMERandomHeight1});
		EDAGAMESetOrientation1();};
	
};

var EDAGAMEOrientation1 = new Array('plus', 'minus');

var EDAGAMERandomWidthOrientation1;
var EDAGAMERandomHeightOrientation1;

//This function sets the direction of the 'Object1' movement.
function EDAGAMESetOrientation1() {
	
	EDAGAMERandomWidthOrientation1 = Math.floor((Math.random() * EDAGAMEOrientation1.length));
	EDAGAMERandomHeightOrientation1 = Math.floor((Math.random() * EDAGAMEOrientation1.length));
	
	x[1] = EDAGAMEOrientation1[EDAGAMERandomWidthOrientation1];
	y[1] = EDAGAMEOrientation1[EDAGAMERandomHeightOrientation1];
	
	EDAGAMEEngine1On();
	
};   
   
var EDAGAMEToStart1;

//This function makes the 'Object1' visible.
function EDAGAMEEngine1On() {
	
	if (document.EDAGAMESettingsForm1.EDAGAMERegime[0].checked == true) {EDAGAMEEngineRun1();};
	$('#EDAGAMEObject1').fadeIn(750); 		
	
};

//This function makes the 'Object1' invisible.
function EDAGAMEEngine1Off() {

	$('#EDAGAMEObject1').fadeOut(750);
	EDAGAMEToStart1 = setTimeout(function() {
			
		clearTimeout(EDAGAMEEngineRun1CountDown);
		EDAGAMESetSource1();
			
	}, 2000);	
	
};

var EDAGAMERandomSource2COL;
var EDAGAMERandomSource2SHA;
var EDAGAMERandomSource2ANI;
var EDAGAMERandomSource2INS;
var EDAGAMERandomSource2PAI;

//This function sets the source of 'Object2'.
function EDAGAMESetSource2() {
	
	EDAGAMERandomSource2COL = Math.floor(Math.random() * EDAGAMEImagesColors.length);
	EDAGAMERandomSource2SHA = Math.floor(Math.random() * EDAGAMEImagesShapes.length);
	EDAGAMERandomSource2ANI = Math.floor(Math.random() * EDAGAMEImagesAnimals.length);
	EDAGAMERandomSource2INS = Math.floor(Math.random() * EDAGAMEImagesInstruments.length);
	EDAGAMERandomSource2PAI = Math.floor(Math.random() * EDAGAMEMainGroup.length);
    
	if ($('a#EDAGAMEA1').hasClass('EDAGAMECurrent')) {
		
			if ((EDAGAMEImagesColors[EDAGAMERandomSource2COL].src == document.getElementById('EDAGAMEPoint').src) ||
				(EDAGAMERandomSource2COL == EDAGAMERandomSource1COL) ||
				(EDAGAMERandomSource2COL == EDAGAMERandomSource3COL) ||
				(EDAGAMERandomSource2COL == EDAGAMERandomSource4COL) ||
				(EDAGAMERandomSource2COL == EDAGAMERandomSource5COL)) {EDAGAMESetSource2();}
                              
			else {
		
				$('#EDAGAMEObject2').attr({'src': EDAGAMEImagesColors[EDAGAMERandomSource2COL].src});
				EDAGAMESetPosition2();
		
			};
		
	}
	
	else if ($('a#EDAGAMEA2').hasClass('EDAGAMECurrent')) {
		
			if ((EDAGAMERandomSource2SHA == document.getElementById('EDAGAMENumber').innerHTML) ||
				(EDAGAMERandomSource2SHA == EDAGAMERandomSource1SHA) ||
				(EDAGAMERandomSource2SHA == EDAGAMERandomSource3SHA) ||
				(EDAGAMERandomSource2SHA == EDAGAMERandomSource4SHA) ||
				(EDAGAMERandomSource2SHA == EDAGAMERandomSource5SHA)) {EDAGAMESetSource2();}
                              
			else {
		
				$('#EDAGAMEObject2').attr({'src': EDAGAMEImagesShapes[EDAGAMERandomSource2SHA].src});
				EDAGAMESetPosition2();
		
			};
		
	}
	
	else if ($('a#EDAGAMEA3').hasClass('EDAGAMECurrent')) {
		
			if ((EDAGAMERandomSource2ANI == document.getElementById('EDAGAMENumber').innerHTML) ||
				(EDAGAMERandomSource2ANI == EDAGAMERandomSource1ANI) ||
				(EDAGAMERandomSource2ANI == EDAGAMERandomSource3ANI) ||
				(EDAGAMERandomSource2ANI == EDAGAMERandomSource4ANI) ||
				(EDAGAMERandomSource2ANI == EDAGAMERandomSource5ANI)) {EDAGAMESetSource2();}
                              
			else {
		
				$('#EDAGAMEObject2').attr({'src': EDAGAMEImagesAnimals[EDAGAMERandomSource2ANI].src});
				EDAGAMESetPosition2();
		
			};
		
	}
	
	else if ($('a#EDAGAMEA4').hasClass('EDAGAMECurrent')) {
		
			if ((EDAGAMERandomSource2INS == document.getElementById('EDAGAMENumber').innerHTML) ||
				(EDAGAMERandomSource2INS == EDAGAMERandomSource1INS) ||
				(EDAGAMERandomSource2INS == EDAGAMERandomSource3INS) ||
				(EDAGAMERandomSource2INS == EDAGAMERandomSource4INS) ||
				(EDAGAMERandomSource2INS == EDAGAMERandomSource5INS)) {EDAGAMESetSource2();}
                              
			else {
		
				$('#EDAGAMEObject2').attr({'src': EDAGAMEImagesInstruments[EDAGAMERandomSource2INS].src});
				EDAGAMESetPosition2();
		
			};
		
	}
	
	else if ($('a#EDAGAMEA5').hasClass('EDAGAMECurrent')) {
		
			if ((EDAGAMERandomSource2PAI == EDAGAMERandomSource0PAI) ||
				(EDAGAMERandomSource2PAI == EDAGAMERandomSource1PAI)) {setTimeout(function() {EDAGAMESetSource2();}, 1);}
                              
			else {
		
				$('#EDAGAMEObject2').attr({'src': EDAGAMEMainGroup[EDAGAMERandomSource2PAI].src});
				EDAGAMESetPosition2();
		
			};
			
	};
	
};  

var EDAGAMERandomWidth2;
var EDAGAMERandomHeight2;

//This function sets the position of 'Object2'.
function EDAGAMESetPosition2() {
	
	EDAGAMERandomWidth2 = Math.floor((Math.random() * ($(window).width() - $('#EDAGAMEObject2').width() - $('#EDAGAMEMenu3').width())));
	EDAGAMERandomHeight2 = Math.floor((Math.random() * ($(window).height() - $('#EDAGAMEObject2').height() - $('#EDAGAMEMainMenu2').height())));
	
	if ((EDAGAMERandomWidth2 >= EDAGAMERandomWidth0 - $('#EDAGAMEObject2').width()) &&
        (EDAGAMERandomWidth2 <= EDAGAMERandomWidth0 + $('#EDAGAMEObject0').width()) &&
        (EDAGAMERandomHeight2 >= EDAGAMERandomHeight0 - $('#EDAGAMEObject2').height()) &&
        (EDAGAMERandomHeight2 <= EDAGAMERandomHeight0 + $('#EDAGAMEObject0').height())) {setTimeout(function() {EDAGAMESetPosition2();}, 1); return;};
		
	if ((EDAGAMERandomWidth2 >= EDAGAMERandomWidth1 - $('#EDAGAMEObject2').width()) &&
        (EDAGAMERandomWidth2 <= EDAGAMERandomWidth1 + $('#EDAGAMEObject1').width()) &&
        (EDAGAMERandomHeight2 >= EDAGAMERandomHeight1 - $('#EDAGAMEObject2').height()) &&
        (EDAGAMERandomHeight2 <= EDAGAMERandomHeight1 + $('#EDAGAMEObject1').height())) {setTimeout(function() {EDAGAMESetPosition2();}, 1); return;};

	if ((EDAGAMERandomWidth2 >= EDAGAMERandomWidth3 - $('#EDAGAMEObject2').width()) &&
        (EDAGAMERandomWidth2 <= EDAGAMERandomWidth3 + $('#EDAGAMEObject3').width()) &&
        (EDAGAMERandomHeight2 >= EDAGAMERandomHeight3 - $('#EDAGAMEObject2').height()) &&
        (EDAGAMERandomHeight2 <= EDAGAMERandomHeight3 + $('#EDAGAMEObject3').height())) {setTimeout(function() {EDAGAMESetPosition2();}, 1); return;};

	if ((EDAGAMERandomWidth2 >= EDAGAMERandomWidth4 - $('#EDAGAMEObject2').width()) &&
        (EDAGAMERandomWidth2 <= EDAGAMERandomWidth4 + $('#EDAGAMEObject4').width()) &&
        (EDAGAMERandomHeight2 >= EDAGAMERandomHeight4 - $('#EDAGAMEObject2').width()) &&
        (EDAGAMERandomHeight2 <= EDAGAMERandomHeight4 + $('#EDAGAMEObject4').width())) {setTimeout(function() {EDAGAMESetPosition2();}, 1); return;};

	if ((EDAGAMERandomWidth2 >= EDAGAMERandomWidth5 - $('#EDAGAMEObject2').width()) &&
        (EDAGAMERandomWidth2 <= EDAGAMERandomWidth5 + $('#EDAGAMEObject5').width()) &&
        (EDAGAMERandomHeight2 >= EDAGAMERandomHeight5 - $('#EDAGAMEObject2').width()) &&
        (EDAGAMERandomHeight2 <= EDAGAMERandomHeight5 + $('#EDAGAMEObject5').width())) {setTimeout(function() {EDAGAMESetPosition2();}, 1); return;}
		
	else {
			
		$('#EDAGAMEObject2').css({'left': EDAGAMERandomWidth2});
		$('#EDAGAMEObject2').css({'top': EDAGAMERandomHeight2});
		EDAGAMESetOrientation2();};
	
};

var EDAGAMEOrientation2 = new Array('plus', 'minus');

var EDAGAMERandomWidthOrientation2;
var EDAGAMERandomHeightOrientation2;

//This function sets the direction of the 'Object2' movement.
function EDAGAMESetOrientation2() {
	
	EDAGAMERandomWidthOrientation2 = Math.floor((Math.random() * EDAGAMEOrientation2.length));
	EDAGAMERandomHeightOrientation2 = Math.floor((Math.random() * EDAGAMEOrientation2.length));
	
	x[2] = EDAGAMEOrientation2[EDAGAMERandomWidthOrientation2];
	y[2] = EDAGAMEOrientation2[EDAGAMERandomHeightOrientation2];
	
	EDAGAMEEngine2On();
	
};
   
var EDAGAMEToStart2;

//This function makes the 'Object2' visible.  
function EDAGAMEEngine2On() {
	
	if (document.EDAGAMESettingsForm1.EDAGAMERegime[0].checked == true) {EDAGAMEEngineRun2();};
	$('#EDAGAMEObject2').fadeIn(750); 		
	
};

//This function makes the 'Object2' invisible.
function EDAGAMEEngine2Off() {

	$('#EDAGAMEObject2').fadeOut(750);
	EDAGAMEToStart2 = setTimeout(function() {
			
		clearTimeout(EDAGAMEEngineRun2CountDown);
		EDAGAMESetSource2();
			
	}, 2000);	
	
};

var EDAGAMERandomSource3COL;
var EDAGAMERandomSource3SHA;
var EDAGAMERandomSource3ANI;
var EDAGAMERandomSource3INS;

//This function sets the source of 'Object3'.
function EDAGAMESetSource3() {
	
	EDAGAMERandomSource3COL = Math.floor(Math.random() * EDAGAMEImagesColors.length);
	EDAGAMERandomSource3SHA = Math.floor(Math.random() * EDAGAMEImagesShapes.length);
	EDAGAMERandomSource3ANI = Math.floor(Math.random() * EDAGAMEImagesAnimals.length);
	EDAGAMERandomSource3INS = Math.floor(Math.random() * EDAGAMEImagesInstruments.length);
    
	if ($('a#EDAGAMEA1').hasClass('EDAGAMECurrent')) {
		
			if ((EDAGAMEImagesColors[EDAGAMERandomSource3COL].src == document.getElementById('EDAGAMEPoint').src) ||
				(EDAGAMERandomSource3COL == EDAGAMERandomSource1COL) ||
				(EDAGAMERandomSource3COL == EDAGAMERandomSource2COL) ||
				(EDAGAMERandomSource3COL == EDAGAMERandomSource4COL) ||
				(EDAGAMERandomSource3COL == EDAGAMERandomSource5COL)) {EDAGAMESetSource3();}
                              
			else {
		
				$('#EDAGAMEObject3').attr({'src': EDAGAMEImagesColors[EDAGAMERandomSource3COL].src});
				EDAGAMESetPosition3();
		
			};
		
	}
	
	else if ($('a#EDAGAMEA2').hasClass('EDAGAMECurrent')) {
		
			if ((EDAGAMERandomSource3SHA == document.getElementById('EDAGAMENumber').innerHTML) ||
				(EDAGAMERandomSource3SHA == EDAGAMERandomSource1SHA) ||
				(EDAGAMERandomSource3SHA == EDAGAMERandomSource2SHA) ||
				(EDAGAMERandomSource3SHA == EDAGAMERandomSource4SHA) ||
				(EDAGAMERandomSource3SHA == EDAGAMERandomSource5SHA)) {EDAGAMESetSource3();}
                              
			else {
		
				$('#EDAGAMEObject3').attr({'src': EDAGAMEImagesShapes[EDAGAMERandomSource3SHA].src});
				EDAGAMESetPosition3();
		
			};
		
	}
	
	else if ($('a#EDAGAMEA3').hasClass('EDAGAMECurrent')) {
		
			if ((EDAGAMERandomSource3ANI == document.getElementById('EDAGAMENumber').innerHTML) ||
				(EDAGAMERandomSource3ANI == EDAGAMERandomSource1ANI) ||
				(EDAGAMERandomSource3ANI == EDAGAMERandomSource2ANI) ||
				(EDAGAMERandomSource3ANI == EDAGAMERandomSource4ANI) ||
				(EDAGAMERandomSource3ANI == EDAGAMERandomSource5ANI)) {EDAGAMESetSource3();}
                              
			else {
		
				$('#EDAGAMEObject3').attr({'src': EDAGAMEImagesAnimals[EDAGAMERandomSource3ANI].src});
				EDAGAMESetPosition3();
		
			};
		
	}
	
	else if ($('a#EDAGAMEA4').hasClass('EDAGAMECurrent')) {
		
			if ((EDAGAMERandomSource3INS == document.getElementById('EDAGAMENumber').innerHTML) ||
				(EDAGAMERandomSource3INS == EDAGAMERandomSource1INS) ||
				(EDAGAMERandomSource3INS == EDAGAMERandomSource2INS) ||
				(EDAGAMERandomSource3INS == EDAGAMERandomSource4INS) ||
				(EDAGAMERandomSource3INS == EDAGAMERandomSource5INS)) {EDAGAMESetSource3();}
                              
			else {
		
				$('#EDAGAMEObject3').attr({'src': EDAGAMEImagesInstruments[EDAGAMERandomSource3INS].src});
				EDAGAMESetPosition3();
		
			};
		
	}
	
	else if ($('a#EDAGAMEA5').hasClass('EDAGAMECurrent')) {
		
			if (document.getElementById('EDAGAMEObject3').src != EDAGAMEMainGroup[EDAGAMERandomSource0PAI].src) {setTimeout(function() {EDAGAMESetSource3();}, 1);}
                              
			else {
				
				EDAGAMESetPosition3();
		
			};
		
	}
	
	
};    

var EDAGAMERandomWidth3;
var EDAGAMERandomHeight3;

//This function sets the position of 'Object3'.
function EDAGAMESetPosition3() {
	
	EDAGAMERandomWidth3 = Math.floor((Math.random() * ($(window).width() - $('#EDAGAMEObject3').width() - $('#EDAGAMEMenu3').width())));
	EDAGAMERandomHeight3 = Math.floor((Math.random() * ($(window).height() - $('#EDAGAMEObject3').height() - $('#EDAGAMEMainMenu2').height())));
	
	if ((EDAGAMERandomWidth3 >= EDAGAMERandomWidth0 - $('#EDAGAMEObject3').width()) &&
        (EDAGAMERandomWidth3 <= EDAGAMERandomWidth0 + $('#EDAGAMEObject0').width()) &&
        (EDAGAMERandomHeight3 >= EDAGAMERandomHeight0 - $('#EDAGAMEObject3').height()) &&
        (EDAGAMERandomHeight3 <= EDAGAMERandomHeight0 + $('#EDAGAMEObject0').height())) {setTimeout(function() {EDAGAMESetPosition3();}, 1); return;};
		
	if ((EDAGAMERandomWidth3 >= EDAGAMERandomWidth1 - $('#EDAGAMEObject3').width()) &&
        (EDAGAMERandomWidth3 <= EDAGAMERandomWidth1 + $('#EDAGAMEObject1').width()) &&
        (EDAGAMERandomHeight3 >= EDAGAMERandomHeight1 - $('#EDAGAMEObject3').height()) &&
        (EDAGAMERandomHeight3 <= EDAGAMERandomHeight1 + $('#EDAGAMEObject1').height())) {setTimeout(function() {EDAGAMESetPosition3();}, 1); return;};

	if ((EDAGAMERandomWidth3 >= EDAGAMERandomWidth2 - $('#EDAGAMEObject3').width()) &&
        (EDAGAMERandomWidth3 <= EDAGAMERandomWidth2 + $('#EDAGAMEObject2').width()) &&
        (EDAGAMERandomHeight3 >= EDAGAMERandomHeight2 - $('#EDAGAMEObject3').height()) &&
        (EDAGAMERandomHeight3 <= EDAGAMERandomHeight2 + $('#EDAGAMEObject2').height())) {setTimeout(function() {EDAGAMESetPosition3();}, 1); return;};

	if ((EDAGAMERandomWidth3 >= EDAGAMERandomWidth4 - $('#EDAGAMEObject3').width()) &&
        (EDAGAMERandomWidth3 <= EDAGAMERandomWidth4 + $('#EDAGAMEObject4').width()) &&
        (EDAGAMERandomHeight3 >= EDAGAMERandomHeight4 - $('#EDAGAMEObject3').height()) &&
        (EDAGAMERandomHeight3 <= EDAGAMERandomHeight4 + $('#EDAGAMEObject4').height())) {setTimeout(function() {EDAGAMESetPosition3();}, 1); return;};

	if ((EDAGAMERandomWidth3 >= EDAGAMERandomWidth5 - $('#EDAGAMEObject3').width()) &&
        (EDAGAMERandomWidth3 <= EDAGAMERandomWidth5 + $('#EDAGAMEObject5').width()) &&
        (EDAGAMERandomHeight3 >= EDAGAMERandomHeight5 - $('#EDAGAMEObject3').height()) &&
        (EDAGAMERandomHeight3 <= EDAGAMERandomHeight5 + $('#EDAGAMEObject5').height())) {setTimeout(function() {EDAGAMESetPosition3();}, 1); return;}
		
		else {
			
			$('#EDAGAMEObject3').css({'left': EDAGAMERandomWidth3});
			$('#EDAGAMEObject3').css({'top': EDAGAMERandomHeight3});
			EDAGAMESetOrientation3();};	
	
};

var EDAGAMEOrientation3 = new Array('plus', 'minus');

var EDAGAMERandomWidthOrientation3;
var EDAGAMERandomHeightOrientation3;

//This function sets the direction of the 'Object3' movement.
function EDAGAMESetOrientation3() {
	
	EDAGAMERandomWidthOrientation3 = Math.floor((Math.random() * EDAGAMEOrientation3.length));
	EDAGAMERandomHeightOrientation3 = Math.floor((Math.random() * EDAGAMEOrientation3.length));
	
	x[3] = EDAGAMEOrientation3[EDAGAMERandomWidthOrientation3];
	y[3] = EDAGAMEOrientation3[EDAGAMERandomHeightOrientation3];
	
	EDAGAMEEngine3On();
	
};
   
var EDAGAMEToStart3;

//This function makes the 'Object3' visible.
function EDAGAMEEngine3On() {
	
	if (document.EDAGAMESettingsForm1.EDAGAMERegime[0].checked == true) {EDAGAMEEngineRun3();};
	$('#EDAGAMEObject3').fadeIn(750); 		
	
};

//This function makes the 'Object3' invisible.
function EDAGAMEEngine3Off() {

	$('#EDAGAMEObject3').fadeOut(750);
	EDAGAMEToStart3 = setTimeout(function() {
			
		clearTimeout(EDAGAMEEngineRun3CountDown);
		EDAGAMESetSource3();
			
	}, 2000);	
	
};

var EDAGAMERandomSource4COL;
var EDAGAMERandomSource4SHA;
var EDAGAMERandomSource4ANI;
var EDAGAMERandomSource4INS;
var EDAGAMERandomSource4PAI;

//This function sets the source of 'Object4'.
function EDAGAMESetSource4() {
	
	EDAGAMERandomSource4COL = Math.floor(Math.random() * EDAGAMEImagesColors.length);
	EDAGAMERandomSource4SHA = Math.floor(Math.random() * EDAGAMEImagesShapes.length);
	EDAGAMERandomSource4ANI = Math.floor(Math.random() * EDAGAMEImagesAnimals.length);
	EDAGAMERandomSource4INS = Math.floor(Math.random() * EDAGAMEImagesInstruments.length);
	EDAGAMERandomSource4PAI = Math.floor(Math.random() * EDAGAMEMainGroup.length);
    
	if ($('a#EDAGAMEA1').hasClass('EDAGAMECurrent')) {
		
			if ((EDAGAMEImagesColors[EDAGAMERandomSource4COL].src == document.getElementById('EDAGAMEPoint').src) ||
				(EDAGAMERandomSource4COL == EDAGAMERandomSource1COL) ||
				(EDAGAMERandomSource4COL == EDAGAMERandomSource2COL) ||
				(EDAGAMERandomSource4COL == EDAGAMERandomSource3COL) ||
				(EDAGAMERandomSource4COL == EDAGAMERandomSource5COL)) {EDAGAMESetSource4();}
                              
			else {
		
				$('#EDAGAMEObject4').attr({'src': EDAGAMEImagesColors[EDAGAMERandomSource4COL].src});
				EDAGAMESetPosition4();
		
			};
		
	}
	
	else if ($('a#EDAGAMEA2').hasClass('EDAGAMECurrent')) {
		
			if ((EDAGAMERandomSource4SHA == document.getElementById('EDAGAMENumber').innerHTML) ||
				(EDAGAMERandomSource4SHA == EDAGAMERandomSource1SHA) ||
				(EDAGAMERandomSource4SHA == EDAGAMERandomSource2SHA) ||
				(EDAGAMERandomSource4SHA == EDAGAMERandomSource3SHA) ||
				(EDAGAMERandomSource4SHA == EDAGAMERandomSource5SHA)) {EDAGAMESetSource4();}
                              
			else {
		
				$('#EDAGAMEObject4').attr({'src': EDAGAMEImagesShapes[EDAGAMERandomSource4SHA].src});
				EDAGAMESetPosition4();
		
			};
		
	}
	
	else if ($('a#EDAGAMEA3').hasClass('EDAGAMECurrent')) {
		
			if ((EDAGAMERandomSource4ANI == document.getElementById('EDAGAMENumber').innerHTML) ||
				(EDAGAMERandomSource4ANI == EDAGAMERandomSource1ANI) ||
				(EDAGAMERandomSource4ANI == EDAGAMERandomSource2ANI) ||
				(EDAGAMERandomSource4ANI == EDAGAMERandomSource3ANI) ||
				(EDAGAMERandomSource4ANI == EDAGAMERandomSource5ANI)) {EDAGAMESetSource4();}
                              
			else {
		
				$('#EDAGAMEObject4').attr({'src': EDAGAMEImagesAnimals[EDAGAMERandomSource4ANI].src});
				EDAGAMESetPosition4();
		
			};
		
	}
	
	else if ($('a#EDAGAMEA4').hasClass('EDAGAMECurrent')) {
		
			if ((EDAGAMERandomSource4INS == document.getElementById('EDAGAMENumber').innerHTML) ||
				(EDAGAMERandomSource4INS == EDAGAMERandomSource1INS) ||
				(EDAGAMERandomSource4INS == EDAGAMERandomSource2INS) ||
				(EDAGAMERandomSource4INS == EDAGAMERandomSource3INS) ||
				(EDAGAMERandomSource4INS == EDAGAMERandomSource5INS)) {EDAGAMESetSource4();}
                              
			else {
		
				$('#EDAGAMEObject4').attr({'src': EDAGAMEImagesInstruments[EDAGAMERandomSource4INS].src});
				EDAGAMESetPosition4();
		
			};
		
	}
	
	else if ($('a#EDAGAMEA5').hasClass('EDAGAMECurrent')) {
		
			if ((EDAGAMERandomSource4PAI == EDAGAMERandomSource0PAI) ||
				(EDAGAMERandomSource4PAI == EDAGAMERandomSource5PAI)) {setTimeout(function() {EDAGAMESetSource4();}, 1);}
                              
			else {
		
				$('#EDAGAMEObject4').attr({'src': EDAGAMEMainGroup[EDAGAMERandomSource4PAI].src});
				EDAGAMESetPosition4();
		
			};
			
	};
	
};  

var EDAGAMERandomWidth4;
var EDAGAMERandomHeight4;

//This function sets the position of 'Object4'.
function EDAGAMESetPosition4() {
	
	EDAGAMERandomWidth4 = Math.floor((Math.random() * ($(window).width() - $('#EDAGAMEObject4').width() - $('#EDAGAMEMenu3').width())));
	EDAGAMERandomHeight4 = Math.floor((Math.random() * ($(window).height() - $('#EDAGAMEObject4').height() - $('#EDAGAMEMainMenu2').height())));
	
	if ((EDAGAMERandomWidth4 >= EDAGAMERandomWidth0 - $('#EDAGAMEObject4').width()) &&
        (EDAGAMERandomWidth4 <= EDAGAMERandomWidth0 + $('#EDAGAMEObject0').width()) &&
        (EDAGAMERandomHeight4 >= EDAGAMERandomHeight0 - $('#EDAGAMEObject4').height()) &&
        (EDAGAMERandomHeight4 <= EDAGAMERandomHeight0 + $('#EDAGAMEObject0').height())) {setTimeout(function() {EDAGAMESetPosition4();}, 1); return;};
		
	if ((EDAGAMERandomWidth4 >= EDAGAMERandomWidth1 - $('#EDAGAMEObject4').width()) &&
        (EDAGAMERandomWidth4 <= EDAGAMERandomWidth1 + $('#EDAGAMEObject1').width()) &&
        (EDAGAMERandomHeight4 >= EDAGAMERandomHeight1 - $('#EDAGAMEObject4').height()) &&
        (EDAGAMERandomHeight4 <= EDAGAMERandomHeight1 + $('#EDAGAMEObject1').height())) {setTimeout(function() {EDAGAMESetPosition4();}, 1); return;};

	if ((EDAGAMERandomWidth4 >= EDAGAMERandomWidth2 - $('#EDAGAMEObject4').width()) &&
        (EDAGAMERandomWidth4 <= EDAGAMERandomWidth2 + $('#EDAGAMEObject2').width()) &&
        (EDAGAMERandomHeight4 >= EDAGAMERandomHeight2 - $('#EDAGAMEObject4').height()) &&
        (EDAGAMERandomHeight4 <= EDAGAMERandomHeight2 + $('#EDAGAMEObject2').height())) {setTimeout(function() {EDAGAMESetPosition4();}, 1); return;};

	if ((EDAGAMERandomWidth4 >= EDAGAMERandomWidth3 - $('#EDAGAMEObject4').width()) &&
        (EDAGAMERandomWidth4 <= EDAGAMERandomWidth3 + $('#EDAGAMEObject3').width()) &&
        (EDAGAMERandomHeight4 >= EDAGAMERandomHeight3 - $('#EDAGAMEObject4').height()) &&
        (EDAGAMERandomHeight4 <= EDAGAMERandomHeight3 + $('#EDAGAMEObject3').height())) {setTimeout(function() {EDAGAMESetPosition4();}, 1); return;};

	if ((EDAGAMERandomWidth4 >= EDAGAMERandomWidth5 - $('#EDAGAMEObject4').width()) &&
        (EDAGAMERandomWidth4 <= EDAGAMERandomWidth5 + $('#EDAGAMEObject5').width()) &&
        (EDAGAMERandomHeight4 >= EDAGAMERandomHeight5 - $('#EDAGAMEObject4').height()) &&
        (EDAGAMERandomHeight4 <= EDAGAMERandomHeight5 + $('#EDAGAMEObject5').height())) {setTimeout(function() {EDAGAMESetPosition4();}, 1); return;}
		
		else {
			
			$('#EDAGAMEObject4').css({'left': EDAGAMERandomWidth4});
			$('#EDAGAMEObject4').css({'top': EDAGAMERandomHeight4});
			EDAGAMESetOrientation4();};
	
};

var EDAGAMEOrientation4 = new Array('plus', 'minus');

var EDAGAMERandomWidthOrientation4;
var EDAGAMERandomHeightOrientation4;

//This function sets the direction of the 'Object4' movement.
function EDAGAMESetOrientation4() {
	
	EDAGAMERandomWidthOrientation4 = Math.floor((Math.random() * EDAGAMEOrientation4.length));
	EDAGAMERandomHeightOrientation4 = Math.floor((Math.random() * EDAGAMEOrientation4.length));
	
	x[4] = EDAGAMEOrientation4[EDAGAMERandomWidthOrientation4];
	y[4] = EDAGAMEOrientation4[EDAGAMERandomHeightOrientation4];
	
	EDAGAMEEngine4On();
	
};
   
var EDAGAMEToStart4;
   
//This function makes the 'Object4' visible.
function EDAGAMEEngine4On() {
	
	if (document.EDAGAMESettingsForm1.EDAGAMERegime[0].checked == true) {EDAGAMEEngineRun4();};
	$('#EDAGAMEObject4').fadeIn(750); 		
	
};

//This function makes the 'Object4' invisible.
function EDAGAMEEngine4Off() {

	$('#EDAGAMEObject4').fadeOut(750);
	EDAGAMEToStart4 = setTimeout(function() {
			
		clearTimeout(EDAGAMEEngineRun4CountDown);
		EDAGAMESetSource4();
			
	}, 2000);	
	
};

var EDAGAMERandomSource5COL;
var EDAGAMERandomSource5SHA;
var EDAGAMERandomSource5ANI;
var EDAGAMERandomSource5INS;
var EDAGAMERandomSource5PAI;

//This function sets the source of 'Object5'.
function EDAGAMESetSource5() {
	
	EDAGAMERandomSource5COL = Math.floor(Math.random() * EDAGAMEImagesColors.length);
	EDAGAMERandomSource5SHA = Math.floor(Math.random() * EDAGAMEImagesShapes.length);
	EDAGAMERandomSource5ANI = Math.floor(Math.random() * EDAGAMEImagesAnimals.length);
	EDAGAMERandomSource5INS = Math.floor(Math.random() * EDAGAMEImagesInstruments.length);
	EDAGAMERandomSource5PAI = Math.floor(Math.random() * EDAGAMEMainGroup.length);
    
	if ($('a#EDAGAMEA1').hasClass('EDAGAMECurrent')) {
		
			if ((EDAGAMEImagesColors[EDAGAMERandomSource5COL].src == document.getElementById('EDAGAMEPoint').src) ||
				(EDAGAMERandomSource5COL == EDAGAMERandomSource1COL) ||
				(EDAGAMERandomSource5COL == EDAGAMERandomSource2COL) ||
				(EDAGAMERandomSource5COL == EDAGAMERandomSource3COL) ||
				(EDAGAMERandomSource5COL == EDAGAMERandomSource4COL)) {EDAGAMESetSource5();}
                              
			else {
		
				$('#EDAGAMEObject5').attr({'src': EDAGAMEImagesColors[EDAGAMERandomSource5COL].src});
				EDAGAMESetPosition5();
		
			};
		
	}
	
	else if ($('a#EDAGAMEA2').hasClass('EDAGAMECurrent')) {
		
			if ((EDAGAMERandomSource5SHA == document.getElementById('EDAGAMENumber').innerHTML) ||
				(EDAGAMERandomSource5SHA == EDAGAMERandomSource1SHA) ||
				(EDAGAMERandomSource5SHA == EDAGAMERandomSource2SHA) ||
				(EDAGAMERandomSource5SHA == EDAGAMERandomSource3SHA) ||
				(EDAGAMERandomSource5SHA == EDAGAMERandomSource4SHA)) {EDAGAMESetSource5();}
                              
			else {
		
				$('#EDAGAMEObject5').attr({'src': EDAGAMEImagesShapes[EDAGAMERandomSource5SHA].src});
				EDAGAMESetPosition5();
		
			};
		
	}
	
	else if ($('a#EDAGAMEA3').hasClass('EDAGAMECurrent')) {
		
			if ((EDAGAMERandomSource5ANI == document.getElementById('EDAGAMENumber').innerHTML) ||
				(EDAGAMERandomSource5ANI == EDAGAMERandomSource1ANI) ||
				(EDAGAMERandomSource5ANI == EDAGAMERandomSource2ANI) ||
				(EDAGAMERandomSource5ANI == EDAGAMERandomSource3ANI) ||
				(EDAGAMERandomSource5ANI == EDAGAMERandomSource4ANI)) {EDAGAMESetSource5();}
                              
			else {
		
				$('#EDAGAMEObject5').attr({'src': EDAGAMEImagesAnimals[EDAGAMERandomSource5ANI].src});
				EDAGAMESetPosition5();
		
			};
		
	}
	
	else if ($('a#EDAGAMEA4').hasClass('EDAGAMECurrent')) {
		
			if ((EDAGAMERandomSource5INS == document.getElementById('EDAGAMENumber').innerHTML) ||
				(EDAGAMERandomSource5INS == EDAGAMERandomSource1INS) ||
				(EDAGAMERandomSource5INS == EDAGAMERandomSource2INS) ||
				(EDAGAMERandomSource5INS == EDAGAMERandomSource3INS) ||
				(EDAGAMERandomSource5INS == EDAGAMERandomSource4INS)) {EDAGAMESetSource5();}
                              
			else {
		
				$('#EDAGAMEObject5').attr({'src': EDAGAMEImagesInstruments[EDAGAMERandomSource5INS].src});
				EDAGAMESetPosition5();
		
			};
		
	}
	
	else if ($('a#EDAGAMEA5').hasClass('EDAGAMECurrent')) {
		
			if ((EDAGAMERandomSource5PAI == EDAGAMERandomSource0PAI) ||
				(EDAGAMERandomSource5PAI == EDAGAMERandomSource4PAI)) {setTimeout(function() {EDAGAMESetSource5();}, 1);}
                              
			else {
		
				$('#EDAGAMEObject5').attr({'src': EDAGAMEMainGroup[EDAGAMERandomSource5PAI].src});
				EDAGAMESetPosition5();
		
			};
			
	};
	
};    

var EDAGAMERandomWidth5;
var EDAGAMERandomHeight5;

//This function sets the position of 'Object5'.
function EDAGAMESetPosition5() {
	
	EDAGAMERandomWidth5 = Math.floor((Math.random() * ($(window).width() - $('#EDAGAMEObject5').width() - $('#EDAGAMEMenu3').width())));
	EDAGAMERandomHeight5 = Math.floor((Math.random() * ($(window).height() - $('#EDAGAMEObject5').height() - $('#EDAGAMEMainMenu2').height())));
	
	if ((EDAGAMERandomWidth5 >= EDAGAMERandomWidth0 - $('#EDAGAMEObject5').width()) &&
        (EDAGAMERandomWidth5 <= EDAGAMERandomWidth0 + $('#EDAGAMEObject0').width()) &&
        (EDAGAMERandomHeight5 >= EDAGAMERandomHeight0 - $('#EDAGAMEObject5').height()) &&
        (EDAGAMERandomHeight5 <= EDAGAMERandomHeight0 + $('#EDAGAMEObject0').height())) {setTimeout(function() {EDAGAMESetPosition5();}, 1); return;};
		
	if ((EDAGAMERandomWidth5 >= EDAGAMERandomWidth1 - $('#EDAGAMEObject5').width()) &&
        (EDAGAMERandomWidth5 <= EDAGAMERandomWidth1 + $('#EDAGAMEObject1').width()) &&
        (EDAGAMERandomHeight5 >= EDAGAMERandomHeight1 - $('#EDAGAMEObject5').height()) &&
        (EDAGAMERandomHeight5 <= EDAGAMERandomHeight1 + $('#EDAGAMEObject1').height())) {setTimeout(function() {EDAGAMESetPosition5();}, 1); return;};

	if ((EDAGAMERandomWidth5 >= EDAGAMERandomWidth2 - $('#EDAGAMEObject5').width()) &&
        (EDAGAMERandomWidth5 <= EDAGAMERandomWidth2 + $('#EDAGAMEObject2').width()) &&
        (EDAGAMERandomHeight5 >= EDAGAMERandomHeight2 - $('#EDAGAMEObject5').height()) &&
        (EDAGAMERandomHeight5 <= EDAGAMERandomHeight2 + $('#EDAGAMEObject2').height())) {setTimeout(function() {EDAGAMESetPosition5();}, 1); return;};

	if ((EDAGAMERandomWidth5 >= EDAGAMERandomWidth3 - $('#EDAGAMEObject5').width()) &&
        (EDAGAMERandomWidth5 <= EDAGAMERandomWidth3 + $('#EDAGAMEObject3').width()) &&
        (EDAGAMERandomHeight5 >= EDAGAMERandomHeight3 - $('#EDAGAMEObject5').height()) &&
        (EDAGAMERandomHeight5 <= EDAGAMERandomHeight3 + $('#EDAGAMEObject3').height())) {setTimeout(function() {EDAGAMESetPosition5();}, 1); return;};

	if ((EDAGAMERandomWidth5 >= EDAGAMERandomWidth4 - $('#EDAGAMEObject5').width()) &&
        (EDAGAMERandomWidth5 <= EDAGAMERandomWidth4 + $('#EDAGAMEObject4').width()) &&
        (EDAGAMERandomHeight5 >= EDAGAMERandomHeight4 - $('#EDAGAMEObject5').height()) &&
        (EDAGAMERandomHeight5 <= EDAGAMERandomHeight4 + $('#EDAGAMEObject4').height())) {setTimeout(function() {EDAGAMESetPosition5();}, 1); return;}
		
		else {
			
			$('#EDAGAMEObject5').css({'left': EDAGAMERandomWidth5});
			$('#EDAGAMEObject5').css({'top': EDAGAMERandomHeight5});
			EDAGAMESetOrientation5();};
	
};

var EDAGAMEOrientation5 = new Array('plus', 'minus');

var EDAGAMERandomWidthOrientation5;
var EDAGAMERandomHeightOrientation5;

//This function sets the direction of the 'Object5' movement.
function EDAGAMESetOrientation5() {
	
	EDAGAMERandomWidthOrientation5 = Math.floor((Math.random() * EDAGAMEOrientation5.length));
	EDAGAMERandomHeightOrientation5 = Math.floor((Math.random() * EDAGAMEOrientation5.length));
	
	x[5] = EDAGAMEOrientation5[EDAGAMERandomWidthOrientation5];
	y[5] = EDAGAMEOrientation5[EDAGAMERandomHeightOrientation5];
	
	EDAGAMEEngine5On();
	
};
   
var EDAGAMEToStart5;

//This function makes the 'Object5' visible.
function EDAGAMEEngine5On() {
	
	if (document.EDAGAMESettingsForm1.EDAGAMERegime[0].checked == true) {EDAGAMEEngineRun5();}
	$('#EDAGAMEObject5').fadeIn(750); 		
	
};

//This function makes the 'Object5' invisible.
function EDAGAMEEngine5Off() {

	$('#EDAGAMEObject5').fadeOut(750);
	EDAGAMEToStart5 = setTimeout(function() {
			
		clearTimeout(EDAGAMEEngineRun5CountDown);
		EDAGAMESetSource5();
			
	}, 2000);	
	
};

//This function restarts the Engine System.
function EDAGAMEEngineRefresh() {
	
	clearTimeout(EDAGAMEToStart0);
	clearTimeout(EDAGAMEToStart1);
	clearTimeout(EDAGAMEToStart2);
	clearTimeout(EDAGAMEToStart3);
	clearTimeout(EDAGAMEToStart4);
	clearTimeout(EDAGAMEToStart5);
	
	if ((document.EDAGAMESettingsForm1.EDAGAMERegime[0].checked == true) &&
		(document.EDAGAMESettingsForm1.EDAGAMERegime[1].checked == false)) {
			
			EDAGAMEEngine0Off(); EDAGAMEEngine1Off(); EDAGAMEEngine2Off(); EDAGAMEEngine3Off(); EDAGAMEEngine4Off(); EDAGAMEEngine5Off();
			
		};
	
	if ((document.EDAGAMESettingsForm1.EDAGAMERegime[1].checked == true) &&
		(document.EDAGAMESettingsForm1.EDAGAMERegime[0].checked == false)) {
			
			EDAGAMEEngine0Off(); EDAGAMEEngine1Off(); EDAGAMEEngine2Off(); EDAGAMEEngine3Off(); EDAGAMEEngine4Off(); EDAGAMEEngine5Off();
			
		};
	
};

//This function defines what happens after clicking the 'Colors' box in 'Pairs' game.
function EDAGAMEPaiColors() {
	
	if (document.getElementById('EDAGAMEFigure1').style.opacity != '1') {return;};
	
	if ($('a#EDAGAMEA5').hasClass('EDAGAMECurrent') &&
		document.getElementById('EDAGAMESpeaker').src == EDAGAMEImagesOther[13].src) {
			
			EDAGAMEMainGroup = EDAGAMEImagesColors; 
			setTimeout(function() {EDAGAMEStartEngine();}, 1);
			
	}
			
	else {return;};
		
	$('#EDAGAMERepeat').fadeIn();
	$('#EDAGAMERepeat').attr({'src': EDAGAMEImagesOther[7].src});
	
	$('#EDAGAMEFigure1').animate({'opacity': '0'}, 250);
	$('#EDAGAMEScoreFinal').html('11');
	$('#EDAGAMEPoint').slideUp('slow');
	$('#EDAGAMETask').slideDown('slow');
	$('#EDAGAMEBackground').fadeOut(250);
	$('#EDAGAMEPairs').fadeOut(250);
	$('#EDAGAMEPairsLeft').fadeIn(250);
	$('#EDAGAMEPairsRight').fadeIn(250);	
	$('#EDAGAMEPaiKit').fadeIn(250);
	$('#EDAGAMECatch').fadeIn(250);
	
	for (var loop = 1; loop <= 20; loop++) {$('#EDAGAMEStar' + loop).fadeIn(0); $('#EDAGAMECatch' + loop).fadeIn(0);}
	for (var loop = 12; loop <= 20; loop++) {$('#EDAGAMEStar' + loop).fadeOut(0); $('#EDAGAMECatch' + loop).fadeOut(0);}

	$('.EDAGAMEStar').attr({'src': EDAGAMEImagesOther[1].src});
	$('#Break5').remove(); $('#Break7').remove(); $('#EDAGAMEScoreIMG > img:nth-child(5)').after('<br id="Break5">');
	$('.EDAGAMECatch').attr({'src': EDAGAMEImagesOther[13].src}).css('background-color', '#EEE8AA');
	
};

//This function defines what happens after clicking the 'Shapes' box in 'Pairs' game.
function EDAGAMEPaiShapes() {
	
	if (document.getElementById('EDAGAMEFigure2').style.opacity != '1') {return;};
	
	if ($('a#EDAGAMEA5').hasClass('EDAGAMECurrent') &&
		document.getElementById('EDAGAMESpeaker').src == EDAGAMEImagesOther[13].src) {
			
			EDAGAMEMainGroup = EDAGAMEImagesShapes; 
			setTimeout(function() {EDAGAMEStartEngine();}, 1);
			
	}
			
	else {return;};
	
	$('#EDAGAMERepeat').fadeIn();
	$('#EDAGAMERepeat').attr({'src': EDAGAMEImagesOther[7].src});
	
	$('#EDAGAMEFigure2').animate({'opacity': '0'}, 250);
	$('#EDAGAMEScoreFinal').html('20');
	$('#EDAGAMEPoint').slideUp('slow');
	$('#EDAGAMETask').slideDown('slow');
	$('#EDAGAMEBackground').fadeOut(250);
	$('#EDAGAMEPairs').fadeOut(250);
	$('#EDAGAMEPairsLeft').fadeIn(250);
	$('#EDAGAMEPairsRight').fadeIn(250);
	$('#EDAGAMEPaiKit').fadeIn(250);
	$('#EDAGAMECatch').fadeIn(250);
	
	for (var loop = 1; loop <= 20; loop++) {$('#EDAGAMEStar' + loop).fadeIn(0); $('#EDAGAMECatch' + loop).fadeIn(0);}

	$('.EDAGAMEStar').attr({'src': EDAGAMEImagesOther[1].src});
	$('#Break5').remove(); $('#Break7').remove();
	$('.EDAGAMECatch').attr({'src': EDAGAMEImagesOther[13].src}).css('background-color', '#EEE8AA');
	
};

//This function defines what happens after clicking the 'Animals' box in 'Pairs' game.
function EDAGAMEPaiAnimals() {
	
	if (document.getElementById('EDAGAMEFigure3').style.opacity != '1') {return;};
	
	if ($('a#EDAGAMEA5').hasClass('EDAGAMECurrent') &&
		document.getElementById('EDAGAMESpeaker').src == EDAGAMEImagesOther[13].src) {
			
			EDAGAMEMainGroup = EDAGAMEImagesAnimals; 
			setTimeout(function() {EDAGAMEStartEngine();}, 1);
			
	}
			
	else {return;};
	
	$('#EDAGAMERepeat').fadeIn();
	$('#EDAGAMERepeat').attr({'src': EDAGAMEImagesOther[7].src});
	
	$('#EDAGAMEFigure3').animate({'opacity': '0'}, 250);
	$('#EDAGAMEScoreFinal').html('15');
	$('#EDAGAMEPoint').slideUp('slow');
	$('#EDAGAMETask').slideDown('slow');
	$('#EDAGAMEBackground').fadeOut(250);
	$('#EDAGAMEPairs').fadeOut(250);
	$('#EDAGAMEPairsLeft').fadeIn(250);
	$('#EDAGAMEPairsRight').fadeIn(250);
	$('#EDAGAMEPaiKit').fadeIn(250);
	$('#EDAGAMECatch').fadeIn(250);
	
	for (var loop = 1; loop <= 20; loop++) {$('#EDAGAMEStar' + loop).fadeIn(0); $('#EDAGAMECatch' + loop).fadeIn(0);}
	for (var loop = 16; loop <= 20; loop++) {$('#EDAGAMEStar' + loop).fadeOut(0); $('#EDAGAMECatch' + loop).fadeOut(0);}

	$('.EDAGAMEStar').attr({'src': EDAGAMEImagesOther[1].src});
	$('#Break5').remove(); $('#Break7').remove(); $('#EDAGAMEScoreIMG > img:nth-child(7)').after('<br id="Break7">');
	$('.EDAGAMECatch').attr({'src': EDAGAMEImagesOther[13].src}).css('background-color', '#EEE8AA');
	
};

//This function defines what happens after clicking the 'Instruments' box in 'Pairs' game.
function EDAGAMEPaiInstruments() {
	
	if (document.getElementById('EDAGAMEFigure4').style.opacity != '1') {return;};
	
	if ($('a#EDAGAMEA5').hasClass('EDAGAMECurrent') &&
		document.getElementById('EDAGAMESpeaker').src == EDAGAMEImagesOther[13].src) {
			
			EDAGAMEMainGroup = EDAGAMEImagesInstruments; 
			setTimeout(function() {EDAGAMEStartEngine();}, 1);
			
	}
			
	else {return;};
	
	$('#EDAGAMERepeat').fadeIn();
	$('#EDAGAMERepeat').attr({'src': EDAGAMEImagesOther[7].src});
	
	$('#EDAGAMEFigure4').animate({'opacity': '0'}, 250);
	$('#EDAGAMEScoreFinal').html('11');
	$('#EDAGAMEPoint').slideUp('slow');
	$('#EDAGAMETask').slideDown('slow');
	$('#EDAGAMEBackground').fadeOut(250);
	$('#EDAGAMEPairs').fadeOut(250);
	$('#EDAGAMEPairsLeft').fadeIn(250);
	$('#EDAGAMEPairsRight').fadeIn(250);
	$('#EDAGAMEPaiKit').fadeIn(250);
	$('#EDAGAMECatch').fadeIn(250);
	
	for (var loop = 1; loop <= 20; loop++) {$('#EDAGAMEStar' + loop).fadeIn(0); $('#EDAGAMECatch' + loop).fadeIn(0);}
	for (var loop = 12; loop <= 20; loop++) {$('#EDAGAMEStar' + loop).fadeOut(0); $('#EDAGAMECatch' + loop).fadeOut(0);}

	$('.EDAGAMEStar').attr({'src': EDAGAMEImagesOther[1].src});
	$('#Break5').remove(); $('#Break7').remove(); $('#EDAGAMEScoreIMG > img:nth-child(5)').after('<br id="Break5">');
	$('.EDAGAMECatch').attr({'src': EDAGAMEImagesOther[13].src}).css('background-color', '#EEE8AA');
	
};