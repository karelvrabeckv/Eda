//This file is used for defining the Bounce Effect (the part of the Engine System).

var EDAGAMEEngineObject0 = document.getElementById('EDAGAMEObject0').style;
var EDAGAMEEngineObject1 = document.getElementById('EDAGAMEObject1').style;
var EDAGAMEEngineObject2 = document.getElementById('EDAGAMEObject2').style;
var EDAGAMEEngineObject3 = document.getElementById('EDAGAMEObject3').style;
var EDAGAMEEngineObject4 = document.getElementById('EDAGAMEObject4').style;
var EDAGAMEEngineObject5 = document.getElementById('EDAGAMEObject5').style;

var EDAGAMEEngineColors = new Array(EDAGAMEEngineObject0, EDAGAMEEngineObject1, EDAGAMEEngineObject2, EDAGAMEEngineObject3, EDAGAMEEngineObject4, EDAGAMEEngineObject5);

var x = new Array('plus', 'plus', 'plus', 'plus', 'plus', 'plus');
var y = new Array('plus', 'plus', 'plus', 'plus', 'plus', 'plus');

var EDAGAMEWidth0;
var EDAGAMEHeight0;
var EDAGAMEWidth1;
var EDAGAMEHeight1;
var EDAGAMEWidth2;
var EDAGAMEHeight2;
var EDAGAMEWidth3;
var EDAGAMEHeight3;
var EDAGAMEWidth4;
var EDAGAMEHeight4;
var EDAGAMEWidth5;
var EDAGAMEHeight5;

var EDAGAMEEngineRun0CountDown;
var EDAGAMEEngineRun0Speed;

//This function controls the bouncing and the movement of 'Object0'.
function EDAGAMEEngineRun0() {

	EDAGAMEWidth0 = $('#EDAGAMEObject0').width();
	EDAGAMEHeight0 = $('#EDAGAMEObject0').height();
	
	if (x[0] == 'plus') {EDAGAMEEngineColors[0].left = parseInt(EDAGAMEEngineColors[0].left) + 1 + 'px';}
	               else {EDAGAMEEngineColors[0].left = parseInt(EDAGAMEEngineColors[0].left) - 1 + 'px';};

	if (y[0] == 'plus') {EDAGAMEEngineColors[0].top = parseInt(EDAGAMEEngineColors[0].top) + 1 + 'px';}
	               else {EDAGAMEEngineColors[0].top = parseInt(EDAGAMEEngineColors[0].top) - 1 + 'px';};
					   
	if (parseInt(EDAGAMEEngineColors[0].left) < 0) {x[0] = 'plus';};
	if (parseInt(EDAGAMEEngineColors[0].top) < 0) {y[0] = 'plus';};
    if (parseInt(EDAGAMEEngineColors[0].left) + $('#EDAGAMEObject0').width() + $('#EDAGAMEMenu3').width() > $(window).width()) {x[0] = 'minus';};
    if (parseInt(EDAGAMEEngineColors[0].top) + $('#EDAGAMEObject0').height() + $('#EDAGAMEMainMenu2').height() > $(window).height()) {y[0] = 'minus';};

	for (var num = 1; num <= 5; num++) {

		if (parseInt(EDAGAMEEngineColors[0].top) + EDAGAMEHeight0 > parseInt(EDAGAMEEngineColors[num].top) &&
			parseInt(EDAGAMEEngineColors[0].top) < parseInt(EDAGAMEEngineColors[num].top) + $('#EDAGAMEObject' + num).height() &&
			document.getElementById('EDAGAMEObject0').style.display == 'inline' &&
			document.getElementById('EDAGAMEObject' + num).style.display == 'inline') {		 
					 
				 if (parseInt(EDAGAMEEngineColors[0].left) + EDAGAMEWidth0 > parseInt(EDAGAMEEngineColors[num].left) &&
					 parseInt(EDAGAMEEngineColors[0].left) + EDAGAMEWidth0 < parseInt(EDAGAMEEngineColors[num].left) + $('#EDAGAMEObject' + num).width()/2) {x[0] = 'minus'; x[num] = 'plus';}						 
			else if (parseInt(EDAGAMEEngineColors[0].left) > parseInt(EDAGAMEEngineColors[num].left) + $('#EDAGAMEObject' + num).width()/2 &&
					 parseInt(EDAGAMEEngineColors[0].left) < parseInt(EDAGAMEEngineColors[num].left) + $('#EDAGAMEObject' + num).width()) {x[0] = 'plus'; x[num] = 'minus';}
						 
			else if (parseInt(EDAGAMEEngineColors[num].left) + $('#EDAGAMEObject' + num).width() > parseInt(EDAGAMEEngineColors[0].left) &&
					 parseInt(EDAGAMEEngineColors[num].left) + $('#EDAGAMEObject' + num).width() < parseInt(EDAGAMEEngineColors[0].left) + $('#EDAGAMEObject0').width()/2) {x[num] = 'minus'; x[0] = 'plus';}
			else if (parseInt(EDAGAMEEngineColors[num].left) > parseInt(EDAGAMEEngineColors[0].left) + $('#EDAGAMEObject0').width()/2 &&
					 parseInt(EDAGAMEEngineColors[num].left) < parseInt(EDAGAMEEngineColors[0].left) + EDAGAMEWidth0) {x[num] = 'plus'; x[0] = 'minus';};
					 
		};
			
		if (parseInt(EDAGAMEEngineColors[0].left) + EDAGAMEWidth0 > parseInt(EDAGAMEEngineColors[num].left) &&
			parseInt(EDAGAMEEngineColors[0].left) < parseInt(EDAGAMEEngineColors[num].left) + $('#EDAGAMEObject' + num).width() &&
			document.getElementById('EDAGAMEObject0').style.display == 'inline' &&
			document.getElementById('EDAGAMEObject' + num).style.display == 'inline') {	 
					 
				 if (parseInt(EDAGAMEEngineColors[0].top) + EDAGAMEHeight0 > parseInt(EDAGAMEEngineColors[num].top) &&
					 parseInt(EDAGAMEEngineColors[0].top) + EDAGAMEHeight0 < parseInt(EDAGAMEEngineColors[num].top) + $('#EDAGAMEObject' + num).height()/2) {y[0] = 'minus'; y[num] = 'plus';}					 
			else if (parseInt(EDAGAMEEngineColors[0].top) > parseInt(EDAGAMEEngineColors[num].top) + $('#EDAGAMEObject' + num).height()/2 &&
					 parseInt(EDAGAMEEngineColors[0].top) < parseInt(EDAGAMEEngineColors[num].top) + $('#EDAGAMEObject' + num).height()) {y[0] = 'plus'; y[num] = 'minus';}
					 
			else if (parseInt(EDAGAMEEngineColors[num].top) + $('#EDAGAMEObject' + num).height() > parseInt(EDAGAMEEngineColors[0].top) &&
					 parseInt(EDAGAMEEngineColors[num].top) + $('#EDAGAMEObject' + num).height() < parseInt(EDAGAMEEngineColors[0].top) + $('#EDAGAMEObject0').height()/2) {y[num] = 'minus'; y[0] = 'plus';}					 
			else if (parseInt(EDAGAMEEngineColors[num].top) > parseInt(EDAGAMEEngineColors[0].top) + $('#EDAGAMEObject0').height()/2 &&
					 parseInt(EDAGAMEEngineColors[num].top) < parseInt(EDAGAMEEngineColors[0].top) + EDAGAMEHeight0) {y[num] = 'plus'; y[0] = 'minus';};
			
		};
			
	};
	
	EDAGAMEEngineRun0Speed = document.getElementById('EDAGAMESpeedOfObjectsValue').innerHTML;
	EDAGAMEEngineRun0CountDown = setTimeout(function() {EDAGAMEEngineRun0();}, EDAGAMEEngineRun0Speed);
		
};

var EDAGAMEEngineRun1CountDown;
var EDAGAMEEngineRun1Speed;

//This function controls the bouncing and the movement of 'Object1'.
function EDAGAMEEngineRun1() {
	
	EDAGAMEWidth1 = $('#EDAGAMEObject1').width();
	EDAGAMEHeight1 = $('#EDAGAMEObject1').height();
	
	if (x[1] == 'plus') {EDAGAMEEngineColors[1].left = parseInt(EDAGAMEEngineColors[1].left) + 1 + 'px';}
	               else {EDAGAMEEngineColors[1].left = parseInt(EDAGAMEEngineColors[1].left) - 1 + 'px';};

	if (y[1] == 'plus') {EDAGAMEEngineColors[1].top = parseInt(EDAGAMEEngineColors[1].top) + 1 + 'px';}
	               else {EDAGAMEEngineColors[1].top = parseInt(EDAGAMEEngineColors[1].top) - 1 + 'px';};
					   
	if (parseInt(EDAGAMEEngineColors[1].left) < 0) {x[1] = 'plus';};
	if (parseInt(EDAGAMEEngineColors[1].top) < 0) {y[1] = 'plus';};
    if (parseInt(EDAGAMEEngineColors[1].left) + $('#EDAGAMEObject1').width() + $('#EDAGAMEMenu3').width() > $(window).width()) {x[1] = 'minus';};
    if (parseInt(EDAGAMEEngineColors[1].top) + $('#EDAGAMEObject1').height() + $('#EDAGAMEMainMenu2').height() > $(window).height()) {y[1] = 'minus';};
		
	for (var num = 2; num <= 5; num++) {
	
		if (parseInt(EDAGAMEEngineColors[1].top) + EDAGAMEHeight1 > parseInt(EDAGAMEEngineColors[num].top) &&
			parseInt(EDAGAMEEngineColors[1].top) < parseInt(EDAGAMEEngineColors[num].top) + $('#EDAGAMEObject' + num).height() &&
			document.getElementById('EDAGAMEObject1').style.display == 'inline' &&
			document.getElementById('EDAGAMEObject' + num).style.display == 'inline') {		 
					 
				 if (parseInt(EDAGAMEEngineColors[1].left) + EDAGAMEWidth1 > parseInt(EDAGAMEEngineColors[num].left) &&
					 parseInt(EDAGAMEEngineColors[1].left) + EDAGAMEWidth1 < parseInt(EDAGAMEEngineColors[num].left) + $('#EDAGAMEObject' + num).width()/2) {x[1] = 'minus'; x[num] = 'plus';}						 
			else if (parseInt(EDAGAMEEngineColors[1].left) > parseInt(EDAGAMEEngineColors[num].left) + $('#EDAGAMEObject' + num).width()/2 &&
					 parseInt(EDAGAMEEngineColors[1].left) < parseInt(EDAGAMEEngineColors[num].left) + $('#EDAGAMEObject' + num).width()) {x[1] = 'plus'; x[num] = 'minus';}
						 
			else if (parseInt(EDAGAMEEngineColors[num].left) + $('#EDAGAMEObject' + num).width() > parseInt(EDAGAMEEngineColors[1].left) &&
					 parseInt(EDAGAMEEngineColors[num].left) + $('#EDAGAMEObject' + num).width() < parseInt(EDAGAMEEngineColors[1].left) + $('#EDAGAMEObject1').width()/2) {x[num] = 'minus'; x[1] = 'plus';}
			else if (parseInt(EDAGAMEEngineColors[num].left) > parseInt(EDAGAMEEngineColors[1].left) + $('#EDAGAMEObject1').width()/2 &&
					 parseInt(EDAGAMEEngineColors[num].left) < parseInt(EDAGAMEEngineColors[1].left) + EDAGAMEWidth1) {x[num] = 'plus'; x[1] = 'minus';};
					 
		};
			
		if (parseInt(EDAGAMEEngineColors[1].left) + EDAGAMEWidth1 > parseInt(EDAGAMEEngineColors[num].left) &&
			parseInt(EDAGAMEEngineColors[1].left) < parseInt(EDAGAMEEngineColors[num].left) + $('#EDAGAMEObject' + num).width() &&
			document.getElementById('EDAGAMEObject1').style.display == 'inline' &&
			document.getElementById('EDAGAMEObject' + num).style.display == 'inline') {	 
					 
				 if (parseInt(EDAGAMEEngineColors[1].top) + EDAGAMEHeight1 > parseInt(EDAGAMEEngineColors[num].top) &&
					 parseInt(EDAGAMEEngineColors[1].top) + EDAGAMEHeight1 < parseInt(EDAGAMEEngineColors[num].top) + $('#EDAGAMEObject' + num).height()/2) {y[1] = 'minus'; y[num] = 'plus';}					 
			else if (parseInt(EDAGAMEEngineColors[1].top) > parseInt(EDAGAMEEngineColors[num].top) + $('#EDAGAMEObject' + num).height()/2 &&
					 parseInt(EDAGAMEEngineColors[1].top) < parseInt(EDAGAMEEngineColors[num].top) + $('#EDAGAMEObject' + num).height()) {y[1] = 'plus'; y[num] = 'minus';}
					 
			else if (parseInt(EDAGAMEEngineColors[num].top) + $('#EDAGAMEObject' + num).height() > parseInt(EDAGAMEEngineColors[1].top) &&
					 parseInt(EDAGAMEEngineColors[num].top) + $('#EDAGAMEObject' + num).height() < parseInt(EDAGAMEEngineColors[1].top) + $('#EDAGAMEObject1').height()/2) {y[num] = 'minus'; y[1] = 'plus';}					 
			else if (parseInt(EDAGAMEEngineColors[num].top) > parseInt(EDAGAMEEngineColors[1].top) + $('#EDAGAMEObject1').height()/2 &&
					 parseInt(EDAGAMEEngineColors[num].top) < parseInt(EDAGAMEEngineColors[1].top) + EDAGAMEHeight1) {y[num] = 'plus'; y[1] = 'minus';};
			
		};
			
	};
	
	EDAGAMEEngineRun1Speed = document.getElementById('EDAGAMESpeedOfObjectsValue').innerHTML;
	EDAGAMEEngineRun1CountDown = setTimeout(function() {EDAGAMEEngineRun1();}, EDAGAMEEngineRun1Speed);
		
};

var EDAGAMEEngineRun2CountDown;
var EDAGAMEEngineRun2Speed;

//This function controls the bouncing and the movement of 'Object2'.
function EDAGAMEEngineRun2() {
	
	EDAGAMEWidth2 = $('#EDAGAMEObject2').width();
	EDAGAMEHeight2 = $('#EDAGAMEObject2').height();
	
	if (x[2] == 'plus') {EDAGAMEEngineColors[2].left = parseInt(EDAGAMEEngineColors[2].left) + 1 + 'px';}
	               else {EDAGAMEEngineColors[2].left = parseInt(EDAGAMEEngineColors[2].left) - 1 + 'px';};

	if (y[2] == 'plus') {EDAGAMEEngineColors[2].top = parseInt(EDAGAMEEngineColors[2].top) + 1 + 'px';}
	               else {EDAGAMEEngineColors[2].top = parseInt(EDAGAMEEngineColors[2].top) - 1 + 'px';};
					   
	if (parseInt(EDAGAMEEngineColors[2].left) < 0) {x[2] = 'plus';};
	if (parseInt(EDAGAMEEngineColors[2].top) < 0) {y[2] = 'plus';};
    if (parseInt(EDAGAMEEngineColors[2].left) + $('#EDAGAMEObject2').width() + $('#EDAGAMEMenu3').width() > $(window).width()) {x[2] = 'minus';};
    if (parseInt(EDAGAMEEngineColors[2].top) + $('#EDAGAMEObject2').height() + $('#EDAGAMEMainMenu2').height() > $(window).height()) {y[2] = 'minus';};
		
	for (var num = 3; num <= 5; num++) {

		if (parseInt(EDAGAMEEngineColors[2].top) + EDAGAMEHeight2 > parseInt(EDAGAMEEngineColors[num].top) &&
			parseInt(EDAGAMEEngineColors[2].top) < parseInt(EDAGAMEEngineColors[num].top) + $('#EDAGAMEObject' + num).height() &&
			document.getElementById('EDAGAMEObject2').style.display == 'inline' &&
			document.getElementById('EDAGAMEObject' + num).style.display == 'inline') {		 
					 
				 if (parseInt(EDAGAMEEngineColors[2].left) + EDAGAMEWidth2 > parseInt(EDAGAMEEngineColors[num].left) &&
					 parseInt(EDAGAMEEngineColors[2].left) + EDAGAMEWidth2 < parseInt(EDAGAMEEngineColors[num].left) + $('#EDAGAMEObject' + num).width()/2) {x[2] = 'minus'; x[num] = 'plus';}						 
			else if (parseInt(EDAGAMEEngineColors[2].left) > parseInt(EDAGAMEEngineColors[num].left) + $('#EDAGAMEObject' + num).width()/2 &&
					 parseInt(EDAGAMEEngineColors[2].left) < parseInt(EDAGAMEEngineColors[num].left) + $('#EDAGAMEObject' + num).width()) {x[2] = 'plus'; x[num] = 'minus';}
						 
			else if (parseInt(EDAGAMEEngineColors[num].left) + $('#EDAGAMEObject' + num).width() > parseInt(EDAGAMEEngineColors[2].left) &&
					 parseInt(EDAGAMEEngineColors[num].left) + $('#EDAGAMEObject' + num).width() < parseInt(EDAGAMEEngineColors[2].left) + $('#EDAGAMEObject2').width()/2) {x[num] = 'minus'; x[2] = 'plus';}
			else if (parseInt(EDAGAMEEngineColors[num].left) > parseInt(EDAGAMEEngineColors[2].left) + $('#EDAGAMEObject2').width()/2 &&
					 parseInt(EDAGAMEEngineColors[num].left) < parseInt(EDAGAMEEngineColors[2].left) + EDAGAMEWidth2) {x[num] = 'plus'; x[2] = 'minus';};
					 
		};
			
		if (parseInt(EDAGAMEEngineColors[2].left) + EDAGAMEWidth2 > parseInt(EDAGAMEEngineColors[num].left) &&
			parseInt(EDAGAMEEngineColors[2].left) < parseInt(EDAGAMEEngineColors[num].left) + $('#EDAGAMEObject' + num).width() &&
			document.getElementById('EDAGAMEObject2').style.display == 'inline' &&
			document.getElementById('EDAGAMEObject' + num).style.display == 'inline') {	 
					 
				 if (parseInt(EDAGAMEEngineColors[2].top) + EDAGAMEHeight2 > parseInt(EDAGAMEEngineColors[num].top) &&
					 parseInt(EDAGAMEEngineColors[2].top) + EDAGAMEHeight2 < parseInt(EDAGAMEEngineColors[num].top) + $('#EDAGAMEObject' + num).height()/2) {y[2] = 'minus'; y[num] = 'plus';}					 
			else if (parseInt(EDAGAMEEngineColors[2].top) > parseInt(EDAGAMEEngineColors[num].top) + $('#EDAGAMEObject' + num).height()/2 &&
					 parseInt(EDAGAMEEngineColors[2].top) < parseInt(EDAGAMEEngineColors[num].top) + $('#EDAGAMEObject' + num).height()) {y[2] = 'plus'; y[num] = 'minus';}
					 
			else if (parseInt(EDAGAMEEngineColors[num].top) + $('#EDAGAMEObject' + num).height() > parseInt(EDAGAMEEngineColors[2].top) &&
					 parseInt(EDAGAMEEngineColors[num].top) + $('#EDAGAMEObject' + num).height() < parseInt(EDAGAMEEngineColors[2].top) + $('#EDAGAMEObject2').height()/2) {y[num] = 'minus'; y[2] = 'plus';}					 
			else if (parseInt(EDAGAMEEngineColors[num].top) > parseInt(EDAGAMEEngineColors[2].top) + $('#EDAGAMEObject2').height()/2 &&
					 parseInt(EDAGAMEEngineColors[num].top) < parseInt(EDAGAMEEngineColors[2].top) + EDAGAMEHeight2) {y[num] = 'plus'; y[2] = 'minus';};
			
		};
			
	};	

	EDAGAMEEngineRun2Speed = document.getElementById('EDAGAMESpeedOfObjectsValue').innerHTML;
	EDAGAMEEngineRun2CountDown = setTimeout(function() {EDAGAMEEngineRun2();}, EDAGAMEEngineRun2Speed);
		
};

var EDAGAMEEngineRun3CountDown;
var EDAGAMEEngineRun3Speed;

//This function controls the bouncing and the movement of 'Object3'.
function EDAGAMEEngineRun3() {
	
	EDAGAMEWidth3 = $('#EDAGAMEObject3').width();
	EDAGAMEHeight3 = $('#EDAGAMEObject3').height();
	
	if (x[3] == 'plus') {EDAGAMEEngineColors[3].left = parseInt(EDAGAMEEngineColors[3].left) + 1 + 'px';}
	               else {EDAGAMEEngineColors[3].left = parseInt(EDAGAMEEngineColors[3].left) - 1 + 'px';};

	if (y[3] == 'plus') {EDAGAMEEngineColors[3].top = parseInt(EDAGAMEEngineColors[3].top) + 1 + 'px';}
	               else {EDAGAMEEngineColors[3].top = parseInt(EDAGAMEEngineColors[3].top) - 1 + 'px';};
					   
	if (parseInt(EDAGAMEEngineColors[3].left) < 0) {x[3] = 'plus';};
	if (parseInt(EDAGAMEEngineColors[3].top) < 0) {y[3] = 'plus';};
    if (parseInt(EDAGAMEEngineColors[3].left) + $('#EDAGAMEObject3').width() + $('#EDAGAMEMenu3').width() > $(window).width()) {x[3] = 'minus';};
    if (parseInt(EDAGAMEEngineColors[3].top) + $('#EDAGAMEObject3').height() + $('#EDAGAMEMainMenu2').height() > $(window).height()) {y[3] = 'minus';};
	
	for (var num = 4; num <= 5; num++) {
			
		if (parseInt(EDAGAMEEngineColors[3].top) + EDAGAMEHeight3 > parseInt(EDAGAMEEngineColors[num].top) &&
			parseInt(EDAGAMEEngineColors[3].top) < parseInt(EDAGAMEEngineColors[num].top) + $('#EDAGAMEObject' + num).height() &&
			document.getElementById('EDAGAMEObject3').style.display == 'inline' &&
			document.getElementById('EDAGAMEObject' + num).style.display == 'inline') {		 
					 
				 if (parseInt(EDAGAMEEngineColors[3].left) + EDAGAMEWidth3 > parseInt(EDAGAMEEngineColors[num].left) &&
					 parseInt(EDAGAMEEngineColors[3].left) + EDAGAMEWidth3 < parseInt(EDAGAMEEngineColors[num].left) + $('#EDAGAMEObject' + num).width()/2) {x[3] = 'minus'; x[num] = 'plus';}						 
			else if (parseInt(EDAGAMEEngineColors[3].left) > parseInt(EDAGAMEEngineColors[num].left) + $('#EDAGAMEObject' + num).width()/2 &&
					 parseInt(EDAGAMEEngineColors[3].left) < parseInt(EDAGAMEEngineColors[num].left) + $('#EDAGAMEObject' + num).width()) {x[3] = 'plus'; x[num] = 'minus';}
						 
			else if (parseInt(EDAGAMEEngineColors[num].left) + $('#EDAGAMEObject' + num).width() > parseInt(EDAGAMEEngineColors[3].left) &&
					 parseInt(EDAGAMEEngineColors[num].left) + $('#EDAGAMEObject' + num).width() < parseInt(EDAGAMEEngineColors[3].left) + $('#EDAGAMEObject3').width()/2) {x[num] = 'minus'; x[3] = 'plus';}
			else if (parseInt(EDAGAMEEngineColors[num].left) > parseInt(EDAGAMEEngineColors[3].left) + $('#EDAGAMEObject3').width()/2 &&
					 parseInt(EDAGAMEEngineColors[num].left) < parseInt(EDAGAMEEngineColors[3].left) + EDAGAMEWidth3) {x[num] = 'plus'; x[3] = 'minus';};
					 
		};
			
		if (parseInt(EDAGAMEEngineColors[3].left) + EDAGAMEWidth3 > parseInt(EDAGAMEEngineColors[num].left) &&
			parseInt(EDAGAMEEngineColors[3].left) < parseInt(EDAGAMEEngineColors[num].left) + $('#EDAGAMEObject' + num).width() &&
			document.getElementById('EDAGAMEObject3').style.display == 'inline' &&
			document.getElementById('EDAGAMEObject' + num).style.display == 'inline') {	 
					 
				 if (parseInt(EDAGAMEEngineColors[3].top) + EDAGAMEHeight3 > parseInt(EDAGAMEEngineColors[num].top) &&
					 parseInt(EDAGAMEEngineColors[3].top) + EDAGAMEHeight3 < parseInt(EDAGAMEEngineColors[num].top) + $('#EDAGAMEObject' + num).height()/2) {y[3] = 'minus'; y[num] = 'plus';}					 
			else if (parseInt(EDAGAMEEngineColors[3].top) > parseInt(EDAGAMEEngineColors[num].top) + $('#EDAGAMEObject' + num).height()/2 &&
					 parseInt(EDAGAMEEngineColors[3].top) < parseInt(EDAGAMEEngineColors[num].top) + $('#EDAGAMEObject' + num).height()) {y[3] = 'plus'; y[num] = 'minus';}
					 
			else if (parseInt(EDAGAMEEngineColors[num].top) + $('#EDAGAMEObject' + num).height() > parseInt(EDAGAMEEngineColors[3].top) &&
					 parseInt(EDAGAMEEngineColors[num].top) + $('#EDAGAMEObject' + num).height() < parseInt(EDAGAMEEngineColors[3].top) + $('#EDAGAMEObject3').height()/2) {y[num] = 'minus'; y[3] = 'plus';}					 
			else if (parseInt(EDAGAMEEngineColors[num].top) > parseInt(EDAGAMEEngineColors[3].top) + $('#EDAGAMEObject3').height()/2 &&
					 parseInt(EDAGAMEEngineColors[num].top) < parseInt(EDAGAMEEngineColors[3].top) + EDAGAMEHeight3) {y[num] = 'plus'; y[3] = 'minus';};
			
		};
			
	};

	EDAGAMEEngineRun3Speed = document.getElementById('EDAGAMESpeedOfObjectsValue').innerHTML;
	EDAGAMEEngineRun3CountDown = setTimeout(function() {EDAGAMEEngineRun3();}, EDAGAMEEngineRun3Speed);
		
};

var EDAGAMEEngineRun4CountDown;
var EDAGAMEEngineRun4Speed;

//This function controls the bouncing and the movement of 'Object4'.
function EDAGAMEEngineRun4() {
	
	EDAGAMEWidth4 = $('#EDAGAMEObject4').width();
	EDAGAMEHeight4 = $('#EDAGAMEObject4').height();
	
	if (x[4] == 'plus') {EDAGAMEEngineColors[4].left = parseInt(EDAGAMEEngineColors[4].left) + 1 + 'px';}
	               else {EDAGAMEEngineColors[4].left = parseInt(EDAGAMEEngineColors[4].left) - 1 + 'px';};

	if (y[4] == 'plus') {EDAGAMEEngineColors[4].top = parseInt(EDAGAMEEngineColors[4].top) + 1 + 'px';}
	               else {EDAGAMEEngineColors[4].top = parseInt(EDAGAMEEngineColors[4].top) - 1 + 'px';};
					   
	if (parseInt(EDAGAMEEngineColors[4].left) < 0) {x[4] = 'plus';};
	if (parseInt(EDAGAMEEngineColors[4].top) < 0) {y[4] = 'plus';};
    if (parseInt(EDAGAMEEngineColors[4].left) + $('#EDAGAMEObject4').width() + $('#EDAGAMEMenu3').width() > $(window).width()) {x[4] = 'minus';};
    if (parseInt(EDAGAMEEngineColors[4].top) + $('#EDAGAMEObject4').height() + $('#EDAGAMEMainMenu2').height() > $(window).height()) {y[4] = 'minus';};
		
	for (var num = 5; num <= 5; num++) {

		if (parseInt(EDAGAMEEngineColors[4].top) + EDAGAMEHeight4 > parseInt(EDAGAMEEngineColors[num].top) &&
			parseInt(EDAGAMEEngineColors[4].top) < parseInt(EDAGAMEEngineColors[num].top) + $('#EDAGAMEObject' + num).height() &&
			document.getElementById('EDAGAMEObject4').style.display == 'inline' &&
			document.getElementById('EDAGAMEObject' + num).style.display == 'inline') {		 
					 
				 if (parseInt(EDAGAMEEngineColors[4].left) + EDAGAMEWidth4 > parseInt(EDAGAMEEngineColors[num].left) &&
					 parseInt(EDAGAMEEngineColors[4].left) + EDAGAMEWidth4 < parseInt(EDAGAMEEngineColors[num].left) + $('#EDAGAMEObject' + num).width()/2) {x[4] = 'minus'; x[num] = 'plus';}						 
			else if (parseInt(EDAGAMEEngineColors[4].left) > parseInt(EDAGAMEEngineColors[num].left) + $('#EDAGAMEObject' + num).width()/2 &&
					 parseInt(EDAGAMEEngineColors[4].left) < parseInt(EDAGAMEEngineColors[num].left) + $('#EDAGAMEObject' + num).width()) {x[4] = 'plus'; x[num] = 'minus';}
						 
			else if (parseInt(EDAGAMEEngineColors[num].left) + $('#EDAGAMEObject' + num).width() > parseInt(EDAGAMEEngineColors[4].left) &&
					 parseInt(EDAGAMEEngineColors[num].left) + $('#EDAGAMEObject' + num).width() < parseInt(EDAGAMEEngineColors[4].left) + $('#EDAGAMEObject4').width()/2) {x[num] = 'minus'; x[4] = 'plus';}
			else if (parseInt(EDAGAMEEngineColors[num].left) > parseInt(EDAGAMEEngineColors[4].left) + $('#EDAGAMEObject4').width()/2 &&
					 parseInt(EDAGAMEEngineColors[num].left) < parseInt(EDAGAMEEngineColors[4].left) + EDAGAMEWidth4) {x[num] = 'plus'; x[4] = 'minus';};
					 
		};
			
		if (parseInt(EDAGAMEEngineColors[4].left) + EDAGAMEWidth4 > parseInt(EDAGAMEEngineColors[num].left) &&
			parseInt(EDAGAMEEngineColors[4].left) < parseInt(EDAGAMEEngineColors[num].left) + $('#EDAGAMEObject' + num).width() &&
			document.getElementById('EDAGAMEObject4').style.display == 'inline' &&
			document.getElementById('EDAGAMEObject' + num).style.display == 'inline') {	 
					 
				 if (parseInt(EDAGAMEEngineColors[4].top) + EDAGAMEHeight4 > parseInt(EDAGAMEEngineColors[num].top) &&
					 parseInt(EDAGAMEEngineColors[4].top) + EDAGAMEHeight4 < parseInt(EDAGAMEEngineColors[num].top) + $('#EDAGAMEObject' + num).height()/2) {y[4] = 'minus'; y[num] = 'plus';}					 
			else if (parseInt(EDAGAMEEngineColors[4].top) > parseInt(EDAGAMEEngineColors[num].top) + $('#EDAGAMEObject' + num).height()/2 &&
					 parseInt(EDAGAMEEngineColors[4].top) < parseInt(EDAGAMEEngineColors[num].top) + $('#EDAGAMEObject' + num).height()) {y[4] = 'plus'; y[num] = 'minus';}
					 
			else if (parseInt(EDAGAMEEngineColors[num].top) + $('#EDAGAMEObject' + num).height() > parseInt(EDAGAMEEngineColors[4].top) &&
					 parseInt(EDAGAMEEngineColors[num].top) + $('#EDAGAMEObject' + num).height() < parseInt(EDAGAMEEngineColors[4].top) + $('#EDAGAMEObject4').height()/2) {y[num] = 'minus'; y[4] = 'plus';}					 
			else if (parseInt(EDAGAMEEngineColors[num].top) > parseInt(EDAGAMEEngineColors[4].top) + $('#EDAGAMEObject4').height()/2 &&
					 parseInt(EDAGAMEEngineColors[num].top) < parseInt(EDAGAMEEngineColors[4].top) + EDAGAMEHeight4) {y[num] = 'plus'; y[4] = 'minus';};
			
		};
			
	};

	EDAGAMEEngineRun4Speed = document.getElementById('EDAGAMESpeedOfObjectsValue').innerHTML;
	EDAGAMEEngineRun4CountDown = setTimeout(function() {EDAGAMEEngineRun4();}, EDAGAMEEngineRun4Speed);
		
};

var EDAGAMEEngineRun5CountDown;
var EDAGAMEEngineRun5Speed;

//This function controls the bouncing and the movement of 'Object5'.
function EDAGAMEEngineRun5() {
	
	EDAGAMEWidth5 = $('#EDAGAMEObject5').width();
	EDAGAMEHeight5 = $('#EDAGAMEObject5').height();
	
	if (x[5] == 'plus') {EDAGAMEEngineColors[5].left = parseInt(EDAGAMEEngineColors[5].left) + 1 + 'px';}
	               else {EDAGAMEEngineColors[5].left = parseInt(EDAGAMEEngineColors[5].left) - 1 + 'px';};

	if (y[5] == 'plus') {EDAGAMEEngineColors[5].top = parseInt(EDAGAMEEngineColors[5].top) + 1 + 'px';}
	               else {EDAGAMEEngineColors[5].top = parseInt(EDAGAMEEngineColors[5].top) - 1 + 'px';};
					   
	if (parseInt(EDAGAMEEngineColors[5].left) < 0) {x[5] = 'plus';};
	if (parseInt(EDAGAMEEngineColors[5].top) < 0) {y[5] = 'plus';};
    if (parseInt(EDAGAMEEngineColors[5].left) + $('#EDAGAMEObject5').width() + $('#EDAGAMEMenu3').width() > $(window).width()) {x[5] = 'minus';};
    if (parseInt(EDAGAMEEngineColors[5].top) + $('#EDAGAMEObject5').height() + $('#EDAGAMEMainMenu2').height() > $(window).height()) {y[5] = 'minus';};

	EDAGAMEEngineRun5Speed = document.getElementById('EDAGAMESpeedOfObjectsValue').innerHTML;
	EDAGAMEEngineRun5CountDown = setTimeout(function() {EDAGAMEEngineRun5();}, EDAGAMEEngineRun5Speed);
		
};

//This function makes objects to move slowly.
function EDAGAMESlowDown() {

	if (document.EDAGAMESettingsForm1.EDAGAMERegime[0].checked == true) {
		
		document.getElementById('EDAGAMESpeedOfObjectsValue').innerHTML = 50;
		document.getElementById('EDAGAMEFinalLetter').innerHTML = '';
		
	};
	
};

//This function makes objects to move with default speed.
function EDAGAMEDefaultSpeed() {
	
	document.getElementById('EDAGAMESpeedOfObjectsValue').innerHTML = document.getElementById('EDAGAMESpeedOfObjects').value;
	EDAGAMESpeedOfObjectsOnMouseMove();
	
};