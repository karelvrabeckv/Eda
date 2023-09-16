//This file is used for setting random numbers (0-10) to variables 'EDAGAME[A-K]COL'.
//These numbers are mutually different and used in the Task System of 'Colors' game, where they represent task images.

var EDAGAMEACOL;
function EDAGAMENumACOL() {
	
	EDAGAMEACOL = Math.floor(Math.random() * EDAGAMEImagesColors.length); Number(EDAGAMEACOL);
	document.getElementById('EDAGAMEPoint').src = EDAGAMEImagesColors[EDAGAMEACOL].src;
	EDAGAMENumBCOL();
	
};

var EDAGAMEBCOL;
function EDAGAMENumBCOL() {
	
	EDAGAMEBCOL = Math.floor(Math.random() * EDAGAMEImagesColors.length); Number(EDAGAMEBCOL);
	if (EDAGAMEBCOL == EDAGAMEACOL) {EDAGAMENumBCOL();}
	else {EDAGAMENumCCOL();};
	
};

var EDAGAMECCOL;
function EDAGAMENumCCOL() {
	
	EDAGAMECCOL = Math.floor(Math.random() * EDAGAMEImagesColors.length); Number(EDAGAMECCOL);
	if ((EDAGAMECCOL == EDAGAMEACOL) || 
		(EDAGAMECCOL == EDAGAMEBCOL)) {EDAGAMENumCCOL();}
	else {EDAGAMENumDCOL();};
	
};

var EDAGAMEDCOL;
function EDAGAMENumDCOL() {
	
	EDAGAMEDCOL = Math.floor(Math.random() * EDAGAMEImagesColors.length); Number(EDAGAMEDCOL);
	if ((EDAGAMEDCOL == EDAGAMEACOL) ||
		(EDAGAMEDCOL == EDAGAMEBCOL) ||
		(EDAGAMEDCOL == EDAGAMECCOL)) {EDAGAMENumDCOL();}
	else {EDAGAMENumECOL();};
	
};

var EDAGAMEECOL;
function EDAGAMENumECOL() {
	
	EDAGAMEECOL = Math.floor(Math.random() * EDAGAMEImagesColors.length); Number(EDAGAMEECOL);
	if ((EDAGAMEECOL == EDAGAMEACOL) || 
		(EDAGAMEECOL == EDAGAMEBCOL) || 
		(EDAGAMEECOL == EDAGAMECCOL) || 
		(EDAGAMEECOL == EDAGAMEDCOL)) {EDAGAMENumECOL();}
	else {EDAGAMENumFCOL();};
	
};

var EDAGAMEFCOL;
function EDAGAMENumFCOL() {
	
	EDAGAMEFCOL = Math.floor(Math.random() * EDAGAMEImagesColors.length); Number(EDAGAMEFCOL);
	if ((EDAGAMEFCOL == EDAGAMEACOL) ||
		(EDAGAMEFCOL == EDAGAMEBCOL) ||
		(EDAGAMEFCOL == EDAGAMECCOL) ||
		(EDAGAMEFCOL == EDAGAMEDCOL) ||
		(EDAGAMEFCOL == EDAGAMEECOL)) {EDAGAMENumFCOL();}
	else {EDAGAMENumGCOL();};
	
};

var EDAGAMEGCOL;
function EDAGAMENumGCOL() {
	
	EDAGAMEGCOL = Math.floor(Math.random() * EDAGAMEImagesColors.length); Number(EDAGAMEGCOL);
	if ((EDAGAMEGCOL == EDAGAMEACOL) ||
		(EDAGAMEGCOL == EDAGAMEBCOL) ||
		(EDAGAMEGCOL == EDAGAMECCOL) ||
		(EDAGAMEGCOL == EDAGAMEDCOL) ||
		(EDAGAMEGCOL == EDAGAMEECOL) ||
		(EDAGAMEGCOL == EDAGAMEFCOL)) {EDAGAMENumGCOL();}
	else {EDAGAMENumHCOL();};
	
};

var EDAGAMEHCOL;
function EDAGAMENumHCOL() {
	
	EDAGAMEHCOL = Math.floor(Math.random() * EDAGAMEImagesColors.length); Number(EDAGAMEHCOL);
	if ((EDAGAMEHCOL == EDAGAMEACOL) ||
		(EDAGAMEHCOL == EDAGAMEBCOL) ||
		(EDAGAMEHCOL == EDAGAMECCOL) ||
		(EDAGAMEHCOL == EDAGAMEDCOL) ||
		(EDAGAMEHCOL == EDAGAMEECOL) ||
		(EDAGAMEHCOL == EDAGAMEFCOL) ||
		(EDAGAMEHCOL == EDAGAMEGCOL)) {EDAGAMENumHCOL();}
	else {EDAGAMENumICOL();};
	
};

var EDAGAMEICOL;
function EDAGAMENumICOL() {
	
	EDAGAMEICOL = Math.floor(Math.random() * EDAGAMEImagesColors.length); Number(EDAGAMEICOL);
	if ((EDAGAMEICOL == EDAGAMEACOL) ||
		(EDAGAMEICOL == EDAGAMEBCOL) ||
		(EDAGAMEICOL == EDAGAMECCOL) ||
		(EDAGAMEICOL == EDAGAMEDCOL) ||
		(EDAGAMEICOL == EDAGAMEECOL) ||
		(EDAGAMEICOL == EDAGAMEFCOL) ||
		(EDAGAMEICOL == EDAGAMEGCOL) ||
		(EDAGAMEICOL == EDAGAMEHCOL)) {EDAGAMENumICOL();}
	else {EDAGAMENumJCOL();};
	
};

var EDAGAMEJCOL;
function EDAGAMENumJCOL() {
	
	EDAGAMEJCOL = Math.floor(Math.random() * EDAGAMEImagesColors.length); Number(EDAGAMEJCOL);
	if ((EDAGAMEJCOL == EDAGAMEACOL) ||
		(EDAGAMEJCOL == EDAGAMEBCOL) ||
		(EDAGAMEJCOL == EDAGAMECCOL) ||
		(EDAGAMEJCOL == EDAGAMEDCOL) ||
		(EDAGAMEJCOL == EDAGAMEECOL) ||
		(EDAGAMEJCOL == EDAGAMEFCOL) ||
		(EDAGAMEJCOL == EDAGAMEGCOL) ||
		(EDAGAMEJCOL == EDAGAMEHCOL) ||
		(EDAGAMEJCOL == EDAGAMEICOL)) {EDAGAMENumJCOL();}
	else {EDAGAMENumKCOL();};
	
};
							  
var EDAGAMEKCOL;
function EDAGAMENumKCOL() {
	
	EDAGAMEKCOL = Math.floor(Math.random() * EDAGAMEImagesColors.length); Number(EDAGAMEKCOL);
	if ((EDAGAMEKCOL == EDAGAMEACOL) ||
		(EDAGAMEKCOL == EDAGAMEBCOL) ||
		(EDAGAMEKCOL == EDAGAMECCOL) ||
		(EDAGAMEKCOL == EDAGAMEDCOL) ||
		(EDAGAMEKCOL == EDAGAMEECOL) ||
		(EDAGAMEKCOL == EDAGAMEFCOL) ||
		(EDAGAMEKCOL == EDAGAMEGCOL) ||
		(EDAGAMEKCOL == EDAGAMEHCOL) ||
		(EDAGAMEKCOL == EDAGAMEICOL) ||
		(EDAGAMEKCOL == EDAGAMEJCOL)) {EDAGAMENumKCOL();};
		
};