//This file is used for defining all settings changes.

//This function disable 'The Speed Of Objects' option and make it transparent.
function EDAGAMEMakeItTransparent() {
  
	$('#EDAGAMESpeedOfObjectsCover').css({'opacity': '0.5'});
	$('#EDAGAMESpeedOfObjects').css({'cursor': 'default'});
	document.getElementById('EDAGAMESpeedOfObjects').disabled = true;
  
};
  
//This function allow 'The Speed Of Objects' option and make it visible.
function EDAGAMEMakeItVisible() {
  
	$('#EDAGAMESpeedOfObjectsCover').css({'opacity': '1'});
	$('#EDAGAMESpeedOfObjects').css({'cursor': 'pointer'});
	document.getElementById('EDAGAMESpeedOfObjects').disabled = false;
  
}; 
  
//This function controls the changes of INPUT(type='range') in 'The Speed Of Objects' option.
function EDAGAMESpeedOfObjectsOnMouseMove() {
  
	var TheValue = document.getElementById('EDAGAMESpeedOfObjects').value;
	document.getElementById('EDAGAMESpeedOfObjectsValue').innerHTML = TheValue;
	
		 if (document.getElementById('EDAGAMESpeedOfObjectsValue').innerHTML == '1') {document.getElementById('EDAGAMEFinalLetter').innerHTML = 'a';}
	else if (document.getElementById('EDAGAMESpeedOfObjectsValue').innerHTML == '2') {document.getElementById('EDAGAMEFinalLetter').innerHTML = 'y';}
	else if (document.getElementById('EDAGAMESpeedOfObjectsValue').innerHTML == '3') {document.getElementById('EDAGAMEFinalLetter').innerHTML = 'y';}
	else if (document.getElementById('EDAGAMESpeedOfObjectsValue').innerHTML == '4') {document.getElementById('EDAGAMEFinalLetter').innerHTML = 'y';}
	else {document.getElementById('EDAGAMEFinalLetter').innerHTML = ''};
  
};