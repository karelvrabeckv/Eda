//This file is used for preloading the sounds of SOUNDS directory.

//Set a new array for sounds.
var EDAGAMESounds = new Array();

//Set a cycle for creating new audios.
for (var loop = 0; loop <= 10; loop++) {EDAGAMESounds[loop] = new Audio();};

//Set paths for the new audios of sounds.
EDAGAMESounds[0].src = 'sounds/Bell.mp3';
EDAGAMESounds[1].src = 'sounds/Carillone.mp3';
EDAGAMESounds[2].src = 'sounds/Drum.mp3';
EDAGAMESounds[3].src = 'sounds/Flute.mp3';
EDAGAMESounds[4].src = 'sounds/Guitar.mp3';
EDAGAMESounds[5].src = 'sounds/JingleBell.mp3';
EDAGAMESounds[6].src = 'sounds/Piano.mp3';
EDAGAMESounds[7].src = 'sounds/Tambourine.mp3';
EDAGAMESounds[8].src = 'sounds/Triangle.mp3';
EDAGAMESounds[9].src = 'sounds/Trumpet.mp3';
EDAGAMESounds[10].src = 'sounds/Violin.mp3';